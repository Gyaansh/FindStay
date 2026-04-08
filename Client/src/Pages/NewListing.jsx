import ListingForm from "../ListingForm"
import Footer from "../Footer"
import EditListing from "../EditListing"
function Newlisting(){
    return(<>
        <EditListing propMode={"new"}/>
        <Footer/>
    </>)
}
export default Newlisting