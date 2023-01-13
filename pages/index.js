import CardList from "@/components/CardList";
import useSWR from "swr";

export default function Home() {
  const { data } = useSWR("/api/places");
  console.log("data", data);
  return <CardList />;
}
