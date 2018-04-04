module.exports = function (token, customerApiKey) {
    var terminateEmployee = '<s:Envelope xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:s="http://www.w3.org/2003/05/soap-envelope">\n' +
                                '\t<s:Header>\n' +
                                    '\t\t<a:Action s:mustUnderstand="1">http://www.ultipro.com/services/employeetermination/IEmployeeTermination/TerminateEmployee</a:Action>\n' + 
                                    '\t\t<UltiProToken xmlns="http://www.ultimatesoftware.com/foundation/authentication/ultiprotoken">' + token + '</UltiProToken>\n' +
                                    '\t\t<ClientAccessKey xmlns="http://www.ultimatesoftware.com/foundation/authentication/clientaccesskey">' + customerApiKey + '</ClientAccessKey>\n' +
                                '\t</s:Header>\n' +
                                '\t<s:Body>\n' +
                                    '\t\t<TerminateEmployee xmlns="http://www.ultipro.com/services/employeetermination">\n' +
                                        '\t\t\t<entities xmlns:b="http://www.ultipro.com/contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n' +
                                            '\t\t\t\t<b:Termination>\n' +
                                                '\t\t\t\t\t<b:CobraDate>' + /*TODO fill in value here*/ + '</b:CobraDate>\n' +
                                                '\t\t\t\t\t<b:CobraQualifyingEvent>' + /*TODO fill in value here*/  + '</b:CobraQualifyingEvent>\n' +
                                                '\t\t\t\t\t<b:CobraReason i: nil="true">' +  + '</b:CobraReason>\n' +
                                                '\t\t\t\t\t<b:EligibleForRehire>' + /*TODO fill in value here*/ + '</b:EligibleForRehire>\n' +
                                                '\t\t\t\t\t<b:EligibleForSeverance>' + /*TODO fill in value here*/  + '</b:EligibleForSeverance>\n' +
                                                '\t\t\t\t\t<b:EmployeeIdentifier i:type="b:EmployeeNumberIdentifier">\n' +
                                                    '\t\t\t\t\t\t<b:CompanyCode>' + /*TODO fill in value here*/  + '</b:CompanyCode>\n' +
                                                    '\t\t\t\t\t\t<b:EmployeeNumber>' + /*TODO fill in value here*/ + '</b:EmployeeNumber>\n' +
                                                '\t\t\t\t\t</b:EmployeeIdentifier>\n' +
                                                '\t\t\t\t\t<b:HomeCompanyIdentifier i:type="b:CompanyCodeIdentifier">\n' +
                                                    '\t\t\t\t\t\t<b:CompanyCode>' + /*TODO fill in value here*/ + '</b:CompanyCode>\n' +
                                                '\t\t\t\t\t</b:HomeCompanyIdentifier>\n' +
                                                '\t\t\t\t\t<b:InactivateAutopay>' + /*TODO fill in value here*/ + '</b:InactivateAutopay>\n' +
                                                '\t\t\t\t\t<b:InactivateDirectDeposit>' + /*TODO fill in value here*/ + '</b:InactivateDirectDeposit>\n' +
                                                '\t\t\t\t\t<b:LastDayWorked>' + /*TODO fill in value here*/ + '</b:LastDayWorked>\n' +
                                                '\t\t\t\t\t<b:Notes i:nil="true">' + /*TODO fill in value here*/ + '</b:Notes>\n' +
                                                '\t\t\t\t\t<b:PaidThroughDate>' + /*TODO fill in value here*/ + '</b:PaidThroughDate>\n' +
                                                '\t\t\t\t\t<b:RoeIssueReason i: nil="true">' +  + '</b:RoeIssueReason>\n' +
                                                '\t\t\t\t\t<b:TerminationDate>\n' + /*TODO fill in value here*/ + '</b:TerminationDate>\n' +
                                                '\t\t\t\t\t<b:TerminationReason i:nil="true">' + /*TODO fill in value here*/ + '</b:TerminationReason>\n' +
                                            '\t\t\t\t</b:Termination>\n' +
                                        '\t\t\t</entities>\n' +
                                    '\t\t</TerminateEmployee>\n' +
                                '\t</s:Body>\n' +
                            '</s:Envelope>';
    return terminateEmployee;
}