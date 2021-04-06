import './App.css';
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import React from "react";
import {Menu} from "./components/Menu";
import {PostList} from "./components/PostList";
import {Post} from "./components/Post";
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
    <div className="container">
        <BrowserRouter>
            <Menu/>
            <Route exact path="/" render={()=><PostList/>}/>
            <Route path="/about" render={()=><About/>}/>
            <Route path="/contact-us" render={()=><ContactUs/>}/>
            <Route path="/post" render={()=><Post/>}/>
        </BrowserRouter>
    </div>
  );
}
export default App;
