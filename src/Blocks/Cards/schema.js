import config from '@plone/volto/registry';

function getThemes() {
  return config.blocks.blocksConfig.cards_block.themes || [];
}

function getInfoSchema() {
  return {
    title: 'Info',
    fieldsets: [{ id: 'default', title: 'Default', fields: ['text'] }],
    properties: {
      text: {
        title: 'Text',
        widget: 'textarea',
      },
    },
  };
}

function getLinkSchema() {
  return {
    title: 'Link',
    fieldsets: [{ id: 'default', title: 'Default', fields: ['url', 'title'] }],
    properties: {
      url: {
        title: 'URL',
        widget: 'url',
      },
      title: {
        title: 'Title',
        widget: 'textarea',
      },
    },
  };
}

function getCardSchema() {
  return {
    title: 'Card',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['theme', 'title', 'description', 'info', 'links', 'image'],
      },
    ],

    properties: {
      theme: {
        title: 'Theme',
        choices: getThemes(),
      },
      title: {
        title: 'Title',
      },
      description: {
        title: 'Description',
        widget: 'slate_richtext',
      },
      info: {
        title: 'Extra info',
        widget: 'object_list',
        description: 'Add extra info',
        schema: getInfoSchema(),
      },
      links: {
        title: 'Links',
        widget: 'object_list',
        description: 'Add links',
        schema: getLinkSchema(),
      },
      image: {
        title: 'Image',
        widget: 'attachedimage',
      },
    },

    required: [],
  };
}

export default function (props) {
  const { data = {} } = props;
  return {
    title: 'Cards',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'fluid',
          'rounded',
          ...(data.rounded ? ['roundedSize'] : []),
          'theme',
          'items',
        ],
      },
    ],
    properties: {
      items: {
        title: 'Items',
        widget: 'object_list',
        description: 'Add a list of cards',
        schema: getCardSchema(),
      },
      fluid: {
        title: 'Fluid',
        type: 'boolean',
        defaultValue: true,
      },
      rounded: {
        title: 'Rounded',
        type: 'boolean',
      },
      roundedSize: {
        title: 'Size',
        choices: [
          ['small', 'Small'],
          ['big', 'Big'],
        ],
        default: 'small',
      },
      theme: {
        title: 'Theme',
        choices: getThemes(),
      },
    },
    required: [],
  };
}
