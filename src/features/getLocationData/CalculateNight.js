import { useSelector } from "react-redux";
import SunCalc from "suncalc";
import "./CalculateNight.css";

// Leiab päikeseloojangu ja järgmise päikesetõusu ajad ning arvutab öö pikkuse

export default function CaluclateNight() {
  const data = useSelector((state) => state.data);
  const coordinates = useSelector((state) => state.latlng);
  if (coordinates.lat === "" || coordinates.lng === "") {
    return;
  }
  if (data.sunRise === "" || data.sunSet === "" || data.date === "") {
    return;
  }
  const dayInMilliseconds = 86400000;
  const sunrise = SunCalc.getTimes(
    new Date(data.date + dayInMilliseconds),
    coordinates.lat,
    coordinates.lng
  ).sunrise;

  const sunset = SunCalc.getTimes(
    new Date(data.date),
    coordinates.lat,
    coordinates.lng
  ).sunset;

  var nightHours = 24 - sunset.getHours() + sunrise.getHours();
  if (sunrise.getHours() > sunset.getHours()) {
    nightHours = sunrise.getHours() - sunset.getHours();
  }
  var nightMinutes = 0;
  if (sunrise.getMinutes() < sunset.getMinutes()) {
    nightMinutes = 60 - (sunset.getMinutes() - sunrise.getMinutes());
    nightHours -= 1;
  } else if (sunrise.getMinutes() > sunset.getMinutes()) {
    nightMinutes = sunrise.getMinutes() - sunset.getMinutes();
  }
  return (
    <p className="pCalculateNight">
      The length of the night is {nightHours} hours and {nightMinutes} minutes
      with an error of 10 minutes
    </p>
  );
}
