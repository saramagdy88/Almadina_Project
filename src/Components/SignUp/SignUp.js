import {useRef ,useState} from "react";
import './SignUp.css';
import {signup} from '../../Firebase/Firebase';
import { Link } from 'react-router-dom';


export default function SignUp() {
    const [loading , setLoading]=useState(false);
    const emailRef =useRef() ;
    const passwordRef=useRef();

    async function handleSignup(e) {
        e.preventDefault()
        try{
            setLoading(true); 
        await signup(emailRef.current.value ,passwordRef.current.value).then((auth)=>{
            console.log(auth);
            <Link to="/profile"></Link>
        })
    } catch{
        alert("Error! , Email already in use ")
    }
    setLoading(false) 
      
    }
     
    return(
        <div className="SignUp" >
            
            <div className="container">
            <h3 className="text-center">تسجيل طالب جديد </h3>
            <form>

            <div className="mb-3">
                    <label for="exampleInputName" className="form-label">الإسم رباعى باللغة العربية  </label>
                    <input type="text" className="form-control" id="exampleInputName" />
                </div>

            <div className="mb-3">
                    <label for="exampleInputNumber" className="form-label">الرقم القومى </label>
                    <input type="tel" className="form-control" id="exampleInputNumber" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputAdd" className="form-label">العنوان  </label>
                    <input type="text" className="form-control" id="exampleInputAdd" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputPhone" className="form-label">رقم الهاتف  </label>
                    <input type="tel" className="form-control" id="exampleInputPhone" />
                </div>
       
                <div className="mb-3">
                    <label for="exampleInputEmail" className="form-label">الإيميل</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail" />
                </div>
                
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">كلمة المرور</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword2" className="form-label">تأكيد كلمة المرور </label>
                    <input type="password" className="form-control" id="exampleInputPassword2" />
                </div>
              
               
                <button disabled={loading}  onClick={handleSignup}  type="submit" class="btn btn-primary Btnlogin"> تسجيل</button>

        </form>




            </div>


        </div>
    )







}
    
   

