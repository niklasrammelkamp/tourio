import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";
import AddForm from "@/components/Form";
import StyledButton from "@/components/StyledButton/Button.styled";
import StyledImage from "@/components/StyledImage/Image.styled";

export default function PlacesDetailsPage() {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();
  const {
    query: { id },
    push,
  } = router;
  const { data } = useSWR(id ? `/api/places/${id}` : null);

  if (!data) {
    return <div>...is Loading</div>;
  }

  function handleDelete() {
    fetch(`/api/places/${id}`, { method: "DELETE" });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const placeData = Object.fromEntries(formData);

    try {
      const response = await fetch(`/api/places/${id}`, {
        method: "PUT",
        body: JSON.stringify(placeData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        push(`/`);
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      {isEdit ? (
        <>
          <StyledImage
            src={data.image}
            alt={data.name}
            width={300}
            height={200}
          />
          <AddForm onSubmit={handleSubmit} place={data} />
          <StyledButton
            onClick={() => {
              setIsEdit(false);
            }}
          >
            X
          </StyledButton>
        </>
      ) : (
        <>
          <h2>{data.name}</h2>
          <StyledImage
            src={data.image}
            alt={data.name}
            width={300}
            height={200}
          />
          <p>Location: {data.location}</p>
          <p>Description: {data.description}</p>
          <StyledButton
            onClick={() => {
              router.push("/");
            }}
          >
            Back
          </StyledButton>
          <StyledButton
            onClick={() => {
              router.push(data.mapURL);
            }}
          >
            Google maps
          </StyledButton>
          <StyledButton
            onClick={() => {
              handleDelete();
              router.push("/");
            }}
          >
            Delete
          </StyledButton>
          <StyledButton
            type="button"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            Edit
          </StyledButton>
        </>
      )}
    </>
  );
}
