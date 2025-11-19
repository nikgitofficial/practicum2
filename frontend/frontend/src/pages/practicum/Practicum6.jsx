import React,{useState} from "react";
import {Link} from "react-router-dom";
import { personalname,address,birthdate } from "./detailsToexportInPracticum6";

const Practicum6 = () =>{
      

     

    return(
        <>
        <h1>Practicum 6</h1>
        <Link to="/">Home</Link>
        <h1>personal name</h1>
        <p>{`${personalname.firstname} ${personalname.middlename} ${personalname.lastname}`}</p>
        <h1>address</h1>
        <p>{`${address.brgy}`}</p>
        <h1>birthdate</h1>
        <p>{`${birthdate.year} ${birthdate.month} ${birthdate.day}`}</p>
        
        
        

        
        </>

    );
};
export default Practicum6;