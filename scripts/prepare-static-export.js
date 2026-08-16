const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

if (!fs.existsSync(outDir)) {
  console.error("out/ not found. Run next build first.");
  process.exit(1);
}

const skip = new Set(["index.html", "404.html"]);

function copyDirIndexFromHtml() {
  const names = fs.readdirSync(outDir);
  names.forEach((name) => {
    if (!name.endsWith(".html") || skip.has(name)) {
      return;
    }
    const page = name.replace(/\.html$/, "");
    const htmlPath = path.join(outDir, name);
    const dir = path.join(outDir, page);
    const indexPath = path.join(dir, "index.html");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.copyFileSync(htmlPath, indexPath);
  });
}

function copyVisibleHtaccess() {
  const hidden = path.join(outDir, ".htaccess");
  const visible = path.join(outDir, "htaccess.txt");
  if (fs.existsSync(hidden)) {
    fs.copyFileSync(hidden, visible);
  }
}

copyDirIndexFromHtml();
copyVisibleHtaccess();
console.log("Static export ready: /cart and /cart/ both map to cart.html");
