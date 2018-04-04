import * as parseString from 'xml2js';

export class LoginService {
    public static EndpointPath(): string {
        return '/services/LoginService';
    }

    public static Authenticate(customerAPIKey: string, password: string, username: string, userAPIKey: string): string {
        const authRequestXML: string = '<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">\n'
            + '<s:Header>\n'
            + '<a:Action s:mustUnderstand="1">http://www.ultipro.com/services/loginservice/ILoginService/Authenticate</a:Action>\n'
            + '<h:ClientAccessKey xmlns:h="http://www.ultipro.com/services/loginservice">' + customerAPIKey
            + '</h:ClientAccessKey>\n'
            + '<h:Password xmlns:h="http://www.ultipro.com/services/loginservice">' + password
            + '</h:Password>\n'
            + '<h:UserAccessKey xmlns:h="http://www.ultipro.com/services/loginservice">' + userAPIKey
            + '</h:UserAccessKey>\n'
            + '<h:UserName xmlns:h="http://www.ultipro.com/services/loginservice">' + username
            + '</h:UserName>\n'
            + '</s:Header>\n'
            + '<s:Body>\n'
            + '<TokenRequest xmlns="http://www.ultipro.com/contracts"/>\n'
            + '</s:Body>\n'
            + '</s:Envelope>';

        return authRequestXML;
    }

    public static GetLoginToken(xmlResponse: string): Promise<string> {

        return new Promise<string>((resolve, reject) => {
            parseString.parseString(xmlResponse, (err, result) => {
                if (err) {
                    //console.error(err);
                    reject(err);
                } else {
                    let token: string = result['s:Envelope']['s:Body'][0].TokenResponse[0].Token[0]['_'];
                    //console.log('inner token: ' + token);

                    resolve(token);
                }
            });

        })

    }
}