// import React from 'react';
// import './Contact.css';

// export const Contact = () => {

//     const handleFormSubmit = (formData) => {
//         console.log(formData.entries());
//         const formInputData= object.formEntries(formData.entries());
//         console.log(formInputData);
//     }

//     return (
//         <>
//         <div className='contact-header'>
//             <h1>Contact Us</h1>
//         </div>
//         <div className="contact-form">
//             <form action={handleFormSubmit} >
//                 <input type="text" required autoComplete="false" placeholder="Your Name" name="username"  />
//                 <input type="email" placeholder="Your Email" required autoComplete="false" name="email"/>
//                 <textarea placeholder="Your Message" required autoComplete="false" name="message" ></textarea>
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//         </>
//     )
// };



import React from 'react';
import './Contact.css';

export const Contact = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        const formData = new FormData(e.target);
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }

    return (
        <>
            <div className='contact-header'>
                <h1>Contact Us</h1>
            </div>
            <div className="contact-form">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" required autoComplete="off" placeholder="Your Name" name="username" />
                    <input type="email" required autoComplete="off" placeholder="Your Email" name="email" />
                    <textarea required autoComplete="off" placeholder="Your Message" name="message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    );
};