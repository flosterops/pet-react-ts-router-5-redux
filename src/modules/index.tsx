import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from 'routes/config.json';
import { closeModal, openModal } from 'store/reducers/modalReducer/actions';
import { loadSession, setUser } from 'store/reducers/appReducer/actions';
import { Modals } from 'widgets/Modals';
import { Column, Row } from 'ui/Layout';
import { Main } from 'modules/Main';
import { TournamentPage } from 'modules/TournamentPage';
import { AllTeamsPage } from 'modules/AllTeamsPage';
import { ProfilePage } from 'modules/ProfilePage';
import { AllTournamentsPage } from 'modules/AllTournamentsPage';
import { TournamentRequestsPage } from 'modules/TournamentRequestsPage';
import { TeamRequestsPage } from 'modules/TeamRequestsPage';
import { AdminPanel } from 'modules/AdminPanel';
import { Header } from 'modules/Header';
import { AuthPage } from 'modules/AuthPage';
import { TeamPage } from 'modules/TeamPage';
import { ModalTypes } from 'models/UIEnums';
import { IModalModel } from 'models/ModalsModels';
import './style.scss';

const getRenderingComponent = (props, component: string) => {
    switch (component) {
        case 'Main':
            return <Main {...props} />;
        case 'TeamPage':
            return <TeamPage {...props} />;
        case 'ProfilePage':
            return <ProfilePage {...props} />;
        case 'TournamentPage':
            return <TournamentPage {...props} />;
        case 'AuthPage':
            return <AuthPage {...props} />;
        case 'AllTeamsPage':
            return <AllTeamsPage {...props} />;
        case 'AllTournamentsPage':
            return <AllTournamentsPage {...props} />;
        case 'TournamentRequestsPage':
            return <TournamentRequestsPage {...props} />;
        case 'TeamRequestsPage':
            return <TeamRequestsPage {...props} />;
        default:
            return null;
    }
};

interface IPageBuilderProps {
    modals: IModalModel[];
    closeModal: (type: ModalTypes, options: any) => void;
    openModal: (type: ModalTypes, options: any) => void;
    loadSession: () => void;
    setUser: () => void;
}

const PageBuilder: React.FC<IPageBuilderProps> = ({
    modals,
    closeModal,
    openModal,
    loadSession
}): React.ReactElement => {
    useEffect(() => {
        loadSession();
    }, []);

    return (
        <Column className="page">
            <Router>
                <Header openModal={openModal} />
                <Row fullHeight>
                    <AdminPanel openModal={openModal} />
                    <Switch>
                        {routes.map(({ id, component, url, exact }) => (
                            <Route
                                key={id}
                                path={url}
                                exact={exact}
                                render={props => getRenderingComponent(props, component)}
                            />
                        ))}
                    </Switch>
                </Row>
                <Modals modals={modals} closeModal={closeModal} />
            </Router>
        </Column>
    );
};

const ConnectedPageBuilder = connect(
    ({ modals, user, app }) => ({
        modals: modals.modals,
        user: user.user,
        appUser: app.appUser
    }),
    {
        openModal,
        closeModal,
        setUser,
        loadSession
    }
)(PageBuilder);

export { ConnectedPageBuilder as PageBuilder };
