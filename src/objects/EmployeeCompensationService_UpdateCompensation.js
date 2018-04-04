module.exports = function (token, customerApiKey) {
    var updateCompensation = '<s:Envelope xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:s="http://www.w3.org/2003/05/soap-envelope">\n' +
                                 '\t<s:Header>\n' +
                                     '\t\t<a:Action s:mustUnderstand="1">http://www.ultipro.com/services/employeecompensation/IEmployeeCompensation/UpdateCompensation</a:Action>\n' +
                                     '\t\t<UltiProToken xmlns="http://www.ultimatesoftware.com/foundation/authentication/ultiprotoken">' + token + '</UltiProToken>\n' +
                                     '\t\t<ClientAccessKey xmlns="http://www.ultimatesoftware.com/foundation/authentication/clientaccesskey">' + customerApiKey + '</ClientAccessKey> \n' +
                                 '\t</s:Header>\n' +
                                 '\t<s:Body>\n' +
                                     '\t\t<UpdateCompensation xmlns="http://www.ultipro.com/services/employeecompensation">\n' +
                                         '\t\t\t<entities xmlns:b="http://www.ultipro.com/contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n' +
                                             '\t\t\t\t<b:Compensation>\n' +
                                                 '\t\t\t\t\t<b:Annual>' + /*TODO fill in value here*/ + '</b:Annual>\n' +
                                                 '\t\t\t\t\t<b:EffectiveDate>' +  /*TODO fill in value here*/+ '</b:EffectiveDate>\n' +
                                                 '\t\t\t\t\t<b:EmployeeIdentifier i:type="b:EmployeeNumberIdentifier">\n' +
                                                     '\t\t\t\t\t\t<b:CompanyCode>' + /*TODO fill in value here*/ + '</b:CompanyCode>\n' +
                                                     '\t\t\t\t\t\t<b:EmployeeNumber>' + /*TODO fill in value here*/ + '</b:EmployeeNumber>\n' +
                                                 '\t\t\t\t\t</b:EmployeeIdentifier>\n' +
                                                 '\t\t\t\t\t<b:Hourly>' + /*TODO fill in value here*/ + '</b:Hourly>\n' +
                                                 '\t\t\t\t\t<b:PayFrequency i:nil="true">' + /*TODO fill in value here*/ + '</b:PayFrequency>\n' +
                                                 '\t\t\t\t\t<b:PayGroup i:nil="true">' + /*TODO fill in value here*/ + '</b:PayGroup>\n' +
                                                 '\t\t\t\t\t<b:PercentChange>' + /*TODO fill in value here*/ + '</b:PercentChange>\n' +
                                                 '\t\t\t\t\t<b:Period>' + /*TODO fill in value here*/ + '</b:Period>\n' +
                                                 '\t\t\t\t\t<b:RateChangeType i:nil="true">' + /*TODO fill in value here*/ + '</b:RateChangeType>\n' +
                                                 '\t\t\t\t\t<b:ReasonCode i:nil="true">' + /*TODO fill in value here*/ + '</b:ReasonCode>\n' +
                                                 '\t\t\t\t\t<b:ScheduledHours>' + /*TODO fill in value here*/ + '</b:ScheduledHours>\n' +
                                                 '\t\t\t\t\t<b:SelfServiceProperties xmlns:c="http://schemas.microsoft.com/2003/10/Serialization/Arrays">\n' +
                                                     '\t\t\t\t\t\t<c:KeyValueOfstringstring>\n' +
                                                         '\t\t\t\t\t\t\t<c:Key>' + /*TODO fill in value here*/ + '</c:Key>\n' +
                                                         '\t\t\t\t\t\t\t<c:Value>' + /*TODO fill in value here*/ + '</c:Value>\n' +
                                                     '\t\t\t\t\t\t</c:KeyValueOfstringstring>\n' +
                                                 '\t\t\t\t\t</b:SelfServiceProperties>\n' +
                                                 '\t\t\t\t\t<b:Weekly>' + /*TODO fill in value here*/ + '</b:Weekly>\n' +
                                             '\t\t\t\t</b:Compensation>\n' +
                                         '\t\t\t</entities>\n' +
                                     '\t\t</UpdateCompensation>\n' +
                                 '\t</s:Body>\n' +
                             '</s:Envelope>';
    return updateCompensation;
}