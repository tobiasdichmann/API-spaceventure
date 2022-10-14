const mongoose = require( 'mongoose' );

const toursSchema = new mongoose.Schema( {

    title: {
        type: String,
        required: [ true, 'Tours: Title/titel er påkrævet!' ]
    },
    content: {
        type: String,
        required: [ true, 'Tours: Content/indhold er påkrævet!' ]
    },
    traveltime: {
        type: String,
        required: [ true, 'Tours: Traveltime/flyvetid er påkrævet!' ]
    },
    destination: {
        type: String,
        required: [ true, 'Tours: Destination er påkrævet!' ]
    },
    distance: {
        type: String,
        required: [ true, 'Tours: Distance/afstand er påkrævet!' ]
    },
    price: {
        type: String,
        required: [ true, 'Tours: Price/pris er påkrævet!' ]
    },
    image1: {
        type: String,
        required: [ true, 'Tours: Image/foto 1 er påkrævet!' ]
    },
    image2: {
        type: String,
        required: [ true, 'Tours: Image/foto 2 er påkrævet!' ]
    }
} )


module.exports = mongoose.model( 'Tours', toursSchema, 'tours' )