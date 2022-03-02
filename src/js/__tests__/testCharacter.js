import Character from '../character';

test('Проверка выброса ошибки при неверно введенном имени', () => {
  expect(() => new Character(5, 'Bowman')).toThrow('the entered name is incorrect!');
  expect(() => new Character('И', 'Bowman')).toThrow('the entered name is incorrect!');
  expect(() => new Character('Иваниваниваниван', 'Bowman')).toThrow('the entered name is incorrect!');
});
test('проверка выброса ошибки при присвоении неверного типа', () => {
  expect(() => new Character('Иван', 'Bond')).toThrow('the entered type is incorrect!');
});
