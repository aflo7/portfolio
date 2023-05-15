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
        e.target.reset()

        send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            toSend,
            import.meta.env.VITE_USER_ID
        )
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
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    }

    return (
        <div className="contact-form-wrapper">
            <Form className="contact-form" onSubmit={onSubmit}>
                <Form.Label className="contact-title">Contact Me</Form.Label>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: "12pt", fontFamily: 'cyrMedium' }}>
                        Name
                    </Form.Label>
                    <Form.Control
                        name="from_name"
                        placeholder="Name"
                        required
                        style={{ fontSize: "12pt" }}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: "12pt", fontFamily: 'cyrMedium' }}>
                        Email
                    </Form.Label>
                    <Form.Control
                        name="reply_to"
                        placeholder="Email"
                        required
                        style={{ fontSize: "12pt" }}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: "12pt", fontFamily: 'cyrMedium' }}>
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
