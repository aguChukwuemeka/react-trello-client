import React, { Component } from 'react';
import logoTrello from '../assets/logoTrello.png';
import { FcGoogle } from 'react-icons/fc';
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import Footer from '../components/footer';
import axios from "axios";
import { Redirect } from "react-router-dom";


    axios.defaults.withCredentials = true


export default class LogIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            account: {
                email: '',
                password: ''
            },
            idata: "",
            loginStatus: "",
            redirect: null,
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
    
    handleLogIn = async (e) => {
        e.preventDefault();
        const { email, password } = this.state.account;
        // console.log(email)
        try {
            await axios
                .post("/api/login_user", {
                    email: email,
                    password: password
                })
                .then(res => {
                    if (res.data.message)
                        this.setState({ loginStatus: res.data.message })
                    else {
                        // console.log(res.data)
                        this.setState({ loginStatus: res.data[0].email });
                        this.setState({ idata: res.data });
                        // const id = {...this.state.idata};
                        console.log(this.state.idata[0]['id']);
                        const login_user_Id = this.state.idata[0]['id'];
                        this.setState({ redirect: `/home/${login_user_Id}` });
                    }
                }
            );
        } catch (ex) {
            console.error(ex)
        }
    }

    componentDidUpdate() {
        axios.get('/api/login_user',).then(res => {
            if (res.data.loggedIn === true) {
                this.setState({ loginStatus: res.data.user[0].email });
                // this.setState({ id: res.data.id[0].id });
                // console.log(res)
            }
        })
    }

    
    render() {
        // const id = props.route.params
        // const { match: { params } } = this.props;
        // console.log(params.id)
        // const id = props.route.params.id;
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="container">
                <ul className="nav justify-content-center">
                    <a href="/" className="navbar-brand my-5">
                        <img className="navbar--logo" src={ logoTrello } style={{ width: "11rem", height: "3.4rem" }}  alt="Trello_logo.png format" />
                    </a>       
                </ul>
                <div className="card shadow col-md-5 mx-auto mb-5" style={{maxWidth: '26em'}}>
                    <h5 className="text-center my-3">Log in to Trello</h5>
                    <div className="card-body">
                        <div className="container">
                            <form onSubmit={this.handleLogIn}>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" onChange={this.handleChange} value={this.state.account.email}
                                        placeholder="Enter email" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" onChange={this.handleChange} value={this.state.password}
                                        placeholder="Password" required />
                                </div>
                                <div className="text-center my-4">
                                    <button type="submit" className="btn btn-primary w-100">Log in</button>
                                </div>
                            </form>
                            <p className="text-center text-danger">{this.state.loginStatus}</p>
                            <h6 className="text-center mb-4">OR</h6>
                            <div className="py-4">
                                <a href="/"className="card bor shadow-sm py-2 text-center"><FcGoogle className="" />Continue with Google </a>
                                <a href="/" className="card bor shadow-sm py-2 text-center my-4"><TiVendorMicrosoft className="" />Continue with Microsoft</a>
                                <a href="/" className="card bor shadow-sm py-2 text-center"><FaApple className="text-secondary" />Continue with Apple</a>
                            </div>
                            <span className="py-2 d-flex justify-content-center">
                                <a className="" href="/">Log in with SSO</a>                  
                            </span>
                            <hr />
                            <span className="py-3 d-flex justify-content-center">
                                <p className="pt-3"><a href="/">Can't log in?</a> . <a href="/">Sign up for an account</a></p>                  
                            </span>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
