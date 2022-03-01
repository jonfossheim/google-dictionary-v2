import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './utils/api';

const App = () => {
  const [word, setWord] = useState('');
  const [query, setQuery] = useState('Discovery'); // search data
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(BASE_URL + query);
      setWord(data.data[0]);
    };
    fetchData().catch(console.error);
  }, [query]);

  if (word === '') {
    return <div>Loading...</div>;
  }

  const handleFiltering = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(filter);
    setFilter('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={'search'}
          type={'text'}
          placeholder={'Search...'}
          value={filter}
          onChange={handleFiltering}
        ></input>
      </form>

      {word.word}
    </div>
  );
};

export default App;
