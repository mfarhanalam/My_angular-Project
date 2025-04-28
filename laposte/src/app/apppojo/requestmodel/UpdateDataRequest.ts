import { CompanyConfig } from '../models/CompanyConfig';
import { Roles } from '../models/Roles';
import { SendUpdateMail } from '../models/SendUpdateMail';
import { Services } from '../models/Services';
import { Status } from '../models/Status';
import { Users } from '../models/Users';

export class UpdateDataRequest {
    public update: Boolean;
    public companyConfigObj: CompanyConfig;
    public RolesObj: Roles;
    public sendupdateMailObj: SendUpdateMail;
    public serviceObj: Services;
    public statusObj: Status;
    public usersObj: Users;
}
