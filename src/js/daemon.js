import Character from './character';

export default class Daemon extends Character {
  constructor(name, health, level, attack = 10, defence = 40, type = 'Daemon') {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
