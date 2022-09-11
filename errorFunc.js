function errorFunc() {
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
     <h1>SOMETHING BROKE!</h1>
    </ul></div>
      
      </div>
      </body>
    </html>`;
  return html;
}

module.exports = errorFunc;
