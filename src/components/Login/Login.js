import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div>
            <div><h2>Please Login</h2>
                <form>
                    <input type="email" name="email" id="" placeholder="enter your email" /><br /><br />
                    <input type="password" name="" id="" placeholder="enter your password" /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <p>new user?<Link to="/register">Create Account</Link></p>
                <br />
                <button onClick={signInUsingGoogle} className="btn-info">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;