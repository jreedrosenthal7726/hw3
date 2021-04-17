// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  // Define relevant objects
  let dropoffLocation = ride.dropoffLocation
  let passengerDetails = ride.passengerDetails
  let pickupLocation = ride.pickupLocation
  let purpleRequested = ride.purpleRequested
  let passengerFirstname = passengerDetails.first
  let passengerLastname = passengerDetails.last
  let passengerPhone = passengerDetails.phoneNumber
  let passengerNumber = ride.numberOfPassengers
  let pickupAddress = pickupLocation.address
  let pickupCity = pickupLocation.city
  let pickupState = pickupLocation.state
  let pickupZip = pickupLocation.zip
  let dropoffAddress = dropoffLocation.address
  let dropoffCity = dropoffLocation.city
  let dropoffState = dropoffLocation.state
  let dropoffZip = dropoffLocation.zip
  
//Structure Uber request
//Display rider first and last 
  console.log(`Rider Name: ${passengerFirstname} ${passengerLastname}`)
//Display rider phone number
  console.log(`Phone Number: ${passengerPhone}`)
//Display pickup info: Address, City, State, ZIP
  console.log(`Pick Up Location: ${pickupAddress}, ${pickupCity}, ${pickupState}, ${pickupZip} `)
//Display dropff info: Address, City, State, ZIP
  console.log(`Dropoff Location: ${dropoffAddress}, ${dropoffCity}, ${dropoffState}, ${dropoffZip} `)
//Display number of Passengers  
  console.log(`Number of Passengers: ${passengerNumber}`)
//Create car type logic 
//Purple supercedes number of riders
//More than 3 is Noober XL
//3 or less is Noober C
let cartype
if(purpleRequested == true) {
  cartype = `Purple`
} else if (passengerNumber > 3) {
  cartype = `Noober XL`
} else {
  cartype = `Noober X`
}
//Display cartype
console.log(`Level of Service: ${cartype}`)
  // 🔥 YOUR CODE ENDS HERE 🔥
})
