import { styled } from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineSearch } from "react-icons/hi";
import { BsFillMicFill } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import {} from "react-icons/bs";
import { useEffect, useState } from "react";
import { getVideos } from "../api/api";

export const Header = () => {
  const [search, setSearch] = useState<any>();
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <MenuIcon>
              <RxHamburgerMenu />
            </MenuIcon>
            <Logo>
              Ay_<span>Tube</span>
            </Logo>
          </Left>
          <Middle>
            <Search>
              <Input
                placeholder="Search"
                value={search}
                onChange={(e: any) => {
                  setSearch(e.target.value);
                  console.log(search);
                  // getVideos(search).then((res) => {
                  //   localStorage.setItem("vid", JSON.stringify(res.search));
                  // });
                }}
              />
              <SearchIcon>
                <HiOutlineSearch
                  onClick={() => {
                    // JSON.parse(localStorage.getItem("vid")!);
                    // window.location.reload();
                  }}
                />
              </SearchIcon>
            </Search>
            <MicIcon>
              <BsFillMicFill />
            </MicIcon>
          </Middle>
          <Right>
            <BiVideoPlus />
            <MdNotificationsNone />
            <Profile>A</Profile>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};
// const Container = styled.div`

// `
const Profile = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MicIcon = styled.div`
  width: 50px;
  height: 100%;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  color: white;
`;
const SearchIcon = styled.div`
  width: 15%;
  border-radius: 0 50px 50px 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const Input = styled.input`
  width: 85%;
  height: 100%;
  padding: 0 10px;
  border-radius: 50px 0 0 50px;
  font-size: 17px;
  text-transform: capitalize;
  border: 0;
  outline: 0;
  &::placeholder {
    color: gray;
    font-size: 17px;
  }
`;
const Search = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 50px;
  display: flex;
  border: 1px solid silver;
  align-items: center;
`;
const Logo = styled.div`
  color: black;
  font-weight: bold;

  span {
    font-size: 30px;
    color: red;
    font-weight: bolder;
  }
`;
const MenuIcon = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  font-size: 20px;
`;
const Middle = styled.div`
  width: 37%;
  border-radius: 50px;
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Left = styled.div`
  width: 13%;
  height: 100%;
  display: flex;
  gap: 15px;
  justify-content: space-around;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;
