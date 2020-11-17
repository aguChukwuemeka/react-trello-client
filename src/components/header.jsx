import React from 'react';
import Hero from '../assets/hero-a.svg';
// import Hero from '../assets/hero-trello.png';


export default function Header() {
    return (
        <div className="d-flex align-items-center header" style={{background: '#0079BF', minHeight: '90vh'}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 text-white align-self-center font-size-lg" >
                        <h1 className="hero-text h1">Trello helps teams work more collaboratively and get more done.</h1>
                        <p className="hero-text p">Trello’s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.</p>
                    </div>        
                    <div className="col-sm-12 col-md-6" >
                        <img src={Hero} alt='hero' style={{width: '100%'}} />
                    </div>
                </div>
                <div className="row">
                    <div className="container mt-4">
                        <form className="form-group">
                            <input className="form-control-lg mr-sm-2" type="email" placeholder="Email" />
                            <button className="btn btn-lg btn-success my-2 my-sm-0" type="submit">Sign Up - It's Free!</button>
                        </form>                    
                    </div>
                </div>
            </div>
        </div>
    )
}
