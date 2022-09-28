const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {
  console.log(`Nice to meet you ${name}!`);
  rl.question('What\'s an activity you like doing? ', (activity) => {
    console.log(`So you're an expert at ${activity}, huh?`)
    rl.question(`What do you listen to while ${activity}? `, (music) => {
      console.log(`You're jammin on some ${music}!`)
      rl.question('Which meal is your favourite? ', (meal) => {
        console.log(`${meal} is the most important meal of the day.`)
        rl.question(`What do you like to eat for ${meal} `, (food) => {
          console.log(`Mm... ${food}.`)
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            console.log(`I think I could beat you in a game of ${sport}.`)
            rl.question('What is your superpower? ', (superpower) => {
              console.log(`${superpower}? Thats cool, mine is eating ${food}.`)
              console.log(`Your fun profile: Hello! My name is ${name}! I like to ${activity} while bumpin some ${music}. I absolutely love to eat ${food} for ${meal}. When I'm not using my ${superpower} superpowers, I like to turn on ESPN and watch some ${sport}.`)
              rl.close();
            })
          })
        })
      })
    })
  })
});
