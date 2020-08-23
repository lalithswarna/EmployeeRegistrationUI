export class Employee {
    id:string;
    firstName:string;
    lastName:string;
    designation:string;

    constructor(
        firstname:string,
        lastname:string,
        designation:string){
            this.firstName = firstname;
            this.lastName = lastname;
            this.designation = designation;
        }
}