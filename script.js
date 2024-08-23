// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    const form = this.document.querySelector("form");
    let listedPlanets; //x
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) { //x
        //fetch result is a json containing array of planet objects
        listedPlanets = result; //x
        console.log(listedPlanets); //prints log to console
    }).then(function () {
        //let chosenPlanet = pickPlanet(listedPlanets);
        console.log(listedPlanets);

        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageUrl = planet.image;
        
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })

// I forgot to un-note this code during some testing :(





        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        form.addEventListener("submit", function(event) {
            // prevent refresh on submit button
            event.preventDefault();
    
            // identifying input value
            let pilot = document.querySelector("input[name=pilotName]").value;
            let copilot = document.querySelector("input[name=copilotName]").value;
            let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
            let cargoLevel = document.querySelector("input[name=cargoMass]").value;
            let list = document.getElementById("faultyItems");
    
            formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        });
            

    //     document.getElementById("formSubmit").addEventListener("click", function(event) {
    //         event.preventDefault();
    //         const pilot = document.getElementById("pilotName").value;
    //         const copilot = document.getElementsByName("copilotName")[0].value;
    //         const fuelLevel = document.getElementsByName("fuelLevel")[0].value;
    //         const cargoLevel = document.getElementsByName("cargoMass")[0].value;
    //         formSubmission(document, listedPlanets, pilot, copilot, fuelLevel, cargoLevel);
    // });
            })