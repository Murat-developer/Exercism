const chooseVehicle = (option1, option2) => {
  let choice = option1 < option2 ? option1 : option2;
  return `${choice} is clearly better choice.`;
};
console.log(chooseVehicle('Toyota Corolla', 'BMW sport'));
