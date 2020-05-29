import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { userLogin } from 'store/reducers/appReducer/actions';
import { Column } from 'ui/Layout';
import { Description } from 'ui/Description';
import './style.scss';

interface ILoginFormFieldModel {
    login: string;
    password: string;
}

const LoginForm = ({ setUser, history }) => {
    const { Password } = Input;
    const [formFields, setFormFields] = useState<ILoginFormFieldModel>({ login: '', password: '' });
    const { login, password } = formFields;

    const handleSubmit = () => {
        userLogin(login, password).then(res => {
            const { data: user, error } = res;
            if (!error) {
                setUser(user);
                history.push('/');
            }
        });
    };

    const handleChange = (e, id) => {
        const { value } = e.target;
        setFormFields({ ...formFields, [id]: value });
    };

    return (
        <Column className="login-form">
            <Column className="login-form__item">
                <Description>Логин</Description>
                <Input id="login" onChange={e => handleChange(e, 'login')} value={login} />
            </Column>
            <Column className="login-form__item">
                <Description>Пароль</Description>
                <Password id="password" onChange={e => handleChange(e, 'password')} value={password} />
            </Column>
            <Button onClick={handleSubmit} className="login-form__item" type="primary">
                Войти
            </Button>
        </Column>
    );
};

export { LoginForm };
