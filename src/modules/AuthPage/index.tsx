import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { setUser } from 'store/reducers/appReducer/actions';
import { Column } from 'ui/Layout';
import { LoginForm } from 'modules/AuthPage/LoginForm';
import { RegisterForm } from 'modules/AuthPage/RegisterForm';
import { JustifyContentTypes } from 'models/UIEnums';
import './style.scss';

const AuthPage = ({ setUser, history }) => {
    const { TabPane } = Tabs;
    return (
        <Column ai={JustifyContentTypes.center} className="auth-page">
            <Tabs className="auth-page__tabs" defaultActiveKey="login">
                <TabPane tab="Вход" key="login">
                    <LoginForm setUser={setUser} history={history} />
                </TabPane>
                <TabPane tab="Регистрация" key="register">
                    <RegisterForm setUser={setUser} history={history} />
                </TabPane>
            </Tabs>
        </Column>
    );
};

const ConnectedAuthPage = connect(null, { setUser })(AuthPage);

export { ConnectedAuthPage as AuthPage };
