"use strict";
(function () {

    window.addEventListener("load", init);
    function init() {
        let newButton = id("new-game-btn");
    newButton.addEventListener("click", function () {
        id("form-popup").style.display = "block";
    });

    let saveButton = id("save-game");
    saveButton.addEventListener("click", function (e) {
        e.preventDefault();
        submitForm();
    });

    let closeButton = id("cancel-btn");
    closeButton.addEventListener("click", function (e) {
        id("form-container").reset();
        id("form-popup").style.display = "none";
    });
    }

    function submitForm() {
        let params = new FormData(id("form-container")); // pass in entire form tag
        let jsonBody = JSON.stringify(Object.fromEntries(params)); //make form data json string.
        fetch("http://localhost:3000/games/new", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: jsonBody,
        })
            .then(checkStatus)
            .then(reload)
            .catch(alert);
    }
    function reload() {
        location.reload();
    }

    function checkStatus(response) {
        if (!response.ok) {
            throw Error("Error in request: " + response.statusText);
        }
        return response;
    }

    function id(idName) {
        return document.getElementById(idName);
    }
})();