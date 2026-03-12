import SingleListing from "./Pages/SingleListing"
import NavBar from "./NavBar"
import {Routes , Route} from "react-router-dom"
import "./tailwind.css"
import CardList from "./CardList"
import ListingForm from "./ListingForm"

function App() {

  return (
    <Routes>
      <Route path="/Nav" element={<NavBar/>} />
      <Route path="/listing" element={<CardList/>} />
      <Route path="/listing/:id" element={<SingleListing />} />
      <Route path="/new" element={<ListingForm/>} />
    </Routes>
  )
}

export default App
