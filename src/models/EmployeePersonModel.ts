import {PersonModel} from './PersonModel';

export class EmployeePersonModel {
    public CompanyCode: string;
    public EmployeeNumber: string;
    public FirstName: string;
    public LastName: string;
    public People: Array<PersonModel>
}