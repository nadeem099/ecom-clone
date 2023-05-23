import styled from "styled-components";
import { Box, Button, Input, Stack, Typography, Divider } from "@mui/material";
import { MyLocation } from "@mui/icons-material";

const StyledTypography = styled(Typography)<{
  weight?: number;
}>`
  font-size: 14px !important;
  font-weight: ${(props) => (props.weight ? props.weight : 600)} !important;
  text-align: left;
`;

const LocationModal = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "110%",
        left: "0",
        padding: "10px",
        backgroundColor: "white",
        boxShadow: "0 3px 6px gray",
        borderRadius: "4px",
      }}
    >
      <StyledTypography margin="10px 0">Choose your location</StyledTypography>
      <Stack
        direction={"row"}
        width={"max-content"}
        sx={{ border: "1px solid gray", borderRadius: "4px" }}
      >
        <Input
          placeholder="Enter your PIN code"
          disableUnderline
          sx={{ padding: "4px 8px" }}
        />
        <Button
          variant="contained"
          sx={{ borderRadius: "0 4px 4px 0", boxShadow: "none" }}
        >
          Check
        </Button>
      </Stack>
      <Button>
        <MyLocation />
        <StyledTypography margin="10px 0">
          Use your current location
        </StyledTypography>
      </Button>
      <Divider />
      <Box>
        <StyledTypography margin="10px 0">Saved address</StyledTypography>
        <StyledTypography margin="10px 0">Home</StyledTypography>
        <StyledTypography weight={400} margin="10px 0">
          Your address goes here
        </StyledTypography>
      </Box>
    </Box>
  );
};

export default LocationModal;
