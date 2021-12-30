import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Main } from "./styled";

interface InfoProps {}

const CreateInfo: FC<Info> = ({ title, name, game }) => {
  return (
    <>
      <p>{`name: ${name}`}</p>
      <p>{`title: ${title}`}</p>
      <p>{`game: ${game}`}</p>
    </>
  );
};

interface Props {
  type?: string;
  name?: string;
  update?: number;
}

interface Info {
  title: string;
  name: string;
  game: string;
}

export const Stream: FC<Props> = ({ type, name, update }) => {
  const [online, setOnline] = useState<boolean>(false);
  const [info, setInfo] = useState<Info>({
    title: "",
    name: "",
    game: "",
  });

  useEffect(() => {
    axios
      .get(
        "https://api.twitch.tv/helix/streams?user_login=" + name,

        {
          headers: {
            "Client-Id": process.env.REACT_APP_Client_ID,
            authorization: "Bearer " + process.env.REACT_APP_TTvTOKEN,
          },
        }
      )
      .then((res) => {
        if (res.hasOwnProperty("data")) {
          let data = res.data.data;

          if (data.length <= 0) {
            setOnline(false);
          } else {
            setOnline(true);
            setInfo({
              title: data[0].title,
              name: data[0].user_name,
              game: data[0].game_name,
            });
          }
        }
      });
  }, [update]);

  return (
    <Main>
      <CreateInfo title={info.title} name={info.name} game={info.game} />
      {online ? <p>It's online</p> : <p>It's offline</p>}
    </Main>
  );
};
