import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [selectedPlan, setSelectedPlan] = useState("");

  const choosePlan = (plan) => {
    setSelectedPlan(plan);

    document.getElementById("booking").scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Booking Successful!\n\nName: ${e.target.name.value}\nPlan: ${selectedPlan}`
    );

    e.target.reset();
    setSelectedPlan("");
  };

  return (
    <div>
      <Navbar />

      {/* HOME */}
      <section className="hero">
        <h1>Welcome to FITZONE</h1>

        <p>
          Your fitness journey starts here. Choose the perfect membership
          plan and become a better version of yourself.
        </p>

        <button onClick={() => choosePlan("Basic")}>
          Join Now
        </button>
      </section>


      {/* MEMBERSHIP PLANS */}
      <section className="plans" id="plans">
        <h2>Membership Plans</h2>

        <div className="plan-container">

          <div className="plan-card">
            <h3>Basic</h3>
            <h4>₹999</h4>
            <p>1 Month</p>
            <p>Gym Access</p>
            <p>Locker Facility</p>

            <button onClick={() => choosePlan("Basic")}>
              Choose Plan
            </button>
          </div>

          <div className="plan-card">
            <h3>Standard</h3>
            <h4>₹2,499</h4>
            <p>3 Months</p>
            <p>Gym Access</p>
            <p>Locker Facility</p>

            <button onClick={() => choosePlan("Standard")}>
              Choose Plan
            </button>
          </div>

          <div className="plan-card">
            <h3>Premium</h3>
            <h4>₹4,499</h4>
            <p>6 Months</p>
            <p>Personal Trainer</p>
            <p>Diet Guidance</p>

            <button onClick={() => choosePlan("Premium")}>
              Choose Plan
            </button>
          </div>

          <div className="plan-card">
            <h3>Annual</h3>
            <h4>₹7,999</h4>
            <p>12 Months</p>
            <p>Personal Trainer</p>
            <p>Diet Guidance</p>

            <button onClick={() => choosePlan("Annual")}>
              Choose Plan
            </button>
          </div>

        </div>
      </section>


      {/* BOOKING */}
      <section className="booking" id="booking">
        <h2>Book Your Membership</h2>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label>Selected Plan</label>
          <input
            type="text"
            value={selectedPlan}
            placeholder="Choose a plan above"
            readOnly
            required
          />

          <button type="submit">
            Confirm Booking
          </button>

        </form>
      </section>


      {/* TRAINERS */}
      <section className="trainers" id="trainers">
        <h2>Our Trainers</h2>

        <div className="trainer-container">

          <div className="trainer-card">
            <div className="trainer-icon">💪</div>
            <h3>Arjun Kumar</h3>
            <p>Strength & Fitness Coach</p>
            <span>5+ Years Experience</span>
          </div>

          <div className="trainer-card">
            <div className="trainer-icon">🏋️</div>
            <h3>Priya Sharma</h3>
            <p>Fitness & Yoga Trainer</p>
            <span>4+ Years Experience</span>
          </div>

          <div className="trainer-card">
            <div className="trainer-icon">🥊</div>
            <h3>Rahul Verma</h3>
            <p>Cardio & Boxing Coach</p>
            <span>6+ Years Experience</span>
          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>

        <div className="contact-container">

          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>MG Road, Bengaluru, Karnataka</p>
          </div>

          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-card">
            <h3>✉️ Email</h3>
            <p>fitzone@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>🕐 Opening Hours</h3>
            <p>6:00 AM - 10:00 PM</p>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer>
        <h2>FITZONE</h2>

        <p>
          Build your strength. Build your confidence. Build yourself.
        </p>

        <p className="copyright">
          © 2026 FITZONE Gym Membership. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;