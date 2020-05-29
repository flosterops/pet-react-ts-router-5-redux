import React, { useState } from 'react';
import cx from 'classnames';
import { Input, InputNumber, Button } from 'antd';
import { Column, Row } from 'ui/Layout';
import { Description } from 'ui/Description';
import { getDefaultFormFields } from 'modules/ProfilePage/ProfileForm/helpers';
import { AlignItemsTypes, FontSizeTypes, JustifyContentTypes } from 'models/UIEnums';
import config from './config.json';
import './style.scss';

const ProfileForm = ({ isEdit, user, setEditMode }) => {
    const [formFields, changeFormFields] = useState(getDefaultFormFields(user));

    const onChange = (e, field) => {
        const { value } = e.target;
        changeFormFields({ ...formFields, [field]: value });
    };
    return (
        <Column className="prf-form">
            {config.map(({ id, type, field, placeholder, label }) => {
                const value = formFields[field];
                switch (type) {
                    case 'text':
                        if (isEdit) {
                            return (
                                <Column>
                                    <Description className="prf-form__label">{label}</Description>
                                    <Input
                                        className="prf-form__input"
                                        placeholder={placeholder}
                                        onChange={e => onChange(e, field)}
                                        value={value}
                                    />
                                </Column>
                            );
                        }
                        return (
                            <Row ai={AlignItemsTypes.flexEnd} className="prf-form__label">
                                <Description fontSize={FontSizeTypes.m}>{`${label}:`}</Description>
                                <Description fontSize={FontSizeTypes.l}>{user[field]}</Description>
                            </Row>
                        );
                    case 'number':
                        if (isEdit) {
                            return (
                                <Column>
                                    <Description className="prf-form__label">{label}</Description>
                                    <InputNumber
                                        className={cx('prf-form__input', 'prf-form__input_number')}
                                        placeholder={placeholder}
                                        onChange={e => onChange(e, field)}
                                        value={value}
                                    />
                                </Column>
                            );
                        }
                        return (
                            <Row ai={AlignItemsTypes.center} className="prf-form__label">
                                <Description fontSize={FontSizeTypes.m}>{`${label}:`}</Description>
                                <Description>{user[field]}</Description>
                            </Row>
                        );
                }
            })}
            {isEdit && (
                <Row jc={JustifyContentTypes.spaceAround} className="prf-form__submit">
                    <Button type="primary" onClick={() => setEditMode(false)}>
                        Сохранить
                    </Button>
                    <Button type="primary" danger onClick={() => setEditMode(false)}>
                        Отмена
                    </Button>
                </Row>
            )}
        </Column>
    );
};

export { ProfileForm };
