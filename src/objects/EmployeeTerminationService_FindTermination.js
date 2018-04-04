module.exports = function (token, customerApiKey) {
    var getTermByEmployeeIdent = '<s:Envelope xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:s="http://www.w3.org/2003/05/soap-envelope">\n' +
                                     '\t<s:Header>\n' +
                                         '\t\t<a:Action s:mustUnderstand="1">http://www.ultipro.com/services/employeetermination/IEmployeeTermination/FindTermination</a:Action>\n' + 
                                         '\t\t<UltiProToken xmlns="http://www.ultimatesoftware.com/foundation/authentication/ultiprotoken">' + token + '</UltiProToken>\n' +
                                         '\t\t<ClientAccessKey xmlns="http://www.ultimatesoftware.com/foundation/authentication/clientaccesskey">' + customerApiKey + '</ClientAccessKey>\n' +
                                     '\t</s:Header>\n' +
                                     '\t<s:Body>\n' +
                                         '\t\t<FindTerminations xmlns="http://www.ultipro.com/services/employeetermination">\n' +
                                             '\t\t\t<query xmlns: b="http://www.ultipro.com/contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n' +
                                                 '\t\t\t\t<b:CompanyCode i:nil="true">' + /*TODO fill in value here*/ + '</b:CompanyCode>\n' +
                                                 '\t\t\t\t<b:CompanyName i:nil="true">' + /*TODO fill in value here*/ + '</b:CompanyName>\n' +
                                                 '\t\t\t\t<b:Country i:nil="true">' + /*TODO fill in value here*/ + '</b:Country>\n' +
                                                 '\t\t\t\t<b:EmployeeNumber i:nil="true">' + /*TODO fill in value here*/ + '</b:EmployeeNumber>\n' +
                                                 '\t\t\t\t<b:FirstName>' + /*TODO fill in value here*/ + '</b:FirstName>\n' +
                                                 '\t\t\t\t<b:FormerName i:nil="true">' + /*TODO fill in value here*/ + '</b:FormerName>\n' +
                                                 '\t\t\t\t<b:FullOrPartTime i:nil="true">' + /*TODO fill in value here*/ + '</b:FullOrPartTime>\n' +
                                                 '\t\t\t\t<b:Job i:nil="true">' + /*TODO fill in value here*/ + '</b:Job>\n' +
                                                 '\t\t\t\t<b:LastHire i:nil="true">' + /*TODO fill in value here*/ + '</b:LastHire>\n' +
                                                 '\t\t\t\t<b:LastName>' + /*TODO fill in value here*/ + '</b:LastName>\n' +
                                                 '\t\t\t\t<b:Location i:nil="true">' + /*TODO fill in value here*/ + '</b:Location>\n' +
                                                 '\t\t\t\t<b:OrganizationLevel1 i:nil="true">' + /*TODO fill in value here*/ + '</b:OrganizationLevel1>\n' +
                                                 '\t\t\t\t<b:OrganizationLevel2 i:nil="true">' + /*TODO fill in value here*/ + '</b:OrganizationLevel2>\n' +
                                                 '\t\t\t\t<b:OrganizationLevel3 i:nil="true">' + /*TODO fill in value here*/ + '</b:OrganizationLevel3>\n' +
                                                 '\t\t\t\t<b:OrganizationLevel4 i:nil="true">' + /*TODO fill in value here*/ + '</b:OrganizationLevel4>\n' +
                                                 '\t\t\t\t<b:OriginalHire i:nil="true">' + /*TODO fill in value here*/ + '</b:OriginalHire>\n' +
                                                 '\t\t\t\t<b:PageNumber i:nil="true">' + /*TODO fill in value here*/ + '</b:PageNumber>\n' +
                                                 '\t\t\t\t<b:PageSize i:nil="true">' + /*TODO fill in value here*/ + '</b:PageSize>\n' +
                                                 '\t\t\t\t<b:PayGroup i:nil="true">' + /*TODO fill in value here*/ + '</b:PayGroup>\n' +
                                                 '\t\t\t\t<b:Status i:nil="true">' + /*TODO fill in value here*/ + '</b:Status>\n' +
                                                 '\t\t\t\t<b:SupervisorLastName i:nil="true">' + /*TODO fill in value here*/ + '</b:SupervisorLastName>\n' +
                                                 '\t\t\t\t<b:TerminationDate i:nil="true">' + /*TODO fill in value here*/ + '</b:TerminationDate>\n' +
                                                 '\t\t\t\t<b:TimeClockId i:nil="true">' + /*TODO fill in value here*/ + '</b:TimeClockId>\n' +
                                             '\t\t\t</query>\n' +
                                         '\t\t</FindTerminations>\n' +
                                     '\t</s:Body>\n' +
                                 '</s:Envelope>';
    return getTermByEmployeeIdent;
}