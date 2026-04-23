import SingleListing from "../Components/SingleListing";
import Header from "../Components/Header";
import Map from "../Components/Map"
function SingleListingPage() {
  return (
    <div className="bg-orange-50">
      <Header/>
      <SingleListing />
      <Map/>
    </div>
  );
}
export default SingleListingPage;
