import PageTransition from "../components/PageTransition";
import "./Accommodation.css";

function Accommodation() {
  return (
    <PageTransition>
      <section className="accommodation-page">
        <h1 className="accommodation-title">Accommodation</h1>

        <div className="accommodation-box">
          <p>
            Accommodation will be provided to outstation participants on prior
            request, subject to availability.
          </p>

          <ul>
            <li>Separate hostel facilities for boys and girls</li>
            <li>Basic amenities provided</li>
            <li>Valid college ID is mandatory</li>
            <li>Accommodation is available only for registered participants</li>
            <li>Allotment details will be communicated after registration</li>
          </ul>

          <p className="note">
            For further queries, please contact the accommodation coordinators
            listed in the registration portal.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}

export default Accommodation;
