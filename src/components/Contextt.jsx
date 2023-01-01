import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const noteContext=createContext();
const Contextt = (props) => {

    
  const s1={
   'myname': 'eisha',
   'class':'SE'
  }
    const [name,setName]=useState(s1)
    const update=()=>{
      setTimeout(()=>{
setName(
  {'name':'eisha arshad',
  'class':'SE5'
  }
)
      },2000)
    }
  return (
    <noteContext.Provider value={{name,update}}>
       {props.children}
    </noteContext.Provider>
  )
}

export default Contextt;
