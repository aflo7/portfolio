import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "../styles/ContactForm.css"
import { send } from "emailjs-com"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function ContactForm() {
    const [toSend, setToSend] = useState({
        from_name: "",
        to_name: "Andres Flores",
        message: "",
        reply_to: ""
    })

    const onSubmit = (e) => {
        e.preventDefault()

        send("service_f7dgdb8", "template_e6h49ke", toSend, "QivFmUxQJb5LfkPGJ")
            .then((response) => {
                toast.success("Message sent", {
                    theme: "colored"
                })
            })
            .catch((err) => {
                toast.warn("Message send failure", {
                    theme: "colored"
                })
            })

        e.target.reset()
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    }

    return (
        <div className="contact-form-wrapper">
            <Form className="contact-form" onSubmit={onSubmit}>
                <Form.Label className="contact-title">Contact Me</Form.Label>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: "12pt" }}>
                        Your name
                    </Form.Label>
                    <Form.Control
                        name="from_name"
                        placeholder="Your name"
                        required
                        style={{ fontSize: "12pt" }}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: "12pt" }}>
                        Your email
                    </Form.Label>
                    <Form.Control
                        name="reply_to"
                        placeholder="Your email"
                        required
                        style={{ fontSize: "12pt" }}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: "12pt" }}>
                        Message
                    </Form.Label>
                    <Form.Control
                        name="message"
                        placeholder="Message"
                        required
                        style={{ fontSize: "12pt" }}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    className="send-btn"
                    style={{ fontSize: "12pt" }}
                >
                    Send
                </Button>
            </Form>
            <ToastContainer />
        </div>
    )
}

export default ContactForm
