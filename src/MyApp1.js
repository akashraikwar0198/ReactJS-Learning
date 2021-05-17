import React from "react"
import MyApp from "./MyApp"

//function MyApp1(){
  //  return (
    //  <div>
    //    <h1>This is MyApp1 Component.</h1>
    //    <p>This is the MyApp1 Paragraph.</p>
    //  </div>
  //  )
 // }


  class MyApp1 extends React.Component{
      render() {
        return (
            <div>
              <h1>This is MyApp1 Component.</h1>
              <p>This is the MyApp1 Paragraph.</p>
              <MyApp/>
            </div>
          )
      }
  }
  export default MyApp1 