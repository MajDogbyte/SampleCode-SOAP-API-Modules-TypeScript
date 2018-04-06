import {SoapQueryOperatorEnumeration} from './SoapQueryOperatorEnumeration';

export class SoapQueryOperatorToString {
    public static OperatorToString(operator: SoapQueryOperatorEnumeration): string {
        switch (operator) {
            case SoapQueryOperatorEnumeration.LIKE:
                return 'like (%';
            case SoapQueryOperatorEnumeration.ENDSWITH:
                return 'like (';
            case SoapQueryOperatorEnumeration.STARTSWITH:
                return 'like (%';
            case SoapQueryOperatorEnumeration.GREATERTHAN:
                return '&gt;';
            case SoapQueryOperatorEnumeration.GREATERTHANOREQUAL:
                return '&gt;=';
            case SoapQueryOperatorEnumeration.LESSTHAN:
                return '&lt;';
            case SoapQueryOperatorEnumeration.LESSTHANOREQUAL:
                return '&lt;=';
            case SoapQueryOperatorEnumeration.NOTEQUALTO:
                return '&lt;&gt;';
            //TODO: Implement Range of data
            //case SoapQueryOperatorEnumeration.RANGEOFDATA:
            case SoapQueryOperatorEnumeration.IN:
                return 'IN(';
            default:
                //Equal To
                return '&lt;&gt;';
        }
    }
}