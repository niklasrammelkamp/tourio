//import useSWR from "swr";

import { StyledForm, StyledLabel } from "./AddForm.styled";

export default function AddForm() {
  //const products = useSWR("/api/products");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    // try {
    //   const response = await fetch("/api/products", {
    //     method: "POST",
    //     body: JSON.stringify(productData),
    //     headers: { "Content-type": "application/json" },
    //   });
    //   if (response.ok) {
    //     products.mutate();
    //     event.target.reset();
    //   } else {
    //     console.error(`Error: ${response.status}`);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    //<Link href="BACK TO HOMEPAGE"></Link>
    <StyledForm onSubmit={handleSubmit}>
      <h1>Add Place</h1>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="image">
        Image Url:
        <input type="text" id="image" name="image" />
      </StyledLabel>
      <StyledLabel htmlFor="location">
        Location:
        <input type="text" id="location" name="location" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <textarea id="description" name="description"></textarea>
      </StyledLabel>
      <button type="submit">Add</button>
    </StyledForm>
  );
}
