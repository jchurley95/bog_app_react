import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CreatureCardStyles = styled.div`
  width: 30%;
  padding: 10px;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  h3{
    padding: 5px 0;
  }
`;

const CreatureCard = (props) => {
  const creature = props.creature;
  return (
    <CreatureCardStyles>
      <Link to={`/creatures/${creature.id}`}>
        <h3>{creature.name}</h3>
        <hr />
        <h3>{creature.description}</h3>
      </Link>
    </CreatureCardStyles>
  );
};

export default CreatureCard;