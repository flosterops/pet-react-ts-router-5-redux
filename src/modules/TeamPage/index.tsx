import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import { fetchTeam } from 'store/reducers/teamReducer/actions';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import { Loader } from 'ui/Loader';
import { Description } from 'ui/Description';
import { TeamActivity } from 'modules/TeamPage/TeamActivity';
import { TeamTable } from 'modules/TeamPage/TeamTable';
import { ColorTypes, FontSizeTypes, TagNameTypes } from 'models/UIEnums';
import './style.scss';

const TeamPage = ({ team, fetchTeam, history }) => {
    const { id } = useParams();

    useEffect(() => {
        fetchTeam(id);
    }, []);

    if (!team) {
        return (
            <Column fullHeight>
                <Loader size={64} />
            </Column>
        );
    }

    const { teamTitle, teamDescription, teamMembers, activity } = team;
    return (
        <Column className="team-page">
            <Row widthAuto className="team-page__title">
                <Title tagName={TagNameTypes.default} color={ColorTypes.blue} fontSize={FontSizeTypes.xl}>
                    {teamTitle}
                </Title>
            </Row>
            <Row>
                <Column className="team-page__info">
                    <Description>{teamDescription}</Description>
                    <TeamTable history={history} members={teamMembers} />
                </Column>
                <TeamActivity activity={activity} />
            </Row>
        </Column>
    );
};

const ConnectedTeamPage = connect(({ team }) => ({ team: team.team }), { fetchTeam })(withRouter<any, any>(TeamPage));

export { ConnectedTeamPage as TeamPage };
