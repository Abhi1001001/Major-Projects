// importing required hooks and element ------------------------------------->
import { useEffect } from "react";
import { usePDFContext } from "../Context/PDFContext";
import PDFElement from "./PDFElement";
import { Link } from "react-router-dom";

export default function Home() {
  // using context data ------------------------------------------->
  const PDFContext = usePDFContext();

  // using useEffect hook for fetch data from api --------------->
  useEffect(() => {
    // excuting function which define in contextAPI component ------------->
    PDFContext.fetchPDF();
  }, []);
  return (
    <>
      <main className="max-w-screen-2xl flex flex-wrap justify-center items-center gap-3 m-auto">
        {/* using map for extract data -----------------------------> */}
        {PDFContext.PDFdata.map((items, index) => {
          return (
            // using link for navigation ----------------->
            <Link to={`/view-pdf/${index}`} key={index}>
              <PDFElement
                id={index}
                url={items.url}
                title={items.name}
                author={items.author}
                published={items.published}
              />
            </Link>
          );
        })}
      </main>
    </>
  );
}
