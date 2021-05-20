/* Using XMLHTTPRequest */

var URL = `https://conference-lwc-app.herokuapp.com/api/sessions`;
var sessions = [];
export function getDataUsingXML() {
    let request = new XMLHttpRequest();
    request.onload = function () {
        if (this.status === 200) {
            let response = JSON.parse(this.response);
            response = response?.data;
            return response;
        }
        return null;
    };
    request.open('GET', URL);
    request.send();
}

/* Using fetch method */

export function getDataUsingFetch() {
    return new Promise((resolve, reject) => {
        fetch(URL).then((response) => {
            if (response.status === 200) {
                console.log(response);
                response.json().then((data) => {
                    console.log(data?.data);
                    sessions = data?.data;
                    resolve(data?.data);
                });
            }
            //reject(null);
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
            reject(err);
          });
    });
}

export function getSession(sessionId){
    return sessions.find((session)=>{
        return session.id === sessionId;
    });
}
