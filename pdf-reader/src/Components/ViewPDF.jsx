// importing required hooks and element ------------------------------------->
// import { useEffect, useState } from "react";
import { usePDFContext } from "../Context/PDFContext";
import { useParams } from "react-router-dom";

export default function ViewPDF() {
  // using context data ------------------------------------------->
  const PDFContext = usePDFContext();

  // getting id from params ----------------->
  const params = useParams();
  const pdf = PDFContext.PDFdata[params.id];
 
     
  return (
    <>
      <main className="max-w-screen-2xl h-full m-auto">
        <section className="h-[80vh] flex flex-col border rounded-lg border-gray-500 mx-4">
          <p className="text-center">
            <b>Title</b> : {pdf.name}
          </p>
          <p className="text-center">
            <b>Author</b> : {pdf.author}
          </p>
          <p className="text-center">
            <b>Published</b> : {pdf.published}
          </p>

          <hr />

          <object
            className="w-full h-full p-4"
            data={pdf.link}
            type="application/pdf"
          ></object>
        </section>
      </main>
    </>
  );
}
