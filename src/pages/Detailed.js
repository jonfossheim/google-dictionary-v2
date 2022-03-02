import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/api';

import Phonetic from '../components/Phonetic';
import Meaning from '../components/Meaning';
import Definition from '../components/Definition';

const Detailed = () => {
  const { location } = useParams();
  const [word, setWord] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(BASE_URL + location);
      setWord(data.data[0]);
    };
    fetchData().catch(console.error);
  }, [location]);

  if (!word.hasOwnProperty('word')) {
    return (
      <div>
        <strong>{location}</strong> details are loading...
      </div>
    );
  }
  return (
    <div>
      <h1>{word.word}</h1>

      {word.phonetics.map((phonetic, idx) => {
        return <Phonetic key={idx} object={phonetic} />;
      })}

      {word.meanings.map((meaning, idx) => {
        return <Meaning key={idx} object={meaning} />;
      })}
    </div>
  );
};

export default Detailed;
