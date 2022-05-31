import React from 'react';
import { Grid, Message } from 'semantic-ui-react';
import Card from '@eeacms/volto-cards-block/Blocks/Cards/Card';

const Cards = (props) => {
  const { data, editable, id } = props;
  const { items = [] } = data;
  if (!items.length && editable) return <Message>No cards added</Message>;
  return (
    <Grid>
      {items.map((item, index) => (
        <Grid.Column
          mobile={12}
          tablet={6}
          computer={4}
          key={`card-${id}-${index}`}
        >
          <Card {...props} item={item} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default Cards;
