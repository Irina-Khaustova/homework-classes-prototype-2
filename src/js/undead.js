import Character from './character';

export default class Undead extends Character {
  constructor(name, health, level, attack = 25, defence = 25, type = 'Undead') {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
