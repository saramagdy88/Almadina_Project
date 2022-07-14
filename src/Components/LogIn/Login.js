import {useRef ,useState} from "react";
import { Link } from 'react-router-dom';
import { login } from "../../Firebase/Firebase";

import './Login.css';
export default function Login(){

    const [loading , setLoading]=useState(false);
    const emailRef =useRef() ;
    const passwordRef=useRef();
    async function handleLogin(e) {
        e.preventDefault()
        try{
            setLoading(true) 
        await login(emailRef.current.value ,passwordRef.current.value).then((auth)=>{
            console.log(auth)
        })
    } catch{
        alert("Error , this account not found !")
    }
    setLoading(false) 
      
    }
    return(
        <div className="Login" >
            
            <div className="container">
            <h3 className="text-center">تسجيل الدخول</h3>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail" className="form-label">الإيميل</label>
                    <input ref={emailRef} type="email" className="form-control"
                     id="exampleInputEmail" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1"
                     className="form-label">كلمة المرور</label>
                    <input ref={passwordRef}  type="password" 
                     className="form-control"
                     id="exampleInputPassword1" required />
                </div>
                <button onClick ={handleLogin}type="submit"
                       class="btn btn-primary Btnlogin">
                     <Link to="/profile">دخول</Link> </button>

                <p>ليس لديك حساب ؟ <Link to="/signup">أنشىء حساب جديد</Link></p> 
        </form>
            </div>
        </div>
    )

}
    
        
    


