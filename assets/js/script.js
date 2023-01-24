$("document").ready(function() {

    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  
    loadQuote();
  
    $("#newQuote").on("click",function() {
      $("#quote-block").hide();
      loadQuote();
    });
}

    function loadQuote() {
        var random = Math.floor(Math.random()*10);
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(result){
          //response data are now in the result variable
          //$(".quote").css("display","none");
          //   $(".author").css("display","none");
          $(".quote").html(result.quoteText);
      
          $(".author").html(result.quoteAuthor);
    }
}




// fetch("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", {
//     method: 'getQuote',
//     format: 'json',
//     lang: 'en',
// })
// .then (function (response) {
//     return response.json();
// })

// access data points in response
// append data to JS
// 'append' command
