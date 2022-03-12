import Bowman from '../bowman';

test('Создание персонажа Bowman', () => {
  const received = new Bowman('Иван');
  const expected = {
    name: 'Иван',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
test('Проверка работы метода LevelUp', () => {
  const received = new Bowman('Иван');
  received.levelUp();
  const expected = {
    name: 'Иван',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(received).toEqual(expected);
});
