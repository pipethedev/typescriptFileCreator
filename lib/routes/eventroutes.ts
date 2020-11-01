import { EventController } from "../controllers/EventController";
          import {body} from "express-validator";
          
          export class PageRoutes {
              public eventController: EventController = new EventController();
          
              public routes(app : any): void {
          
                  app.route('').post(this.eventController.post);
                  app.route('').get(this.eventController.get);
                  app.route('').put(this.eventController.updateOne);
                  app.route('').put(this.eventController.update);
                  app.route('').delete(this.eventController.delete);
          
              }}