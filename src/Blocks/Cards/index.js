import textSVG from '@plone/volto/icons/text.svg';
import Edit from './Edit';
import View from './View';
import variations from './variations';

export default (config) => {
  config.blocks.blocksConfig.cards_block = {
    id: 'cards_block',
    title: 'Cards',
    icon: textSVG,
    group: 'common',
    edit: Edit,
    view: View,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
    themes: [
      ['primary', 'Primary'],
      ['secondary', 'Secondary'],
      ['tertiary', 'Tertiary'],
    ],
    variations,
  };

  // Footnotes
  // config.settings.blocksWithFootnotesSupport = {
  //   ...(config.settings.blocksWithFootnotesSupport || {}),
  //   quote: ['value', 'source', 'extra', 'title'],
  // };

  return config;
};
