import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { Column } from 'ui/Layout';
import { Description } from 'ui/Description';
import './style.scss';
import { userRegister } from 'store/reducers/appReducer/actions';

interface IRegisterFormFieldModel {
    login: string;
    password: string;
    name: string;
    surname: string;
    patronymic: string;
    phone: string;
}

const RegisterForm = ({ setUser, history }) => {
    const { Password } = Input;
    const [formFields, setFormFields] = useState<IRegisterFormFieldModel>({
        login: '',
        password: '',
        name: '',
        surname: '',
        patronymic: '',
        phone: ''
    });

    const handleSubmit = () => {
        userRegister(formFields).then(res => {
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

    const { login, password, name, surname, patronymic, phone } = formFields;
    return (
        <Column className="register-form">
            <Column className="register-form__item">
                <Description>Логин</Description>
                <Input id="login" onChange={e => handleChange(e, 'login')} value={login} />
            </Column>
            <Column className="register-form__item">
                <Description>Пароль</Description>
                <Password id="password" onChange={e => handleChange(e, 'password')} value={password} />
            </Column>
            {
                // TODO second pass
            }
            <Column className="register-form__item">
                <Description>Имя</Description>
                <Input id="name" onChange={e => handleChange(e, 'name')} value={name} />
            </Column>
            <Column className="register-form__item">
                <Description>Фамилия</Description>
                <Input id="surname" onChange={e => handleChange(e, 'surname')} value={surname} />
            </Column>
            <Column className="register-form__item">
                <Description>Отчество</Description>
                <Input id="patronymic" onChange={e => handleChange(e, 'patronymic')} value={patronymic} />
            </Column>
            <Column className="register-form__item">
                <Description>Номер телефона</Description>
                <Input id="phone" onChange={e => handleChange(e, 'phone')} value={phone} />
            </Column>
            <Button onClick={handleSubmit} className="register-form__item" type="primary">
                Зарегистрироваться
            </Button>
        </Column>
    );
};

export { RegisterForm };
