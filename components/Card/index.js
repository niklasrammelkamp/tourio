import { StyledListItem, StyledListItemHeading } from "./Card.styled";
import StyledImage from "../StyledImage/Image.styled";

export default function Card({ place }) {
  return (
    <StyledListItem>
      <StyledListItemHeading>{place.name}</StyledListItemHeading>
      <StyledImage
        src={place.image}
        alt={place.name}
        width={300}
        height={300}
      />
      <p>{place.location}</p>
    </StyledListItem>
  );
}
