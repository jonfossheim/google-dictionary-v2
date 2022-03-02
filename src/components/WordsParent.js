import { StyledLink } from './navigation/StyledLink';

const WordsParent = ({ object }) => {
  return (
    <div>
      <h2>{object.word}</h2>
      <h3> {object.phonetic}</h3>
      <StyledLink to={`/${object.word}`}>Hello World</StyledLink>
    </div>
  );
};

export default WordsParent;
