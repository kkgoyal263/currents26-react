import { useState } from "react";
import PageTransition from "../components/PageTransition";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    department: "",
    phone: "",
    event: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.college ||
      !formData.phone
    ) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Registration Data:", formData);
    alert("Registration successful! (Demo)");
  };

  return (
    <PageTransition>
      <section className="register-page">
        <h1 className="register-title">Event Registration</h1>

        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="college"
            placeholder="College / Institution *"
            value={formData.college}
            onChange={handleChange}
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
          >
            <option value="">Select Event</option>
            <option>Circuitrix</option>
            <option>RoboRush</option>
            <option>PCB Design Challenge</option>
            <option>Embedded Systems Lab</option>
          </select>

          <button type="submit" className="submit-btn">
            Register Now
          </button>
        </form>
      </section>
    </PageTransition>
  );
}

export default Register;
