// Raindrops

const convert = (rain) => {
  let output = '';
  if (rain % 3 === 0 && rain % 5 === 0 && rain % 7 === 0)
    return 'PlingPlangPlong';
  if (rain % 3 === 0 && rain % 5 === 0)
    return 'PlingPlang';
  if (rain % 3 === 0 && rain % 7 === 0)
    return 'PlingPlong';
  if (rain % 5 === 0 && rain % 7 === 0)
    return 'PlangPlong';
  if (rain % 3 === 0) return 'Pling';
  if (rain % 5 === 0) return 'Plang';
  if (rain % 7 === 0) return 'Plong';
  if (rain % 3 !== 0 && rain % 5 !== 0 && rain % 7 !== 0)
    output += rain;
  return output;
};
console.log(convert(105));
