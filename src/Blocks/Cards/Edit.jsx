import React, { useMemo } from 'react';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import View from './View';
import getSchema from './schema';

import '@eeacms/volto-cards-block/theme/main.less';

const Edit = (props) => {
  const {
    data = {},
    block = null,
    selected = false,
    variation = {},
    onChangeBlock,
  } = props;

  const RenderVariation = variation?.edit || View;

  const schema = useMemo(() => getSchema(props), [props]);

  return (
    <>
      <RenderVariation {...props} mode="edit" />

      <SidebarPortal selected={selected}>
        <BlockDataForm
          block={block}
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(Edit);
