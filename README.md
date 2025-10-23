1. mkdir typescript-demo
2. cd typescript-demo
3. npm i typescript -g
4. npx tsc --init OR tsc --init (creates tsconfig.json file)

TS Demo Video Steps:
1. node -v  (check Node.js is installed)
2. npm -v (check npm is installed)
3. npm init -y (create package.json file)
4. npm install --save-dev typescript (install ts locally as a devDependency)
5. npx tsc --init (creates tsconfig.json file)
6. edit tsconfig file:
    a. "target": "es6" OR "target": "ES2020"
    b. "rootDir": "./src"
    c. "outDir": "./dist"
    d. "strict": true
7. mkdir src
8. in new "src" directory, create index.ts file
    a. let message: string = "Hello, TypeScript!";
    b. console.log(message);
9. npx tsc (runs typscript compiler to output clean JS files into "dist" directory)
10. node dist/index.js
11. add these to "scripts" in package.json: 
    a. "build": "tsc"
    b. "start": "node dist/index.js"
    c. "dev": "tsc --watch"