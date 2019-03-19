import { BaseRequest } from '../BaseRequest';

const ENDPOINT = 'http://localhost:8888';


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

   
    static async createEvent(location, startdate) {
        const headers = this.getHeaders();
        const url = `${ENDPOINT}/events/create`;
        const body = {
            location : {
                address : {
                    longitude : location.lng,
                    latitude : location.lat
                },
                name : 'do this server side'
            },
            start_time : startdate
        }
        return BaseRequest.sendPostRequest(url, body, headers);
    }
}

export { MeetupApi };
