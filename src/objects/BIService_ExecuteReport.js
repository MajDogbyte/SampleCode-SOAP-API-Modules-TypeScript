module.exports = function (reportPath, serviceId, customerApiKey, token, instanceKey /*, reportParameters type=[]*/) {
    var executeRepor = '<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">\n' +
                           '\t<s:Header>\n' +
                               '\t\t<a:Action s:mustUndertand="1">http://www.ultipro.com/dataservices/bidata/2/IBIDataService/ExecuteReport</a:Action>\n' +
                               '\t\t<a:To s:mustUnderstand="1">https://servicehost/services/BiDataService</a:To>\n' +
                           '\t</s:Header>\n' +
                           '\t<s:Body>\n' +
                               '\t\t<ExecuteReport xmlns="http://www.ultipro.com/dataservices/bidata/2">\n' +
                                   '\t\t\t<request xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n' +
                                       //Consult documentation for proper report path format
                                       '\t\t\t\t<ReportPath>' + reportPath + '</ReportPath>\n' +
                                       '\t\t\t\t<ReportParameters>\n' +
                                           //I would create a custom object and pass it to this module and insert it here for multiple report parameters
                                           '<\t\t\t\t\tReportParameter>\n' +
                                               '\t\t\t\t\t\t<Name>' + /*TODO fill in value here*/ + '</Name>\n' +
                                               '\t\t\t\t\t\t<Value>' + /*TODO fill in value here*/ + '</Value>\n' +
                                               '\t\t\t\t\t\t<Required>' + /*TODO fill in value here*/ + '</Required>\n' +
                                               '\t\t\t\t\t\t<DataType>' + /*TODO fill in value here*/ + '</DataType>\n' +
                                               '\t\t\t\t\t\t<MultiValued>' + /*TODO fill in value here*/ + '</MultiValued>\n' +
                                           '\t\t\t\t\t</ReportParameter>\n' +
                                       '\t\t\t\t</ReportParameters>\n' +
                                   '\t\t\t</request>\n' +
                                   '\t\t\t<context xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n' +
                                       '\t\t\t\t<ServiceId>' + /*TODO fill in value here*/ + '</ServiceId>\n' +
                                       '\t\t\t\t<ClientAccessKey>' + /*TODO fill in value here*/ + '</ClientAccessKey>\n' +
                                       '\t\t\t\t<Token>' + /*TODO fill in value here*/ + '</Token>\n' +
                                       '\t\t\t\t<Status>' + /*TODO fill in value here*/ + '</Status>\n' +
                                       '\t\t\t\t<StatusMessage i:nil="true"/>\n' +
                                       '\t\t\t\t<InstanceKey>' + /*TODO fill in value here*/ + '</InstanceKey>\n' +
                                   '\t\t\t</context>\n' +
                               '\t\t</ExecuteReport>\n' +
                           '\t</s:Body>\n' +
                       '</s:Envelope>';
    return executeReport;
}