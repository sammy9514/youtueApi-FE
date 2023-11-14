import { useEffect, useState } from "react";
import { styled } from "styled-components";

export const SideCard = () => {
  const [state, setState] = useState<any>();

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("vid")!));
  }, []);
  return (
    <div>
      <Container>
        {state?.items?.map((props: any) => (
          <Wrapper>
            <Img src={props.snippet.thumbnails.high.url} />
          </Wrapper>
        ))}
      </Container>
    </div>
  );
};

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Wrapper = styled.div`
  width: 400px;
  height: 350px;
  border: 1px solid red;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;
