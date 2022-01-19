const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name (or nickname)? ', (answerName) => {
  console.log(`That's a pretty cool name, ${answerName}`);

  rl.question('What is your favourite activity? ', (answerActivity) => {
    console.log(`Yeah, ${answerActivity} is pretty cool, I guess.`);

    rl.question('What music do you listen to during this activity? ', (answerMusic) => {
      console.log(`Excellent music: ${answerMusic}`);


      rl.question('Which meal is your favourite? ', (answerMeal) => {
        console.log(`That's great at any time of day: ${answerMeal}`);


        rl.question(`What's your favourite thing to eat during that meal? `, (answerFood) => {
          console.log(`Rad choice: ${answerFood}`);


          rl.question(`What's your favourite sport? `, (answerSport) => {
            console.log(`Rad choice: ${answerSport}`);


            rl.question(`What's your superpower? In a few words, tell us what you're amazing at! `, (answerSuperpower) => {
              console.log(`Rad choice: ${answerSuperpower}`);

                console.log(`Well hey there! This automated profile is for some rad cat named ${answerName}! They love
              listening to ${answerMusic} while they ${answerActivity}. If they had to pick a favourite meal, it would be
              ${answerMeal}...which, of course, must have ${answerFood}. They love ${answerSport}, but their secret
              superpower is ${answerSuperpower}. `)
              
                rl.close();
            });
          });
        });
      });
    });
  });
});


