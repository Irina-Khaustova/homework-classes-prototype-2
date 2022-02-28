import Character from './character';

export default class Swordsman extends Character {
  constructor(name, health, level, attack = 40, defence = 10, type = 'Swordsman') {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
