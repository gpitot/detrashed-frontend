import { BaseRequest } from '../BaseRequest';

const endpoint = 'https://api.meetup.com';

class MeetupApi {
    static getHeaders() {
        const access_token = localStorage.getItem('access_token');
        return {
            "Authorization": `Bearer ${access_token}`,
            'Content-Type' : 'application/x-www-form-urlencoded'
        };
    }

    static async createEvent() {
        const eventname = 'sydney-detrashed'
        const url = `${endpoint}/:${eventname}/events`;
        const headers = this.getHeaders();
        const body = {
            description:'sydney detrashed event',
            name : 'sydney detrashed'
        }

        const testurl = `${endpoint}/2/cities`
        const headers1 = {
            "Content-Type":"application/x-www-form-urlencoded"
        }
        //return BaseRequest.sendGetRequest(testurl, headers1)
        //return BaseRequest.sendPostRequest(url, body, headers);
        const config = {
            method : 'GET',
            headers : this.getHeaders()
        }
        fetch('https://api.meetup.com/2/member/self/', config).then((d)=>{return d.json()}).then((r)=>{console.log(r)})
    }

   
}

export { MeetupApi };
