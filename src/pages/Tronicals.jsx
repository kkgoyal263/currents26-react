import PageTransition from "../components/PageTransition";
import "./Tronicals.css";

const tronicals = [
  {
    title: "PCB Design Challenge",
    desc: "Design and simulate efficient PCB layouts focusing on signal integrity and component placement.",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
  },
  {
    title: "Embedded Systems Lab",
    desc: "Hands-on embedded programming using microcontrollers, sensors, and real-time constraints.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e"
  },
  {
    title: "Power Grid Simulation",
    desc: "Analyze and simulate modern power systems, faults, and load management strategies.",
    image: "https://th.bing.com/th/id/OIP.GkJFRpAUUMyvmubkUHhxkAHaEK?w=207&h=150&c=6&o=7&cb=ucfimg2&dpr=1.7&pid=1.7&rm=3&ucfimg=1"
  },
  {
    title: "Control Systems Arena",
    desc: "Solve real-world control problems using stability analysis and controller design.",
    image: "https://th.bing.com/th/id/OIP.qgMvEU5mgPUZ9nkpWH0FtgHaFS?w=236&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.7&pid=1.7&rm=3&ucfimg=1"
  }
];

function Tronicals() {
  return (
    <PageTransition>
      <section className="tronicals-page">
        <h1 className="tronicals-title">Tronicals</h1>

        <div className="tronicals-grid">
          {tronicals.map((item, index) => (
            <div
              className="tronical-card"
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="tronical-overlay"></div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

export default Tronicals;
