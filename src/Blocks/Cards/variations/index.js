import Default from './Default';
import Carousel from './Carousel';
import Grid from './Grid';

export default [
  {
    id: 'default',
    title: 'Fluid cards (default)',
    view: Default,
    isDefault: true,
  },
  {
    id: 'carousel_cards',
    title: 'Carousel cards',
    view: Carousel,
    schemaEnhancer: (props) => {
      const { schema } = props;
      return {
        ...schema,
        fieldsets: [
          ...schema.fieldsets,
          {
            id: 'carousel_settings',
            title: 'Carousel',
            fields: ['slidesToShow', 'slidesToScroll'],
          },
        ],
        properties: {
          ...schema.properties,
          slidesToShow: {
            title: 'Slides to show',
            type: 'number',
            minimum: 0,
            maximum: 10,
            defaultValue: 3,
          },
          slidesToScroll: {
            title: 'Slides to scroll',
            type: 'number',
            minimum: 1,
            maximum: 10,
            defaultValue: 1,
          },
        },
      };
    },
  },
  {
    id: 'grid_cards',
    title: 'Grid cards',
    view: Grid,
  },
];
