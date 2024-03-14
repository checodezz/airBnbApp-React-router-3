import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <main className="container">
      <h1 className="display-2">Latest Listings</h1>
      <section>
        <img
          src="https://cdn.pixabay.com/photo/2018/04/05/13/08/water-3292794_1280.jpg"
          className="img-fluid rounded my-2"
        />
        <h2>Cozy Loft in the City Center</h2>
        <p>
          Entire loft &#x2022; 2 guests &#x2022; 1 bedroom &#x2022; 1 bed
          &#x2022; 1 bath
        </p>
        <p>
          Enjoy your stay in this stylish loft apartment located in the heart of
          the city, close to restaurants, shops and attractions, it's the
          perfect place for{" "}
        </p>
        <p>$120 per night </p>
      </section>
      <br />
      <section>
        <img
          src="https://media.istockphoto.com/id/951326808/photo/woman-relax-in-swimming-pool.jpg?s=2048x2048&w=is&k=20&c=gNP0lYxe5ExaOBKDgIfxm2uVN-DBdL1At-3CRNABhpI="
          className="img-fluid rounded my-2"
        />
        <h2>Beachfront Villa with Stunning Views</h2>
        <p>
          Entire villa &#x2022; 6 guests &#x2022; 3 bedroom &#x2022; 3 bed
          &#x2022; 2 bath
        </p>
        <p>
          Relax and unwind this beautiful Beachfront villa. wake up to paranomic
          ocean views, take a dip in the private pool, and enjoy seamless
          indoor-outdoor living.
        </p>
        <p>$300 per night </p>
      </section>
    </main>
  );
}
