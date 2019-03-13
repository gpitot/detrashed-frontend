import { BackendApi } from '../../../api/backend-api';

export class GreetingPagePresenter {
    static linkButtonClicked() {
        BackendApi.sendLoginRequest()
            .then((response) => {
                window.location = response;
            })
            .catch(console.log);
    }
}
