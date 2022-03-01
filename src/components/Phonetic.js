import React from 'react';

const Phonetic = ({ object }) => {
  const audio = new Audio(object.audio);
  const start = () => {
    audio.play();
  };
  console.log(object);
  return (
    <div>
      <h4>Phonetic: {object.text}</h4>
      <button onClick={start}>Listen</button>
    </div>
  );
};

export default Phonetic;
