import { LightningElement } from 'lwc';
import { getDataUsingFetch } from 'data/sessionService';

export default class SessionList extends LightningElement {
    sessions = [];
    allSessions=[];
    connectedCallback() {
        this.getData();
    }

    async getData() {
        try {
            this.sessions = await getDataUsingFetch();
            this.allSessions = this.sessions;
            //console.log(`RESPONSE => ${JSON.stringify(response, null, '\t')}`);
        } catch (err) {
            console.error(`Error ${err}`);
        }
    }

    handleSearchKeyInput(event){
        let searchKey = event.target.value.toLowerCase();
        this.sessions = this.allSessions.filter(
            (session)=>session.name.toLowerCase().includes(searchKey));
    }

    handleSelect(event){
        let sessionId = event.target.dataset.index;
        console.log('sessionId => '+ sessionId);
        this.dispatchEvent(new CustomEvent('sessionclicked', {detail: sessionId}));
    }
}
