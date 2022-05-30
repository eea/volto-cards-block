import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';

import '@eeacms/volto-cards-block/theme/main.less';

const View = (props) => {
  const { variation } = props;

  const Cards = variation?.view;
  return <Cards {...props} />;
};

export default withBlockExtensions(View);
