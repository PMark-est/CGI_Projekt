import { useMapEvents, Marker, Popup } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { updateCoords } from "../inputFields/latlngSlice";

// Lisab kaardile klõpsates märgi, mis näitab kuhu vajutasid
export default function AddMarkerOnClick() {
  const coordinates = useSelector((state) => state.latlng);
  const dispatch = useDispatch();
  const map = useMapEvents({
    click(e) {
      map.flyTo(e.latlng, map.getZoom());
      dispatch(
        updateCoords({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        })
      );
    },
  });

  if (coordinates.lng !== "" && coordinates.lat !== "") {
    return (
      <Marker position={{ lat: coordinates.lat, lng: coordinates.lng }}>
        <Popup>
          You are here {coordinates.lat} {coordinates.lng}
        </Popup>
      </Marker>
    );
  }
}
