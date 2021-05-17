import React from 'react';
import ReactDOM from 'react-dom';
//import MyApp from './MyApp'
import MyApp1 from './MyApp1'
const firstName = 'Akash'
const jsx = <p> This paragrapgh belongs to JSX. </p>

ReactDOM.render( 
<div>
  {firstName}
  {jsx}
  
  <MyApp1/>
</div>
 ,
  document.getElementById('root')
);

