const deansPlaces = require("./dummyData");

function allPlaces() {
  const places = deansPlaces.list();
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
      ${places
        .map(
          (place) =>
            `<b><li>Location:</b><br> ${place.location} <br>
            <b>Cost of Entry:</b> $${place.costUSD} <br>
            <b>Address:</b><br>  ${place.address} <br>
            <b>Hours of Operation:</b> <br> ${place.hours}</li><br><br>`
        )
        .join("")}
    </ul></div>
      
      </div>
      </body>
    </html>`;
  return html;
}

module.exports = allPlaces;
