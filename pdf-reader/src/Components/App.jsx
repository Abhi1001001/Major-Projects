// importing required and element ------------------------------------->
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ViewPDF from "./ViewPDF";
import SearchPDF from "./SearchPDF";
import Navbar from "./Navbar";


export default function App() {
  return (
    <>
    {/* component for routing ---------------------> */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/view-pdf/:id" element={<ViewPDF/>}/>
      <Route path="/search-pdf" element={<SearchPDF/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
