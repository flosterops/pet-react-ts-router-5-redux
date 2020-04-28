import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from 'routes/config.json';
import { closeModal, openModal } from 'store/reducers/modalReducer/actions';
import { Modals } from 'widgets/Modals';
import { Column } from 'ui/Layout';
import { Main } from 'modules/Main';
import { Firms } from 'modules/Firms';
import { Contracts } from 'modules/Contracts';
import './style.scss';

const getRenderingComponent = (props, component: string) => {
    switch (component) {
        case 'Main':
            return <Main />;
        case 'Firms':
            return <Firms />;
        case 'Contracts':
            return <Contracts />;
        default:
            return null;
    }
};

const PageBuilder = ({ modals, closeModal }) => {
    return (
        <Column className="page">
            <Router>
                <Switch>
                    {routes.map(({ id, component, url, exact }) => (
                        <Route
                            key={id}
                            path={url}
                            exact={exact}
                            render={props =>
                                getRenderingComponent(props, component)
                            }
                        />
                    ))}
                </Switch>
            </Router>
            <Modals modals={modals} closeModal={closeModal} />
        </Column>
    );
};

const ConnectedPageBuilder = connect(
    ({ modals }) => {
        return { modals: modals.modals };
    },
    { openModal, closeModal }
)(PageBuilder);

export { ConnectedPageBuilder as PageBuilder };
