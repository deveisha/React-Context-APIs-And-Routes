import React,{useContext} from 'react';
import { useEffect } from 'react';
import { noteContext } from './Contextt';

const About = () => {
const a=  useContext(noteContext);
useEffect(()=>{
  //you can call function with the help of contextAPI anywhere in your componenets
  a.update()
},[])
  return (

<div>
      About page of {a.name.myname} and class {a.name.class}
    </div>

   
  )
}

export default About
