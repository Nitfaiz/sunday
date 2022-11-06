import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Login extends Component {

    constructor(props) {
        document.title = `Login`

        super(props);
        this.state = {
            email: "",
            password: "",
            login: ""
        };
        this.handleusernameC = this.handleusernameC.bind(this);
        this.handleusernameB = this.handleusernameB.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

    handleusernameC(e) {
        const em = e.target.value;
        this.setState({
            email: e.target.value,
        });
        console.log(this.state.email);
    }

    handleusernameB(e) {
        this.setState({
            password: e.target.value,
        });
        console.log(this.state.password);
    }

    signin = async (formData) => {
        await fetch(
            `http://localhost:3000/users?email=${formData.email}&password=${formData.password}`,
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((res) => {
                if (res.length) {
                    this.setState({
                        login: "success",
                    })
                    localStorage.setItem("isLogin", true);
                    alert("Loged in Succesfully")


                } else {
                    alert("invalid user credentials.");
                }
            })
            .catch((e) => {
                alert("invalid user credentials.");
            });
    };

    handlesubmit(e) {
        // e.preventDefault();
        const { email, password } = this.state;
        const formData = {
            email,
            password,
        };
        this.signin(formData);

    }

    render() {
        return (
            <div className="firstpage">
                {!this.state.login ? <div className="form-container">
                    <h1 className="heading">Login</h1>
                    <form autocomplete="off" className="registor-form" onSubmit={this.handlesubmit}>
                        <Row>
                            <Row>
                                <Row className="w-100 p-3" >

                                    <Col className='col-12 '>
                                        <TextField autocomplete="off" className="akash" id="outlined-basic" variant="outlined" label="Enter Your Email"
                                            input type="text" value={this.state.email} onChange={this.handleusernameC} required />
                                    </Col>

                                    <Col className='col-12'>

                                        < TextField autocomplete="off" className="akash" id="outlined-basic" variant="outlined" label="Enter Your Password" input type="password" value={this.state.password} onChange={this.handleusernameB} required />
                                    </Col>
                                </Row>
                            </Row>
                        </Row>

                        <br />

                        <button className="loginbutton">Sign in</button>
                        <div className="sign-up">
                            <span className="first">
                                Not a member? <Link to="/signup" className="sign_up_link">Sign up</Link>
                            </span>
                        </div>
                    </form>
                </div> : <Navigate to="/sidebar" />}


            </div>
        );
    }
}

export default Login;
