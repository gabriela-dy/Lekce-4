//Ukol2- fit Email

let name = prompt("Zadej jmeno")
let surname = prompt("Zadej přijmeni")

let lowerName = name.toLowerCase()
let lowerSurname = surname.toLowerCase()

let trimLowerName = lowerName.trim()
let trimLowerSurname = lowerSurname.trim()

let email = document.body.innerHTML =trimLowerSurname.slice(0,5) + trimLowerName.slice(0,3) + "@fit.cvut.cz."