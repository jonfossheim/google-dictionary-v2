import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Detailed = (props) => {
  const { location } = useParams();
  const [word, setWord] = useState({});

  if (!word.hasOwnProperty('word')) {
    return <div>{location} Loading...</div>;
  }
  return (
    <div>
      <h1>Word here</h1>
    </div>
  );
};

export default Detailed;
