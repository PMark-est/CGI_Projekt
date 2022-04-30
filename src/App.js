import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import LatLngInputs from "./features/inputFields/LatLngInputFields";
import MyCalendar from "./components/MyCalendar";
import CaluclateNight from "./features/getLocationData/CalculateNight";
import AddMarkerOnClick from "./features/getClickCoordinates/MarkerCoordinates";
// Põhirakendus, kuhu kõik komponendid lisatakse fragmendi sisse
function App() {
  return (
    <>
      <div className="title">
        <h1>Night time calculator</h1>
        <p>
          Minor bug - You have to click twice on the calendar for the date to be
          selected
        </p>
        <CaluclateNight />
      </div>
      <LatLngInputs />
      <MyCalendar />
      <MapContainer center={[0, 0]} zoom={3} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AddMarkerOnClick />
      </MapContainer>
    </>
  );
}

export default App;
