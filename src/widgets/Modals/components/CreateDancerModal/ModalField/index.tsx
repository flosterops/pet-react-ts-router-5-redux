import React from 'react';
import { Input, Select } from 'antd';

const ModalField = ({ id, type, field, formFields, onChange }) => {
    switch (type) {
        case 'text':
            return <Input id={id} />;
        case 'select':
            return <Select id={id} />;
        default:
            return null;
    }
};

export { ModalField };
