import React, { Component } from 'react';
import logoTrello from '../assets/logoTrello.png';
import Footer from '../components/footer';



export default class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav justify-content-center">
                    <a href="/" className="navbar-brand my-5">
                        <img className="navbar--logo" src={ logoTrello } style={{ width: "11rem", height: "3.4rem" }}  alt="Trello_logo.png format" />
                    </a>       
                </ul>                
                <div className="card shadow col-md-4 mb-5 mx-auto">
                    <h5 className="text-center my-3">Log in to Trello</h5>
                    <div className="card-body">
                        <div className="container">
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="InputEmail" placeholder="Enter email" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <input type="name" className="form-control" id="InputName" placeholder="Enter full name" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="InputPassword" placeholder="Create password" />
                                    <small id="emailHelp" className="form-text text-muted pt-4">
                                        By signing up, you confirm that you 've read and accepted our <a href="/">Terms of Service</a> and <a href="/"> Privacy Policy.</a>
                                    </small>
                                </div>
                                <div className="text-center my-4">
                                    <button type="submit" className="btn btn-primary w-100">Sign up</button>
                                </div>
                            </form>
                            <hr />
                            <span className="pt-2 d-flex justify-content-center">
                                <p className=""><a href="/">Already have an account ?</a><a className="pl-2" href="/">Log In</a></p>                  
                            </span>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
