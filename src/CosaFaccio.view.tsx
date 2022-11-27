import { ListItem, Text } from "@rneui/themed";
import React from "react";
import Background from "./Elements/Background";

interface Post {
  title?: string;
  description: string;
  date: Date;
}

const POSTS: Post[] = [
  {
    description: `Gioco con il navigatore. Il mio problema resta sempre lo stesso. Il path iniziale 🤷‍♂️`,
    date: new Date("2022-11-27"),
  },
];

const CosaFaccioView: React.FC = () => {
  const posts = React.useMemo(() => {
    return Array(10).fill(POSTS[0]);
  }, []);

  return (
    <Background safeMode>
      {posts.map((p, i) => (
        <ListItem key={i}>
          <ListItem.Title>
            <Text>{p.date.toString()}</Text>
          </ListItem.Title>
          <Text>{p.description}</Text>
        </ListItem>
      ))}
    </Background>
  );
};

export default CosaFaccioView;
