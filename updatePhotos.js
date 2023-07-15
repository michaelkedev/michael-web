const fs = require("fs");
const filePath = "./public/gallery/";

const createFileList = () => {
  const files = fs.readdirSync(filePath);

  try {
    fs.writeFileSync(
      "./src/utils/photos.json",
      JSON.stringify({ files: files })
    );
  } catch (err) {
    console.error("無法複寫檔案:", err);
  }
};

createFileList();

fs.watch(filePath, (event, filename) => {
  createFileList();
});
