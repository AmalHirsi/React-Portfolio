import React, { useState } from 'react';

function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }










    return (
        <div className="contact" id="contact">
            <div>
           </div>
            <div>
                <h2>CONTACT ME</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>

        </div>
     );
    }
    
    export default Contact;