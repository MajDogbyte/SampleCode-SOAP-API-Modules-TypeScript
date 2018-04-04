module.export = function (token, customerApiKey) {
    var updatePerson = '<s:Envelope xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:s="http://www.w3.org/2003/05/soap-envelope">\n' +
                           '\t<s:Header>\n' +
                               '\t\t<a:Action s:mustUnderstand="1">http://www.ultipro.com/services/employeeperson/IEmployeePerson/UpdatePerson</a:Action>\n' +
                               '\t\t<UltiProToken xmlns="http://www.ultimatesoftware.com/foundation/authentication/ultiprotoken">' + token + '</UltiProToken>\n' +
                               '\t\t<ClientAccessKey xmlns="http://www.ultimatesoftware.com/foundation/authentication/clientaccesskey">' + customerApiKey + '</ClientAccessKey>\n' +
                           '\t</s:Header>\n' +
                           '\t<s:Body>\n' +
                               '\t\t<UpdatePerson xmlns="http://www.ultipro.com/services/employeeperson">\n' +
                                   '\t\t\t<entities xmlns:b="http://www.ultipro.com/contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n' +
                                       '\t\t\t\t<b:Person>\n' + 
                                       '\t\t\t\t<b:AlternateEmailAddress>' + /*TODO fill in value here*/ + '</b:AlternateEmailAddress>\n' +
                                       '\t\t\t\t<b:EmailAddress i:nil="true">' + /*TODO fill in value here*/ + '</b:EmailAddress>\n' + 
                                       '\t\t\t\t<b:EmployeeIdentifier i:type="b:EmployeeNumberIdentifier">\n' +
                                           '\t\t\t\t\t<b:CompanyCode>' + /*TODO fill in value here*/ + '</b:CompanyCode>\n' +
                                           '\t\t\t\t\t<b:EmployeeNumber>' + /*TODO fill in value here*/ + '</b:EmployeeNumber>\n' +
                                       '\t\t\t\t</b:EmployeeIdentifier>\n' +
                                       '\t\t\t\t<b:FirstName i:nil="true">' + /*TODO fill in value here*/ + '</b:FirstName>\n' +
                                       '\t\t\t\t<b:FormerLastName i:nil="true">' + /*TODO fill in value here*/ + '</b:FormerLastName>\n' +
                                       '\t\t\t\t<b:LastName i:nil="true">' + /*TODO fill in value here*/ + '</b:LastName>\n' +
                                       '\t\t\t\t<b:MiddleName i:nil="true">' + /*TODO fill in value here*/ + '</b:MiddleName>\n' +
                                       '\t\t\t\t<b:PreferredFirstName>' + /*TODO add some variable here*/ + '</b:PreferredFirstName>\n' +
                                       '\t\t\t\t<b:Prefix i:nil="true">' + /*TODO fill in value here*/ + '</b:Prefix>\n' +
                                       '\t\t\t\t<b:SSN i:nil="true">' + /*TODO fill in value here*/ + '</b:SSN>\n' +
                                       '\t\t\t\t<b:SelfServiceProperties xmlns: c="http://schemas.microsoft.com/2003/10/Serialization/Arrays">\n' +
                                           '\t\t\t\t\t<c:KeyValueOfstringstring>\n' +
                                               '\t\t\t\t\t\t<c:Key>' + /*TODO fill in value here*/ + '</c:Key>\n' +
                                               '\t\t\t\t\t\t<c:Value>' + /*TODO fill in value here*/ + '</c:Value>\n' +
                                           '\t\t\t\t\t</c:KeyValueOfstringstring>\n' +
                                       '\t\t\t\t</b:SelfServiceProperties>\n' +
                                           '\t\t\t\t\t<b:Suffix i:nil="true">' + /*TODO fill in value here*/ + '</b:Suffix>\n' +
                                           '\t\t\t\t\t<b:SuppressSSN>' + /*TODO fill in value here*/ + '</b:SuppressSSN>\n' + 
                                       '\t\t\t\t</b:Person>\n' +
                                   '\t\t\t</entities>\n' +
                               '\t\t</UpdatePerson>\n' +
                           '\t</s:Body>\n' +
                       '</s:Envelope>\n';
    return updatePerson;
}
