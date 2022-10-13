/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterFeetRatio = 3.281;
const literGallonsRatio = 0.264;
const kilogramPoundRatio = 2.204; 

const convertButton = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const lengthDiv = document.getElementById("length-div");
const volumeDiv = document.getElementById("volume-div");
const massDiv = document.getElementById("mass-div");

convertButton.addEventListener("click", function() {
    let metersInFeet = inputEl.value * meterFeetRatio;
    metersInFeet = metersInFeet.toFixed(3);
    let feetInMeters = inputEl.value / meterFeetRatio;
    feetInMeters = feetInMeters.toFixed(3);
    lengthDiv.innerHTML += `
                            <p class="measure-paragraph">${inputEl.value} meters = ${metersInFeet} feet | ${inputEl.value} feet = ${feetInMeters} meters </p>
                        `
    let litersInGallons = inputEl.value * literGallonsRatio;
    litersInGallons = litersInGallons.toFixed(3);
    let gallonsInLiters = inputEl.value / literGallonsRatio;
    gallonsInLiters = gallonsInLiters.toFixed(3);
    volumeDiv.innerHTML += `
                            <p class="measure-paragraph">${inputEl.value} liters = ${litersInGallons} gallons | ${inputEl.value} gallons = ${gallonsInLiters} liters </p>
                        `
    let kilogramsInPounds = inputEl.value * kilogramPoundRatio;
    kilogramsInPounds = kilogramsInPounds.toFixed(3);
    let poundsInKilograms = inputEl.value / kilogramPoundRatio;
    poundsInKilograms = poundsInKilograms.toFixed(3);
    massDiv.innerHTML += `
                            <p class="measure-paragraph">${inputEl.value} kilograms = ${kilogramsInPounds} pounds | ${inputEl.value} pounds = ${poundsInKilograms} kilograms </p>
                        `
})