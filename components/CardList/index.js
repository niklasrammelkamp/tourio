import Card from "../Card";
import useSWR from "swr";
import Link from "next/link";

export default function CardList() {
  const { data } = useSWR("/api/places");
  if (!data) {
    return <p>is Loading</p>;
  }
  console.log("data", data);
  return (
    <>
      <ul>
        {data.map((place) => {
          return (
            <Link href={`/${place._id}`} key={place._id}>
              <Card place={place} />
            </Link>
          );
        })}
      </ul>
    </>
  );
}
