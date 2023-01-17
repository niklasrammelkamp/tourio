import CardList from "@/components/CardList";
import { useRouter } from "next/router";
import StyledButton from "@/components/StyledButton/Button.styled";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <StyledButton
        onClick={() => {
          router.push("/AddFormPage");
        }}
      >
        Add Place
      </StyledButton>
      <CardList />
    </>
  );
}
