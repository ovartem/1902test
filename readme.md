**Project for evaluation QA Automation proficiency**

The project was created to test an application(oos_ca) 
using _Cypress_ and _TypeScript_.

### Running locally
1) `npm install` - install all dependencies
2) `npm run compile` - compile ts files from 'src' folder to 'cypress' folder
3) `npm run cy:open` - open cypress (application (oos_ca) should already be launched)

To run all tests `npm run cy:run` (application (oos_ca) should already be launched)

Test results will be stored under results/ folder

src/integration - contains spec files

src/support/selectors - contains all necessary selectors

cypressJS - contains fixtures with users.json data and plugins folder (necessary for cypress)

