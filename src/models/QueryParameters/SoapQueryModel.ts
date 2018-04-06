import {SoapQueryOperatorEnumeration} from './SoapQueryOperatorEnumeration';

export class SoapQueryModel {
    Operator: SoapQueryOperatorEnumeration = SoapQueryOperatorEnumeration.EQUALTO;
    Value: string = null;
    EndValue: string = null;
    ArrayOfValues: Array<string> = null;
}

