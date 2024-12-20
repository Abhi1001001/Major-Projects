// importing required hooks and element ------------------------------------->
import { usePDFContext } from "../Context/PDFContext";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    // using context data ------------------------------------------->
    const PDFContext = usePDFContext();
    // using useNavigate hook for navifation -----------------> 
    const navigate = useNavigate();
    
    // setting search value to contextAPI component and navigate to search page -------------------> 
     const searchPdf = (event)=>{
        PDFContext.setSearchPDF(event.target.value);
        if(event.target.value) navigate("/search-pdf");
        else if(!event.target.value) navigate("/")
      }
  return (
    <>
      <nav className="max-w-screen-2xl flex justify-center items-center md:px-40 px-4 py-5 gap-3 m-auto " >
      <Link className="text-xl font-semibold" to="/">Home</Link>
        <input
          onChange={searchPdf}
          className="w-full border-2 border-gray-500 rounded-xl outline-none px-3 mx-3 text-lg"
          type="search"
          placeholder="Enter any pdf title"
        />
      </nav>
    </>
  );
}
