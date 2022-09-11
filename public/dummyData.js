const places = [
  {
    id: 1,
    location: "Sandoway Discovery Center",
    costUSD: 6,
    address: "142 S Ocean Blvd, Delray Beach, FL 33483",
    hours: "Tuesday - Saturday, 10:00 am - 4:00 pm",
  },
  {
    id: 2,
    location: "Delray Beach Public Library",
    costUSD: 0,
    address: "100 W Atlantic Ave, Delray Beach, FL 33444",
    hours: "Monday - Saturday, 9:00 am - 5:00 pm",
  },
  {
    id: 3,
    location: "Gumbo Limbo Nature Center",
    costUSD: 5,
    address: "1801 N Ocean Blvd, Boca Raton, FL 33432",
    hours: "Tuesday - Sunday, 9:00 am - 4:00 pm",
  },
  {
    id: 4,
    location: "Strawberry Patch Petting Zoo",
    costUSD: 8,
    address: "14466 S.Military Trail, Delray Beach, FL 33484",
    hours: "Tuesday through Friday 10 a.m - 7pm",
  },
];

const list = () => {
  return [...places];
};

// console.log(places.list);
// Only exporting the fxns that provide the data, and not the data itself,
// we are  creating a small API (application programming interface) to control
// the ways in which the rest of the application is allowed to interact with our data.

module.exports = { list: list };
