import Meaning from './Meaning';

const WordsParent = ({ object }) => {
  const meanings = object.meanings;

  return (
    <div>
      <h2>{object.word}</h2>
      <p>{object.phonetic}</p>

      {meanings.map((meaning, idx) => {
        return <Meaning key={idx} object={meaning} />;
      })}
    </div>
  );
};

export default WordsParent;
