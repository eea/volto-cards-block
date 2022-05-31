import React from 'react';
import { Message } from 'semantic-ui-react';
import Card from '@eeacms/volto-cards-block/Blocks/Cards/Card';

const Cards = (props) => {
  const { data, editable, id } = props;
  const { items = [] } = data;
  if (!items.length && editable) return <Message>No cards added</Message>;
  return (
    <div className="fluid-card-row">
      {items.map((item, index) => (
        <Card key={`card-${id}-${index}`} {...props} item={item} />
      ))}
    </div>
  );
};

export default Cards;
