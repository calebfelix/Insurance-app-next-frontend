
"use client"
import React, { useState } from "react";

const ContactUsForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const handleContactSubmit = () => {
        // Add your logic for handling form submission here
        console.log("Form submitted:", { name, email, mobileNumber });
    };

    return (
        <div className="mx-auto w-[40%]">
            <div className="flex justify-center mt-10">
                <div className="my-form-container">
                    <form className="my-main-form" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                            Contact Us
                        </h5>
                        <div>
                            <label className="my-form-label">Name</label>
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                className="my-form-input"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="my-form-label">Email</label>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="my-form-input"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="my-form-label">Mobile Number</label>
                            <input
                                type="tel"
                                onChange={(e) => setMobileNumber(e.target.value)}
                                className="my-form-input"
                                placeholder="Your Mobile Number"
                            />
                        </div>
                        <button
                            type="button"
                            className="my-form-submit-btn"
                            onClick={handleContactSubmit}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;
