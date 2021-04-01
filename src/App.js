
import './App.css';
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Component} from "react";

function Menu (){
    return(
        <nav className="nav">
            <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
            <NavLink className="nav-link" to="/about">О нас</NavLink>
            <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
        </nav>
    )
}

function Homepage (){
    return (
        <div className="container my-5">
            <h3>Главная страница</h3>
        </div>
    )
}

function About (){
    return (
        <div className="container my-5">
        <h3>О нас</h3>
        </div>
    )
}

function ContactUs (){
    return (
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" className="form-control"/></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    )
}

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Menu/>
            <Route exact path="/"render={()=><Homepage/>}/>
            <Route path="/about" render={()=><About/>}/>
            <Route exact path="/contact-us" render={()=><ContactUs/>}/>
        </BrowserRouter>

    </div>
  );
}

export default App;
