import fs from "fs";
import path from "path";

const baseDir = path.resolve("./src/components");

const components = [
  "Header",
  "Hero",
  "AboutMe",
  "Benefits",
  "Projects",
  "FAQ",
  "Covers",
  "Reviews",
  "WorkTogether",
  "Modal"
];

// Функція створення папки і файлів
function createComponentFolder(name) {
  const folderPath = path.join(baseDir, name);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Created folder: ${folderPath}`);
  }

  const jsxPath = path.join(folderPath, `${name}.jsx`);
  const cssModulePath = path.join(folderPath, `${name}.module.css`);

  if (!fs.existsSync(jsxPath)) {
    fs.writeFileSync(
      jsxPath,
      `import styles from './${name}.module.css';\n\n` +
        `export const ${name} = () => {\n` +
        `  return (\n` +
        `    <div className={styles.container}>\n` +
        `      {/* TODO: ${name} component content */}\n` +
        `    </div>\n` +
        `  );\n` +
        `};\n`
    );
    console.log(`Created file: ${jsxPath}`);
  }

  if (!fs.existsSync(cssModulePath)) {
    fs.writeFileSync(
      cssModulePath,
      `.container {\n  /* styles for ${name} */\n}\n`
    );
    console.log(`Created file: ${cssModulePath}`);
  }
}

components.forEach(createComponentFolder);
