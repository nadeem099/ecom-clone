import { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import styled from "styled-components";
import { Results, fetchSearch } from "../../../helpers";

const StyledSearchResult = styled(Box)`
  position: absolute;
  left: 0;
  top: 110%;
  background-color: white;
  z-index: 1;
  width: inherit;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
`;

const SearchResult = ({ input }: { input: string }) => {
  const [results, setResults] = useState<Results[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    console.log("fetching results with query", input);
    setLoading(true);
    fetchSearch(input)
      .then((data: Results[]) => {
        if (data) {
          setResults(data);
          setError("");
        } else {
          setResults([]);
          setError("NO_RESULTS");
        }
        setLoading(false);
      })
      .catch((err) => {
        setResults([]);
        setError(err);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <StyledSearchResult>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <List>
          {results.map((item) => (
            <ListItem
              key={item.id}
              sx={{ borderBottom: "1px solid lightgray" }}
            >
              <ListItemText>{item.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      )}
    </StyledSearchResult>
  );
};

export default SearchResult;
