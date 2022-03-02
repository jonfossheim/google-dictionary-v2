{
  object.phonetics.map((phonetic, idx) => {
    return <Phonetic key={idx} object={phonetic} />;
  });
}

{
  meanings.map((meaning, idx) => {
    return <Meaning key={idx} object={meaning} />;
  });
}
