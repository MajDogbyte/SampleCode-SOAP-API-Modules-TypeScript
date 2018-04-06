import {SoapQueryOperatorToString} from './SoapQueryOperatorToString';
import {SoapQueryOperatorEnumeration} from './SoapQueryOperatorEnumeration';
import {isNullOrUndefined} from 'util';
import {SoapQueryModel} from './SoapQueryModel';

export class SoapQueryInsertHelper {
    public static GetQueryParamsAsXML(queryParameterModel): string {
        let queryXMLString: string = '';

        Object.keys(queryParameterModel).forEach((key) => {

            let queryParam: SoapQueryModel = queryParameterModel[key];


            if ((!isNullOrUndefined(queryParam.Value) || !isNullOrUndefined(queryParam.ArrayOfValues))
                && queryParam.Value != '') {

                queryXMLString += '<b:' + key + '>' + SoapQueryOperatorToString.OperatorToString(queryParam.Operator);

                if (queryParam.Operator == SoapQueryOperatorEnumeration.IN) {
                    queryXMLString += '"' + queryParam.ArrayOfValues.join('","') + '"';
                } else {
                    queryXMLString += queryParam.Value;
                }


                if (queryParam.Operator == SoapQueryOperatorEnumeration.LIKE ||
                    queryParam.Operator == SoapQueryOperatorEnumeration.ENDSWITH) {
                    queryXMLString += '%)';
                } else if (queryParam.Operator == SoapQueryOperatorEnumeration.STARTSWITH
                    || queryParam.Operator == SoapQueryOperatorEnumeration.IN) {
                    queryXMLString += ')';
                }

                queryXMLString += '</b:' + key + '>\n';
            }

        });

        return queryXMLString;
    }
}