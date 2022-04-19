import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { searchTrack } from "../../lib/fetchApi";
import { useSelector } from "react-redux";
import { ButtonSearch } from '../material-ui/ui-button';
import { InputSearchBar } from '../material-ui/ui-search-bar';
import { TRootState } from "../../store";

interface IProps {
  onSuccess: (tracks: any[], text: string) => void;

}

const Search: React.FC<IProps> = ({ onSuccess }) => {
  const accessToken: string = useSelector((state: TRootState) => state.auth.accessToken);

  const [text, setText] = useState<string>("");

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const response = await searchTrack(text, accessToken);

      const tracks = response.tracks.items;
      onSuccess(tracks, text);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form onSubmit={onSubmit} data-testid="search-bar-form">
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
