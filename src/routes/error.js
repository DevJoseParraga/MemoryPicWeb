import React from 'react';
import { useRouteError } from 'react-router-dom';


const Error = () => {
  
  const error = useRouteError();
  console.log(error)
  return (
    <div>
      <h1>ERROR</h1>
      <p>{error.status || error.message }</p>
    </div>
  )
}
export default Error;
