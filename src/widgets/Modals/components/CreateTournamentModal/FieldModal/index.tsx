import React from 'react';
import { DatePicker, Input, InputNumber } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import 'antd/dist/antd.css';

const FieldModal = ({ id, type, field, onChange, value }) => {
    switch (type) {
        case 'input':
            return <Input value={value} id={id} onChange={e => onChange(e, id, type, field)} />;
        case 'textarea':
            return <TextArea value={value} id={id} onChange={e => onChange(e, id, type, field)} />;
        case 'number':
            return <InputNumber value={value} id={id} onChange={value => onChange(value, field)} />;
        case 'date':
            return <DatePicker onChange={(date, stringDate) => onChange(date, stringDate, field)} />;
        default:
            return null;
    }
};

export { FieldModal };
