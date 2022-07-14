import React  from "react";
import QRCode from 'qrcode' ;
import {useState} from "react";
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Profile() {
 //QR Code
    const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')
    const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 300,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

    // Disable input 
    const [isDisabled, setIsDisabled] = useState(false);
    const handleClick = () => {
        setIsDisabled(!isDisabled)
      };

    return (
        <div className="profile">
            <h4>أهلا بك  <FontAwesomeIcon icon={faUser}/></h4>
              {/* Main header */}
             <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="true"
                         href="#">QR code الخاص بك  </a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/holiday" 
                        target="_blank" 
                        rel="holiday">عمل أجازة 
                        <FontAwesomeIcon icon={faUserPlus }/></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="offcanvas"
                         href="#offcanvasExample"
                          role="button">المستحقات الخاصة بك</a>
                    </li>
    
                    <li class="nav-item">
                        <Link class="nav-link" to="/Home">تسجيل الخروج</Link>
                    </li>
                    </ul>
                    
                  {/* Payments Card */}
                    <div class="offcanvas offcanvas-start"
                     tabindex="-1" id="offcanvasExample" 
                     aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" 
                        id="offcanvasExampleLabel">المستحقات الخاصة بك </h5>
                        <button type="button" 
                        class="btn-close text-reset" 
                        data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                       <div className="item">
                           <p>بداية أجازتك : 18/3/2022</p>
                           <p>نهاية  أجازتك : 22/3/2022</p>
                           <h6>مستحقاتك : 50 جنية </h6>
                       </div>
                       <hr />

                       <div className="item">
                           <p>بداية أجازتك : 2/4/2022</p>
                           <p>نهاية  أجازتك : 8/4/2022</p>
                           <h6>مستحقاتك : 25 جنية </h6>
                       </div>
                       <hr />

                       <div className="item">
                           <p>بداية أجازتك : 16/4/2022</p>
                           <p>نهاية  أجازتك : 20/4/2022</p>
                           <h6>مستحقاتك : 50 جنية </h6>
                       </div>
                       <hr />

                       <div className="item">
                           <p >بداية أجازتك : 1/5/2022</p>
                           <p>13/5/2022</p>
                           <h6>مستحقاتك : 75 جنية </h6>
                       </div>
                       <hr />

                       <div className="item">
                           <p>بداية أجازتك : 22/5/2022</p>
                           <p>نهاية  أجازتك : 2/6/2022</p>
                           <h6>مستحقاتك : 100 جنية </h6>
                       </div>
                       <hr />
                     </div> 
                    </div>
                    </div>
                </div>

               {/* QR Code  */}
                <div class="card-body">
                <input 
				type="text"
				placeholder="قم بكتابة الرقم القومى الخاص بك"
                disabled={isDisabled}
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button className="plusBtn"
             onClick={function(event){GenerateQRCode() ;handleClick()} }>إنشاء</button>
            <br/>
			{qr && <>
				<img src={qr} />
				<a className="down" href={qr}
                 download="qrcode.png">تحميل 
                 <FontAwesomeIcon icon={faArrowCircleDown} /></a>
			</>} 
                </div>
    
                </div>

        </div>
    )
}


export default Profile;