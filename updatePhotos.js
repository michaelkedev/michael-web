const fs = require("fs");
const filePath = "./public/gallery/";

const msg = (type, msg) => {
  // 設置控制台輸出顏色
  const reset = "\x1b[0m";
  const red = "\x1b[31m";
  const green = "\x1b[32m";
  const yellow = "\x1b[33m";

  let color = yellow;
  if (["Success", "Build"].includes(type)) color = green;
  else if (["Waring", "Watching"].includes(type)) color = yellow;
  else if (["Error", "Failed"].includes(type)) color = red;

  console.log(`${color}[${type}]${reset} ${msg}`);
};

const createFileList = () => {
  msg("Building", "building...");
  const files = fs.readdirSync(filePath);

  try {
    fs.writeFileSync(
      "./src/utils/photos.json",
      JSON.stringify({ files: files })
    );
    msg("Success", "builded.");
  } catch (err) {
    msg("Error", err);
  }
};

const mode = process.argv[2] ?? "";

if (["-w", "--watch"].includes(mode)) {
  msg("Watching", "start watching files...");

  fs.watch(filePath, (event, filename) => {
    msg("Watching", `${event}-detected: ${filename}`);
    createFileList();
  });
}
createFileList();
