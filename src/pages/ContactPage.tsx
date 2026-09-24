import { useState } from "react";
import "./ContactPage.css";

export function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const newErrors: string[] = [];

  if (fullName.trim().length < 3) {
    newErrors.push("Full name must be at least 3 characters.");
  }

  if (subject.trim().length < 3) {
    newErrors.push("Subject must be at least 3 characters.");
  }

  if (!email.includes("@")) {
    newErrors.push("Please enter a valid email address.");
  }

  if (message.trim().length < 10) {
    newErrors.push("Message must be at least 10 characters.");
  }

  setErrors(newErrors);
  if (newErrors.length === 0) {
  setSuccess(true);

  setFullName("");
  setSubject("");
  setEmail("");
  setMessage("");
} else {
  setSuccess(false);
}
}

  return (
    <main className="contact-page">
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group"> 
          <label htmlFor="fullName">Full Name</label>

          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="subject">Subject</label>

          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
      </div>

        {errors.length > 0 && (
        <div className="form-errors">
        {errors.map((error) => (
       <p key={error}>{error}</p>
       ))}
       {success && (
  <p className="form-success">Thank you! Your message has been sent.</p>
)}
      </div>
      
    )}
    
        <button className="submit-button" type="submit">Send Message</button>
      </form>
    </main>
  );
}