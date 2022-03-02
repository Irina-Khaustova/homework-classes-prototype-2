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
test('Проверка отработки ошибки в levelUp', () => {
  const ivan = new Bowman('Иван');
  ivan.health = -10;
  expect(() => ivan.levelUp().toThrow('it is impossible to raise the level of the deceased!'));
});
test('Проверка работы метода damage', () => {
  const received = new Bowman('Иван');
  received.damage(10);
  expect(received.health).toEqual(92.5);
});
test('Проверка работы метода damage при health < 0', () => {
  const ivan = new Bowman('Иван');
  ivan.damage(150);
  expect(ivan.health).toEqual(0);
});
