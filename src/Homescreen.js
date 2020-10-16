import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import logo from './Images/weatherhub.png';
import "bootstrap/dist/css/bootstrap.min.css";





function Homescreen({ setUserLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    function handleEmailInput(event) {
        setEmail(event.target.value)
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value);

    }

    function handleLogin(event) {
        event.preventDefault();

    }

    if (email === 'user@autoinfo.com' && password === '@123456') {
        setUserLoggedIn(true);
    }

    return (
        <div className="homepage">
            <div className="logo">
                <img className="mainlogo" src={logo} alt="Weatherhub's Logo" />
                <div>
                    <div className="location">What's the weather for today?</div>
                    <button className="btn" onClick={handleShow}>
                        Let's find out
          </button>
                    <Modal className="bg-modal" show={show} onHide={handleClose}>
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                            <form>
                                <div>
                                    <div className="form-group2">
                                        <svg
                                            height="5ot"
                                            viewBox="0 -11 512 512"
                                            width="50pt"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="m288 378.667969c0-28.800781 17.644531-53.527344 42.667969-64v-5.335938c0-12.96875 3.132812-25.128906 8.339843-36.160156-16.128906-10.816406-35.5-17.171875-56.339843-17.171875h-181.335938c-55.871093 0-101.332031 45.460938-101.332031 101.332031v74.667969c0 8.832031 7.167969 16 16 16h272zm0 0"
                                                fill="#607d8b"
                                            />
                                            <path
                                                d="m298.667969 106.667969c0 58.910156-47.757813 106.664062-106.667969 106.664062s-106.667969-47.753906-106.667969-106.664062c0-58.910157 47.757813-106.667969 106.667969-106.667969s106.667969 47.757812 106.667969 106.667969zm0 0"
                                                fill="#607d8b"
                                            />
                                            <path
                                                d="m474.667969 341.332031h-117.335938c-20.585937 0-37.332031 16.746094-37.332031 37.335938v74.664062c0 20.589844 16.746094 37.335938 37.332031 37.335938h117.335938c20.585937 0 37.332031-16.746094 37.332031-37.335938v-74.664062c0-20.589844-16.746094-37.335938-37.332031-37.335938zm0 0"
                                                fill="#ffc107"
                                            />
                                            <path
                                                d="m416 256c-29.417969 0-53.332031 23.9375-53.332031 53.332031v32h32v-32c0-11.753906 9.554687-21.332031 21.332031-21.332031s21.332031 9.578125 21.332031 21.332031v32h32v-32c0-29.394531-23.914062-53.332031-53.332031-53.332031zm0 0"
                                                fill="#607d8b"
                                            />
                                        </svg>
                                    </div>
                                    <br></br>
                                    <div className="form-group2">
                                        <input
                                            className="search-bar"
                                            placeholder="E-Mail"
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={handleEmailInput}
                                        />
                                    </div>
                                    <br></br>
                                    <div className="form-group2">
                                        <input
                                            className="search-bar"
                                            placeholder="Password"
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={password}
                                            onChange={handlePasswordInput}
                                        />
                                    </div>
                                    <br></br>
                                    <div className="form-group1">
                                        <button
                                            className="btn btn-primary shelf-cta"
                                            onClick={handleLogin}
                                        >
                                            <span>Sign In</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer></Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Homescreen />, rootElement);
export default Homescreen;
