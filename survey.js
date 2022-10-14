const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = '';

const questions = [
  "What\'s your name? (Nicknames are also acceptable) ",
  "What's an activity you like doing? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

let answers = [];

let pre = [
  "My name is ",
  "An activity I enjoy is ",
  "My favourity meal is ",
  "I like to eat ",
  "My favourite sport is ",
  "My superpower is: "
];

let askQuestion = function(question) {
  rl.question(question, (answer) => {
    answers.push(answer);
  });
};

rl.question(questions[0], (answer) => {
  answers.push(answer);
  
  rl.question(questions[1], (answer) => {
    answers.push(answer);

    rl.question(questions[2], (answer) => {
      answers.push(answer);

      rl.question(questions[3], (answer) => {
        answers.push(answer);

        rl.question(questions[4], (answer) => {
          answers.push(answer);

          rl.question(questions[5], (answer) => {
            answers.push(answer);

              console.log(`Thank you. We have generated your profile`);
              for (let item in answers) {
                profile += pre[item] + answers[item] + ". \n";
              }
              console.log(profile);
              rl.close();

          });

        });

      });

    });

  });

});


    // console.log(`Thank you`);
    // profile += answer + '. ';
    // console.log(profile);
    // rl.close();