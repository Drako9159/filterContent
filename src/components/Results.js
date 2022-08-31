import { useState, useMemo, useEffect } from "react";
import MarkedItem from "./MarkedItem";
import styled from "styled-components";
const ResultsContainer = styled.div`
  position: absolute;
  width: 400px;
  background: white;
  border: solid 1px #222;
  border-top: solid 1px transparent;
  margin-top: -3px;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
`;
export default function Results({
  items,
  onItemSelected,
  query,
  onResultsCalculated,
}) {
  const [results, setResults] = useState([]);
  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);
  //useMemo guarda la funcion//[] variables dependientes de useMemo
  //util para no renderizar valores de más

  useEffect(() => {
    onResultsCalculated(results);
  }, [results]);
  //cada que se actualice results

  function findMatch(items, query) {
    const res = items.filter((e) => {
      return e.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
    });
    setResults(res);
    return res;
  }

  return (
    <ResultsContainer>
      {query != ""
        ? filteredItems.map((e) => (
            <MarkedItem
              key={e.id}
              item={e}
              query={query}
              onClick={onItemSelected}
            />
          ))
        : ""}
    </ResultsContainer>
  );
}
