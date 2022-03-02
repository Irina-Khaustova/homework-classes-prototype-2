import Undead from '../undead';

test('Создание персонажа Undead', () => {
  const received = new Undead('Иван');
  const expected = {
    name: 'Иван',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
