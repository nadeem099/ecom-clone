import { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Search } from "../features/search";
import { Typography } from "@mui/material";

const StyledImage = styled.img`
  width: 150px;
  height: auto;
`;

const TopNav = () => {
  const [showNavSearch, setShowNavSearch] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (document.documentElement.scrollTop >= 228) {
        setShowNavSearch(true);
      } else {
        setShowNavSearch(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <Stack
      position={"sticky"}
      top={0}
      zIndex={1}
      direction={"row"}
      spacing={4}
      sx={{
        alignItems: "center",
        padding: "8px 20px",
        boxShadow: "0 0px 12px gray",
        backgroundColor: "white",
      }}
    >
      <StyledImage src={logo} />
      {showNavSearch ? <Search /> : <div style={{ flexGrow: 1 }}></div>}
      <Typography>Download App</Typography>
      <Typography>User</Typography>
      <Typography>Cart</Typography>
    </Stack>
  );
};

export default TopNav;
