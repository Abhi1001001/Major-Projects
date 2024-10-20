import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeSnippet(props) {
  const code = `
class Abhishek {
// I can, because I did.
constructor() {
    this.name = 'Abhishek Vishwakarma';
    this.email = 'av159593@gmail.com';
}
education() {
    return [
        { '2019-2022': 'Diploma in EEE branch form Govt. Polytechnic Basti' },
        { '2020-2024': 'Gradution in BA from Avadh University Ayodhya'  }
    ];
}
skills() {
    return [
        'HTML', 'CSS', 'JavaScript', 'React', 
        'Redux', 'Saga', 'Bootstrap', 'Tailwind', 'MaterialUI', 'REST API'
    ];
}
}
`;

  return (
    <div className={props.darkMode ? "dark" : ""}  >
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
