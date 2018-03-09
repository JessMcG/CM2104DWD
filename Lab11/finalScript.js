$(function(){
  alert("document ready");

  $('#searchform').submit(function() {
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
    addResultTitles(jsondata);
  });
}

function addResultTitles(jsondata) {
  var htmlstring = "";
  //iterate the results
  for (var i = 0; i < 10; i++)
  {
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title + "</li>";
    console.log(jsondata.Search[i].Title);
  }

  //stick the HTML into the empty list
  $('#results').html(htmlstring);

}
