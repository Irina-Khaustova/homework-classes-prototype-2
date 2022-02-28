export default class Character {
  constructor(name, type, health = 100, level = 1) {
    if (typeof name === 'string' && name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error('the entered name is incorrect!');
    }
    if (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
      this.type = type;
    } else {
      throw new Error('the entered type is incorrect!');
    }
    this.health = health;
    this.level = level;
  }

  levelUp() {
    if (this.health >= 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('it is impossible to raise the level of the deceased!');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
