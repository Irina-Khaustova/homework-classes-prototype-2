import Character from '../character';

test('Проверка выброса ошибки при неверно введенном имени', () => {
  expect(() => new Character(5, 'Bowman')).toThrow('the entered name is incorrect!');
  expect(() => new Character('И', 'Bowman')).toThrow('the entered name is incorrect!');
  expect(() => new Character('Иваниваниваниван', 'Bowman')).toThrow('the entered name is incorrect!');
});
test('проверка выброса ошибки при присвоении неверного типа', () => {
  expect(() => new Character('Иван', 'Bond')).toThrow('the entered type is incorrect!');
});
test('Проверка отработки ошибки в levelUp', () => {
  const ivan = new Character('Иван', 'Bowman');
  ivan.health = -10;
  expect(() => ivan.levelUp().toThrow('it is impossible to raise the level of the deceased!'));
});
test('Проверка отработки ошибки в levelUp 2', () => {
  const ivan = new Character('Иван', 'Bowman');
  ivan.health = 0;
  expect(() => ivan.levelUp().toThrow('it is impossible to raise the level of the deceased!'));
});
test('Проверка работы метода damage', () => {
  const received = new Character('Oleg', 'Bowman');
  received.defence = 25;
  received.damage(10);
  expect(received.health).toEqual(92.5);
});
test('Проверка работы метода damage при health < 0', () => {
  const den = new Character('Den', 'Bowman');
  den.defence = 30;
  den.damage(150);
  expect(den.health).toEqual(0);
});
