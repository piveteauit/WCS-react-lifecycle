export let count = 0;
export const startTime = new Date();
export const startHms = [startTime.getHours(), startTime.getMinutes(), startTime.getSeconds()];

export const getElapsedTime = (end) => {
  const [s, e] = [startTime.getTime() / 1_000, end.getTime() / 1_000];
  return [e / (24 * 60) - s / (24 * 60), e / 60 - s / 60, (e - s) % 60].map(Math.round);
}

export const getHms = (d) => [d.getHours(), d.getMinutes(), d.getSeconds()]
export const getTickerStep = (d) => d.getSeconds() % 2 ? 'Tic' : 'Tac'

export const addMissing0 = (n) => `${n}`.length < 2 ? `0${n}` : `${n}`;