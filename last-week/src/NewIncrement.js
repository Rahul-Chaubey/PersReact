import { useState } from "react";

export default (props) => {
//     const [value,setValue] = useState(0);

//   const onNewClickHandler = () => {
//       setValue(value + 1);
//   };
    return (
        <>
        <h1>In NewIncrement</h1>
        value : {props.value}
        <button onClick={props.onClickHandler}>NewClick</button>
        
        </>

    )
}