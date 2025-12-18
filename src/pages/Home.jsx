import "./Home.css";
import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";

function Home() {
  return (
    <PageTransition>
      <section className="home">
        <div className="overlay"></div>

        <div className="home-content">
          <h1 className="title">CURRENTS'26</h1>

          <p className="description">
            <strong>CURRENTS</strong> is the annual technical symposium organized
            by the Department of Electrical and Electronics Engineering at the
            National Institute of Technology, Tiruchirappalli (NIT Trichy),
            popularly known as the Trical Department.
          </p>

          <p className="description">
            Conducted during the second week of February, CURRENTS provides an
            ideal platform for students to demonstrate their technical
            expertise, compete with peers, and gain inspiration from industry
            and academic leaders.
          </p>

          <div className="cta-buttons">
            <Link to="/events">
              <button className="btn primary">Explore Events</button>
            </Link>

            <Link to="/register">
              <button className="btn outline">Register Now</button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Home;
