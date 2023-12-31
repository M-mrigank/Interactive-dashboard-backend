import mongoose from "mongoose";

const ChartSchema=mongoose.Schema({
    end_year:{
        type:String,
    },
    intensity:{
        type:Number,
    },
    sector:{
        type:String,
    },
    topic:{
        type:String,
    },
    url:{
        type:String,
    },
    region:{
        type:String,
    },
    start_year:{
        type:String,
    },
    impact:{
        type:String,
    },
    added:{
        type:String,
    },
    published:{
        type:String,
    },
    country:{
        type:String,
    },
    relevance:{
        type:Number,
    },
    pestle:{
        type:String,
    },
    source:{
        type:String,
    },
    title:{
        type:String,
    },
    likelihood:{
        type:Number,
    },
})

export default mongoose.model("Chart", ChartSchema);