import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const StayDetails = () => {
  const staysId = useParams();

  const stays = [
    {
      id: 1,
      name: "Sunset Haven Retreat",
      type: "Resort",
      location: "Caribbean",
      rating: 4.5,
      description: "Escape to the tranquility of Sunset Haven Retreat...",
      amenities: ["Swimming Pool", "Spa", "Restaurant", "Gym"],
      price: 200,
    },
    {
      id: 2,
      name: "Alpine Bliss Lodge",
      type: "Lodge",
      location: "Mountains",
      rating: 4.2,
      description: "Experience the allure of Alpine Bliss Lodge...",
      amenities: ["Fireplace", "Hiking Trails", "Sauna", "WiFi"],
      price: 150,
    },
    {
      id: 3,
      name: "Seaside Oasis Resort & Spa",
      type: "Resort & Spa",
      location: "Mediterranean",
      rating: 4.7,
      description:
        "Indulge in the ultimate beachside escape at Seaside Oasis Resort & Spa...",
      amenities: [
        "Private Beach",
        "Poolside Bar",
        "Fitness Center",
        "Yoga Classes",
      ],
      price: 300,
    },
    {
      id: 4,
      name: "Tranquil Waters Resort & Spa",
      type: "Resort & Spa",
      location: "Lake",
      rating: 4.8,
      description:
        "Embark on a journey of rejuvenation at Tranquil Waters Resort & Spa...",
      amenities: [
        "Lake View Rooms",
        "Wellness Center",
        "Water Sports",
        "Fine Dining",
      ],
      price: 250,
    },
  ];

  const stayDetails = stays.find((stay) => stay.id == staysId.staysId);

  const AmenityList = stayDetails.amenities.map((amenity)=> (<li>{amenity}</li>));
  console.log(AmenityList)

// const AmenityList = ({data}) => {
//    const list =  data.map((ele) => (<li>{ele}</li>))
//    return list
// }
  
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="display-3 py-3">{stayDetails.name}</h1>
        <p className="fs-6">Type: {stayDetails.type}</p>
        <p className="fs-6">Location: {stayDetails.location}</p>
        <p className="fs-6">Rating: {stayDetails.rating}</p>
        <p className="fs-6">{stayDetails.description}</p>
<hr/>
        <h2>Amenities</h2>
        <ul>{AmenityList}</ul>
        <p className="fs-6">Price: ${stayDetails.price}/Night</p>

      </main>
      <Footer />
    </>
  );
};
export default StayDetails;
