import installCardsBlock from '@eeacms/volto-cards-block/Blocks/Cards';

const applyConfig = (config) => {
  return [installCardsBlock].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
