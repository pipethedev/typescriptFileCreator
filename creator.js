const fs = require("fs")
const readline = require('readline');

const files = ['Controller.ts', 'routes.ts', '.ts'];

const newData = [];

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("What file will you like to create ? ", (answer) => {
  files.forEach(myFunction);

  function myFunction(value, index, array) {
    let controllerFile = `${answer}${value}`;
    let text = '';
    let dir_name ;
    if (value === 'Controller.ts') {
      newData.push(`${answer}Controller.ts`);
      dir_name = 'controllers';
      let controllerFile = `${answer[0].toUpperCase()+answer.slice(1)}Controller.ts`;
      text = `import {NextFunction, Request, Response} from "express";
      
      export class ${answer[0].toUpperCase()+answer.slice(1)}Controller{
      
        public async post(req: Request, res: Response){}
      
        public async get(req: Request, res: Response){}
      
        public async updateOne(req: Request, res: Response){}
        
        public async update(req: Request, res: Response){}
      
        public async delete(req: Request, res: Response){}
              
      }`;
    }else if(value === 'routes.ts'){
      dir_name = 'routes';
      newData.push(`${answer}routes.ts`);
       text = `import { ${answer[0].toUpperCase()+answer.slice(1)}Controller } from "../controllers/${answer[0].toUpperCase()+answer.slice(1)}Controller";
          import {body} from "express-validator";
          
          export class PageRoutes {
              public ${answer}Controller: ${answer[0].toUpperCase()+answer.slice(1)}Controller = new ${answer[0].toUpperCase()+answer.slice(1)}Controller();
          
              public routes(app : any): void {
          
                  app.route('').post(this.${answer}Controller.post);
                  app.route('').get(this.${answer}Controller.get);
                  app.route('').put(this.${answer}Controller.updateOne);
                  app.route('').put(this.${answer}Controller.update);
                  app.route('').delete(this.${answer}Controller.delete);
          
              }}`;
    }else{
      newData.push(`${answer}.ts`);
      dir_name = 'models';
    text = `import * as mongoose from 'mongoose';
    
    const Schema = mongoose.Schema;
    
    export const ${answer[0].toUpperCase()+answer.slice(1)}Schema = new Schema({
    }, {
        timestamps : true
    });`;
    }

    fs.writeFile(`./lib/${dir_name}/${controllerFile}`, text,  (err) => {
      if (err) throw err;
    });
    console.log(`${newData}  created successfully`);
    rl.close();
  }

});