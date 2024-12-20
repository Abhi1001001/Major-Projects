import axios from "axios";
import { createContext, useContext, useState } from "react";

// creating context ----------------------->
export const PDFContext = createContext(null);

// creating useUserContext function -------------->
export const usePDFContext = () => {
  const PDFContextData = useContext(PDFContext);
  return PDFContextData;
};

export default function PDFContextProvider(props) {
  const [PDFdata, setPDFdata] = useState([]);
  const [searchPDF, setSearchPDF] = useState();
  // fetch data from api ------------>
  const fetchPDF = async () => {
    await axios
      .get("https://api.npoint.io/dee51ea017d20efdfcc8")
      .then((response) => {      
        setPDFdata(response.data);
      })
      .catch((error) => {
        alert(`${error.message} occurred please try again`);
      });
    //   setloading(false);
  };
  console.log("pdf data in context",PDFdata);  

  return (
    <PDFContext.Provider value={{ fetchPDF, PDFdata, setSearchPDF, searchPDF }}>
      {props.children}
    </PDFContext.Provider>
  );
}
