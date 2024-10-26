# Express Routes

The Basic REST API using Node + Express JS.

## Installation
- Get the project
    - clone
  
        `git clone https://github.com/uncg-csc372/express-routes.git`
    - download zip.
- Open the project in VSCode.
- Open a Terminal.
- Install required packages.
    - `npm install`
- Start the server
    - `nodemon server.js`

## API Endpoints
Use ThunderClient to try the following endpoints:

## Get list of Games

### Request -  GET /games/all

   
    http://localhost:3000/games/all

   
### Response

    [
    {"id":1,"name":"Pokemon Red/Blue","platform":"GB","release_year":1996,"genre":"Role-Playing","publisher":"Nintendo","developer":"Game Freak","rating":"E"},
    {"id":2,"name":"Spyro Reignited Trilogy","platform":"PS4","release_year":2018,"genre":"Platform","publisher":"Activision","developer":"Toys for Bob","rating":"E"},
    {"id":3,"name":"Universal Paperclips","platform":"PC","release_year":2017,"genre":"World Domination","publisher":"Frank Lantz","developer":"Frank Lantz","rating":"E"},
    {"id":4,"name":"Super Mario Bros.","platform":"NES","release_year":1985,"genre":"Platform","publisher":"Nintendo","developer":null,"rating":null},
    {"id":5,"name":"Crash Bandicoot","platform":"PS","release_year":1996,"genre":"Platform","publisher":"Sony Computer Entertainment","developer":null,"rating":null}
    ]

## Get a specific Game

### Request - GET /games/{id}

    
    http://localhost:3000/games/5

### Response

    {"id":5,"name":"Crash Bandicoot","platform":"PS","release_year":1996,"genre":"Platform","publisher":"Sony Computer Entertainment","developer":null,"rating":null}

     
## Create a new Game

### Request -  POST /games/new

       
    http://localhost:3000/games/new` --data '{"id":25,"name":"New Game","platform":"PS4","release_year":2024,"genre":"Racing","publisher":"UNCG","developer":"CSC372","rating":"E"}'

### Response
    {"changes": 1, "lastInsertRowid": 21 }
