import axios from 'axios';
import { useEffect, useState } from 'react';
import WordsParent from '../components/WordsParent';
import { BASE_URL } from '../utils/api';

const Home = () => {
  const [word, setWord] = useState('');

  const [query, setQuery] = useState('Discovery');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(BASE_URL + query);
      setWord(data.data[0]);
    };
    fetchData().catch(console.error);
  }, [query]);

  if (word === '') {
    return (
      <div className='spinner'>
        <span className='spinner-inner-1'></span>
        <span className='spinner-inner-2'></span>
        <span className='spinner-inner-3'></span>
      </div>
    );
  }

  const handleFiltering = (e) => {
    setFilter(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(filter);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={'text'}
          placeholder={'Search...'}
          value={filter}
          onChange={handleFiltering}
        ></input>
      </form>
      <WordsParent object={word} />
    </div>
  );
};

export default Home;
