import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to send the data
        console.log('Name:', name);``
        console.log('Email:', email);
        console.log('Message:', message);
    };

  
    return (
        <div style={{display:'flex', width:'75%', height:'75%', justifyContent:'center', alignItems:'center'}}>
            
            <div className={`contact-services-expanded ${isExpanded ? 'expanded' : ''}`}>
          
                <div className="contact-content">
                    
                    <form onSubmit={handleSubmit} className="contact-services">
                    <h1 style={{color:'white'}}>Contact Us</h1>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
