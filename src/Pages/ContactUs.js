import React from "react";
import { useForm } from "react-hook-form";

function ContactUs(){

  
const{register,handleSubmit,formState:{errors}}=useForm();

    
  
  const onHandleForm =(event)=>{
    event.preventDefault();
   

  
  }

    return(
      <div style={{width:300}}> 

     <h1>My form </h1>
      <form action="#" onSubmit={handleSubmit(onHandleForm)}>
  <div className="mb-3 mt-3">
    <label htmlFor="name">Enter name:</label>
    <input 
    type="text" 
    className="form-control" 
    id="uname"
    {...register('name',{required:"can not be blank",
        minLength:{
            value:3,
            message:"length shlolud be 3"
        }

    } )}
   
     />
     
  </div>
{errors.name?.message}
  <div className="mb-3 mt-3">
    <label htmlFor="email">Enter email:</label>
    <input 
    type="email" 
    className="form-control" 
    id="email"
    {...register('email',{required:"can not be blank"})}
     />
  </div>
  {errors.email?.message}
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>
     
    )
}
export default ContactUs;