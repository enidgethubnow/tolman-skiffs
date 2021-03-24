const mongoose = require('mongoose');
const TollmanSkiffSchema = new mongoose;
    ownerName:{
        type: String,
        required;[ true, "You must have an owner name" ]
        minlength; [ 3, "Your ownerName must be at least 3 characters long"]
    };

    builderName:{
        type: String,
        required;[ true, "You must have a builder name" ]
        minlength: [ 3, "Your builder name must be at least 3 characters long"]
    };

    modelName:{
        type: String,
        required;[ true, "You must have a model name" ]
        // enum: ['Standard', 'Wide body','Jumbo', 'Flat bottom']
    };

    startDate:{
        type: Date,
        required;[ true, "You must have a start date" ]
        min; [ '1900-01-01, "Sorry, please try again!']
        max; [new Date(),"You cannot say you are starting in the future"]
    };

    finishDate:{
        type: Date,
        min; [ '1900-01-01, "Sorry, please try again!'],
        max; [new Date(),"You cannot say you are starting in the future"]}
    // };
    // buildComplete: {
    //     type: Boolean,
    //     default: false
    // };l
    
    stockLength:{
        type: Number,
        // required: [true, "Your boat must have a stock length"]
        min; [15,"Minimum length for a Tollman skiff must be at least 15 feet"]
        max; [30, "Maximum length for a Tollman skiff is  30 feet on the site"]
    };

    customLength:{
        type: Number,
        required; [true, "Your boat must have a stock length"]
        min; [15,"Minimum length for a Tollman skiff must be at least 15 feet"]
        max; [30, "Maximum length for a Tollman skiff is  30 feet on the site"]
    };

    pictureUrl:{
        type: String,
    

{timestamps: true}
    } 
module.exports = mongoose.model('skiff',TollmanSkiffSchema);
