import React, { useMemo } from 'react';
import Slider from 'react-slick';
import { Button, Icon, Message } from 'semantic-ui-react';
import Card from '@eeacms/volto-cards-block/Blocks/Cards/Card';
import Default from './Default';

const tabletBreakpoint = 835;
const mobileBreakpoint = 480;

const getSlidesToShow = (items, _slidesToShow) => {
  if (items.length >= _slidesToShow) return parseInt(_slidesToShow);
  return items.length;
};

const getSlidesToScroll = (items, _slidesToShow, _slidesToScroll) => {
  const slidesToShow = getSlidesToShow(items, _slidesToShow);
  if (slidesToShow >= _slidesToScroll) return parseInt(_slidesToScroll);
  return slidesToShow;
};

const Arrows = (props) => {
  const { slider = {} } = props;

  return (
    <>
      <Button
        aria-label="Previous slide"
        className="slider-arrow prev-arrow"
        icon
        onClick={() => {
          if (slider.current) {
            slider.current.slickPrev();
          }
        }}
      >
        <Icon className="ri-arrow-left-s-line" />
      </Button>
      <Button
        aria-label="Next slide"
        className="slider-arrow next-arrow"
        icon
        onClick={() => {
          if (slider.current) {
            slider.current.slickNext();
          }
        }}
      >
        <Icon className="ri-arrow-right-s-line" />
      </Button>
    </>
  );
};

const CardsCarousel = (props) => {
  const slider = React.useRef(null);
  const { data, editable, id } = props;
  const { items = [] } = data;

  const slidesToShow = useMemo(
    () => getSlidesToShow(items, data.slidesToShow || 3),
    [items, data.slidesToShow],
  );
  const slidesToScroll = useMemo(
    () =>
      getSlidesToScroll(
        items,
        data.slidesToShow || 3,
        data.slidesToScroll || 1,
      ),
    [items, data.slidesToShow, data.slidesToScroll],
  );

  const settings = useMemo(() => {
    return {
      dots: true,
      infinite: true,
      slidesToShow,
      slidesToScroll,
      responsive: [
        {
          breakpoint: tabletBreakpoint,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: mobileBreakpoint,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }, [slidesToShow, slidesToScroll]);

  if (!items.length && editable) return <Message>No cards added</Message>;
  if (editable)
    return (
      <>
        <Message>
          <em>Fluid cards (default)</em>
          Carousel is visible only in view mode.
        </Message>
        <Default {...props} />
      </>
    );
  return (
    <div className="cards-carousel">
      <Slider {...settings} ref={slider}>
        {items.map((item, index) => (
          <Card key={`card-${id}-${index}`} {...props} item={item} />
        ))}
      </Slider>
      {items.length > slidesToShow && <Arrows slider={slider} />}
    </div>
  );
};

export default CardsCarousel;
