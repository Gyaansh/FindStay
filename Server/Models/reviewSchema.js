import mongoose, {Schema} from 'mongoose';
const reviewSchema = new Schema({
    content :{
        type : String,
        max:500,
        min:10,
    },
    rating:{
        type :Number,
        min:1,
        max:5,
    },
    createdAt:{
        type:Date,
        default : Date.now(),
    }
});
const Review = mongoose.model("Review",reviewSchema);
export default Review;