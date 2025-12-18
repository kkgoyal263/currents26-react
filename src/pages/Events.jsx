import PageTransition from "../components/PageTransition";
import { useState } from "react";
import "./Events.css";

const events = [
  {
    title: "Circuitrix",
    desc: "A circuit design and analysis challenge testing accuracy, speed, and innovative thinking.",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
  },
  {
    title: "RoboRush",
    desc: "A robotics competition focused on robot design, control systems, and obstacle navigation.",
    image: "https://th.bing.com/th/id/OIP.eo2vdrLI2QobqkufxAUTyQHaEK?w=310&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.7&pid=1.7&rm=3&ucfimg=1"
  },
  {
    title: "CodeStorm",
    desc: "An algorithmic coding contest solving real-world inspired programming problems.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "ElectroQuiz",
    desc: "A fast-paced technical quiz covering EEE fundamentals and current technology trends.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e"
  },
  {
    title: "Signal Hunt",
    desc: "A problem-solving event based on signal processing and communication systems.",
    image: "https://th.bing.com/th/id/OIP.dgiciyoUL16uTPQfD0OWFQHaEK?w=272&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.7&pid=1.7&rm=3&ucfimg=1"
  },
  {
    title: "Tech Pitch",
    desc: "Participants present innovative ideas evaluated on feasibility, innovation, and impact.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984"
  }
];

function Events() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <PageTransition>
    <section className="events-page">
      <h1 className="events-title">Technical Events</h1>

      <div className="events-grid">
        {events.map((event, index) => (
          <div
            key={index}
            className={`event-card ${activeIndex === index ? "active" : ""}`}
            style={{
              backgroundImage: `url(${event.image})`
            }}
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          >
            <div className="event-overlay"></div>

            <h3>{event.title}</h3>

            <div className="event-desc">
              {event.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
    </PageTransition>
  );
}

export default Events;
