import styled from "styled-components";
import { Search } from "../features/search";
import { Typography, Box } from "@mui/material";

const StyledImage = styled.img<{
  left?: string;
  right?: string;
  bottom?: string;
}>`
  // width: 100px;
  position: absolute;
  bottom: ${(props) => (props.bottom ? props.bottom : "0")};
  ${(props) => props.left && `left: ${props.left}`}
  ${(props) => props.right && `right: ${props.right}`}
`;

const StyledHeader = styled.header`
  position: relative;
  background-color: #b0e5f2;
  min-height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledImage
        left="0"
        src="https://www.truemeds.in/static/media/left-meds-image.5b0fb597.svg"
      />
      <StyledImage
        right="0"
        bottom="-15px"
        src="https://www.truemeds.in/static/media/right-meds-image.fb49f5f0.svg"
      />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 15,
          justifyContent: "center",
          width: "80%",
        }}
      >
        <Typography color={"#3e5c75"} fontWeight={600} fontSize={"30px"}>
          Say GoodBye to high medicine prices
        </Typography>
        <Typography
          color={"#3e5c75"}
          fontWeight={400}
          variant="h2"
          fontSize={"16px"}
        >
          Compare prices and save upto 51%
        </Typography>
        <Search />
      </Box>
    </StyledHeader>
  );
};

export default Header;
