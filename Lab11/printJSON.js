$(function(){
  alert("document ready");

  $('#searchform').submit(function(){
    var searchterms  =$("#searchterms").val();
    addItemToList(searchterms);
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
    printJSON(jsondata);
  });
}

function printJSON (jsondata){
  //prints JSON to screen
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>"+normal+"</p>");
}
