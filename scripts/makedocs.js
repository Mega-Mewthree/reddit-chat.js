"use strict";

const jsdoc2md = require("jsdoc-to-markdown");
const fs = require("fs");
const path = require("path");

function generateClassDocsForFolder(inputDir, outputDir) {
  const templateData = jsdoc2md.getTemplateDataSync({
    files: inputDir
  });
  const classNames = templateData.reduce((classNames, identifier) => {
    if (identifier.kind === "class") classNames.push(identifier.name);
    return classNames;
  }, []);
  for (const className of classNames) {
    const template = `{{#class name="${className}"}}{{>docs}}{{/class}}`;
    console.log(`Rendering ${className}`);
    const output = jsdoc2md.renderSync({
      data: templateData,
      template: template,
      "no-gfm": true
    });
    console.log(`Writing ${className}`);
    fs.writeFileSync(path.join(outputDir, `${className}.md`), output);
  }
}

generateClassDocsForFolder(path.join(__dirname, "../src/structs/*"), path.join(__dirname, "../docs/structs/"));

console.log("Done.");
