import { BaseRequest } from '../BaseRequest';

const ENDPOINT = 'http://localhost:8888';
const ORG_ID = 211400854345;

class MeetupApi {
    static getHeaders() {
        const access_token = localStorage.getItem('access_token');
        return {
            "Authorization": `Bearer ${access_token}`,
            'Content-Type' : 'application/json'
        };
    }

    static async getEvents() {
        const headers = this.getHeaders();
        const url = `${ENDPOINT}/events/get`;
        return BaseRequest.sendGetRequest(url, headers);
    }

   
}

export { MeetupApi };
