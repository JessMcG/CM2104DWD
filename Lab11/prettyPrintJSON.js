$(function(){
  alert("document ready");

  $('#searchform').submit(function(){
    var searchterms  = $("#searchterms").val();
    //call the search OMDB function
    getResultsFromOMDB(searchterms);
    return false;
  });

});

function getResultsFromOMDB(searchterms) {
  var url = "http://www.omdbapi.com/?apikey=11b88edf&s=" + searchterms;
  //use jQuery JSON shortcut
  $.getJSON(url, function(jsondata){
    //handle the results
    prettyPrintJSON(jsondata);
  });
}

function prettyPrintJSON (jsondata){
  //prints JSON to screen
  var pretty = JSON.stringify(jsondata, null, 4);
  $('#resultsbox').append("<pre>"+pretty+"</pre>");
}
