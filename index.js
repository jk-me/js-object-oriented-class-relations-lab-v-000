let store = {drivers:[], passengers:[], trips:[]}

let driverID = 0
class Driver{
  constructor(name){
    this.id = ++driverID
    this.name = name

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(
      function(trip){
        return trip.driverId === this.id
      }.bind(this)
    )
  }

  passengers(){
    let pass = []
    for (const t of this.trips()){
      pass.push(t.passenger())
    }
    return pass
  }

}

let passengerID = 0

class Passenger{
  constructor(name){
    this.id = ++passengerID
    this.name = name
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(
      function(trip){
        return trip.passengerId === this.id
      }.bind(this)
    )
  }
  drivers(){
    let driv = []
    for (const d of this.trips()) {
      driv.push(d.driver())
    }
    return driv
  }
}

let tripID = 0
class Trip{
  constructor(driv, pass){
    this.id = ++tripID
    this.driverId = driv.id
    this.passengerId = pass.id
    store.trips.push(this)
  }

  passenger(){
    return store.passengers.find(
      function(passenger){
        return passenger.id === this.passengerId
      }.bind(this)
    )
  }

  driver(){
    return store.drivers.find(
      function(driver){
        return driver.id = this.driverId
      }.bind(this)
    )
  }
}
