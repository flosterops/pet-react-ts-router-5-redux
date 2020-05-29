import * as React from 'react';
import onClickOutside from 'react-onclickoutside';
import { Column, Row } from 'ui/Layout';
import { Icon } from 'ui/Icon';
import { Description } from 'ui/Description';
import { IconTypes } from 'models/UIEnums';
import './style.scss';

const DropDownItems = ({ onDelete, onEdit, addContract, setIsOpen }) => {
    const onDeleteClick = () => {
        onDelete();
        setIsOpen(false);
    };

    const onEditClick = () => {
        onEdit();
        setIsOpen(false);
    };

    const onAddContract = () => {
        addContract();
        setIsOpen(false);
    };

    return (
        <Column className="dp-dwn__items">
            <Row className="dp-dwn__items_item" pointer onClick={onEditClick}>
                <Description>Изменить</Description>
            </Row>
            <Row className="dp-dwn__items_item" pointer onClick={onDeleteClick}>
                <Description>Удалить</Description>
            </Row>
            {addContract && (
                <Row className="dp-dwn__items_item" pointer onClick={onAddContract}>
                    <Description>Добавить договор</Description>
                </Row>
            )}
        </Column>
    );
};

interface IDropDownProps {
    onDelete: (...args) => void;
    onEdit: (...args) => void;
    addContract?: (...args) => void;
}

class DropDown extends React.Component<IDropDownProps, { isOpen: boolean }> {
    state = {
        isOpen: false
    };

    setIsOpen = value => {
        this.setState({ isOpen: value });
    };
    handleClickOutside = (e): void => {
        e.stopPropagation();
        this.setState({ isOpen: false });
    };

    render() {
        const { onDelete, onEdit, addContract } = this.props;
        const { isOpen } = this.state;
        return (
            <Column widthAuto>
                <Row onClick={() => this.setIsOpen(!isOpen)} className="dp-dwn__icon" pointer>
                    <Icon type={IconTypes.iconMenu} className="dp-dwn__icon" />
                    {isOpen && (
                        <DropDownItems
                            onDelete={onDelete}
                            addContract={addContract}
                            onEdit={onEdit}
                            setIsOpen={this.setIsOpen}
                        />
                    )}
                </Row>
            </Column>
        );
    }
}

const OutsideClickDropDown = onClickOutside(DropDown);

export { OutsideClickDropDown as DropDown };
