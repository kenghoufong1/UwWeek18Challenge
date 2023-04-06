const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const {Thought,User} =require('./models');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// db.once('open', async () => {
//   try {
//     await Thought.deleteMany({}); // clear existing data
//     console.log('Existing data cleared.');

//     // create some thoughts and reactions
//     const thoughts = [
//       {
//         thoughtText: 'I love learning new things!',
//         username: 'Alice',
//         reactions: [
//           { reactionBody: 'Me too!', username: 'Bob' },
//           { reactionBody: 'Learning is so much fun', username: 'Charlie' }
//         ]
//       },
//       {
//         thoughtText: 'Today is a great day!',
//         username: 'Bob',
//         reactions: [
//           { reactionBody: 'I agree!', username: 'Alice' }
//         ]
//       },
//       {
//         thoughtText: 'I just got a promotion!',
//         username: 'Charlie',
//         reactions: []
//       }
//     ];

//     // insert the thoughts and reactions into the database
//     await Thought.insertMany(thoughts);
//     console.log('Data seeded.');

//     // close the connection to the database
//     db.close();
//   } catch (err) {
//     console.error(err);
//   }
// });

db.once('open', () => {
  app.listen(PORT, () => { 
    console.log(`API server running on port ${PORT}!`);
  });
});
