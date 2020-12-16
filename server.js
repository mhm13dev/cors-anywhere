require("dotenv").config();
// Listen on a specific host via the HOST environment variable
const HOST = process.env.HOST || "localhost";
// Listen on a specific port via the PORT environment variable
const PORT = process.env.PORT || 3000;

const cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(PORT, HOST, function () {
    console.log("Running CORS Anywhere on " + HOST + ":" + PORT);
  });
