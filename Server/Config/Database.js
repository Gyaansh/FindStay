import mongoose from "mongoose";
const DbConnect = ()=>{

  async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
  }

  main()
    .then( () => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
  // init();
  // async function init() {
  //   await Listing.deleteMany({});
  //   await Listing.insertMany(newData);
  // }
}
DbConnect();
export default DbConnect;