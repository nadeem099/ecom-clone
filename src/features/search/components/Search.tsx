import { useEffect, useState, useDeferredValue } from "react";
import styled, { keyframes } from "styled-components";
import { Box, Button, Input, Typography } from "@mui/material";
import {
  LocationOnOutlined,
  ExpandMoreOutlined,
  Search as SearchIcon,
} from "@mui/icons-material";
import LocationModal from "./LocationModal";
import SearchResult from "./SearchResult";

const suggestions = ["ROSEDAY", "PROLOMET", "NICOTEX", "RABLET"];

interface AnimatedSuggestionProps {
  updateSuggestion?: () => string;
}

const textAnimation = keyframes`
  0% {
    top: 25%;
    opacity: 1;
  }
  50% {
    top: 0%;
    opacity: 0;
  }
  60% {
    top: 100%;
    opacity: 0;
  }
  100% {
    top: 25%;
    opacity: 1;
  }
`;

const AnimatedSuggestion = styled(Typography)<AnimatedSuggestionProps>`
  position: absolute;
  left: 120px;
  color: gray;
  animation: ${textAnimation} 1s infinite forwards;
`;

const Search = () => {
  const [suggestion, setSuggestion] = useState(0);
  const [locationModal, setLocationModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const deferredSearchInput = useDeferredValue(searchInput);

  useEffect(() => {
    const interval = setInterval(() => {
      setSuggestion((p) => {
        return p === suggestions.length ? 0 : p + 1;
      });
    }, 800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      style={{
        flexGrow: 1,
        display: "flex",
        alignItems: "stretch",
        gap: 20,
        border: "1px solid gray",
        borderRadius: "8px",
        backgroundColor: "white",
        width: "inherit",
      }}
    >
      <Button
        sx={{
          margin: "4px",
          padding: "8px 16px",
          backgroundColor: "#e8f5f9",
          color: "#003a6a",
          borderRadius: "4px",
          gap: 2,
          position: "relative",
        }}
        onClick={() => setLocationModal((p) => !p)}
      >
        <LocationOnOutlined />
        <Typography>4000612, Thane</Typography>
        <ExpandMoreOutlined />
        {locationModal && <LocationModal />}
      </Button>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          position: "relative",
          gap: 2,
        }}
      >
        <SearchIcon sx={{ color: "gray" }} />
        <Input
          placeholder="Search for "
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          disableUnderline
        />
        {!searchInput && (
          <AnimatedSuggestion>{suggestions[suggestion]}</AnimatedSuggestion>
        )}
        {searchInput && <SearchResult input={deferredSearchInput} />}
      </Box>
      <Button
        variant="contained"
        sx={{ boxShadow: "none", borderRadius: "0 4px 4px 0" }}
      >
        Search
      </Button>
    </Box>
  );
};

export default Search;
