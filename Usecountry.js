import { useState,useEffect } from "react";

function UseCountry(url){
    const [data,setdata]=useState([]);
    const [load,setload]=useState(false);
    const [error,seterror]=useState("");

    async function fetchData(){
        try{
            setload(true);
            const res=await fetch(url);
            const json=await res.json();
            console.log("Usecountry",json);
            setdata(json);
        
        }
        catch(error){
            seterror(error.message);
        }
        finally{
            setload(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[url])

    return{data,load,error};
}

export default UseCountry