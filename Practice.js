const fs = require("fs");
const writefile = () => {
  fs.writeFile("data/data.txt", " node js", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data  writtened");
      fs.appendFile("data/data.txt", "hello sachin", (err) => {
        console.log(err);
      })
    }
  });
};

fs.exists("data", (exists) => {
  if (!exists) {
    fs.mkdir("data", (Err) => {
      if (Err) {
        console.log("folder not  created");
      } else {
        console.log("data written");
      }
    });
  } else {
    writefile();
  }
});

fs.rename;
