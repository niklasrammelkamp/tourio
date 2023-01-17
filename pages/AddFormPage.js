import AddForm from "../components/Form";
import { useRouter } from "next/router";
import StyledButton from "@/components/StyledButton/Button.styled";

export default function AddFormPage() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const placesData = Object.fromEntries(formData);
    console.log(placesData);

    try {
      const response = await fetch("/api/places", {
        method: "POST",
        body: JSON.stringify(placesData),
        headers: { "Content-type": "application/json" },
      });
      if (response.ok) {
        event.target.reset();
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
    router.push("/");
  }

  return (
    <>
      <StyledButton
        onClick={() => {
          router.push("/");
        }}
      >
        Go Back
      </StyledButton>
      <AddForm onSubmit={handleSubmit} />
    </>
  );
}
