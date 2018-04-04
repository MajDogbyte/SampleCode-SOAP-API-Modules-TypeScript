module.exports = function (username, password, customerApiKey, userApiKey) {
    var loginRequest = '<s:Envelope xmlns: s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">\n' + 
                            '\t<s:Header>\n' + 
                                '\t\t<a:Action s:mustUnderstand="1">http://www.ultipro.com/dataservices/bidata/2/IBIDataService/LogOn</a:Action>\n' + 
                                '\t\t<a:To s:mustUnderstand="1">https://servicehost/services/BiDataService</a:To>\n' + 
                            '\t</s:Header>\n' + 
                            '\t<s:Body>\n' + 
                                '\t\t<LogOn xmlns="http://www.ultipro.com/dataservices/bidata/2">\n' + 
                                    '\t\t\t<logOnRequest xmlns:i="http://www.w3.org/2001/XMLSchema-instance">\n' + 
                                        '\t\t\t\t<UserName>' + username + '</UserName>\n' + 
                                        '\t\t\t\t<Password>' + password + '</Password>\n' + 
                                        '\t\t\t\t<ClientAccessKey>' + customerApiKey + '</ClientAccessKey>\n' + 
                                        '\t\t\t\t<UserAccessKey>' + userApiKey + '</UserAccessKey>\n' + 
                                    '\t\t\t</logOnRequest>\n' + 
                                '\t\t</LogOn>\n' + 
                            '\t</s:Body>\n' + 
                       '</s:Envelope>';
    return loginRequest;
}