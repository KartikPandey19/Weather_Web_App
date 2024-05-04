import { useState,useEffect } from "react";
import { API_URL,OPTIONS } from "../utility/apiKey";

const Test =()=>{

    const[list,setList] = useState([]);
    
    useEffect(()=>{
        fetchData(),
        []})

    const  fetchData = async()=>{
    const url = API_URL;
    const options = OPTIONS;
    
        const response = await fetch(url, options);
        const result = await response.json();
        
        setList(result);
       
    }

   
    return(
        <div>
            <div>{list.name}</div>
        </div>
    )
}

export default Test;