const express = require( 'express' );
require( 'dotenv' ).config();
const cors = require( 'cors' );

const app = express();
const PORT = process.env.PORT; // hent portnummer fra env-fil


// ---- DB Mongo og Mongoose
// ------------------------------------------------------------
const mongoose = require( 'mongoose' );

//Lokal DB
mongoose.connect( process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true } );
//Ekstern DB - indsæt connectionstring
//mongoose.connect( process.env.DB_URL_EXT, { useNewUrlParser: true, useUnifiedTopology: true } );

const db = mongoose.connection;
db.on( 'error', ( error ) => console.log( "FEJL: " + error ) )
db.once( 'open', () => console.log( "/// ---> MongoDATABSE: Ohøj der - jeg er klar til eksamen og sulten efter data!  ¯\\_(ツ)_/¯ " ) )


// ---- APP
// ------------------------------------------------------------
app.use( express.json() );                              // håndter POST/PUT data som json
app.use( express.urlencoded( { extended: true } ) );    // håndter POST/PUT data som urlencoded-data
app.use( cors( { credentials: true, origin: true } ) )  // CORS
app.use( express.static( 'public' ) )                   // Herfra hentes uploadede filer/billeder fra serveren

// ---- SESSION
// ------------------------------------------------------------

// const session = require( 'express-session' );
// const MongoStore = require( 'connect-mongo' )

// const expire = 1000 * 30 // 1 minut

// app.use( session( {

//     name: process.env.SESSION_NAME,
//     resave: true,
//     rolling: false,
//     saveUninitialized: false, // 
//     store: MongoStore.create( { mongoUrl: process.env.DB_URL } ),
//     //store: MongoStore.create( { mongoUrl: process.env.DB_URL_EXT } ),
//     secret: process.env.SESS_SECRET,
//     cookie: {
//         maxAge: expire,
//         sameSite: 'strict', // 'none' 'lax'
//         secure: process.env.NODE_ENV === 'production', 
//         httpOnly: true, // vigtigt - session-cookie som ikke kan manipuleres med javascript
//     }

// } ) );


// ---- AUTH TJEK - tjek om bruger er "logget ind" (har godkendt cookie)
// ------------------------------------------------------------

// http://localhost:8888/admin

// Udkommenter denne del, hvis der skal være adgang til ALT uden login
// app.use( '*/admin*', async ( req, res, next ) => {

//     if ( req.session && req.session.userId ) {

//         return next();

//     } else {

//         console.log( "LOGIN AFVIST" )
//         res.status( 401 ).json( { message: 'Du har ikke adgang...' } )
//         //res.set("Connection", "close");

//     }
// } )


// ---- ROUTES
// ------------------------------------------------------------

// GET serverens endpoint - "landingpage"
app.get( '/', async ( req, res ) => {

    return res.status( 200 ).json( { message: 'Velkommen til serverens start-endpoint og held og lykke med eksamen!' } );

} )


app.use( '/about', require( './routes/about.routes' ) );
app.use( '/banner', require( './routes/banner.routes' ) );
app.use( '/contact', require( './routes/contact.routes' ) );
app.use( '/footer', require( './routes/footer.routes' ) );
app.use( '/team', require( './routes/team.routes' ) );
app.use( '/gallery', require( './routes/gallery.routes' ) );
app.use( '/spacecraft', require( './routes/spacecraft.routes' ) );
app.use( '/safety', require( './routes/safety.routes' ) );
app.use( '/newssubscription', require( './routes/newssubscription.routes' ) );
app.use( '/tours', require( './routes/tours.routes' ) );


// ---- LISTEN - http://localhost:4444/
// ------------------------------------------------------------
app.listen( PORT, () =>
    console.log( "/// -----> Din SERVER er eksamensklar og lytter på port " + PORT + " ۜʕʘ̅͜ʘ̅ʔ " )
)