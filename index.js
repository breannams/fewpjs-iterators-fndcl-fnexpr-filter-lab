// Code your solution here
function findMatching(drivers, name){
return drivers.filter(driver =>
 driver.toUpperCase() === name.toUpperCase())
}


function fuzzyMatch(drivers, letter){
return drivers.filter(driver =>
    driver[0] === letter[0])

}


function matchName(drivers, name){
return drivers.filter(driver => driver.name === name)
}