import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CHARACTER } from "../queries/queries";
import { Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CharacterPage = () => {
    //useParams is going to look for parameter in our url called 'id' and grab that value for us
  const {id} = useParams();
  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: {
        //if two are the same we can say just id
      id: id,
    },
  });
  if(loading) {
    return <Spinner />
};
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.character.image} />
      <Card.Body>
        <Card.Title>{data.character.name}</Card.Title>
        <ul>
          {data.character.episode.map((ep: any) => (
            <li key={ep.id}>
              {ep.episode} - {ep.name}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default CharacterPage;
