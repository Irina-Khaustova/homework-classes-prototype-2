import Magician from '../magician';

test('Создание персонажа Magician', () => {
  const received = new Magician('Иван');
  const expected = {
    name: 'Иван',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
