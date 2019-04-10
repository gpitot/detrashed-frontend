import { BaseRequest } from '../BaseRequest';

const ENDPOINT = 'https://detrashed-backend.herokuapp.com';

export class BackendApi {
    static async sendLoginRequest() {
        return BaseRequest.sendGetRequest(`${ENDPOINT}/user/login/`);
    }


    static async getTokens(code) {
        const body = {
            code,
        };
        return BaseRequest.sendPostRequest(`${ENDPOINT}/user/access/`, body);
    }
}
