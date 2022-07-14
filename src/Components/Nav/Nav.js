import React ,{Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import './Nav.css'

class Nav extends Component{
    render(){
   return(
<div className="Nav">
    <div className="container">
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img src={Logo}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Home">الرئيسية</Link>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#kl">عن المدينة الجامعية </a>
        </li> */}

        <li class="nav-item">
          <Link class="nav-link" to="/Accept">شروط القبول </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/contact">تواصل معنا </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">   تسجيل دخول الطلاب<FontAwesomeIcon icon={faUser}/> </Link>
        </li> 
      </ul>  
    </div>
  </div>
</nav>
</div>

</div>
  )

    }




}
export default Nav;