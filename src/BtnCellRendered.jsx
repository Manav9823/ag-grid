import React from 'react'

function BtnCellRendered(props) {

  const btnClickedHandler = () => {
    console.log(props.data);
  }
  return (
    <div>
        <button onClick={btnClickedHandler}>Click Me!</button>
    </div>
  )
}

export default BtnCellRendered