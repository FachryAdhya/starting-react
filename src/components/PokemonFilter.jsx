import React, { useContext } from "react";
import styled from "@emotion/styled";

import PokemonContext from "../PokemonContext";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
`;

const PokemonFilter = () => {
  const { filter, filterSet } = useContext(PokemonContext);

  return (
    <Input
      type="text"
      value={filter}
      onChange={(evt) => filterSet(evt.target.value)}
    />
  );
};

export default PokemonFilter;