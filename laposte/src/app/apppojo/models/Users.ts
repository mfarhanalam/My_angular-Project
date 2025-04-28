import { Roles } from './Roles';
import { Status } from './Status';

export class Users {
    public id: string;
    public fullName: string;
    public emailId: string;
    public mobileNumber: string;
    public password: string;
    public rolesObj: Roles;
    public statusObj: Status;
    public createdDate: Date;
}
