module.exports = function (token, customerApiKey) {
    var updateEmployeeInfo = '<s:Envelope xmlns: a="http://www.w3.org/2005/08/addressing" xmlns:s="http://www.w3.org/2003/05/soap-envelope">\n' +
                                 '\t<s:Header>\n' +
                                     '\t\t<a:Action s:mustUnderstand="1">http://www.ultipro.com/services/employeeemploymentinformation/IEmployeeEmploymentInformation/UpdateEmploymentInformation</a:Action>\n' +
                                     '\t\t<UltiProToken xmlns="http://www.ultimatesoftware.com/foundation/authentication/ultiprotoken">' + token + '</UltiProToken>\n' +
                                     '\t\t<ClientAccessKey xmlns="http://www.ultimatesoftware.com/foundation/authentication/clientaccesskey">' + customerApiKey + '</ClientAccessKey>\n' +
                                 '\t</s:Header>\n' +
                                 '\t<s:Body>\n' +
                                     '\t\t<UpdateEmploymentInformation xmlns="http://www.ultipro.com/services/employeeemploymentinformation">\n' 
                                         '\t\t\t<entities xmlns:b="http://www.ultipro.com/contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n' +
                                             '\t\t\t\t<b:EmploymentInformation>\n' +
                                                 '\t\t\t\t\t<b:ArrearsSuspendedFrom>' + /*TODO fill in value here*/ + '</b:ArrearsSuspendedFrom>\n' +
                                                 '\t\t\t\t\t<b:ArrearsSuspendedTo>' + /*TODO fill in value here*/ + '</b:ArrearsSuspendedTo>\n' +
                                                 '\t\t\t\t\t<b:BeneSeniority>' + /*TODO fill in value here*/ + '</b:BeneSeniority>\n' +
                                                 '\t\t\t\t\t<b:Deceased>' + /*TODO fill in value here*/ + '</b:Deceased>\n' +
                                                 '\t\t\t\t\t<b:DeceasedDate>' + /*TODO fill in value here*/ + '</b:DeceasedDate>\n' +
                                                 '\t\t\t\t\t<b:EarlyRetirement>' + /*TODO fill in value here*/ + '</b:EarlyRetirement>\n' +
                                                 '\t\t\t\t\t<b:EmployeeIdentifier i:nil="true">' + /*TODO fill in value here*/ + '</b:EmployeeIdentifier>\n' +
                                                 '\t\t\t\t\t<b:EmploymentStatus i:nil="true">' + /*TODO fill in value here*/ + '</b:EmploymentStatus>\n' +
                                                 '\t\t\t\t\t<b:FMLA_Code i:nil="true">' + /*TODO fill in value here*/ + '</b:FMLA_Code>\n' +
                                                 '\t\t\t\t\t<b:HCSOEndDate>' + /*TODO fill in value here*/ + '</b:HCSOEndDate>\n' +
                                                 '\t\t\t\t\t<b:HCSONotCovered>' + /*TODO fill in value here*/ + '</b:HCSONotCovered>\n' +
                                                 '\t\t\t\t\t<b:HCSOStartDate>' + /*TODO fill in value here*/ + '</b:HCSOStartDate>\n' +
                                                 '\t\t\t\t\t<b:Job>' + /*TODO fill in value here*/ + '</b:Job>\n' +
                                                 '\t\t\t\t\t<b:JobStart>' + /*TODO fill in value here*/ + '</b:JobStart>\n' +
                                                 '\t\t\t\t\t<b:LastHire>' + /*TODO fill in value here*/ + '</b:LastHire>\n' +
                                                 '\t\t\t\t\t<b:LastPerfReview>' + /*TODO fill in value here*/ + '</b:LastPerfReview>\n' +
                                                 '\t\t\t\t\t<b:LastSalaryReview>' + /*TODO fill in value here*/ + '</b:LastSalaryReview>\n' +
                                                 '\t\t\t\t\t<b:LeaveReason i:nil="true">' + /*TODO fill in value here*/ + '</b:LeaveReason>\n' +
                                                 '\t\t\t\t\t<b:NextPerfReview>' + /*TODO fill in value here*/ + '</b:NextPerfReview>\n' +
                                                 '\t\t\t\t\t<b:NextSalaryReview>' + /*TODO fill in value here*/ + '</b:NextSalaryReview>\n' +
                                                 '\t\t\t\t\t<b:OriginalHire>' + /*TODO fill in value here*/ + '</b:OriginalHire>\n' +
                                                 '\t\t\t\t\t<b:PTOSuspendedFrom>' + /*TODO fill in value here*/ + '</b:PTOSuspendedFrom>\n' +
                                                 '\t\t\t\t\t<b:PTOSuspendedTo>' + /*TODO fill in value here*/ + '</b:PTOSuspendedTo>\n' +
                                                 '\t\t\t\t\t<b:PayAutomatically>' + /*TODO fill in value here*/ + '</b:PayAutomatically>\n' +
                                                 '\t\t\t\t\t<b:PaySuspendedFrom>' + /*TODO fill in value here*/ + '</b:PaySuspendedFrom>\n' +
                                                 '\t\t\t\t\t<b:PaySuspendedTo>' + /*TODO fill in value here*/ + '</b:PaySuspendedTo>\n' +
                                                 '\t\t\t\t\t<b:ROEIssueReason i:nil="true">' + /*TODO fill in value here*/ + '</b:ROEIssueReason>\n' +
                                                 '\t\t\t\t\t<b:RegularRetirement>' + /*TODO fill in value here*/ + '</b:RegularRetirement>\n' +
                                                 '\t\t\t\t\t<b:SelfServiceProperties xmlns: c="http://schemas.microsoft.com/2003/10/Serialization/Arrays">\n' +
                                                     '\t\t\t\t\t\t<c:KeyValueOfstringstring>\n' +
                                                         '\t\t\t\t\t\t\t<c:Key>' + /*TODO fill in value here*/ + '</c:Key>\n' +
                                                         '\t\t\t\t\t\t\t<c:Value>' + /*TODO fill in value here*/ + '</c:Value>\n' +
                                                     '\t\t\t\t\t\t</c:KeyValueOfstringstring>\n' +
                                                 '\t\t\t\t\t</b:SelfServiceProperties>\n' +
                                                 '\t\t\t\t\t<b:Seniority>' + /*TODO fill in value here*/ + '</b:Seniority>\n' +
                                                 '\t\t\t\t\t<b:StatusAnticipatedEnd>' + /*TODO fill in value here*/ + '</b:StatusAnticipatedEnd>\n' +
                                                 '\t\t\t\t\t<b:StatusStartDate>' + /*TODO fill in value here*/ + '</b: StatusStartDate>\n' +
                                                 '\t\t\t\t\t<b:Weeks>' + /*TODO fill in value here*/ + '</b:Weeks>\n' +
                                             '\t\t\t\t</b:EmploymentInformation>\n' +
                                         '\t\t\t</entities>\n' +
                                     '\t\t</UpdateEmploymentInformation>\n' +
                                 '\t</s:Body>\n' +
                             '</s:Envelope>';

    return updateEmployeeInfo;
}