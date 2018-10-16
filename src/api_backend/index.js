const BASE = 'http://localhost:3001'

let getDestinations = function() {
   // the function name getDestinations is intended to remind you of the restful rails route --> GET '/destinations'.
   return fetch(BASE + '/destinations') // this would be equivalent to going to localhost:3001/destinations in your browser. Do that - - what do you see?
       .then((resp) => {
           // resp will be whatever you saw on the page localhost:3001/destinations, it is the result of our fetch call
           let json = resp.json() // we want to make sure what we have is just the json part of the response
           console.log(json);
           return json
       })
}

let getDestination = function(id) {
    return fetch(BASE + `/destinations/${id}`)
        .then((resp) => {
            let json = resp.json()
            console.log(json);
            return json
        })
}

let createDestinationUser = function(destination_user) {
    console.log(destination_user);
    return fetch(BASE + `/destination_users`, {
        body: JSON.stringify(destination_user),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    })
        .then((resp) => {
            let json = resp.json()
            return json
        })
}

let getSavedDestinations = function(id) {
    console.log(id);
    return fetch(BASE + `/destination_users/${id}`)
        .then((resp) => {
            let json = resp.json()
            console.log(json);
            return json
        })
}

let unsaveDestination = function(id) {
    console.log("Made it to apibackend", id.user_id, id.destination_id);
    return fetch(BASE + `/destination_users/${id.user_id}`, {
        body: JSON.stringify(id),
        headers: {
            "Content-Type": "application/json"
        },
        method: "DELETE"
    })
}

let getGeographies = function() {
   // the function name getDestinations is intended to remind you of the restful rails route --> GET '/destinations'.
   return fetch(BASE + '/geo_attributes') // this would be equivalent to going to localhost:3001/destinations in your browser. Do that - - what do you see?
       .then((resp) => {
           // resp will be whatever you saw on the page localhost:3001/destinations, it is the result of our fetch call
           let json = resp.json()
           return json
       })
}

let getExperiences = function() {
   // the function name getDestinations is intended to remind you of the restful rails route --> GET '/destinations'.
   return fetch(BASE + '/exp_attributes') // this would be equivalent to going to localhost:3001/destinations in your browser. Do that - - what do you see?
       .then((resp) => {
           // resp will be whatever you saw on the page localhost:3001/destinations, it is the result of our fetch call
           let json = resp.json()
           return json
       })
}

let getLanguages = function() {
   // the function name getDestinations is intended to remind you of the restful rails route --> GET '/destinations'.
   return fetch(BASE + '/lang_attributes') // this would be equivalent to going to localhost:3001/destinations in your browser. Do that - - what do you see?
       .then((resp) => {
           // resp will be whatever you saw on the page localhost:3001/destinations, it is the result of our fetch call
           let json = resp.json()
           return json
       })
}

export  {
   getDestinations, getDestination, createDestinationUser, getSavedDestinations, unsaveDestination, getGeographies, getExperiences, getLanguages
}
