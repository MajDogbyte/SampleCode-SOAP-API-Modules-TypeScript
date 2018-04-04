module.exports = function (serviceId, customerApiKey, token, instanceKey) {
    var getListReport = '<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">\n' +
                            '\t<s:Header>\n' +
                                '\t\t<a:Action s:mustUnderstand="1">http://www.ultipro.com/dataservices/bidata/2/IBIDataService/GetReportList</a:Action>\n' +
                                '\t\t<a:To s:mustUnderstand="1">https://servicehost/services/BiDataService</a:To>\n' +
                            '\t</s:Header>\n' +
                            '\t<s:Body>\n' +
                                '\t\t<GetReportList xmlns="http://www.ultipro.com/dataservices/bidata/2">\n' +
                                    '\t\t\t<context xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n' +
                                        '\t\t\t\t<ServiceId>' + /*TODO fill in value here*/ + '</ServiceId>\n' +
                                        '\t\t\t\t<ClientAccessKey>' + /*TODO fill in value here*/ + '</ClientAccessKey>\n' +
                                        //GUID, unique per user session 
                                        '\t\t\t\t<Token>' + /*TODO fill in value here*/ + '</Token>\n' +
                                        //I'm not sure if status has to go in as a parameter or not
                                        '\t\t\t\t<Status>' + /*TODO fill in value here*/ + '</Status>\n' +
                                        '\t\t\t\t<StatusMessage i:nil="true"/>\n' +
                                        //GUID, unique per user session
                                        '\t\t\t\t<InstanceKey>' + /*TODO fill in value here*/ + '</InstanceKey>\n' + 
                                    '\t\t\t</context>\n' +
                                '\t\t</GetReportList>\n' +
                            '\t</s:Body>\n' +
                        '</s:Envelope>';
    return getListReport;
}