import React, { useState } from "react";
import { searchTrack } from "../../lib/fetchApi";
import { useSelector } from "react-redux";
import { ButtonSearch } from '../material-ui/ui-button';
import { InputSearchBar } from '../material-ui/ui-search-bar';

const Search = ({ onSuccess }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);

  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await searchTrack(text, accessToken);

      const tracks = response.tracks.items;
      onSuccess(tracks);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <InputSearchBar
        id="demo-helper-text-aligned-no-helper"
        type="search"
        label="Search gif here"
        size="small"
        onChange={handleInput}
      />
      <ButtonSearch variant="contained" type="submit">Search</ButtonSearch>
    </form>
  );
};

export default Search;
