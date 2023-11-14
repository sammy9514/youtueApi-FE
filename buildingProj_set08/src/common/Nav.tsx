import { styled } from "styled-components";
import { getVideos } from "../api/api";
export const Navv = () => {
  return (
    <div>
      <Container>
        <Navs>
          <Nav
            onClick={() => {
              getVideos("all").then((res) => {
                localStorage.setItem("vid", JSON.stringify(res.all));
              });
            }}
          >
            All
          </Nav>
          <Nav>Anime</Nav>
          <Nav>Gojo</Nav>
        </Navs>
      </Container>
    </div>
  );
};
const Nav = styled.div`
  padding: 10px 15px;
  background-color: black;
  color: white;
`;
const Navs = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  gap: 20px;
`;
const Container = styled.div`
  width: 100%;
  height: 40px;
  margin: 20px 0;
`;
