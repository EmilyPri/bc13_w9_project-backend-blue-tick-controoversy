import { pool } from "../index.js";

export async function createAllTables() {
    return await pool.query(

    `CREATE TABLE IF NOT EXISTS subjects (
      subject_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      subject TEXT,
      icon TEXT
   );
   INSERT INTO subjects
      (subject, icon)
   VALUES
   ('API', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'),
   ('CSS', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg'),
   ('JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'),
   ('React', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'),
   ('HTML', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg'),
   ('General Dev', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Code.svg/1200px-Code.svg.png'),
   ('SQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'),
   ('Git', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg');
   
   CREATE TABLE IF NOT EXISTS links (
            link_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            link TEXT,
            title TEXT,
            description TEXT,
            week INT,
            subject INT REFERENCES subjects(subject_id)
          );
          INSERT INTO links
             (link, title, description, week, subject)
          VALUES
          ('https://rapidapi.com/collection/list-of-free-apis', 'Public APIs', 'A selection of Public APIs', 4, 1),
          ('https://css-tricks.com/snippets/css/a-guide-to-flexbox/', 'CSS Flexbox', 'A comprehensive guide to CSS Flexbox', 1, 2),
          ('https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/#creating-routes-crud-operations', 'SQL CRUD', 'Postgres SQL in Node CRUD operations examples', 5, 7),
          ('https://www.freecodecamp.org/news/react-useeffect-absolute-beginners/amp/', 'UseEffect', 'What are side effects and when to use UseEffect', 8, 4),
          ('https://www.cockroachlabs.com/blog/what-is-connection-pooling/', 'What is Connection Pooling, and Why Should You Care?', 'Database connections can get expensive at scale. Pooling connections can help so here is what connection pooling is and how to do it!', 5, 7),
          ('https://javascript.info/first-steps', 'JavaScript Fundamentals', 'Baby steps! The introduction to JavaScript everyone needs', 1, 3),
          ('https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/', 'Git Ignore and .gitignore', 'The .gitignore file is a text file that tells Git which files or folders to ignore in a project', 1, 8),
          ('https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2/', 'React Fundamentals', 'Introduction to React', 7, 4),
          ('https://www.youtube.com/watch?v=_Qzc0PgWEs8', 'Master Git from the inside!', 'Lets break Git down and find out what is actually going on behind the commands youre getting your heads around!', 1, 8),
         ('https://javascript.info/', 'JavaScript 101', 'A very comprehensive overview of JavaScript with tasks of the subject matter at the end to complete.', 1, 3),
         ('https://schoolofcode-bc13.slack.com/files/U043984UA04/F044NK6BGUU/git-cheat-sheet_1_.pdf?origin_team=T040S207AF7&origin_channel=C041JPAD3JL', 'Git Cheat Sheet', 'Havent mastered those pesky commands? Use our handy cheat sheet!', 1, 8),
         ('https://files.slack.com/files-pri/T040S207AF7-F044NP71G4U/screenshot_2022-09-30_at_10.13.38.png', 'Git Rhythm', 'Push, Pull, Add, Commit… In a muddle? Get to grips with git with this diagram.', 1, 8),
         ('https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf', 'VS Code Shortcuts (Windows)', 'Does what it says on the tin! Get formatting, pop up new terminals and look like a pro with this resource.', 1, 6),
         ('https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf', 'VS Code Shortcuts (Mac)', 'Does what it says on the tin! Get formatting, pop up new terminals and look like a pro with this resource.', 1, 6),
         ('https://www.w3schools.com/jsref/dom_obj_event.asp', 'Events on the DOM', 'What is a DOM tree? And how do I handle events? Get stuck in with explanations and examples.', 2, 3),
         ('https://www.w3schools.com/jsref/met_win_settimeout.asp', 'How to use setTimeout', 'Why do I need async? And how do I get my timer ticking? Find a full breakdown here.', 2, 3),
         ('https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous', 'Asyncronous Functions', 'When and why to use async and await, and just what is a promise? Master this fundamental concept in 10 minutes.', 2, 3),
         ('https://rowanmanning.com/posts/javascript-for-beginners-async/', 'Asyncronous Functions', 'A beginners guide to using and understanding asyncronous functions.', 2, 3),
         ('https://www.boia.org/blog/googles-lighthouse-accessibility-tests-are-helpful-but-not-perfect', 'Lighthouse Accessibility Tests',	'Lighthouse tests are great, but theyre not perfect. What should we bear in mind when using them?', 3, 6),
         ('https://flexboxfroggy.com/', 'FlexBox Froggy Fun!', 'Get to grips with FlexBox with this fun interactive game!', 3, 2),
         ('https://yoksel.github.io/grid-cheatsheet/', 'How to use grid', 'Want to be a grid pro? Find out when, how and why to use grid here.', 3, 2),
         ('https://yoksel.github.io/flex-cheatsheet/', 'How to use FlexBox', 'Flexbox is famously tricky. Master it in 15 minutes here.', 3, 2),
         ('https://developer.chrome.com/docs/devtools/javascript/', 'Using the debugger', 'Learn how to use Chrome DevTools to find and fix JavaScript bugs!', 4, 6),
         ('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals', 'Interpolating JavaScript Strings', 'Just what is the dollar squig anyway? We explain when to use it, and most importantly, how!', 2, 3),
         ('https://nordvpn.com/blog/what-is-my-port/', 'Understanding Ports', 'Wheres my port again? Super useful 2 minute guide for those times when your backend is becoming a pain in your backend.', 5, 6),
         ('https://stackoverflow.com/questions/28558920/postgresql-foreign-key-syntax', 'Foreign Keys in SQL ', 'Linking SQL tables can be hard to get your head around. Whats the best way to get it done?', 5, 6),
         ('https://github.com/public-apis/public-apis', 'Public APIs Library', 'A fab resource of free APIs for all your projects!', 3, 6),
         ('https://debbie.codes/blog/testing-button-component/', 'React Testing Library', 'Walk through testing a button in the React Testing Library', 7, 4),
         ('https://codingfantasy.com/games/flexboxadventure', 'FlexBox Adventure Fun!', 'Another flexbox game? Get practicing on this adventure!', 3, 2),
         ('https://kentcdodds.com/blog/common-mistakes-with-react-testing-library', 'Common React Testing Mistakes', 'How to avoid the most common and most annoying pitfalls with the React testing library.', 7, 4),
         ('https://www.benmvp.com/blog/react-testing-library-best-practices/', 'React Testing Best Practice', 'Tips and tricks on how to test your frontend like a true professional!', 7, 4),
         ('https://www.tpgi.com/what-is-an-accessible-name/', 'Accessible HTML Names', 'Many HTML elements have an accessible name which means someone using a screen reader will hear the accessible name announced as they move to that element! Find out more here.',  6, 4),
         ('https://www.youtube.com/watch?v=4pO-HcG2igk', 'useState Hook', 'What is a state and how do you use it? Seven minutes to master useState.', 7, 4),
         ('https://www.youtube.com/watch?v=PHaECbrKgs0', 'Props and Reusable Components', 'Nine minutes to get to grips with those React fundamentals. Very handy if youre struggling with props!', 7, 4),
         ('https://javascript.plainenglish.io/javascript-es6-the-spread-operator-197cfb7c46ad', 'The Spread Operator', 'Knowing when to use Spread can be the trickiest part… Master it and find out how to use Spread most effectively.', 7, 3),
         ('https://stackoverflow.com/questions/61421873/object-copy-using-spread-operator-actually-shallow-or-deep', 'Spread Operator: A Deeper Dive', 'Immutable who? Just what is an immutable method and why does it matter? And how can Spread help you? Click to find out…', 7, 4),
         ('https://beta.reactjs.org/learn/passing-props-to-a-component', 'Passing Props to a Component', 'Just what to put in the {}, and whose child is that anyway? Nail those React fundamentals.', 7, 4),
         ('https://react-hooks-cheatsheet.com/', 'React Hooks: A Cheat Sheet', 'From the everyday to the not-so-common, here are all the hooks youll ever need!', 7, 4),
         ('https://youtu.be/jLS0TkAHvRg', 'React Fundamentals', 'Learn to love React by getting those fundamentals nailed down!', 7, 4),
         ('https://www.youtube.com/watch?v=R8rmfD9Y5-c&t=213s', 'Array methods', 'From CodeWars to React, you will keep building on these fundamentals throughout your dev career- get cracking!', 2, 3),
         ('https://www.usechannel.com/', 'English to SQL translator', 'Is it cheating? Who knows, but it works! Check your SQL skills using this handy translator.', 5, 7),
         ('https://softwareengineering.stackexchange.com/a/65488', 'Unit Tests and Integration Tests', 'What is the difference between unit and integration tests? Which should you be using and why?', 6, 6),
         ('https://www.freecodecamp.org/news/relational-vs-nonrelational-databases-difference-between-sql-db-and-nosql-db/',	'Relational and Non-Relational Databases',	'What is the difference between an SQL and a No SQL database and when should you use each?', 5, 7),
         ('https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/',  'Unit Testing', 'A beginners guide to cracking on with unit tests in JavaScript.', 6, 6),
         ('https://youtu.be/ananPWEdfDA', 'ES6 imports and exports', 'Just switched from CJS? Fear not, this handy guide will have you importing and exporting in ES6 in no time!', 6, 6),
         ('https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/#creating-routes-crud-operations', 'CRUD: Creating Routes',	'Linking up to an actual database? Read this handy guide to incorporating your pg SQL language into your Express CRUD routes.', 6, 7),
         ('https://stackoverflow.com/questions/71538752/when-are-quotes-needed-in-env-file', 'The .env file', 'Wait, no quotes?! Read all about the .env file and how to write effective environment variable code.', 6, 6),
         ('https://www.codecademy.com/article/introduction-to-javascript-runtime-environments', 'JavaScript Runtime Environments',	'But just what is Node.js? Understand the fundamentals of Javascript runtime environments, why they are used, and what it will mean for your code.', 2, 6);`
    )
};

export async function dropAllTables() {
   return await pool.query("DROP TABLE IF EXISTS links; DROP TABLE IF EXISTS subjects");
 }
 
 export async function resetAllTables() {
   const dropped = await dropAllTables();
   const created = await createAllTables();
   return [dropped, created];
 }
 