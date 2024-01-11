import React from "react";
import ReactDOM from "react-dom";
// import { Modal } from "./components/Modal";


// import { Button } from "@mechanic-design/ui-components";

import "../../assets/fonts.css";
// import * as css from "./styles.module.css";

const Toneofvoice = () => {
  return <div className="test-Toneofvoice">Toneofvoice is rendering</div>;
};


// const Toneofvoice = (props) => {
//   const [captions, setCaptions] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const generateCaptions = async () => {
//     setIsLoading(true);
//     // Placeholder: Replace with actual API call logic to generate captions
//     const fakeCaptions = [
//       "Innovation drives us forward.",
//       "Crafting the future, one design at a time.",
//       "Where creativity meets technology."
//     ];
//     setCaptions(fakeCaptions);
//     setIsLoading(false);
//   };

//   return (
//     <aside className={css.root}>
//       <h1>Lumion Toolkit</h1>
//       <button className="generate-captions-btn" onClick={generateCaptions} disabled={isLoading}>
//   {isLoading ? 'Generating...' : 'Generate Captions'}
// </button>

//       {captions.length > 0 && (
//         <ul>
//           {captions.map((caption, index) => (
//             <li key={index}>{caption}</li>
//           ))}
//         </ul>
//       )}
//       {props.children}
//     </aside>
//   );
// };

export default Toneofvoice;
