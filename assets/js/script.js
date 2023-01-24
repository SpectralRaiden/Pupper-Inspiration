fetch("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
})
.then (function (response) {
    return response.json();
})

// access data points in response
// append data to JS
// 'append' command
