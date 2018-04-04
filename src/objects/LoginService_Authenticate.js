module.exports = function (customerAccessKey, password, username, userAccessKey) {
    //TODO format this to resemble xml
    var authenticate = '<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">\n' +
                           '\t<s:Header>\n' +
                               '\t\t<a:Action s:mustUnderstand="1"> http://www.ultipro.com/services/loginservice/ILoginService/Authenticate </a:Action>\n' +
                               '\t\t<h:ClientAccessKey xmlns: h = "http://www.ultipro.com/services/loginservice"> ' + customerAccessKey + '</h:ClientAccessKey>\n' +
                               '\t\t<h:Password xmlns: h="http://www.ultipro.com/services/loginservice">' + password + '</h:Password>\n' +
                               '\t\t<h:UserAccessKey xmlns: h="http://www.ultipro.com/services/loginservice"> ' + userAccessKey + '</h:UserAccessKey>\n' +
                               '\t\t<h:UserName xmlns: h="http://www.ultipro.com/services/loginservice">' + username + '</h:UserName>\n' +
                           '\t</s:Header>\n' +
                           '\t<s:Body>\n' +
                               '\t\t<TokenRequest xmlns="http://www.ultipro.com/contracts"/>\n' +
                           '\t</s:Body>\n' +
                       '</s:Envelope>';
    return authenticate;
}
