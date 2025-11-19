import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Practicum3 from "./Practicum3";
import{TextField, Button,

 } from "@mui/material"


const Practicum4 = () =>{
    const [code,setCode] = useState("");
    const linker = useNavigate();

    const codes = "123";

    const handlelogin = () =>{
        if(code === codes ) {
            alert("login successfull")
            linker("/")
        }else{
            alert("invalid codes ")
        }
    } 
    return(
        <>
        <h1>Login</h1>
        <TextField
          type="password"   
          label="Enter code"
          value={code}
          placeholder="enter code "
          onChange={(e)=>setCode(e.target.value)}
          />
          <Button onClick={handlelogin} variant="contained" color="primary">Login</Button>

        
        </>

    );
};
export default Practicum4;