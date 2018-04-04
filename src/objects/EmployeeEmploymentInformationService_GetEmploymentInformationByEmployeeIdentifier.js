module.exports = function (token, customerApiKey) {
    var getEmploymentInfoByEmployeeIdent = '<s:Envelope xmlns: a="http://www.w3.org/2005/08/addressing" xmlns:s="http://www.w3.org/2003/05/soap-envelope">\n' +
                                               '\t<s:Header>\n' +
                                                   '\t\t<a:Action s:mustUnderstand="1">http://www.ultipro.com/services/employeeemploymentinformation/IEmployeeEmploymentInformation/GetEmploymentInformationByEmployeeIndentifier</a:Action>\n' +
                                                   '\t\t<UltiProToken xmlns="http://www.ultimatesoftware.com/foundation/authentication/ultiprotoken">' + token + '</UltiProToken>\n' +
                                                   '\t\t<ClientAccessKey xmlns="http://www.ultimatesoftware.com/foundation/authentication/clientaccesskey">' + customerApiKey + '</ClientAccessKey>\n' +
                                               '\t</s:Header>\n' +
                                               '\t<s:Body>\n' +
                                                   '\t\t<GetEmploymentInformationByEmployeeIdentifier xmlns="http://www.ultipro.com/services/employeeemploymentinformation">\n' +
                                                       '\t\t\t<employeeIdentifier xmlns:b="http://www.ultipro.com/contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="b:EmployeeNumberIdentifier">\n' +
                                                           '\t\t\t\t<b:CompanyCode>' + /*TODO fill in value here*/ + '</b:CompanyCode>\n' +
                                                           '\t\t\t\t<b:EmployeeNumber>' + /*TODO fill in value here*/ + '</b:EmployeeNumber> \n' +
                                                       '\t\t\t</employeeIdentifier>\n' +
                                                   '\t\t</GetEmploymentInformationByEmployeeIdentifier>\n' +
                                               '\t</s:Body>\n' +
                                           '</s:Envelope>';
    return getEmploymentInfoByEmployeeIdent;
}