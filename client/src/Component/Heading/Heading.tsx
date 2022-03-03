import React from 'react';
import PropTypes from 'prop-types';
import './Heading.css'
type Pt= {
    text:string
    arc:number
    radius:number
}
function Heading({ text, arc, radius }:Pt) {
  const characters = text.split('');
  const degree = arc / characters.length;

  return (
    <h1>
      {characters.map((char:any, i: number) => (
        <span
          key={`heading-span-${i}`}
          style={{
            height: `${radius}px`,
            transform: `rotate(${degree * i - arc / 2}deg)`,
            transformOrigin: `0 ${radius}px 0`,
          }}>
          {char}
        </span>
      ))}
    </h1>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  arc: PropTypes.number, // how curved do you want the text
  radius: PropTypes.number, // how big do you want the curve
};

Heading.defaultProps = {
  arc: 120,
  radius: 400,
};

export default Heading;
