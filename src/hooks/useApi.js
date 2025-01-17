import React,{useEffect,useState} from "react";

const useApi=(url)=>{
    
    const[profile,setProfile]=useState(null);
    const[loading,setLoading]=useState(false);

    const controller= new AbortController();

   useEffect(()=>{
           setLoading(true);
            fetch(url,{single:controller.signal})
            .then(res=>res.json())
            .then(data=>setProfile(data))
            .finally(()=>{ 
            setLoading(false)
            }
            );

          return ()=>{ 
            controller.abort();
          }
          
          
        },[url])

    return {profile,loading};
}

export default useApi;