import { writeFile, readFile, unlink } from "fs/promises";

async function writeFileAsync(filename, content) {
  try {
    await writeFile(filename, content);
    console.log("File written successfully");
  } catch (error) {
    console.error("Error writing file:", error);
  }
}

async function readFileAsync(filename) {
  try {
    const content = await readFile(filename, "utf-8");
    console.log("File read successfully:", content);
    return content;
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("File does not exist:", filename);
    } else {
      console.error("Error reading file:", error);
    }
  }
}

async function deleteFileAsync(filename) {
  try {
    await unlink(filename);
    console.log("File deleted successfully");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("File does not exist:", filename);
    } else {
      console.error("Error deleting file:", error);
    }
  }
}

export { writeFileAsync, readFileAsync, deleteFileAsync };
