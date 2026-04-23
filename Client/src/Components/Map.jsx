import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: 28.6139,
  lng: 77.209,
};
const Styles = {
  width: "90%",
  maxWidth: "1000px",
  margin: "50px auto",
  padding: "16px",
  borderRadius: "18px",
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
  border: "1px solid rgba(255,255,255,0.2)",
};
function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div style={Styles}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
          {console.log(center)}
      </GoogleMap>
    </div>
  );
}

export default Map;
