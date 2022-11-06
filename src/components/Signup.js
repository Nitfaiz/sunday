import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { createBrowserHistory } from "history";
import TextField from "@material-ui/core/TextField";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Signup extends Component {
    constructor(props) {
        document.title = `Signup`
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            register: ""
        }
        this.handleusernameA = this.handleusernameA.bind(this)
        this.handleusernameB = this.handleusernameB.bind(this)

        this.handleusernameC = this.handleusernameC.bind(this)
        this.handleusernameD = this.handleusernameD.bind(this)
        this.history = createBrowserHistory();
    }
    handleusernameA(e) {
        this.setState({
            firstname: e.target.value,
        })
        console.log(this.state.firstname)
    }
    handleusernameB(e) {
        this.setState({
            lastname: e.target.value
        })
        console.log(this.state.lastname)
    }
    handleusernameC(e) {
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email)
    }
    handleusernameD(e) {
        this.setState({
            password: e.target.value
        })
        console.log(this.state.lastname)
    }
    resetform = () => {
        this.setState({
            email: "",
            password: "",
            firstname: "",
            lastname: ""
        });
    }
    // calling api using fetch method of javascript
    addUser = async (formData) => {
        await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(() => {
            this.resetform()
            this.setState({
                register: "Registered Successfully"
            })
            alert("Registered successfully.")
        }).catch((e) => {
            alert("something went wrong.")
        })
    }
    handlesubmit = (e) => {
        e.preventDefault();
        const { email, password, firstname, lastname } = this.state;
        const formData = {
            email, password, firstname, lastname
        }
        this.addUser(formData);
    }
    render() {
        return (
            <div className='secondpage'>
                {!this.state.register ? <div className='form-container4'>
                    <h1 className='heading'>Registration Form</h1>
                    <form autocomplete="off" className='registor-form' onSubmit={this.handlesubmit}>



                        <Row className='lemon'>
                            <Row>
                                <Row className="w-100 p-3 " >
                                    <Col className='col-12 d-flex justify-content-center' style={{ marginLeft: "23px" }}>

                                        <TextField className="akashbhai" id="outlined-basic" variant="outlined" label="FirstName"
                                            input type="text" value={this.state.firstname} onChange={this.handleusernameA} required />
                                    </Col>

                                    <Col className='col-12 d-flex justify-content-center ' style={{ marginLeft: "23px" }} >

                                        < TextField className="akashbhai" id="outlined-basic" variant="outlined" label="LastName" input type="text" value={this.state.lastname} onChange={this.handleusernameB} required />
                                    </Col>

                                    <Col className='col-12 d-flex justify-content-center ' style={{ marginLeft: "23px" }} >

                                        <TextField className="akashbhai" id="outlined-basic" variant="outlined" label="Enter Your Email"
                                            input type="text" value={this.state.email} onChange={this.handleusernameC} required />
                                    </Col>

                                    <Col className='col-12 d-flex justify-content-center ' style={{ marginLeft: "23px" }} >

                                        < TextField className="akashbhai" id="outlined-basic" variant="outlined" label="Enter Your Password" input type="text" value={this.state.password} onChange={this.handleusernameD} required />
                                    </Col>


                                </Row>
                            </Row>
                        </Row>

                        <br></br>
                        <br></br>

                        <button className='signupbutton'>Submit</button>
                        <div className='sign-up'>
                            <Link to="/login" className='sign_up_link'>Login</Link>
                        </div>
                    </form>

                </div > :
                    <Navigate to="/login" />
                }
            </div>
        )
    }
}

export default Signup;