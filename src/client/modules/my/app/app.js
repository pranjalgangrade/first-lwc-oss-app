import { LightningElement } from 'lwc';
import { getSession } from 'data/sessionService';
export default class App extends LightningElement {
    session;
    handleSessionClicked(event){
        let sessionId = event?.detail;
        console.log('sessionId => '+ sessionId);
        this.session = getSession(sessionId);
    }
}
