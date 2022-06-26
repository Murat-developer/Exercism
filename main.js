const needsLicense = (input) => {
  return input === 'car' || input === 'truck';
};
console.log(needsLicense('truck'));
