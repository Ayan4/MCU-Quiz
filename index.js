const readlineSync = require('readline-sync');
const chalk = require('chalk');
const clear = require('clear-screen');


const tony = [
    {
    heading: chalk.hex('#182ee7')('Question 1 :'),
    question: "What actor lends his trademark swagger to the Iron Man role ?",
    options: ['Robert Downey Junior', 'Robert Downey Senior', 'Robert Downey The Third', 'Ian McKellen'],
    answer: 'Robert Downey Junior'
  },
  {
    heading: chalk.hex('#182ee7')('Question 2 :'),
    question: "What is the chemical symbol for Iron ? ",
    options: ['Ag', 'Ir', 'Au', 'Fe'],
    answer: 'Ir'
  },
  {
    heading: chalk.hex('#182ee7')('Question 3 :'),
    question: "What's the name of Iron Man's computer system ? ",
    options: ['Jarvis', 'Rescue', 'Starker', 'Hogan'],
    answer: 'Jarvis'
  },
  {
    heading: chalk.hex('#182ee7')('Question 4 :'),
    question: "What is Tony Stark's business empire called? ",
    options: ['Stark Limited', 'Starkcom', 'Stark Industries', 'The Stark Corp.'],
    answer: 'Stark Industries'
  },
  {
    heading: chalk.hex('#182ee7')('Question 5 :'),
    question: "What is the name of Tony Stark's love interest? ",
    options: ['Jenny James', 'Pepper Potts', 'Ivy Pepper', 'Jane Frost'],
    answer: 'Pepper Potts'
  },
];

const steve = [
    {
    heading: chalk.hex('#182ee7')('Question 1 :'),
    question: "What symbol is on Captain America's shield ?",
    options: ['A Dollar Sign', 'A Stripe', 'A Star', 'A Dot'],
    answer: 'A Star'
  },
  {
    heading: chalk.hex('#182ee7')('Question 2 :'),
    question: "In Avengers: Civil War, who does Captain America fight ?",
    options: ['Spiderman', 'Thor', 'Iron Man', 'Ant Man'],
    answer: 'Iron Man'
  },
  {
    heading: chalk.hex('#182ee7')('Question 3 :'),
    question: "What is Captain America's shield made out of ?",
    options: ['Plastic', 'Adamantium', 'Vibranium', 'Titanium Alloy'],
    answer: 'Vibranium'
  },
  {
    heading: chalk.hex('#182ee7')('Question 4 :'),
    question: "Who is Captain America's best friend ?",
    options: ['Iron Man', 'Romanoff', 'Bucky Barnes', 'Hawk Eye'],
    answer: 'Bucky Barnes'
  },
  {
    heading: chalk.hex('#182ee7')('Question 5 :'),
    question: "n Avengers: Civil War, what does Captain America drop on Spider-mans head ?",
    options: ['A massive block of concrete', 'A Jet bridge from an airport', 'An Airplane', 'A Truck'],
    answer: 'A Jet bridge from an airport'
  },
];

const strange = [
    {
    heading: chalk.hex('#182ee7')('Question 1 :'),
    question: "What Is Strange's First Name ?",
    options: ['Stephen', 'Sully', 'Sean', 'Scott'],
    answer: 'Stephen'
  },
  {
    heading: chalk.hex('#182ee7')('Question 2 :'),
    question: "Where Was Strange Born ?",
    options: ['Chicago', 'Texas', 'New York', 'Illinois'],
    answer: 'New York'
  },
  {
    heading: chalk.hex('#182ee7')('Question 3 :'),
    question: "Where does Dr. Strange go to get himself healed ?",
    options: ['Hong Kong', 'Taj Mahal', 'Kamar Taj', 'Mt. Everest'],
    answer: 'Kamar Taj'
  },
  {
    heading: chalk.hex('#182ee7')('Question 4 :'),
    question: "What does 'The Ancient One' mix in Stephen Strange's tea ?",
    options: ['Hallucinogens', 'Honey', 'LSD', 'Anesthetic'],
    answer: 'Honey'
  },
  {
    heading: chalk.hex('#182ee7')('Question 5 :'),
    question: "What was the wi-fi password that Mordo gave Strange ?",
    options: ['Avada Kedavara', 'Kaecillius', 'Dormammu', 'Shamballa'],
    answer: 'Shamballa'
  },
];

const thanos = [
    {
    heading: chalk.hex('#182ee7')('Question 1 :'),
    question: "Where was Thanos born ?",
    options: ['On Saturn', 'On Vormir', 'On Titan', 'On Xandar'],
    answer: 'On Titan'
  },
  {
    heading: chalk.hex('#182ee7')('Question 2 :'),
    question: "Who has created Infinity Gauntlet ?",
    options: ['Asgardians', 'Titan smith', 'Kree race', 'Thanos himself'],
    answer: 'Thanos himself'
  },
  {
    heading: chalk.hex('#182ee7')('Question 3 :'),
    question: "Why Thanos wanted to kill half of the cinematic universe ?",
    options: ['He revenge on someone', 'He wanted to be remembered', "He's adoring in killing", 'He wanted to bring a balance'],
    answer: 'He wanted to bring a balance'
  },
  {
    heading: chalk.hex('#182ee7')('Question 4 :'),
    question: "Whom Thanos loved ?",
    options: ['Proxima', 'Nebula', 'Gamora', 'Himself'],
    answer: 'Gamora'
  },
  {
    heading: chalk.hex('#182ee7')('Question 5 :'),
    question: "Who has killed Thanos in comics universe ?",
    options: ['Thor', 'Iron Man', 'Drax The Destroyer', 'Hulk'],
    answer: 'Iron Man'
  },
];

const thor = [
    {
    heading: chalk.hex('#182ee7')('Question 1 :'),
    question: "What's Thor's hammer's name ?",
    options: ['Melbö', 'Morgöt', 'Mjölnir', 'Mönty'],
    answer: 'Mjölnir'
  },
  {
    heading: chalk.hex('#182ee7')('Question 2 :'),
    question: "Who is Thor's dad ?",
    options: ['Loki', 'Odin', 'Thanos', 'Frigg'],
    answer: 'Odin'
  },
  {
    heading: chalk.hex('#182ee7')('Question 3 :'),
    question: "Where does Thor live ?",
    options: ['Yggdrasil', 'Asgard', "Ragnarok", 'In a caravan 4 miles outside of Batley'],
    answer: 'Asgard'
  },
  {
    heading: chalk.hex('#182ee7')('Question 4 :'),
    question: "Thor also has an axe (it's not as cool as the hammer but... there you go). What's it called ?",
    options: ['Hatstamper', 'Windcrusher', 'Stormbreaker', 'Eggsmasher'],
    answer: 'Stormbreaker'
  },
  {
    heading: chalk.hex('#182ee7')('Question 5 :'),
    question: "How is Thor’s hammer, Mjolnir destroyed in Ragnarok?",
    options: ['It blows up after falling off the Bifrost Bridge', "It gets crushed by Ragnarok's foot", 'Hela, Odin’s first child crushes it with her hand', 'It absorbs too much power and crumbles'],
    answer: 'Hela, Odin’s first child crushes it with her hand'
  },
];

let score = 0;
let finalScore = 0;

const questions = (heading, question, options, answer) =>{
  console.log(heading);
  console.log(chalk.hex('#b74850')(question));
  let index = readlineSync.keyInSelect(options, chalk.bold.redBright('choose your answer'),{cancel: false});

  if(options[index] === answer){
    console.log('')
    console.log(chalk.bold.green('Correct Answer !'));
    score += 1;
    finalScore += 1;
  }else{
    console.log('');
    console.log(chalk.bold.redBright('Wrong Answer !'));
    console.log(`${chalk.hex('#ff8800')('Correct answer is : ')} ${chalk.bold.redBright(answer)}`);
  }

  console.log(`${chalk.bold.hex('#b74850')('current score :')} ${score}`);
  console.log(chalk.hex('#b74850')('-------------------------------------------------'));
  console.log('')
};

const goBack = () =>{
  if (!readlineSync.keyInYN(chalk.redBright("Are you sure about your choice ?"))) {
        pickChar();
    }
}

const end = () =>{
  clear();
  console.log(chalk.bold.bgHex('#d02f36')('---- Game Over ! -----'));
  console.log('')
  console.log(`${chalk.bold.hex('#35caa8')(`your final score : ${finalScore}`)}`);
  console.log('');
  console.log(chalk.bold.hex('#ff8800')('Thankyou For Playing 💐'));
  console.log('')
  console.log(chalk.bold.bgRedBright.hex('#fff')(" Create By Ayan Shukla "))
  console.log('');
  if (readlineSync.keyInYN(chalk.red("Go back to main menu ?"))) {
        menu();
      };
}

const clearScore = () =>{
  score = 0;
  finalScore = 0;
}

const characters = (index) => {
  // Iron man
    if(index === 0){
      clear();
      console.log(chalk.bold.hex('#ff8800')('You chose Tony Stark'));
      console.log('');

      goBack();

      clear();

      console.log(`${chalk.bold.hex('#ff8800')('Your Character : ')} ${chalk.bold.bgRedBright(' Tony Stark ')}`);
      console.log('');

      tony.forEach(i => questions(i.heading, i.question, i.options, i.answer));
      end();
      clearScore();
  }
  // captain america
  else if(index === 1){
    clear();
    console.log(chalk.bold.hex('#ff8800')('You chose Steve Rogers'));
      console.log('');

    goBack();

    clear();

    console.log(`${chalk.bold.hex('#ff8800')('Your Character : ')} ${chalk.bold.bgHex('#0B5D94')(' Steve Rogers ')}`);
    console.log('');

    steve.forEach(i => questions(i.heading, i.question, i.options, i.answer));
    end();
    clearScore();
  }

  // dr strange
  else if(index === 2){
    clear();
    console.log(chalk.bold.hex('#ff8800')('You chose Dr. Strange'));
      console.log('');

    goBack();

    clear();

    console.log(`${chalk.bold.hex('#ff8800')('Your Character : ')} ${chalk.bold.bgHex('#962927')(' Dr. Strange ')}`);
    console.log('');

    strange.forEach(i => questions(i.heading, i.question, i.options, i.answer));
    end();
    clearScore();
  }

  // thanos
  else if(index === 3){
    clear();
    console.log(chalk.bold.hex('#ff8800')('You chose Thanos'));
      console.log('');

    goBack();

    clear();

    console.log(`${chalk.bold.hex('#ff8800')('Your Character : ')} ${chalk.black.bold.bgHex('#B7CF2C')(' Thanos ')}`);
    console.log('');

    thanos.forEach(i => questions(i.heading, i.question, i.options, i.answer));
    end();
    clearScore();
  }
  // thor
  else if(index === 4){
    clear();
    console.log(chalk.bold.hex('#ff8800')('You chose Thor'));
      console.log('');

    goBack();

    clear();

    console.log(`${chalk.bold.hex('#ff8800')('Your Character : ')} ${chalk.black.bold.bgHex('#9DDAED')(' Thor ')}`);
    console.log('');

    thor.forEach(i => questions(i.heading, i.question, i.options, i.answer));
    end();
    clearScore();
  }
}

const pickChar = () =>{
  clear();
  console.log(chalk.bold.hex('#FF8800')('Pick Your Character : '));

  let char = [chalk.bold.bgRedBright(' Ironman '), chalk.bold.bgHex('#0B5D94')(' Captain America '), chalk.bold.bgHex('#962927')(' Dr. Strange '), chalk.black.bold.bgHex('#B7CF2C')(' Thanos '), chalk.black.bold.bgHex('#9DDAED')(' Thor ')];

  let index = readlineSync.keyInSelect(char, chalk.bold.redBright('Who do you wanna play as ?'),{cancel: false});

  characters(index);
}

const highScore = [
  {
    name: 'Akash Pal',
    score : 5
  },
  {
    name: 'Gaurav Chopra',
    score : 4
  },
  {
    name: 'Elizabeth',
    score : 3
  },
  {
    name: 'Benny',
    score : 1
  }
]

const leaderBoards = () =>{
  clear();
  console.log(chalk.bgRedBright.bold.hex('#fff')(' Some of the top players '));
  console.log('')

  highScore.forEach(i => {
    console.log(`${chalk.hex('#b74850')('Name :')} ${chalk.hex('#6fb649')(i.name)}`)
    console.log(`${chalk.hex('#b74850')('Score :')} ${chalk.hex('#6fb649')(i.score)}`)
    console.log('')
  })

console.log(chalk.bold.hex('#ff8800')('Send your high score screenshot to "ayanshukla4@gmail.com" to get your name featured !'))
console.log('')
  if (readlineSync.keyInYN(chalk.red("Go back to main menu ?"))) {
      menu();
    }
}

const menu = () => {
  clearScore();
  clear();
  // Heading

  console.log(chalk.hex('#B62798')('==============================================='));
  console.log(`    ${chalk.hex('#2B4FC7').bold('Welcome to the')} ${chalk.bold.bgRed(' Marvel ')}${chalk.bold.red.bgHex('#fff')(' Avengers ')} ${chalk.hex('#2B4FC7').bold('game!')}`);
  console.log(chalk.hex('#B62798')('==============================================='));

  // Tag line

  console.log('');
  console.log(`${chalk.hex('#FF8800').bold('~')} ${chalk.hex('#FF8800').bold('Pick your character and live their stories 📽 ')} ${chalk.hex('#FF8800').bold('~')}`);

  const menu = [chalk.bold.hex('#333').bgWhite(' New Game     '), chalk.bold.hex('#333').bgHex('#f5f5f5')(' Leaderboards '), chalk.bold.hex('#333').bgWhite(' Quit         ')];

  index = readlineSync.keyInSelect(menu, chalk.hex('#b74850')('Select an option :'),{cancel: false});

  clear();

  if(index === 0){
    pickChar();
  }else if(index === 1){
    clear();
    leaderBoards();
  }else if(index === 2){
    console.log(chalk.bold.hex('#ff8800')('Thankyou For Playing 💐'));
    console.log('')
    console.log(chalk.bold.bgRedBright.hex('#fff')(" Create By Ayan Shukla "))
    console.log('');
    process.exit();
  }
}

menu();