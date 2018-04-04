import * as https from 'https';
import {LoginService} from './modules/LoginService';
import * as accountData from '../accountSecretData.json';

var options = {
    'method': 'POST',
    'hostname': 'Servicet.ultipro.com',
    'path': '/services/LoginService',
    'headers': {
        'Content-Type': 'application/soap+xml',
        'Cache-Control': 'no-cache',
    }
};

var req = https.request(options, function (res) {
    var chunks = [];

    res.on('data', function (chunk) {
        chunks.push(chunk);
    });

    res.on('end', function () {
        let body = Buffer.concat(chunks);
        // console.log(body.toString());

        let loginService: LoginService = new LoginService();
        let token = loginService.GetLoginToken(body.toString())
            .then((token) => {
                console.log('***************** token *****************');
                console.log('token: ' + token);
            })
            .catch((err) => {
                console.error('***************** error *****************');
                console.error(err)
            })


    });
});


//User account info from a file called accountSecretData.json in root.
let cak = accountData.customerAPIKey;
let password = accountData.password;
let username = accountData.userName;
let useraccesskey = accountData.userAPIKey;

req.write('<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">\n    <s:Header>\n        <a:Action s:mustUnderstand="1">http://www.ultipro.com/services/loginservice/ILoginService/Authenticate</a:Action>\n        <h:ClientAccessKey xmlns:h="http://www.ultipro.com/services/loginservice">' + cak + '</h:ClientAccessKey>\n        <h:Password xmlns:h="http://www.ultipro.com/services/loginservice">' + password + '</h:Password>\n        <h:UserAccessKey xmlns:h="http://www.ultipro.com/services/loginservice">' + useraccesskey + '</h:UserAccessKey>\n        <h:UserName xmlns:h="http://www.ultipro.com/services/loginservice">' + username + '</h:UserName>\n    </s:Header>\n    <s:Body>\n        <TokenRequest xmlns="http://www.ultipro.com/contracts"/>\n    </s:Body>\n</s:Envelope>');
req.end();
