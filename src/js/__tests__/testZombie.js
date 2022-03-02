import Zombie from '../zombie';

test('Создание персонажа Zombie', () => {
  const received = new Zombie('Иван');
  const expected = {
    name: 'Иван',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
