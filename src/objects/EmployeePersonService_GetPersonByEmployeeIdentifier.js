module.export = function (token, customerApiKey) {
    var findPersonByEmployeeIdent = '<s:Envelope xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:s="http://www.w3.org/2003/05/soap-envelope">\n' +
                                        '\t<s:Header>\n' +
                                            '\t\t\t<a:Action s:mustUnderstand="1">http://www.ultipro.com/services/employeeperson/IEmployeePerson/GetPersonByEmployeeIdentifier</a:Action>\n' +
                                            '\t\t\t<UltiProToken xmlns="http://www.ultimatesoftware.com/foundation/authentication/ultiprotoken">' + token + '</UltiProToken>\n' +
                                            '\t\t\t<ClientAccessKey xmlns="http://www.ultimatesoftware.com/foundation/authentication/clientaccesskey">' + customerApiKey + '</ClientAccessKey>\n' +
                                        '\t</s:Header>\n' +
                                        '\t<s:Body>\n' +
                                            '\t\t<GetPersonByEmployeeIdentifier xmlns="http://www.ultipro.com/services/employeeperson">\n' +
                                                '\t\t\t<employeeIdentifier xmlns:b="http://www.ultipro.com/contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="b:EmployeeNumberIdentifier">' +
                                                    '\t\t\t\t<b:CompanyCode>' + /*TODO fill in value here*/ + '</b:CompanyCode>' +
                                                    '\t\t\t\t<b:EmployeeNumber>' + /*TODO fill in value here*/ + '</b:EmployeeNumber>' +
                                                '\t\t\t</employeeIdentifier>' +
                                            '\t\t</GetPersonByEmployeeIdentifier>' +
                                        '\t</s:Body>\n' +
                                    '</s:Envelope>';
    return findPersonByEmployeeIdent;
}