import React, {useState} from "react"
import ContactForm from "./ContactForm"

function Contact() {
    return (
        <div style={{position: 'relative'}}>
            <ContactForm />

            <ul className="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Contact
