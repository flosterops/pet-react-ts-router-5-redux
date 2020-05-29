export enum TournamentStatusType {
    pending = 1,
    finished = 2,
    inProgress = 3,
    canceled = 4,
    postponed = 5
}

export interface ITournamentModel {
    tournamentTitle: string;
    tournamentDescription: string;
    tournamentPrice: number;
    startDate: number;
    finishDate: number;
    maxTeams: number;
    winners: any[];
    status: number;
}
