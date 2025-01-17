import { useSearchParams } from "react-router-dom";

function Contact(){

    const [searchParams,setSearchParams]=useSearchParams();
    console.log(searchParams.get('name'));
    console.log(searchParams.get('category'));
    return(
        <>
         <h2>THIS IS CONTACT PAGE</h2>
         <button onClick={()=>{
             setSearchParams({name:"rose"})
         }}>
          change </button>
         </>
    );
}
export default Contact;