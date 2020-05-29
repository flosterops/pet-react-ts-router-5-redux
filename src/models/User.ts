export interface IUserModel {
    _id: string;
    name: string;
    surname: string;
    patronymic: string;
    role: UserRole;
    userTeams: any;
}

export enum UserRole {
    default = 1,
    admin = 2
}
