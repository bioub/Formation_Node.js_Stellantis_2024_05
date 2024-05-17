import { mkdir, rm } from "fs/promises";

async function emptyDir(dirPath) {
  await rm(dirPath, { force: true, recursive: true });
  await mkdir(dirPath);
  return dirPath;
}

function build() {
  emptyDir('dist');
  console.log(dirPath); // dist
}

build()