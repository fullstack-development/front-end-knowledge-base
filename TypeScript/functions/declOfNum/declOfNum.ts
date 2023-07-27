export const declOfNum = (number: number, titles: [string, string, string]): string => {
  const numOfEnding = [2, 0, 1, 1, 1, 2];

  const isLastEnding = number % 100 > 4 && number % 100 < 20;
  const correctEnding = number % 10 < 5 ? number % 10 : 5;

  return titles[isLastEnding ? 2 : numOfEnding[correctEnding]];
};

declOfNum(1, ['комната', 'комнаты', 'комнат']); // комната
declOfNum(2, ['комната', 'комнаты', 'комнат']); // комнаты
declOfNum(5, ['комната', 'комнаты', 'комнат']); // комнат

declOfNum(1, ['room', 'rooms', 'rooms']); // room
declOfNum(2, ['room', 'rooms', 'rooms']); // rooms
declOfNum(5, ['room', 'rooms', 'rooms']); // rooms
