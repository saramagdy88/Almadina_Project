import React ,{Component} from "react";
import './Holiday.css';

class Holiday extends Component {

  render() {
    return(
        // Holiday
     <div className="Holiday">
         <div className="container">
        
         <h3 className="text-center">قم بملىء البيانات الاتية لعمل أجازة </h3>
                <form>
                    <div class="mb-3">
                        <label for="BuildingSelect" class="form-label">المبنى</label>
                        <select id="BuildingSelect" class="form-select">
                            <option>مبنى أ</option>
                            <option>مبنى ب</option>
                            <option>مبنى ج</option>
                            <option>مبنى د</option>
                            <option> مبنى هاء </option>
                            <option>مبنى ح</option>
                            <option>مبنى ز</option>
                        </select> 
                    </div>

                    <div className="mb-3">
                    <label for="RoomSelect" class="form-label">رقم الغرفة </label>
                    <input type="tel"  id="RoomSelect" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputDateStart"
                         className="form-label"> تاريخ الأجازة من يوم  </label>
                        <input type="date" 
                        className="form-control" id="exampleInputDateStart" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputDateEnd" 
                        className="form-label"> إلى يوم   </label>
                        <input type="date" 
                        className="form-control" id="exampleInputDateEnd" />
                    </div>
                   <div className="mb-3">
                    <button type="submit" 
                    class="btn btn-primary Btnlogin"> إرسال </button>
                    </div>
                    
                </form>
            </div>
     </div>
    )
  }


}
export default Holiday ;