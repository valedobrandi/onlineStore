import { useEffect, useState } from 'react';
import Star from './Star';
import './StarRating.css';

type StarRatingType = {
  maxRating?: number,
  color?: string,
  size?: number,
  messagers?: string[],
  onSetRating: (stars: number) => void,
  rating: number
};

export default function StarRating({
  maxRating = 5,
  color = '#fcc419',
  size = 25,
  messagers = [],
  onSetRating,
  rating,
}: StarRatingType) {
  const [hoverRating, setHoverRating] = useState(0);

  const indexRating = hoverRating ? hoverRating - 1 : rating - 1;
  const messager = messagers.length === maxRating
    ? messagers[indexRating]
    : '';

  function handleOnclick(num: number) {
    onSetRating(num + 1);
  }

  useEffect(() => {
    onSetRating(rating);
  }, [rating]);

  return (
    <div>
      <div
        style={ {
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '1rem',
        } }
      >
        {Array.from({ length: maxRating }, (_, num) => (
          <Star
            index={ num }
            color={ color }
            size={ size }
            key={ num }
            onClick={ () => handleOnclick(num) }
            onMouseEnter={ () => setHoverRating(num + 1) }
            onMouseLeave={ () => setHoverRating(0) }
            onKeyDown={ () => {} }
            full={ hoverRating ? hoverRating >= num + 1 : rating >= num + 1 }
          />
        ))}
        <p
          style={ {
            lineHeight: '1px',
            color: `${color}`,
            fontSize: `${size / 1.2}px`,
            margin: '0px',
          } }
        >
          {messager}
        </p>
      </div>
    </div>
  );
}
