/* WebServer*/

// Local imports
require("module-alias/register");
import { addEndPoint } from "@services/restFullApi";
import { StartAPI } from "@services/restFullApi";

class WebServer{
    
    port: number;

    constructor(port: number){
        this.port = port;
        this.addEndPoints();
        this.start();
    }

    addEndPoints(){
        // Add endpoints
        let endPoint = new addEndPoint();
        // Call needed enpoints
        endPoint.index();
        endPoint.dashboard_main();
        endPoint.auth();
    }
    start(){
        let start = new StartAPI(this.port);
        start;
    }
}

// Define webserver port
let port = 3000;
// Start the webserver
new WebServer(port);

