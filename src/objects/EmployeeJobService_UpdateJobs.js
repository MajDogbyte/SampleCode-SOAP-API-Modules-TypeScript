module.export = function (token, customerApiKey) {
    var updateJobs = '<s:Envelope xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:s="http://www.w3.org/2003/05/soap-envelope">\n' +
                         '\t<s:Header>\n' +
                             '\t\t<a:Action s:mustUnderstand="1">http://www.ultipro.com/services/employeejob/IEmployeeJob/UpdateJob</a:Action>\n' +
                             '\t\t<UltiProToken xmlns="http://www.ultimatesoftware.com/foundation/authentication/ultiprotoken">' + token + '</UltiProToken>\n' +
                             '\t\t<ClientAccessKey xmlns="http://www.ultimatesoftware.com/foundation/authentication/clientaccesskey">' + customerApiKey + '</ClientAccessKey>\n' +
                         '\t</s:Header>\n' +
                         '\t<s:Body>\n' +
                             '\t\t<UpdateJob xmlns="http://www.ultipro.com/services/employeejob">\n' +
                                 '\t\t\t<entities xmlns: b="http://www.ultipro.com/contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n' +
                                     '<\t\t\t\tb:Job>\n' +
                                         '\t\t\t\t\t<b:Agricultural>' + /*TODO fill in this value*/ + '</b: Agricultural>\n' +
                                         '\t\t\t\t\t<b:AlternateTitle>' + /*TODO fill in this value*/ + '</b: AlternateTitle>\n' +
                                         '\t\t\t\t\t<b:DateInJob>' + /*TODO fill in this value*/ + '</b: DateInJob>\n' +
                                         '\t\t\t\t\t<b:DirectLabor>' + /*TODO fill in this value*/ + '</b: DirectLabor>\n' +
                                         '\t\t\t\t\t<b:EffectiveDate>' + /*TODO fill in this value*/ + '</b: EffectiveDate>\n' +
                                         '\t\t\t\t\t<b:EmployeeIdentifier i:type="b:EmployeeNumberIdentifier">\n' +
                                             '\t\t\t\t\t\t<b:CompanyCode i:nil="true">' + /*TODO fill in this value*/ + '</b:CompanyCode>\n' +
                                             '\t\t\t\t\t\t<b:EmployeeNumber i:nil="true">' + /*TODO fill in this value*/ + '<b/:EmployeeNumber>\n' +
                                         '\t\t\t\t\t</b:EmployeeIdentifier>\n' +
                                         '\t\t\t\t\t<b:EmployeeType i:nil="true">' + /*TODO fill in this value*/ + '</b:EmployeeType>\n' +
                                         '\t\t\t\t\t<b:FullOrPartTime>' + /*TODO fill in this value*/ + '</b: FullOrPartTime>\n' +
                                         '\t\t\t\t\t<b:HourlyOrSalaried i:nil="true">' + /*TODO fill in this value*/ + '</b:HourlyOrSalaried>\n' +
                                         '\t\t\t\t\t<b:JobCode i:nil="true">' + /*TODO fill in this value*/ + '</b:JobCode>\n' +
                                         '\t\t\t\t\t<b:JobGroup i:nil="true">' + /*TODO fill in this value*/ + '</b:JobGroup>\n' +
                                         '\t\t\t\t\t<b:LocalUnion i:nil="true">' + /*TODO fill in this value*/ + '</b:LocalUnion>\n' +
                                         '\t\t\t\t\t<b:NationalUnion i:nil="true">' + /*TODO fill in this value*/ + '</b:NationalUnion>\n' +
                                         '\t\t\t\t\t<b:OrgLevel1 i:nil="true">' + /*TODO fill in this value*/ + '</b:OrgLevel1>\n' +
                                         '\t\t\t\t\t<b:OrgLevel2 i:nil="true">' + /*TODO fill in this value*/ + '</b:OrgLevel2>\n' +
                                         '\t\t\t\t\t<b:OrgLevel3 i:nil="true">' + /*TODO fill in this value*/ + '</b:OrgLevel3>\n' +
                                         '\t\t\t\t\t<b:OrgLevel4 i:nil="true">' + /*TODO fill in this value*/ + '</b:OrgLevel4>\n' +
                                         '\t\t\t\t\t<b:PayFrequency i:nil="true">' + /*TODO fill in this value*/ + '</b:PayFrequency>\n' +
                                         '\t\t\t\t\t<b:PayGroup i:nil="true">' + /*TODO fill in this value*/ + '</b:PayGroup>\n' +
                                         '\t\t\t\t\t<b:PayScaleCode>' + /*TODO fill in this value*/ + '</b:PayScaleCode>\n' +
                                         '\t\t\t\t\t<b:Project i:nil="true">' + /*TODO fill in this value*/ + '</b:Project>\n' +
                                         '\t\t\t\t\t<b:Promotion>' + /*TODO fill in this value*/ + '</b:Promotion>\n' +
                                         '\t\t\t\t\t<b:ReasonCode i:nil="true">' + /*TODO fill in this value*/ + '</b:ReasonCode>\n' +
                                         '\t\t\t\t\t<b:ScheduledHours>' + /*TODO fill in this value*/ + '</b:ScheduledHours>\n' +
                                         '\t\t\t\t\t<b:Seasonal>' + /*TODO fill in this value*/ + '</b:Seasonal>\n' +
                                         '\t\t\t\t\t<b:SelfServiceProperties xmlns:c="http://schemas.microsoft.com/2003/10/Serialization/Arrays">\n' +
                                             '\t\t\t\t\t\t<c:KeyValueOfstringstring>\n' +
                                                 '\t\t\t\t\t\t\t<c:Key>' + /*TODO fill in this value*/ + '</c:Key>\n' +
                                                 '\t\t\t\t\t\t\t<c:Value>' + /*TODO fill in this value*/ + '</c:Value>\n' +
                                             '\t\t\t\t\t\t</c:KeyValueOfstringstring>\n' +
                                         '\t\t\t\t\t</b:SelfServiceProperties>' +
                                         '\t\t\t\t\t<b:ShiftCode i:nil="true">' + /*TODO fill in this value*/ + '</b:ShiftCode>\n' +
                                         '\t\t\t\t\t<b:ShiftGroup i:nil="true">' + /*TODO fill in this value*/ + '</b:ShiftGroup>\n' +
                                         '\t\t\t\t\t<b:StepNo>' + /*TODO fill in this value*/ + '</b:StepNo>\n' +
                                         '\t\t\t\t\t<b:Supervisor i:nil="true">' + /*TODO fill in this value*/ + '</b:Supervisor>\n' +
                                         '\t\t\t\t\t<b:TimeClock i:nil="true">' + /*TODO fill in this value*/ + '</b:TimeClock>\n' +
                                         '\t\t\t\t\t<b:Transfer>' + /*TODO fill in this value*/ + '</b:Transfer>\n' +
                                         '\t\t\t\t\t<b:YouthTraining>' + /*TODO fill in this value*/ + '</b:YouthTraining>\n' +
                                     '\t\t\t\t</b:Job>\n' +
                                 '\t\t\t</entities>\n' +
                             '\t\t</UpdateJob>\n' +
                         '\t</s:Body>\n' +
                     '</s:Envelope>';
    return updateJobs;
}
