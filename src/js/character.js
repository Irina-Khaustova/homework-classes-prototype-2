export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error('the entered name is incorrect!');
    }
    const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (arr.includes(type)) {
      this.type = type;
    } else {
      throw new Error('the entered type is incorrect!');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
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
