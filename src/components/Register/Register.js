import React from 'react';
import { Link } from 'react-router-dom';



const Register = () => {
    return (
        <div>
            <div><h2>Please Sign up</h2>
                <form>
                    <input type="email" name="email" id="" placeholder="enter your email" /><br /><br />
                    <input type="password" name="" id="" placeholder="enter your password" /><br /><br />
                    <input type="password" name="" id="" placeholder="re-enter your password" /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <p>Alredy have a account?<Link to="/login">Login </Link></p>
                <br />
                <button className="btn-info">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;