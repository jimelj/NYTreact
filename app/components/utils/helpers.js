// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from 'axios'

// NYT api key
const apiKey = "2c24b581b73c4223ad99a961cfaad9db";

// Helper functions for making API Calls
// We export the API helper
export default {

    // This function serves our purpose of running the query to geolocate.
    runQuery(queryTerm,startYear,endYear) {

        console.log(queryTerm);

        // Figure out the geolocation
        // const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
        const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${queryTerm}&begin_date=${startYear}0101&end_date=${endYear}0101`;


        return axios.get(queryURL).then(function (NYT) {

            console.log('response',NYT.data.response.docs);

            // If get get a result, return that result's formatted address property
            if (NYT.data.response.docs[0]) {
                return NYT.data.response;
            }else{
            // If we don't get any results, return an empty string
            return "";
            }
        });
    },

    // This function hits our own server to retrieve the record of query results
    getArticles() {
        return axios.get("/api/saved");
    },

    // This function posts new searches to our database.
    postArticle(NYTArticles) {
        return axios.post("/api/saved", {NYTArticles});
    }
};
