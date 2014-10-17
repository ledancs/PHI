// read the json data
var data = require('./output-productivity');
// console.log(data.row_headers);
console.log("Total number of activities: " + data.rows.length);

/* We get the index of the row and the name of the poperty we want the value
 * the name comes from the row headers.
 * Make sure it is spelled exactly the same.
 */
var getPropertyFromRow = function(i, property){
    var j = data.row_headers.indexOf(property);
    return data.rows[i][j];
};

/* Using the previous functionw e only check for activities
 * that have the values of 1 or 2 ( productive or very productive ).
 */
var getProductiveTime = function(){
    var totalTime = 0;
    for(var i = 0; i < data.rows.length; i ++){
        if(getPropertyFromRow(i, 'Productivity') > 0){
            totalTime += getPropertyFromRow(i, 'Time Spent (seconds)');
        }
    }
    return totalTime;
};

/*
 * Sum up all the time spent on each activity
 */

var getTotalTime = function(){
    var totalTime = 0;
    for(var i = 0; i < data.rows.length; i ++){
        totalTime += getPropertyFromRow(i, 'Time Spent (seconds)');
    }
    return totalTime;
};

var productiveTime = getProductiveTime();
// convert to hours
var productiveTimeInHours = Math.floor(productiveTime/3600);
// obtain the remainder in seconds
var productiveTimeModuloSeconds = productiveTime%3600;
// convert the remainder to minutes
var productiveTimeLeftMinutes = Math.floor(productiveTimeModuloSeconds/60);
console.log('Total productive time in hours: ' + productiveTimeInHours + ' and ' + productiveTimeLeftMinutes + ' minutes' );

// the same goes for the total time
var totalTime = getTotalTime();
var totalTimeInHours = Math.floor(totalTime/3600);
var totalTimeModuloSeconds = totalTime%3600;
var totalTimeLeftMinutes = Math.floor(totalTimeModuloSeconds/60);
console.log('Total logged time in hours: ' + totalTimeInHours + ' and ' + totalTimeLeftMinutes + ' minutes' );

// we calculate in terms of seconds the proportion as a percentage.
var ratio = (productiveTime * 100) / totalTime;
console.log('You were ' + Math.floor(ratio) + '% of your logged time productive.');
