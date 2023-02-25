const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const {  exec } = require("child_process");
const programmingLanguages = require("./language.json");

// App Constants
const app = express();
const port = 8080;
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/api", async (req, res) => {
  const { plid, code, argsEncoded } = req.body;
  const currentLanguage = await programmingLanguages.find(
    (language) => language.id === plid
  );
  let buff = new Buffer(code, "base64");
  fs.writeFileSync(currentLanguage.source_file, buff);
  const args = new Buffer(argsEncoded, "base64").toString("ascii");
  const command = currentLanguage.compile_cmd
    ? currentLanguage.compile_cmd + ' && ' + currentLanguage.run_cmd
    : currentLanguage.run_cmd;

  const childProcess = await exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    res.send({ plid, stdout, stderr });
  });
  await childProcess.stdin.write(args);
  await childProcess.stdin.end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));