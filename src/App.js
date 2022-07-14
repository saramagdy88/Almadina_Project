import { Route, Routes } from 'react-router';
import { BrowserRouter  } from 'react-router-dom';
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Login from "./Components/LogIn/Login";
import SignUp from "./Components/SignUp/SignUp" ;
import Profile from "./Components/Profile/Profile";
import Holiday from './Components/Holiday/Holiday' ;
import Accept from './Components/AcceptRules/Accept-rules';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import New1 from './Components/News/New1/New1';
import New2 from './Components/News/New2/New2';

function App() {


  return (

    <BrowserRouter>
    <div className="App">
      <Nav/>
      

        <Routes>
          <Route exact path="/Home" element={<Home/>}/> 
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp />} /> 
          <Route exact path="/holiday" element={<Holiday/>} /> 
          <Route exact path="/Accept" element={<Accept/>} />
          <Route exact path="/contact" element={<Contact/>} /> 
          <Route exact path="/profile" element={<Profile/>} /> 
          <Route exact path="/new1" element={<New1/>} /> 
          <Route exact path="/new2" element={<New2/>} /> 





          
        </Routes>
     <Footer/>
    
  

    </div>
    
    </BrowserRouter>
  );
}

export default App;
