const newman = require("newman");
require("dotenv").config();
newman.run(
  {
    collection: `https://api.postman.com/collections/25228731-aca69bd9-115a-48c8-8e46-cbc1ad3fd2e7?access_key=${process.env.secretKey}`,
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
