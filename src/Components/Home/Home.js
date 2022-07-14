import React ,{Component} from "react";
import './Home.css' ;

import backImg2 from '../../images/madina7.jpg' ;
import backImg3 from '../../images/madina3.jpg' ;
import backImg4 from '../../images/madina4.jpg' ;
import backImg5 from '../../images/madina5.jpg' ;
import newsImg from '../../images/elan.jpeg' ;
import newsImg3 from '../../images/download.jpg';
import newsImg4 from '../../images/elan3.jpeg';
import newsImg5 from '../../images/elan2.jpeg';
import newsImg6 from '../../images/elan4.jpeg';
import newsImg7 from '../../images/elan5.jpeg';
import newsImg8 from '../../images/elan7.jpg';
import { Link } from "react-router-dom";



class Home extends Component{
    render(){
   return(
        <div className="Home">

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
 
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={backImg4} class="d-block w-100" />
      <div class="carousel-caption d-none d-md-block">
        {/* <h2>المدينة الجامعية بجامعة الأزهر </h2> */}
       
      </div>
    </div>
    <div class="carousel-item">
      <img src={backImg5}  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      {/* <h2>المدينة الجامعية بجامعة الأزهر </h2> */}
       
      </div>
    </div>


    <div class="carousel-item">
      <img src={backImg2}  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      {/* <h2>المدينة الجامعية بجامعة الأزهر </h2> */}
        
      </div>
    </div>


    <div class="carousel-item">
      <img src={backImg3}  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      {/* <h2>المدينة الجامعية بجامعة الأزهر </h2> */}
        
      </div>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* News For madina */}

<div className="news">
<div className="container">
<h2>أحدث الأخبار</h2>
<div class="row mb-2">

  
<div class="col-md-6 item">
      <div class="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
        
          <h4 class="mb-0"> متابعة تسكين الطالبات بالمدينة الجامعية </h4> 
     <br></br>
          <p class="card-text">قام فضيلة الدكتور محمد المحرصاوي، رئيس الجامعة، يرافقه الدكتور محمد الشربيني، نائب رئيس الجامعة لشئون ..</p>
         
          <Link to= "/new1" class="card-link" >متابعة القراءة </Link>

        </div>
        <div class="col-auto d-none d-lg-block">
        <img src={newsImg5}  width= "200" height="200"/>

        </div>
      </div>
    </div>
  
    <div class="col-md-6">
      <div class="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          
          <h4 class="mb-0"> أسماء المقبولين فى المدن الجامعية بنين</h4>
          <br></br>
         
          <p class="card-text ">  أعلن المركز الإعلامي أنه انتهي من مراجعة أسماء كليات: "الطب البشري- طب الأسنان- الهندسة الزراعية- الهندسة...</p>
          <Link to= "/new2" class="card-link" >متابعة القراءة </Link>
         
        </div>
        <div class="col-auto d-none d-lg-block">
        <img src={newsImg}  width= "200" height="200"/>
         
        </div>
      </div>
    </div>
   <hr/>
   
    <div class="col-md-6">
      <div class="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
        
          <h4 class="mb-0">إجراءات عملية التسكين بالمدينة الجامعية</h4>
     <br></br>
          <p class="card-text">أعلن الدكتور محمد الشربيني، نائب رئيس جامعة الأزهر لشئون التعليم والطلاب أن التسكين بالمدن الجامعية..</p>
          <a href="#" class="card-link">متابعة القراءة</a>

        </div>
        <div class="col-auto d-none d-lg-block">
        <img src={newsImg4}  width= "200" height="200"/>

        </div>
      </div>
    </div>



    <div class="col-md-6">
      <div class="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
        
          <h4 class="mb-0">المحرصاوي يترأس إجتماع المجلس الأعلى للمدن الجامعية</h4>
     <br></br>
          <p class="card-text">  ترأس اليوم فضيلة الدكتور محمد المحرصاوي، رئيس الجامعة، اجتماع المجلس الأعلى للمدن الجامعية بجامعة الأزهر؛ </p>
          <a href="#" class="card-link">متابعة القراءة</a>

        </div>
        <div class="col-auto d-none d-lg-block">
        <img src={newsImg7}  width= "200" height="200"/>

        </div>
      </div>
    </div>
    <hr/>


    
    <div class="col-md-6">
      <div class="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
        
          <h4 class="mb-0">بدء التسجيل الإلكترونى لتنسيق المدن الجامعية</h4>
     <br></br>
          <p class="card-text">أعلن المركز الإعلامي بجامعة الأزهر أنه تقرر البدء في فتح باب تنسيق المدن الجامعية بجامعة الأزهر بالقاهرة..</p>
          <a href="#" class="card-link">متابعة القراءة</a>

        </div>
        <div class="col-auto d-none d-lg-block">
        <img src={newsImg3}  width= "200" height="200"/>

        </div>
      </div>
    </div>


    <div class="col-md-6">
      <div class="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
        
          <h4 class="mb-0">جامعة الأزهر تحذر طلابها من الإنسياق وراء الشائعات</h4>
     <br></br>
          <p class="card-text">وضح المركز الإعلامي بجامعة الأزهر أنه تم رصد أحد مواقع التواصل الاجتماعى ينشر استمارة تسكين المدينة الجامعية ..</p>
          <a href="#" class="card-link">متابعة القراءة</a>
         
        </div>
        <div class="col-auto d-none d-lg-block">
        <img src={newsImg8}  width= "200" height="200"/>

        </div>
      </div>
    </div>
    

    <hr/>


  </div>


</div>

</div>













 </div>

 
  )
    }




}
export default Home;