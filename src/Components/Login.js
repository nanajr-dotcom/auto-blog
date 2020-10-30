import React, { useState } from 'react';
import Newpostform from '../Pages/NewPost';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [userLoggedIn, setUserLoggedIn] = useState(false);

    function handleEmailInput(event) {
        setEmail(event.target.value)
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value);

    }

    function handleLogin(event) {
        event.preventDefault();

        if (email === 'admin@blog.com' && password === '@123456') {
            setUserLoggedIn(true);
        }


    }

    return (
      
        <section className="container">
           <div className="row">
                <form className="form-signin" >

                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email"    
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleEmailInput}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                         type="password" 
                         className="form-control" 
                         placeholder="Enter password" 
                         name="password"
                         id="password"  
                         value={password}
                         onChange={handlePasswordInput}
                         />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button 
                    type="submit" 
                    className="btn btn-lg btn-primary btn-block __web-inspector-hide-shortcut__"
                    onClick={handleLogin}
                    >Sign in</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            
                    {userLoggedIn && <Newpostform setUserLoggedIn={setUserLoggedIn} />}
                
           </div>
            
        </section>
    )
}

export default Login;
