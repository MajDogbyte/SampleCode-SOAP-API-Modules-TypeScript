import {LoginTokenModel} from '../models/LoginTokenModel';
import * as https from 'https';
import {RequestOptions} from 'https';

import {FindPersonQueryParamters} from '../models/QueryParameters/FindPersonQueryParameters';
import {isNullOrUndefined} from 'util';
import {SoapQueryOperatorToString} from '../models/QueryParameters/SoapQueryOperatorToString';
import {SoapQueryOperatorEnumeration} from '../models/QueryParameters/SoapQueryOperatorEnumeration';
import {LoginService} from './LoginService';
import * as Promise from 'promise';
import {SoapQueryInsertHelper} from '../models/QueryParameters/SoapQueryInsertHelper';
import * as parseString from 'xml2js';
import {EmployeePersonModel} from '../models/EmployeePersonModel';
import {PersonModel} from '../models/PersonModel';

export class PersonService {
    private static EndpointPath(): string {
        return '/services/EmployeePerson';
    }

    private static GetPeopleXML(loginToken: LoginTokenModel, findPersonQueryParameters: FindPersonQueryParamters): string {

        let findPersonXML: string = '<s:Envelope xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:s="http://www.w3.org/2003/05/soap-envelope">\n'
            + '<s:Header>\n'
            + '<a:Action s:mustUnderstand="1">http://www.ultipro.com/services/employeeperson/IEmployeePerson/FindPeople</a:Action>\n'
            + '<UltiProToken xmlns="http://www.ultimatesoftware.com/foundation/authentication/ultiprotoken">' + loginToken.Token
            + '</UltiProToken>\n'
            + '<ClientAccessKey xmlns="http://www.ultimatesoftware.com/foundation/authentication/clientaccesskey">' + loginToken.CustomerAPIKey
            + '</ClientAccessKey>\n'
            + '</s:Header>\n'
            + '<s:Body>\n'
            + '<FindPeople xmlns="http://www.ultipro.com/services/employeeperson">\n'
            + '<query xmlns:b="http://www.ultipro.com/contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n';

        findPersonXML += SoapQueryInsertHelper.GetQueryParamsAsXML(findPersonQueryParameters);

        findPersonXML += '</query>\n'
            + '</FindPeople>\n'
            + '</s:Body>\n'
            + '</s:Envelope>\n';

        return findPersonXML;
    }


    private static ParseXML(xmlResponse: string): Promise<Object> {

        return new Promise<string>((resolve, reject) => {
            parseString.parseString(xmlResponse, (err, result) => {
                if (err) {

                    reject(err);
                } else {

                    let jsonObjectResponseStatusHasErrors: boolean = result['s:Envelope']['s:Body'][0].FindPeopleResponse[0].FindPeopleResult[0]['b:OperationResult'][0]['b:HasErrors'][0] == 'true' ? true : false;

                    //TODO: if warning do I want to do something?
                    let jsonObjectResponseStatusHasWarnings: boolean = result['s:Envelope']['s:Body'][0].FindPeopleResponse[0].FindPeopleResult[0]['b:OperationResult'][0]['b:HasWarnings'][0] == 'true' ? true : false;

                    if (jsonObjectResponseStatusHasErrors) {
                        let jsonObjectResponseStatusMessage: boolean = result['s:Envelope']['s:Body'][0].FindPeopleResponse[0].FindPeopleResult[0]['b:OperationResult'][0]['b:Messages'];
                        reject(jsonObjectResponseStatusMessage)
                    }

                    let jsonObject = result['s:Envelope']['s:Body'][0].FindPeopleResponse[0].FindPeopleResult[0]['b:Results'][0]['b:EmployeePerson'];

                    let employeePeople: Array<EmployeePersonModel> = new Array<EmployeePersonModel>();

                    for (let emp of jsonObject) {
                        let employeePerson: EmployeePersonModel = new EmployeePersonModel();
                        employeePerson.CompanyCode = emp['b:CompanyCode'];
                        employeePerson.EmployeeNumber = emp['b:EmployeeNumber'];
                        employeePerson.FirstName = emp['b:FirstName'];
                        employeePerson.LastName = emp['b:LastName'];

                        let people: Array<PersonModel> = new Array<PersonModel>();

                        for (let people of emp['b:People']) {
                            for (let pers of people['b:Person']) {
                                let person: PersonModel = new PersonModel();

                                if (typeof (pers['b:EmailAddress'][0]) == 'string') {
                                    person.EmailAddress = pers['b:EmailAddress'][0];
                                } else {
                                    person.EmailAddress = null;
                                }

                                if (typeof (pers['b:AlternateEmailAddress'][0]) == 'string') {
                                    person.AlternateEmailAddress = pers['b:AlternateEmailAddress'][0];
                                } else {
                                    person.AlternateEmailAddress = null;
                                }

                                /*
                                person.EmployeeIdentifier = pers['b:AlternateEmailAddress'][0]['$'];
                                person.FirstName = pers['b:AlternateEmailAddress'][0]['$'];
                                person.FormerLastName = pers['b:AlternateEmailAddress'][0]['$'];
                                person.LastName = pers['b:AlternateEmailAddress'][0]['$'];
                                person.MiddleName = pers['b:AlternateEmailAddress'][0]['$'];
                                person.PreferredFirstName = pers['b:AlternateEmailAddress'][0]['$'];
                                person.Prefix = pers['b:AlternateEmailAddress'][0]['$'];
                                person.SSN = pers['b:AlternateEmailAddress'][0]['$'];
                                person.SelfServiceProperties = pers['b:AlternateEmailAddress'][0]['$'];
                                person.Suffix = pers['b:AlternateEmailAddress'][0]['$'];
                                person.SuppressSSN = pers['b:AlternateEmailAddress'][0]['$'];
*/
                                console.log(person);
                            }
                        }


                    }


                    resolve(jsonObject);
                }
            });

        })

    }

    public static GetPeople(loginToken: LoginTokenModel, findPersonQueryParameters: FindPersonQueryParamters) {

        let self = this;

        return new Promise<string>((resolve, reject) => {

                let options: RequestOptions = {};
                options.method = 'POST';
                options.hostname = loginToken.UltiProCoreURI;
                options.path = this.EndpointPath();
                options.headers = {
                    'Content-Type': 'application/soap+xml',
                    'Cache-Control': 'no-cache',
                };

                let req = https.request(options, function (res) {

                        // ensure we get the right status code
                        if (res.statusCode >= 200 && res.statusCode < 300) {

                            let chunks = [];

                            res.on('data', function (chunk) {
                                chunks.push(chunk);
                            });

                            res.on('end', function () {
                                let body = Buffer.concat(chunks);

                                //TODO: work here to get things;

                                let xmlResponse = body.toString();

                                self.ParseXML(xmlResponse)
                                    .then((response) => {
                                        resolve(response);
                                    })
                                    .catch((err) => {
                                        console.error(err);
                                        reject(err);
                                    })


                            });
                        } else {
                            switch (res.statusCode) {
                                case 403:
                                    console.error('forbidden');
                                    reject(res.statusCode);
                                    break;
                                default:
                                    reject(res.statusCode);
                                    break;
                            }
                        }
                    }
                );

                // Send XML with values
                req.write(this.GetPeopleXML(loginToken, findPersonQueryParameters));
                req.end();
            }
        );
    }


}