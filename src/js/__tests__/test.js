import Character from '../character';
import Bowman from '../bowman';

test('is the name a string', () => {
  const character = new Character('Иван', 'Bowman');
  expect(character.name).toEqual('Иван');
});

test('checking the error in the name not a string', () => {
  expect(() => new Character(5, 'Bowman')).toThrow('the entered name is incorrect!');
});
test('checking the name for too small', () => {
  expect(() => new Character('И', 'Bowman')).toThrow('the entered name is incorrect!');
});
test('checking the name for too long', () => {
  expect(() => new Character('Иваниваниваниван', 'Bowman')).toThrow('the entered name is incorrect!');
});
test('checking the type error', () => {
  const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  const character = new Character('Иван', 'Magician');
  const includes = types.includes(character.type);
  expect(includes).toEqual(true);
});
test('checking the name for too long', () => {
  expect(() => new Character('Иван', 'Bond')).toThrow('the entered type is incorrect!');
});
test('checking the attack level', () => {
  const bowman = new Bowman('Иван');
  expect(bowman.attack).toEqual(25);
});
test('checking the defence level', () => {
  const bowman = new Bowman('Иван');
  expect(bowman.defence).toEqual(25);
});
test('checking the defence level', () => {
  const character = new Character('Иван', 'Magician');
  expect(character.health).toEqual(100);
});
test('checking the operation of the method levelUp', () => {
  const ivan = {
    name: 'Иван',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  const result = new Bowman('Иван');
  result.levelUp();
  expect(ivan).toEqual(result);
});
test('checking the error of the method levelUp', () => {
  const ivan = new Bowman('Иванн', 0);
  expect(() => ivan.levelUp().toThrow('it is impossible to raise the level of the deceased!'));
});
test('checking the the operation of the method damage', () => {
  const ivan = new Bowman('Иван');
  ivan.damage(50);
  expect(ivan.health).toBeCloseTo(62.5);
});
test('checking the error of the method damage', () => {
  const ivan = new Bowman('Иван', 5);
  ivan.damage(10);
  expect(ivan.health).toEqual(0);
});
