import React from 'react';
import { Input, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

interface IModalFieldProps {
    field: string;
    id: string;
    type: string;
    onChange: (...args) => void;
}

const ModalField: React.FC<IModalFieldProps> = ({ field, id, onChange, type }) => {
    switch (type) {
        case 'input':
            return <Input id={id} onChange={e => onChange(e, id, type, field)} />;
        case 'select':
            return <Select />;
        case 'textarea':
            return <TextArea id={id} onChange={e => onChange(e, id, type, field)} />;
        default:
            return null;
    }
};

export { ModalField };
