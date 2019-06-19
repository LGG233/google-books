const axios = require("axios");

module.exports = {
    getBooksByTitle: function (req, res) {
        const { query: params } = req;
        axios
            .get("https://www.googleapis.com/books/v1/volumes?q=jaws&key=AIzaSyBVDSPfCkUftiX_9sdX8UfXg_A_cQxPcFU", {
                params
            })
            .then(function (restuls) {
                res.json(results.data);

            });
    }
}
