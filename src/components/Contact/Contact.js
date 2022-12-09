import React, { useState } from 'react';

function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }










    return (
        <div>
            <div>
           </div>
            <div className="contact" id="contact" >
                <h4>CONTACT ME</h4>
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