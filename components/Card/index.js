import Image from "next/image";

export default function Card({ place }) {
  return (
    <li>
      <h2>{place.name}</h2>
      <Image src={place.image} alt={place.name} width={300} fill />
      <p>{place.location}</p>
    </li>
  );
}
