import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            currentuser: localStorage.getItem('Currentuser'),
            usertype: localStorage.getItem('user_type'),
            signUp: true,
            signIn: true,
        }
    }

    logout = () => {
        localStorage.removeItem('Currentuser');
        localStorage.setItem('isLoggedIn', "false")
        this.setState({
            signIn: true,
            signUp: true
        })

    }

    componentDidMount() {
        if (this.state.isLoggedIn === "true") {
            this.setState({
                signIn: false,
                signUp: false
            })

        }
    }
    render() {

        return (



            <div>
                <nav className="navbar navbar-inverse background">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                               <li><a href="https://bigappcompany.com/">Home</a></li>
                                <li><a href="https://bigappcompany.com/">About Us</a></li>
                                {this.state.signIn && <li><Link to="/login"><span className="glyphicon glyphicon-log-in" ></span> Login</Link></li>}
                                {this.state.signUp && <li><Link to="/signup"><span className="glyphicon glyphicon-user" ></span> SignUp</Link></li>}
                                {!this.state.signIn && <li><Link to='/' onClick={this.logout} ><span className="glyphicon glyphicon-log-out" ></span>LogOut</Link></li>}
                            </ul>

                        </div>
                    </div>

                </nav>
                {!this.state.signIn && <h1>Welcome:{this.state.currentuser}</h1>}
            </div>
        )
    }
}
export default Header