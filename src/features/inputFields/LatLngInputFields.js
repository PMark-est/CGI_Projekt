import { useDispatch, useSelector } from "react-redux";
import { updateCoords } from "./latlngSlice";
import { Marker, Popup } from "react-leaflet";
import { useState } from "react";
import "./LatLngInputFields.css";

// Laseb kaardile käsitsi koordinaadid sisestada, mis loob märgi, mis näitab, kus see koht on kaardil.
const LatLngInputs = () => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const coordinates = useSelector((state) => state.latlng);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateCoords({
        lat: latitude,
        lng: longitude,
      })
    );
  };

  if (coordinates.lng !== "" || coordinates.lat !== "") {
    <Marker position={{ lat: coordinates.lat, lng: coordinates.lng }}>
      <Popup>
        You are here {coordinates.lat}, {coordinates.lng}
      </Popup>
    </Marker>;
  }

  return (
    <div className="latlngDiv">
      <form onSubmit={(e) => handleSubmit(e)} className="latlngForm">
        <input
          placeholder="Latitude"
          type="text"
          className="latlngInput"
          onChange={(e) => setLatitude(parseFloat(e.target.value))}
        />
      </form>
      <form onSubmit={(e) => handleSubmit(e)} className="latlngForm">
        <input
          placeholder="Longitude"
          className="latlngInput"
          type="text"
          onChange={(e) => setLongitude(parseFloat(e.target.value))}
        />
      </form>
      <form onSubmit={(e) => handleSubmit(e)} className="latlngForm">
        <button className="latlngBtn">Get night length</button>
      </form>
    </div>
  );
};

export default LatLngInputs;
