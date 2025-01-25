import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function Booking() {
    const navigate = useNavigate();                         
    const [formData, setFormData] = useState({              
        name: '',   
        email: '',  
        phone: '',
        date: '', 
        time: '',   
        guests: ''  
    });
    const [loading, setLoading] = useState(false); // State for loading message

    const handleChange = (e) => {
        const { id, value } = e.target;         
        setFormData(prevState => ({             
            ...prevState,                       
            [id]: value                         
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setLoading(true); // Show loading message

        const bookingCode = Math.floor(100000 + Math.random() * 900000);
        const dataToSubmit = { ...formData, bookingCode };
    
        try {
            const response = await fetch("https://restaurant-project-jda4.onrender.com/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSubmit),
            });

            const data = await response.json();
    
            if (response.ok) {
                const successMessage = `Booking completed successfully! Your booking code is ${bookingCode}`;
                const utterance = new SpeechSynthesisUtterance(successMessage);
                speechSynthesis.speak(utterance);
                alert(`Booking complete successfully! Your booking code is ${bookingCode}`);
                setTimeout(() => navigate("/"), 100); 
            } else {
                const errorMessage = data.error || "Failed to complete booking. Please try again.";
                const utterance = new SpeechSynthesisUtterance(errorMessage);
                speechSynthesis.speak(utterance);
            }
        } catch (error) {
            console.error("Error details:", error);
            const networkErrorMessage = "There was an error submitting the form. Please try again.";
            const utterance = new SpeechSynthesisUtterance(networkErrorMessage);
            speechSynthesis.speak(utterance);
        } finally {
            setLoading(false); // Hide loading message
        }
    };
    
    return (
        <div className='bookingpage'>
            <div className="booking">
                <form id="booking-box" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h1 className='hq'> *-Reserve Now-*</h1>
                        <label htmlFor="name">Name :</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email :</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone :</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date :</label>
                        <input type="date" className="form-control" id="date" value={formData.date} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time :</label>
                        <input type="time" className="form-control" id="time" value={formData.time} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Number of Guests :</label>
                        <input type="number" className="form-control" id="guests" placeholder="Enter number of guests" value={formData.guests} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primaryb" disabled={loading}>
                        {loading ? "Loading..." : "BOOK"} {/* Change button text based on loading state */}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Booking;
