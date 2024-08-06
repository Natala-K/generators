import Character from './Character';
import Team from './Team';

const char1 = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const char2 = new Character('Мечник', 'Swordsman', 100, 1, 30, 20);
const team = new Team();
team.add(char1);
team.add(char2);

for (const member of team) {
  console.log(member);
}
