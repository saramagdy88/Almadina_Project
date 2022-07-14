import React ,{Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeadphones} from '@fortawesome/free-solid-svg-icons';

import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <h3 className="text-center"> تواصل معنا  <FontAwesomeIcon icon={faHeadphones}/> </h3>
                    <p className="text-center">يمكنك التواصل معنا للإقتراحات والشكاوي </p>
                   
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="الإسم"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="الإيميل"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="الموبايل"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                        <div className="form-group">
                               <textarea className="form-control" placeholder="رسالتك"></textarea>
                            </div>
                            <button className="btn btn-block submitBtn">إرسال </button>



                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact ;