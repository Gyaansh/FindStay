import Listing from "../Models/listingSchema.js";

async function listings(req,res){
    try{
        const { search, type } = req.query;
        let filter = {};
        
        if (search) {
            if (type === "country") {
                filter.country = { $regex: search, $options: "i" };
            } else {
                filter.$or = [
                    { location: { $regex: search, $options: "i" } },
                    { title: { $regex: search, $options: "i" } }
                ];
            }
        }

        const data = await Listing.find(filter);
        res.status(200).json({
            success : true,
            length : data.length,
            data : data
        });
    } catch(err){
        console.log(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
}
export default listings;