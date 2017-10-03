$(document).ready(function() {
    $.getJSON("data.json", function(data) { // $.getJSON pulls data from data.json
                                            // and turns it into an array called data.
                                            // with an object in each array element
    var topSpot = '';  // topspot is an empty variable
    $.each(data, function(key, value){  //.each is basically a for loop for the length of data[i].
                                        // now value ={} within each element
        topSpot += '<tr>';              // creates new table row saved to topSpot
        topSpot += '<td>'+ value.name + '</td>';    // in {}value- returns value of key(name) first column. {name: returned}; adds column to topspot
        topSpot += '<td>'+ value.description + '</td>'; //returns value of key(description) to new column in topSpot
        var link= 'https://www.google.com/maps?q=' + value.location[0] + ',' + value.location[1]; //value.location returns [] w/ coordinates
            //pullthose coordinates to finish a URL that leads to Google maps, showing the coordinates 
        topSpot += '<td>'+ '<a class="btn" href="'+link+'">Google Maps location</a>' + '</td>'; //using <a href=""> to create a link to that URL
            // place that link in new table column. send column to topSpot
        topSpot += '</tr>'; // close row of table in topSpot
        });  //finish .each function, after new table row was created for each element in data[]
        $('#table').append(topSpot); //append topSpot to table id="table" that exists in html
    });
});