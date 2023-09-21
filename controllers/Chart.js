import mongoose from "mongoose";
import Chart from "../models/Chart.js"

export const getAllData=async(req, res)=>{
    // console.log("reached lvl1");
    try{
        // console.log("reached lvl2 stage");
        const allData=await Chart.find();
        const allDataDetails=[];
        allData.forEach(data => {
            allDataDetails.push({
                _id:data._id,
                intensity:data.intensity,
                likelihood:data.likelihood,
                relevance:data.relevance,
                start_year:data.start_year,
                end_year:data.end_year,
                country:data.country,
                topic:data.topic,
                region:data.region,
                city:data.region,
            })
        });
        // console.log("reached lvl2", allDataDetails);
        return res.status(200).json(allDataDetails);
    }
    catch(error){
        console.log("failed")
        return res.status(400).json({message:error.message});
    }
}