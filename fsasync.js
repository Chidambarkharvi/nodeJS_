console.log("program start");
const fs = require("fs");
const writefile = () => {
  fs.writeFile("view/view.txt", "this is node js", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("the data has been written");
    }
  });
};

const readfile = () => {
  fs.readFile("view/view.txt", (err, data) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log("the data in the file", data.toString());
    }
  });
};

fs.exists("view", (exists) => {
  if (!exists) {
    fs.mkdir("view", (folderErr) => {
      if (folderErr) {
        console.log("folder has not been created");
      } else {
        writefile();
        readfile();
      }
    });
  } else {
    writefile();
    readfile();
  }
});
