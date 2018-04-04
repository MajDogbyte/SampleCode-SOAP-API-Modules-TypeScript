module.exports = function (serviceId, customerApiKey, token, instanceKey) {
    var loginResponse = '<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">\n' +
                            '\t<s:Header>\n' +
                                '\t\t<a:Action s:mustUnderstand="1">http://www.ultipro.com/dataservices/bidata/2/IBIDataService/LogOnResponse</a:Action>\n' +
                            '\t</s:Header>\n' +
                            '\t<s:Body>\n' +
                                '\t\t<LogOnResponse xmlns="http://www.ultipro.com/dataservices/bidata/2">\n' +
                                    '\t\t\t<LogOnResult xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n' +
                                        '\t\t\t\t<ServiceId>' + /*TODO fill in value here*/ + '</ServiceId>\n' +
                                        '\t\t\t\t<ClientAccessKey>' + /*TODO fill in value here*/ + '</ClientAccessKey>\n' +
                                        '\t\t\t\t<Token>' + /*TODO fill in value here*/ + '</Token>\n' +
                                        '\t\t\t\t<Status>' + /*TODO fill in value here*/ + '</Status>\n' +
                                        '\t\t\t\t<StatusMessage i:nil="true">\n' +
                                        '\t\t\t\t<InstanceKey>' + /*TODO fill in value here*/ + '</InstanceKey>\n' +
                                    '\t\t\t</LogOnResult>\n' +
                                '\t\t</LogOnResponse>\n' +
                            '\t</s:Body>\n' +
                        '</s:Envelope>';
    return loginResponse;
}