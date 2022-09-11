const deansPlaces = require("./dummyData");

function placeIndexFunc(placeIndex) {
  const places = deansPlaces.list();
  const place = places[placeIndex - 1];
  const html = `<!DOCTYPE html>
      <html>
        <head>
        <link rel="stylesheet" href="/styles.css" />
        <title>Deans Places Visited</title>
        </head>
        <body>
        <header>
        <h1>Places Dean has Visited:</h1>
      </header>
        <div id="allPlaces">
        <div class="place"><ul>
            <li><b>Location:</b><br> ${place.location} <br><br>
            <b>Cost of Entry:</b><br> $${place.costUSD} <br><br>
            <b>Address:</b><br> ${place.address} <br><br>
            <b>Hours of Operation:</b><br> ${place.hours}</li><br><br>
      </ul></div>
        </div>
        </body>
      </html>`;
  return html;
}

module.exports = placeIndexFunc;
