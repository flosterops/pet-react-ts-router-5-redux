import React from 'react';
import { Button } from 'antd';
import { Column, Row } from 'ui/Layout';
import { Description } from 'ui/Description';
import { AlignItemsTypes, ColorTypes, FontSizeTypes, JustifyContentTypes } from 'models/UIEnums';
import { TournamentPhoto } from 'modules/TournamentPage/TournamentInfo/TournamentPhoto';
import '../style.scss';

const TournamentInfo = ({ price, info, activeTournament, sendEnterTournamentRequest, appUser, tournamentId }) => {
    const onSendClick = () => {
        sendEnterTournamentRequest(tournamentId, appUser.teamId);
    };

    const canSendRequest = !activeTournament && appUser && appUser.teamId;

    return (
        <Column fullHeight jc={JustifyContentTypes.spaceBetween} className="trn-page__info">
            <Column>
                <Row jc={JustifyContentTypes.spaceBetween} widthAuto ai={AlignItemsTypes.center}>
                    <TournamentPhoto />
                    <Row widthAuto>
                        <Description fontSize={FontSizeTypes.xl}>Призовой фонд:</Description>
                        <Description fontSize={FontSizeTypes.xl} color={ColorTypes.blue} className="trn-page__price">
                            {price}
                        </Description>
                    </Row>
                </Row>
                <Column>
                    <Description fontSize={FontSizeTypes.l}>Информация:</Description>
                    <Description>{info}</Description>
                </Column>
            </Column>
            {canSendRequest && (
                <Row jc={JustifyContentTypes.flexEnd}>
                    <Button type="primary" onClick={onSendClick}>
                        Подать заявку
                    </Button>
                </Row>
            )}
        </Column>
    );
};

export { TournamentInfo };
