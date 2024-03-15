import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


export default function Stays() {
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="display-2 my-3">Featured Stays</h1>

        <div className="row">
          <div className="card mb-3">
            <div className="row">
              <div className="col-md-4 p-0">
                <img
                  src="https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_1280.jpg"
                  className="img-fluid rounded"
                  alt="Hotel 1"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Sunset Haven Retreat</h5>
                  <p className="card-text">
                    Escape to the tranquility of Sunset Haven Retreat, where the
                    golden hues of dusk paint the sky in a breathtaking
                    spectacle. Nestled amidst lush tropical gardens overlooking
                    the azure waters of the Caribbean, this luxurious resort
                    offers a haven of serenity and relaxation.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <Link className="btn btn-primary" to="/stays/1">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row">
              <div className="col-md-4 p-0">
                <img
                  src="https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_1280.jpg"
                  className="img-fluid rounded"
                  alt="Hotel 2"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Alpine Bliss Lodge</h5>
                  <p className="card-text">
                    Experience the allure of Alpine Bliss Lodge, a cozy retreat
                    nestled in the heart of the majestic mountains. Surrounded
                    by pristine snow-capped peaks and verdant pine forests, this
                    charming lodge offers an idyllic getaway for nature lovers
                    and adventure seekers alike.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 10 mins ago
                    </small>
                  </p>
                  <Link className="btn btn-primary" to="/stays/2">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row">
              <div className="col-md-4 p-0">
                <img
                  src="https://cdn.pixabay.com/photo/2018/01/29/05/14/luxury-3115234_1280.jpg"
                  className="img-fluid rounded"
                  alt="Hotel 2"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Seaside Oasis Resort & Spa</h5>
                  <p className="card-text">
                    Indulge in the ultimate beachside escape at Seaside Oasis
                    Resort & Spa, where the rhythm of the waves lulls you into a
                    state of pure bliss. Set along the sun-kissed shores of the
                    Mediterranean, this luxurious resort beckons with its
                    exquisite amenities, world-class cuisine, and rejuvenating
                    spa treatments.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 15 mins ago
                    </small>
                  </p>
                  <Link className="btn btn-primary" to="/stays/3">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row">
              <div className="col-md-4 p-0">
                <img
                  src="https://cdn.pixabay.com/photo/2016/05/16/06/17/pool-1395071_960_720.jpg"
                  className="img-fluid rounded"
                  alt="Hotel 2"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Tranquil Waters Resort & Spa</h5>
                  <p className="card-text">
                    Embark on a journey of rejuvenation at Tranquil Waters
                    Resort & Spa, where the gentle melody of cascading
                    waterfalls and the fragrance of exotic blooms welcome you to
                    a world of serenity. Tucked away along the tranquil shores
                    of a pristine lake, this luxurious retreat offers a
                    sanctuary for the mind, body, and soul.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 1 Hour ago
                    </small>
                  </p>
                  <Link className="btn btn-primary" to="/stays/4">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
