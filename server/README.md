Initial Steps for server setup
sudo apt install node.js

sudo apt install npm

the npm modules that the project depends on are in the node_modules directory
the main functions of the package.json are to describe your project and to list its dependencies and store project metadata

run 'npm install express' in project directory /hrpm

unit test - Jest
run 'npm install --save-dev jest' in project directory /hrpm

Jest provides code test coverage
run 'npm test -- --coverage' in project directory /hrpm

ESLint
run 'npm install --save-dev eslint'
run './node_modules/.bin/eslint --init'

hrpm.js - is the application node.js file, launch in terminal:$ node hrpm.js

use Chrome to debug:
   1. in terminal run 'node --inspect hrpm.js'
   2. in Chrome type 'chrome://inspect'
   3. click 'Open Dedicated DevTools for node'
   4. click Sources tab
   5. left upper side click node to expand and click the file://
   6. set breakpoints in javascript code
   7. open another chrome browswer and enter localhost:3000

file structure:
views
   main.handlebars is the template for all other handelbars
views/layout
   handlebars for each view go here and are interpret in {{{body}}} in main.handlebars
public/css
   the css is simplistic Skeleton http://www.getskeleton.com
public/img

lib - contains node.js modules

config.js
.credentials.development.json - file needs created based on environment (Prod, Dev), in .gitingnore
used for database credentials






