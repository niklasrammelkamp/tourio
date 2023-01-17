import { StyledForm, StyledHeading, StyledLabel } from "./Form.styled";
import StyledButton from "../StyledButton/Button.styled";

export default function AddForm({ onSubmit, place }) {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <StyledHeading>{place ? "Edit Place" : "Add Place"}</StyledHeading>
        <StyledLabel htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={place ? place.name : ""}
          />
        </StyledLabel>
        <StyledLabel htmlFor="image">
          Image Url:
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={place ? place.image : ""}
          />
        </StyledLabel>
        <StyledLabel htmlFor="mapURL">
          Map Url:
          <input
            type="text"
            id="mapURL"
            name="mapURL"
            defaultValue={place ? place.mapURL : ""}
          />
        </StyledLabel>
        <StyledLabel htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            name="location"
            defaultValue={place ? place.location : ""}
          />
        </StyledLabel>
        <StyledLabel htmlFor="description">
          Description:
          <textarea
            id="description"
            name="description"
            defaultValue={place ? place.description : ""}
          ></textarea>
        </StyledLabel>
        <StyledButton type="submit">{place ? "Edit" : "Add"}</StyledButton>
      </StyledForm>
    </>
  );
}
