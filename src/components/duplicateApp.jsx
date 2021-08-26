// import React, { useState } from "react";

// import "../styles/App.css";
// import { days } from "./Days";

// function App(props) {
//   const day = props.day;
//   // console.log(day);

//   const [hourState, changeState] = useState({
//     objects: days[0]
//   });

//   function toggleActive(index) {
//     let arrCopy = [...hourState.objects];
//     arrCopy[index].toggled
//       ? (arrCopy[index].toggled = false)
//       : (arrCopy[index].toggled = true);

//     changeState({ ...hourState, objects: arrCopy });
//   }
//   function toggleActiveHours(index) {
//     if (hourState.objects[index].toggled) {
//       return "box active";
//     } else {
//       return "box inactive";
//     }
//   }

//   return (
//     <div>
//       <table>
//         <tbody>
//           <tr>
//             <td>
//               <div>
//                 {hourState.objects.map((element, index) => (
//                   <div
//                     key={index}
//                     className={toggleActiveHours(index)}
//                     onClick={() => toggleActive(index)}
//                     onSelect={() => toggleActive(index)}
//                   ></div>
//                 ))}
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
