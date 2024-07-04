import React from "react";

export default function ({ title, classn }) {
  const buttonTitle = title;
  // const backgroundColor = bg
  return (
    <div className={classn}>
      {buttonTitle}

      <div>{/* <newe/> */}</div>
    </div>
  );
}

// const newe = ()=>{
//   return (
//     <div>
//       welcome
//     </div>
//   )
// }
