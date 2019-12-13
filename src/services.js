export const fetchEvents = () => {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://history.muffinlabs.com/date'
    fetch(proxyUrl + targetUrl)
    .then(blob => blob.json())
    .then(data => {
        return data;
    })
    .catch(e => {
        console.log(e);
        return e;
    });
}


export const fetchMe = () => {
    fetch('http://localhost:8080/me', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('token')
              },
            method: 'GET',
        }).then(response => response.json()).then((data) => {
            return data
        }).catch(e => {
            console.log(e);
        });
}