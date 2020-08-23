export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    designation: string;

    constructor(
        username: string,
        password: string,
        firstname:string,
        lastname:string,
        designation:string){
            this.username = username;
            this.password = password;
            this.firstName = firstname;
            this.lastName = lastname;
            this.designation = designation;
        }
}