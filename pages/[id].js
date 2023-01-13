import Card from "../components/Card/index.js";
import { useRouter } from "next/router";
import Image from "next/image";

export default function PlacesDetailsPage() {
  return (
    <>
      <h2>{place.name}</h2>
      <image src={place.image} alt={place.name} width={300} height={100} />
      <p>location</p>
      <p>description</p>
      <button>Back</button>
      <button>Google maps</button>
    </>
  );
}
