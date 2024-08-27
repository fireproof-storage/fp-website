const fs = require("fs");
const path = require("path");
const title = process.argv[2];

newPost();

function newPost() {
  const filePath = generateFilePath(title);
  const content = generateContent(title);
  fs.writeFile(filePath, content, { flag: "w+" }, (err) => {
    if (err) return console.log(err);
    console.log(`Created ${filePath}`);
  });
}

function cleanTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and dashes
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/-+/g, "-") // Replace multiple dashes with a single dash
    .trim(); // Trim leading and trailing spaces or dashes
}

function generateFilePath(title) {
  const cleanedTitle = cleanTitle(title);
  return path.join(__dirname, "..", "posts", `${cleanedTitle}.md`);
}

function generateContent(title) {
  const currentDate = new Date().toISOString();
  const content = `---
title: "${title}"
date: ${currentDate}
author: 
summary: 
tags:
  - use-case
  - post
---`;
  return content;
}
