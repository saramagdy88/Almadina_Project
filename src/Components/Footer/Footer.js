import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from '../../images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {faArrowCircleUp} from "@fortawesome/free-solid-svg-icons";







class Footer extends Component {

    render() {
        return(
<div className="footer textcenter">

<div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="logo">
              <img src= {Logo}/>
              <p>
                المدن الجامعية بجامعة الأزهر الشريف
              </p>
            </div>
          </div>
          
          <div class="col-lg-4">
          
            <ul class="list-unstyled">
              <li> <Link className="link-nav" to="/Home">الرئيسية</Link></li>
              <li > <Link className="link-nav" to="/Accept">شروط القبول</Link></li>
              <li ><Link className="link-nav" to="/contact">تواصل معنا</Link> </li>
              <li ><Link className="link-nav" to="/login">تسجيل الطلاب</Link></li>

            

            </ul>
          </div>
          
          <div class="col-lg-4">
            <div class="cont"> 
              <p><FontAwesomeIcon icon={faMapMarker}/> مدينة نصر</p>
              <p><FontAwesomeIcon icon={faEnvelope}/> Az_Madina@gmail.com</p>
                 
          <p class="float-end mb-1 arrow">
      <a href="#"> <FontAwesomeIcon size="2xl" icon={faArrowCircleUp} /> </a>
    </p>
         
              
            </div>
         
          </div>

        </div>
      </div>


      <div class="copy text-center">
      &copy; copyright 2022 to <span>Madina</span> .com
    </div>

</div>


        )
    }

}

export default Footer ;