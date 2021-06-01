import SongsController from "./Controllers/SongsController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();

  songsController = new SongsController();
}

window["app"] = new App();
