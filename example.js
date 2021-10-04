"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
// import "./node-fetch";
function api(url) {
    return (0, node_fetch_1["default"])(url)
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
        .then(function (data) {
        return data;
    });
}
api('https://aws.random.cat/meow');
