import React, { useMemo } from 'react';
import cx from 'classnames';
import { Card as UiCard, Image } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import { getImage, getText } from '@eeacms/volto-cards-block/helpers';

const Card = ({ data, id, item }) => {
  const image = useMemo(() => getImage(item.image), [item.image]);
  const title = useMemo(() => getText(item.title), [item.title]);
  const description = useMemo(() => getText(item.description), [
    item.description,
  ]);

  return (
    <UiCard
      fluid={data.fluid ?? true}
      className={cx(
        {
          rounded: data.rounded,
        },
        item.theme || data.theme,
        data.rounded ? data.roundedSize || 'small' : null,
      )}
    >
      {image && <Image wrapped ui={false} src={image} alt={item.title} />}
      <UiCard.Content>
        {title && <UiCard.Header>{title}</UiCard.Header>}
        {item.info?.map((info, index) => {
          const text = getText(info.text);
          return text ? (
            <UiCard.Meta key={`info-${id}-${index}`}>{text}</UiCard.Meta>
          ) : (
            ''
          );
        })}
        {description && <UiCard.Description>{description}</UiCard.Description>}
      </UiCard.Content>
      {item.links?.map((link, index) => {
        const title = getText(link.title) || `Link ${index + 1}`;
        return (
          link.url && (
            <UiCard.Content extra key={`link-${id}-${index}`}>
              <UniversalLink href={link.url}>{title}</UniversalLink>
            </UiCard.Content>
          )
        );
      })}
    </UiCard>
  );
};

export default Card;
