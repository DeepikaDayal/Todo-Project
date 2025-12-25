import { useEffect, useState} from "react";

export const TodoDate = () =>{

 const [datetime, setDateTime] = useState("");
 
    useEffect(() => {
    const interval = setInterval(() =>{
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formatteedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate}-${ formatteedTime}`);
     }, 1000);
    
    return () => clearInterval(interval);

    }, [])
    
    return <h2 className="date-time">{datetime}</h2>
        
}