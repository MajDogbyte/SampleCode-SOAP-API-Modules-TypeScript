import * as https from 'https';
import {LoginService} from './modules/LoginService';
import {APIAccountModel} from './models/APIAccountModel';
import {PersonService} from './modules/PersonService';
import {FindPersonQueryParamters} from './models/QueryParameters/FindPersonQueryParameters';
import {SoapQueryOperatorEnumeration} from './models/QueryParameters/SoapQueryOperatorEnumeration';

const accountData = require('../accountSecretData.json');

//Account Details Model
let accountDetails: APIAccountModel = new APIAccountModel();
accountDetails.UserName = accountData.userName;
accountDetails.Password = accountData.password;
accountDetails.CustomerAPIKey = accountData.customerAPIKey;
accountDetails.UserAPIKey = accountData.userAPIKey;
accountDetails.UltiProCoreURI = accountData.ultiProCoreURI;

LoginService.LoginAndGetToken(accountDetails)
    .then((token) => {

        let findPersonQueryParams: FindPersonQueryParamters = new FindPersonQueryParamters();

        //Default Operator is Equals
        findPersonQueryParams.Country.Value = 'USA';
        /*
        findPersonQueryParams.CompanyCode.Value = 'ABC';
        findPersonQueryParams.CompanyCode.Operator = SoapQueryOperatorEnumeration.LIKE;

        findPersonQueryParams.EmployeeNumber.Operator = SoapQueryOperatorEnumeration.IN;
        findPersonQueryParams.EmployeeNumber.ArrayOfValues = ['1', '2', '3', '1234'];
        */

        PersonService.GetPeople(token, findPersonQueryParams)
            .then((result) => {
                //console.log(result);
            })
            .catch((err) => {
                console.error(err);
            })


    })
    .catch((err) => {
        console.error(err);
    });
