const luke = 'https://swapi.dev/api/people/1';

const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
};

getResource(luke)
  .then(body => console.log(body));