## Steps to add plugins in eslint

pre-requities - we should have typescript running with eslit 

NOTE - use https://astexplorer.net/ get Abstract Syntax Tree

1. Create eslintRules folder at root level

2. initilize node project inside eslintRules with name 'eslint-plugin-my-lint'. 

Note - to create custom plugin name of plugin look like [eslint-plugin-{pulgin_name_here}]

3. Create an index.js file inside the eslint directory.

4. write your own rule 

References - https://dev.to/devsmitra/how-to-create-a-custom-eslint-plugin-3bom

5. go back to your root folder of the project
6. Add  dependency in package.json 
    
    npm i file:packages/eslintrule -D

7. Update .eslintric.js
8. run eslint report

    ![eslit](./images/eslint.png)