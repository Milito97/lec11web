let arrivals = `{
  "total-count": 7,
  "arrivals": [
    {
      "name": "Air Canada",
      "origin": "Calgary",
      "dest": "Vancouver",
      "status": "Arrived"
    },
    {
      "name": "WestJet",
      "origin": "Edmonton",
      "dest": "Calgary",
      "status": "Arrived"
    },
    {
      "name": "Sunwing",
      "origin": "Calgary",
      "dest": "Denver",
      "status": "Cancelled"
    },
    {
      "name": "Air Canada",
      "origin": "Edmonton",
      "dest": "Calgary",
      "status": "Cancelled"
    },
    {
      "name": "Flair",
      "origin": "Calgary",
      "dest": "Edmonton",
      "status": "Delayed"
    },
    {
      "name": "WestJet",
      "origin": "Vancouver",
      "dest": "Calgary",
      "status": "On Time"
    },
    {
      "name": "WestJet",
      "origin": "Calgary",
      "dest": "Halifax",
      "status": "On Time"
    }
  ]
}`;

let x = JSON.parse(arrivals);
console.log(x);
