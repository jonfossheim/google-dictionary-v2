import Meaning from './Meaning';
import Phonetic from './Phonetic';

const WordsParent = ({ object }) => {
  const meanings = object.meanings;

  return (
    <div>
      <h2>{object.word}</h2>
      {object.phonetics.map((phonetic, idx) => {
        return <Phonetic key={idx} object={phonetic} />;
      })}

      {meanings.map((meaning, idx) => {
        return <Meaning key={idx} object={meaning} />;
      })}
    </div>
  );
};

export default WordsParent;
