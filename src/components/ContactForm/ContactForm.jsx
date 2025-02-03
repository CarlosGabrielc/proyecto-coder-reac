// service_8q4f39f
// 412Gmail_API: Request had insufficient authentication scopes.


import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import "./contactForm.css"
import { Link } from "react-router-dom"

const ContactForm = () => {
  const form = useRef()
  const [status, setStatus] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.send("service_ydk5cwt", "template_2oxbbkr", form.current, "pihorD3PB80pihmA3").then(
      (result) => {
        console.log(result.text)
        setStatus("¡Mensaje enviado con éxito!")
        form.current.reset()
      },
      (error) => {
        console.log(error.text)
        setStatus("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.")
      },
    )
  }

  return (
    <>
   
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input type="text" name="name" id="name" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" name="email" id="email" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Mensaje
          </label>
          <textarea name="message" id="message" required className="form-input form-textarea"></textarea>
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
    <h1>
    holaa
  </h1>
  </>
  )
  
}

export default ContactForm

