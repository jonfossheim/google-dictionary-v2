import Definition from './Definition';

const Meaning = ({ object }) => {
  const definitions = object.definitions;
  return (
    <div>
      <p>{object.partOfSpeech}</p>
      {definitions.map((definition, idx) => {
        return <Definition key={idx} object={definition} />;
      })}
    </div>
  );
};

export default Meaning;
