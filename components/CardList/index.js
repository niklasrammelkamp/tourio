import Card from "../Card";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function CardList() {
  const { data } = useSWR("/api/places", fetcher);
  if (!data) {
    return <p>is Loading</p>;
  }
  console.log("data", data);
  return (
    <>
      <p>card list</p>
      <ul>
        {data.map((place) => {
          return <Card place={place} key={data.id} />;
        })}
      </ul>
    </>
  );
}
