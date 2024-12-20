// importing required hooks and element ------------------------------------->
import React, { useEffect, useState } from "react";
import { usePDFContext } from "../Context/PDFContext";
import { Link } from "react-router-dom";
import PDFElement from "./PDFElement";

export default function SearchPDF() {
  // state for searched pdf data -------------------->
  const [pdf, setPdf] = useState([]);

  // using context data ------------------------------------------->
  const PDFContext = usePDFContext();

  // getting all pdf from contextAPI --------------------->
  const PDFdata = PDFContext.PDFdata;

  // getting searched pdf input text from contextAPI and change into lovercase ------------------------>
  const searchPDFValue = PDFContext.searchPDF.toLowerCase();

  useEffect(() => {
    // setting searched pdf data blank array for every text in search box --------------------->
    setPdf([]);
    // using loop for finding matched data from api -------------------->
    for (let i = 0; i < PDFdata.length - 1; i++) {
      const match = PDFdata[i].name.toLowerCase().includes(searchPDFValue);
      if (match) {
        // if search text matched setting matched pdf data to state ----------------------->
        setPdf((old) => [...old, PDFdata[i]]);
      }
    }
  }, [searchPDFValue]);

  return (
    <>
      <main className="max-w-screen-2xl flex flex-wrap justify-center items-center p-4 gap-3">
        {/* using map for extract searched data ------------------> */}
        {pdf.map((items, index) => {
          return (
            // using link (from react router dom) for navigation and sending id in params ---------------->
            <Link to={`/view-pdf/${index}`} key={index}>
              <PDFElement
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
