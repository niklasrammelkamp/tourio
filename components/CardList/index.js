import Card from "../Card";
import useSWR from "swr";
import { StyledLink, StyledList } from "./CardList.styled";

export default function CardList() {
  const { data } = useSWR("/api/places");
  if (!data) {
    return <p>is Loading</p>;
  }
  console.log("data", data);
  return (
    <>
      <StyledList>
        {data.map((place) => {
          return (
            <StyledLink href={`/${place._id}`} key={place._id}>
              <Card place={place} />
            </StyledLink>
          );
        })}
      </StyledList>
    </>
  );
}
