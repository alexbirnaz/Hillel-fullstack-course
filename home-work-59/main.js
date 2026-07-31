import { createReadStream, createWriteStream } from "fs";
import { access } from "fs/promises";
import { createGzip, createGunzip } from "zlib";
import { pipeline } from "stream/promises";

async function getUniquePath(filePath) {
  let uniquePath = filePath;
  let counter = 1;

  while (true) {
    try {
      await access(uniquePath);
      const dotIndex = filePath.lastIndexOf(".");
      if (dotIndex === -1) {
        uniquePath = `${filePath}_${counter}`;
      } else {
        const name = filePath.slice(0, dotIndex);
        const ext = filePath.slice(dotIndex);
        uniquePath = `${name}_${counter}${ext}`;
      }
      counter++;
    } catch {
      return uniquePath;
    }
  }
}

async function compressFile(filePath) {
  try {
    const outputPath = await getUniquePath(`${filePath}.gz`);

    await pipeline(
      createReadStream(filePath),
      createGzip(),
      createWriteStream(outputPath),
    );

    return outputPath;
  } catch (error) {
    throw new Error(`Compression failed: ${error.message}`);
  }
}

async function decompressFile(compressedFilePath, destinationFilePath) {
  try {
    const outputPath = await getUniquePath(destinationFilePath);

    await pipeline(
      createReadStream(compressedFilePath),
      createGunzip(),
      createWriteStream(outputPath),
    );

    return outputPath;
  } catch (error) {
    throw new Error(`Decompression failed: ${error.message}`);
  }
}

export { compressFile, decompressFile };
