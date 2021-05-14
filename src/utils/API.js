import axios from "axios";
// we may not need variables to get data from the API
// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for
// the passed query
export default {
  fetchEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=20");
  },
};
