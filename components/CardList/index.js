import Card from "../Card";
import places from "@/public/db";

export default function CardList() {
  console.log(places);
  return (
    <>
      <p>card list</p>
      <ul>
        {places.map((place) => {
          return <Card place={place} key={place.id} />;
        })}
      </ul>
    </>
  );
}
