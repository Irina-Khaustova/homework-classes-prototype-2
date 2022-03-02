import Swordsman from '../swordsman';

test('Создание персонажа Swordsman', () => {
  const received = new Swordsman('Иван');
  const expected = {
    name: 'Иван',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
