import React, { Component } from 'react';
import logoTrello from '../assets/logoTrello.png';
import Footer from '../components/footer';
import { FcGoogle } from 'react-icons/fc';
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import axios from "axios";
import { Redirect } from "react-router-dom";




export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: {
                name:"",
                email:"",
                password:"",
            },
            data: {},
            errors: {},
            tryOut: false,
            validate: false,
            nBlur: false,
            redirect: null,
            pBlur: false
        }
    }

    validateTrue() {
        this.setState({validate: true})
    }
    validateFalse() {
        this.setState({validate: !true})
    }

    validatePassword() {
        const errors = {};
        const { account } = this.state;

        // Name Errors
        if (account.name.trim() === '') {
            errors.name = "name is required";
        }

        // Password Errors
        if (account.password.trim() === '') {
            errors.password = "password is required";
        } else if (account.password.length < 6) {
            errors.password = "Password must be at lest 6 characters"
        }

        return Object.keys(errors).length === 0 ? '' : errors
    }

    handleOnClick = e => {
        e.preventDefault();
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.account.email)) {
            this.validateTrue();
        }
        else {
            this.setState({ tryOut: true })
            this.validateFalse();
        }
    }

    handleChange = e => {
        const account = {
            ...this.state.account
        };
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({
            account
        });
    }
    
    handleNBlur = () => {
        this.setState({nBlur: true})
    }
    handlePBlur = () => {
        this.setState({pBlur: true})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const errors = this.validatePassword();
        this.setState({ errors: errors || {} });
        if (errors) return;
        else {
            this.setState({ tryOut: true })
            const { name, email, password } = this.state.account;
            try {
                await axios
                    .post('/api/register_user', {
                        name, email, password
                    })
                    .then(res => {
                        this.setState({ data: res.data });
                        alert('check your email to verify your account')
                        this.setState({ redirect: `/login/:${this.state.data.id}` });
                    })
            } catch (ex) {
                console.error(ex)
            }
        }
    }


    render() {
        // const error = this.state.errors;
        const error = this.validatePassword();
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="container">
                <ul className="nav justify-content-center">
                    <a className="navbar-brand my-5" href="/">
                        <img className="navbar--logo" src={ logoTrello } style={{ width: "11rem", height: "3.4rem" }}  alt="Trello_logo.png format" />
                    </a>       
                </ul>
                <div className="card shadow col-md-4 mb-5 mx-auto">
                    <h5 className="text-center my-3">Sign up for your account</h5>
                    <div className="card-body">
                        <div className="container">
                            <form onSubmit={this.handleSubmit} autoComplete="off">                                
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" onChange={this.handleChange} value={this.state.account.email}
                                        placeholder="Enter email" required />
                                    { this.state.validate && <span className="d-block alert alert-danger">Invalid email</span> }
                                    {
                                        !this.state.tryOut &&
                                        <small id="emailHelp" className="form-text text-muted">
                                            By signing up, you confirm that you 've read and accepted our <a href="/">Terms of Service</a> and <a href="/"> Privacy Policy.</a>
                                        </small>
                                    }
                                </div>
                                { this.state.tryOut &&
                                    <div>
                                        <div className="form-group">
                                        <input type="text" className="form-control" name="name" onChange={this.handleChange} value={this.state.name}
                                            placeholder="Name" onBlur={this.handleNBlur} />
                                        { this.state.nBlur && <span className="d-block alert alert-danger">{error.name}</span> }
                                        </div>
                                        <div className="form-group">
                                        <input type="password" className="form-control" name="password" onChange={this.handleChange} value={this.state.password}
                                            placeholder="Password" onBlur={this.handlePBlur} />
                                        { this.state.pBlur && <span className="d-block alert alert-danger">{error.password}</span> }
                                            <small id="emailHelp" className="form-text text-muted pt-4">
                                                    By signing up, you confirm that you 've read and accepted our <a href="/">Terms of Service</a> and <a href="/"> Privacy Policy.</a>
                                            </small>
                                        </div>
                                    </div>
                                }
                                <div className="text-center my-4">
                                    { !this.state.tryOut ?
                                        <button onClick={ this.handleOnClick } className="btn btn-primary w-100" >
                                            Continue
                                        </button> :
                                        <button type="submit" className="btn btn-primary w-100" >
                                            Sign up
                                        </button>                                            
                                    }
                                </div>
                            </form>
                            <h6 className="text-center my-4">OR</h6>
                            <div className="py-4">
                                <a href="/" className="card bor shadow-sm py-2 text-center" ><FcGoogle className="" />Continue with Google </a>
                                <a href="/" className="card bor shadow-sm py-2 text-center my-4"><TiVendorMicrosoft className="" />Continue with Microsoft</a>
                                <a href="/" className="card bor shadow-sm py-2 text-center"><FaApple className="text-secondary" />Continue with Apple</a>
                            </div>
                            <hr />
                            <a className="py-3 d-flex justify-content-center" href="/">Already have an account? Log In</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
