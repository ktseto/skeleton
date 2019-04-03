# Full Stack React App Skeleton

By [Kam Seto](mailto:setokt@gmail.com)

[ktseto.github.io](https://ktseto.github.io)

## Instructions

1. Clone [repo](https://github.com/ktseto/skeleton) with `git clone https://github.com/ktseto/skeleton`
2. Run `npm install` to install dependencies
3. Create `server/credentials.js` to supply the database credentials to `db.js`
4. If database does not yet exist, manually create it in PostgreSQL.
5. Update database name in `server/db.js`
6. Update `server/seed.js` and run `npm run seed` to seed the database.
7. Start server with `npm start`
8. Run tests with `npm test`
9. Navigate to the app in [browser](http://localhost:8000)
10. Start building

## Tech Stack

To build the front-end, I used React, HTML, and CSS Modules.  The back-end consists of a Node/Express server and a PostgreSQL database.  For testing, I used Jest and Enzyme.  I wrote the JavaScript in accordance with the AirBnB style guide.

## Requirements

#### Build a two player tic tac toe app where a game is played by alternating clicks until the game is won by X, O or is a tie.

I added a `message` that displays which player's turn it is based on the number of turns taken. The `message` also displays whether a player has won or if there is a tie.

#### Include a reset button so that when a game ends, the board can be cleared and a new game can begin.

The reset button calls a method `_resetBoard()` which calls another method `_getInitialState()` to reset the board.

## Bonuses!

#### Make the board fully responsive

I used the `vmin` unit of measure to make the `width`, `height`, and `border` of the squares fully responsive.

#### Allow for more than 1 game to be played simultaneously

I have a state within the `App` that keeps track of the number of boards. Because each board also has its own state, gameplay across multiple boards can happen simultaneously without interference.