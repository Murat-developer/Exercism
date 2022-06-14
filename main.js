const canFreePrison = () => {
  const knightIsAwake = false;
  const archerIsAwake = true;
  const prisonerIsAwake = false;
  const petDogIsPresent = false;
  console.log(
    (!knightIsAwake &&
      !archerIsAwake &&
      prisonerIsAwake) ||
      (petDogIsPresent && !archerIsAwake),
  );
};
canFreePrison();

const canSignalPrisoner = () => {
  const archerIsAwake = false;
  const prisonerIsAwake = true;
  console.log(!archerIsAwake && prisonerIsAwake);
};
canSignalPrisoner();

const canSpy = () => {
  const knightIsAwake = false;
  const archerIsAwake = true;
  const prisonerIsAwake = false;
  console.log(
    knightIsAwake || archerIsAwake || prisonerIsAwake, // Short circutting
  );
};
canSpy();

const fastAttack = () => {
  const knightIsAwake = true;
  console.log(!knightIsAwake);
};
fastAttack();
