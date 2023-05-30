import {UUID} from "crypto";

export enum UserRole {
    ADMIN = "ADMIN",
    CLIENT = "CLIENT"
}
export default interface LoggedInUser {
    id: UUID;
    email : String;
    firstName : String;
    lastName : String;
    role : UserRole;
}

