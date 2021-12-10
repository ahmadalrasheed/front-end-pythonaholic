import axios from 'axios';
import SignUpFormForUser from '../components/sign_up_form_for_company'
import Header from '../components/header'
import { useState } from 'react';


export default function SignUpPage() {
    const [state,DisplaySignUp] = useState(0)
    
    function event_handler(e){
      e.preventDefault();
      let user_data={
        email:e.target.email.value,
        password:e.target.password.value,
        phonenumber:e.target.phonenumber.value
      }
      console.log(user_data);
      // send_user_data = axios.post('https://reqres.in/api/articles',user_data)
    }
  
  return (
    <>
    
    <Header DisplaySignUp={DisplaySignUp} state={state}/>
    {console.log(state)}
    
    <SignUpFormForUser event_handler={event_handler}/>
    
    </>
  )
}