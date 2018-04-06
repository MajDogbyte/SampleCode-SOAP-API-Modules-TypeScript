import * as parseString from 'xml2js';
import * as https from 'https';
import {RequestOptions} from 'https';
import * as Promise from 'promise';
import {APIAccountModel} from '../models/APIAccountModel';
import {LoginTokenModel} from '../models/LoginTokenModel';

export class LoginService {
    private static EndpointPath(): string {
        return '/services/LoginService';
    }

    private static GetAuthenticateXML(customerAPIKey: string, userName: string, password: string, userAPIKey: string): string {

        const authRequestXML: string = '<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">\n'
            + '<s:Header>\n'
            + '<a:Action s:mustUnderstand="1">http://www.ultipro.com/services/loginservice/ILoginService/Authenticate</a:Action>\n'
            + '<h:ClientAccessKey xmlns:h="http://www.ultipro.com/services/loginservice">' + customerAPIKey
            + '</h:ClientAccessKey>\n'
            + '<h:Password xmlns:h="http://www.ultipro.com/services/loginservice">' + password
            + '</h:Password>\n'
            + '<h:UserAccessKey xmlns:h="http://www.ultipro.com/services/loginservice">' + userAPIKey
            + '</h:UserAccessKey>\n'
            + '<h:UserName xmlns:h="http://www.ultipro.com/services/loginservice">' + userName
            + '</h:UserName>\n'
            + '</s:Header>\n'
            + '<s:Body>\n'
            + '<TokenRequest xmlns="http://www.ultipro.com/contracts"/>\n'
            + '</s:Body>\n'
            + '</s:Envelope>';

        return authRequestXML;
    }

    private static GetLoginToken(xmlResponse: string): Promise<string> {

        return new Promise<string>((resolve, reject) => {
            parseString.parseString(xmlResponse, (err, result) => {
                if (err) {

                    reject(err);
                } else {
                    let token: string = result['s:Envelope']['s:Body'][0].TokenResponse[0].Token[0]['_'];

                    resolve(token);
                }
            });

        })

    }

    public static LoginAndGetToken(accountDetails: APIAccountModel): Promise<LoginTokenModel> {

        return new Promise<LoginTokenModel>((resolve, reject) => {

                let options: RequestOptions = {};
                options.method = 'POST';
                options.hostname = accountDetails.UltiProCoreURI;
                options.path = this.EndpointPath();
                options.headers = {
                    'Content-Type': 'application/soap+xml',
                    'Cache-Control': 'no-cache',
                };

                let req = https.request(options, function (res) {

                        // ensure we get the right status code
                        if (res.statusCode >= 200 && res.statusCode < 300) {

                            let chunks = [];

                            res.on('data', function (chunk) {
                                chunks.push(chunk);
                            });

                            res.on('end', function () {
                                let body = Buffer.concat(chunks);

                                let token = LoginService.GetLoginToken(body.toString())
                                    .then((token) => {
                                        let loginToken: LoginTokenModel = new LoginTokenModel();

                                        console.log('***************** token *****************');
                                        console.log('token: ' + token);

                                        loginToken.Token = token;
                                        loginToken.CustomerAPIKey = accountDetails.CustomerAPIKey;
                                        loginToken.UltiProCoreURI = accountDetails.UltiProCoreURI;

                                        resolve(loginToken);
                                    })
                                    .catch((err) => {
                                        console.error('***************** error *****************');
                                        console.error(err);

                                        reject(err);
                                    });
                            });
                        } else {
                            switch (res.statusCode) {
                                case 403:
                                    console.error('forbidden');
                                    reject(res.statusCode);
                                    break;
                                default:
                                    reject(res.statusCode);
                                    break;
                            }
                        }
                    }
                );

                // Send XML with values
                req.write(this.GetAuthenticateXML(accountDetails.CustomerAPIKey, accountDetails.UserName,
                    accountDetails.Password, accountDetails.UserAPIKey));
                req.end();
            }
        );
    }
}