RescueTime API Script
=====================

The first scripts to connect to the API and query the productivity of the user and the total logged time.

The getProductivity script is a curl client using a python module to "prettify" the json. The scripts takes three parameters:

* The API key of the user
* The start date
* The end date

The results are placed in output-productivity.json.

The script queries.js is node.js script that reads the json file and performs and calculates the total logged time and the productivity time.
