import Character from './character';

export default class Zombie extends Character {
  constructor(name, health, level, attack = 40, defence = 10, type = 'Zombie') {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
