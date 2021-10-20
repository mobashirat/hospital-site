import React from 'react';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className="app-box">
            <h3 className="pt-4">Your Appointment</h3>
            <form className="box">
                <label>Patient Name </label>
                <input className="ms-3" type="text" />
                <br />




                <label>Email Address</label>
                <input className="ms-3" type="text" />
                <br />

                <label>Doctor Name </label>
                <input className="ms-3" type="text" /><br />
                <label>Phone Number </label>
                <input className="ms-3" type="text" />

            </form>
            <br />
            <button className="btn-primary">For Payment</button>
        </div>
    );
};

export default Appointment;