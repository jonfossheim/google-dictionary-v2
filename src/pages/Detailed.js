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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(BASE_URL + location);
      setWord(data.data[0]);
    };
    fetchData().catch((error) => setError(error));
    setTimeout(() => {
      setLoading(false);
    }, 750);
  }, [location]);

  if (error) {
    return (
      <div>
        <h1>Something Went Wrong!</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!word.hasOwnProperty('word') || loading) {
    return (
      <div className='spinner'>
        <span className='spinner-inner-1'></span>
        <span className='spinner-inner-2'></span>
        <span className='spinner-inner-3'></span>
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
