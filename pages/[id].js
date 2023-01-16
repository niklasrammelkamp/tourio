import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
          <h1>Edit Place</h1>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" name="name" defaultValue={data.name} />
          </label>
          <label htmlFor="image">
            Image Url:
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={data.image}
            />
          </label>
          <label htmlFor="mapURL">
            Map Url:
            <input
              type="text"
              id="mapURL"
              name="mapURL"
              defaultValue={data.mapURL}
            />
          </label>
          <label htmlFor="location">
            Location:
            <input
              type="text"
              id="location"
              name="location"
              defaultValue={data.location}
            />
          </label>
          <label htmlFor="description">
            Description:
            <textarea
              id="description"
              name="description"
              defaultValue={data.description}
            ></textarea>
          </label>
          <button type="submit">Update</button>
        </form>
      ) : (
        <>
          <h2>{data.name}</h2>
          <Image src={data.image} alt={data.name} width={300} height={200} />
          <p>location</p>
          <p>description</p>
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              router.push(data.mapURL);
            }}
          >
            Google maps
          </button>
          <button
            onClick={() => {
              handleDelete();
              router.push("/");
            }}
          >
            Delete
          </button>
          <button
            type="button"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            edit
          </button>
        </>
      )}
    </>
  );
}
