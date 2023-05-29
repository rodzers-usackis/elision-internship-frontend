import {UUID} from "crypto";

export enum UserRole {
    ADMIN = "ADMIN",
    CLIENT = "CLIENT"
}
//TODO: rename to DisplayedUser and move to model/
export default interface User {
    id: UUID;
    email : String;
    firstName : String;
    lastName : String;
    role : UserRole;
}

