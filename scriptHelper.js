    // Write your helper functions here!

require('cross-fetch/polyfill');
 



//added planetary data json format and moved to top of .js
async function myFetch() {
    const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    return response.json();
};

//per instructions- "pickPlanet() takes in one argument: a list of planets. Using Math.random(), return one planet from the list with a randomly-selected index."
function pickPlanet(planets) {
    //planets param is list of planets
    const index = Math.floor(Math.random() * planets.length);
    return planets[index]; //index pulling random from planets
}

//based on parameters, unhide html formatting, added ${} to list items, declared missionTargetDiv for missionTarget Div item on index div id, set to htmlcontent after html formatting 
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTargetDiv = document.getElementById('missionTarget');
    const htmlContent = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
`;
    missionTargetDiv.innerHTML = htmlContent;
 }
 

 function validateInput(value) {
    if (value === "") {
     return "Empty"; //taking in string as parameter, return Empty (if empty)
    } else if (isNaN(value)) {
        return "Not a Number"; //return not a Number
    } else {
        return "Is a Number"; //else is if it's not blank and not NaN/not a number
    }
 }
 
//  function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//     let pilotStatus = validateInput(pilot);
//     let copilotStatus = validateInput(copilot);
//     let fuelStatus = validateInput(fuelLevel);
//     let cargoStatus = validateInput(cargoLevel);

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = validateInput(pilot);
    let copilotStatus = validateInput(copilot);
    let fuelStatus = validateInput(fuelLevel);
    let cargoStatus = validateInput(cargoLevel);

    //accidentally deleted for list parameter - re-adding here
    document.getElementById("faultyItems").style.visibility = 'visible';
    list.style.visibility = "visible"; //sets visibiltiy of list to "visible" 

     //pilotStatus = document.getElementById('pilotStatus'); 
     //copilotStatus = document.getElementById('copilotStatus');
     //fuelStatus = document.getElementById('fuelStatus');
     //cargoStatus = document.getElementById('cargoStatus');

    if (pilotStatus === "Empty" || copilotStatus === "Empty" || fuelStatus === "Empty" || cargoStatus === "Empty"){
        alert("All fields are required");
        return;
    }
    if (pilotStatus === "Is a Number" || copilotStatus === "Is a Number" || fuelStatus === "Not a Number" || cargoStatus === "Not a Number"){
        alert("Please enter valid information for all fields");
        return;
    }

    document.getElementById("launchStatus").innerHTML = `Shuttle is Ready for Launch`;
    document.getElementById("launchStatus").style.color = "green";
    document.getElementById("fuelStatus").style.color ="green";
    document.getElementById("cargoStatus").style.color = "green";
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
    document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
    if (fuelLevel < 10000 || cargoLevel > 10000) { //fuel level below 10k or cargolevel is above 10k, shuttle not ready
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML =`Shuttle Not Ready for Launch`;
        document.getElementById("launchStatus").style.color = "red";
        if (fuelLevel < 10000) { //further validating fuel
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
            document.getElementById("fuelStatus").style.color = "red";
        }
        if (cargoLevel > 10000) { //further validating cargo status
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`;
            document.getElementById("cargoStatus").style.color = "red";
            
        }
    }

        return;

 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;