import Search from "../../components/Search";
import { useState } from "react";
import Form from "../../components/Form";
import Card from "../../components/Card";

const CreatePlayList = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);

  const onSuccessSearch = (tracks) => {
    const selectedTracks = filterSelectedTracks();
    const searchDistincTracks = tracks.filter(
      (track) => !selected.includes(track.uri)
    );

    setTracks([...selectedTracks, ...searchDistincTracks]);
  };

  const toggleSelect = (track) => {
    const uri = track.uri;

    if (selected.includes(uri)) {
      setSelected(selected.filter((item) => item !== uri));
    } else {
      setSelected([...selected, uri]);
    }
  };

  const filterSelectedTracks = () => {
    return tracks.filter((track) => selected.includes(track.uri));
  };

  return (
    <div>
      <Form uriTracks={selected} />
      <div>
        <Search onSuccess={(tracks) => onSuccessSearch(tracks)} />
      </div>
      <div>
        {tracks.map((track) => (
          <Card
            key={track.id}
            img={track.album.images[0].url}
            title={track.name}
            artists={track.artists[0].name}
            toggleSelect={() => toggleSelect(track)}
          />
        ))}
      </div>
    </div>
  );
};

export default CreatePlayList;
