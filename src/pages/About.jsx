import PageTransition from "../components/PageTransition";
import "./About.css";

function About() {
  return (
    <PageTransition>
      <section className="about-page">
        <h1 className="about-title">About CURRENTS</h1>

        <div className="about-content">
          <p>
            <strong>CURRENTS</strong> is the annual technical symposium organized
            by the Department of Electrical and Electronics Engineering at the
            National Institute of Technology, Tiruchirappalli (NIT Trichy),
            popularly known as the Trical Department.
          </p>

          <p>
            Established in the 1990s, CURRENTS has grown into a nationally
            recognized technical fest, attracting participants from diverse
            engineering disciplines across the country.
          </p>

          <p>
            The symposium features expert lectures, innovative technical events,
            advanced workshops, and competitions designed to inspire and
            challenge students.
          </p>

          <p>
            CURRENTS is typically conducted during the second week of February,
            providing an ideal platform for students to learn, compete, and
            collaborate.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}

export default About;
