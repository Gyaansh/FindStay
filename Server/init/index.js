import Listing from "../Models/listingSchema.js";
import DbConnect from "../Config/Database.js";
// DbConnect();
async function addOwner(){
    try{
        await Listing.updateMany({},{$set : {owner : '69bc10a58d65d47256d583cf'}});
    
    } catch(err){
        console.log(err);
    }
}
// addOwner();


