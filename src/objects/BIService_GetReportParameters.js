module.exports = function (reportPath, serviceId, customerApiKey, token, instanceKey) {
    var reportParams = '<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">\n' +
                           '\t<s:Header>">\n' +
                               '\t\t<a:Action s:mustUnderstand="1">http://www.ultipro.com/dataservices/bidata/2/IBIDataService/GetReportParameters</a:Action>\n' +
                               '\t\t<a:To s:mustUnderstand="1">https://servicehost/services/BiDataService</a:To>\n' +
                           '\t</s:Header>\n' +
                           '\t<s:Body>">\n' +
                               '\t\t<GetReportParameters xmlns="http://www.ultipro.com/dataservices/bidata/2">\n' +
                                   //Consult documentation to see proper format of report path
                                   '\t\t\t<reportPath>' + reportPath + '</reportPath>\n' +
                                   '\t\t\t<context xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n' +
                                       '\t\t\t\t<ServiceId>' + /*TODO fill in value here*/ + '</ServiceId>">\n' +
                                       '\t\t\t\t<ClientAccessKey>' + /*TODO fill in value here*/ + '</ClientAccessKey>">\n' +
                                        //GUID, unique per user session -->
                                       '\t\t\t\t<Token>' + /*TODO fill in value here*/ + '<Token>\n' +
                                       '\t\t\t\t<Status>' + /*TODO fill in value here*/ + '</Status>\n' +
                                       '\t\t\t\t<StatusMessage i:nil="true"/>\n' +
                                       //GUID, unique per user session -->
                                       '\t\t\t\t<InstanceKey>' + /*TODO fill in value here*/ + '</InstanceKey>\n' +
                                   '\t\t\t</context>\n' +
                               '\t\t</GetReportParameters>\n' +
                           '\t</s:Body>\n' +
                       '</s:Envelope>';
    return reportParams;
}