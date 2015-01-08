var fs = require('fs');

fs.readFile('output-productivity.json', 'utf8', function(error, data){
    var obj;
    if(error) throw error;
    obj= JSON.parse(data);
    // console.log(data.row_headers);

    console.log("Total number of activities: " + obj.rows.length); // testing the number of rows
    console.log("Total types of activities: " + obj.row_headers.join(',')); // testing the headers
    console.log("Index of Rank: " + obj.row_headers.indexOf('Rank')); // testing the property's index

    // get the total time
    var totalTime = 0;
    // the index that corresponds to the "Time Spent" column
    var j = obj.row_headers.indexOf('Time Spent (seconds)');
    console.log("Index for the 'Time Spent (seconds)' " + j);
    // iterate for each row
    for(var i = 0; i < obj.rows.length; i ++){
        totalTime += obj.rows[i][j]; // add the time using the indexes
    }
    console.log("Total time logged in (seconds) " + totalTime);
    console.log("Total time logged in (minutes) " + Math.floor(totalTime/60));

    // get the total productive time
    var totalProductiveTime = 0;
    var productivity; // the productivity index of each row/entry
    var k = obj.row_headers.indexOf('Productivity'); // get the index of the productivity entry for each row
    console.log("Index for the 'Productivity' " + k); // check that it works
    for(var i = 0; i < obj.rows.length; i ++){
        productivity = obj.rows[i][k];
        // add the time spent, the index j comes from the previous iteration
        // it holds the index corresponding to the 'Time Spent (seconds)'
        if(productivity > 0){
            totalProductiveTime += obj.rows[i][j];
        }
    }
    console.log("Productive time (seconds) " + totalProductiveTime);
    console.log("Total time logged in (minutes) " + Math.floor(totalProductiveTime/60));

});
