const movie = {
  title: 'a',
  rate: 5.3,
  director: 'b',
  year: 2022,
};

const showProperties = (obj) => {
  // for (let key in obj) {
  //   if (typeof obj[key] === 'string')
  //     console.log(key, obj[key]);
  // }

  for (let properties of Object.keys(obj))
    console.log(properties);
};

showProperties(movie);
