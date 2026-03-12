import Listing from "../Models/listingSchema.js";

async function listings(req,res){
    try{
        const data = await Listing.find();
        res.status(200).json({
            success : true,
            length : data.length,
            data : data
        });
    } catch(err){
        console.log(err);
        
    }
}
export default listings;