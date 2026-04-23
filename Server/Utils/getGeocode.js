import dotenv from "dotenv/config";
export default async function getGeocode(address) {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (data.status == "REQUEST_DENIED") {
      console.error("Geocode error:", data.status);
      return null;
    }

    const location = data.results[0].geometry.location;

    return {
      lng: location.lng,
      lat: location.lat,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}
