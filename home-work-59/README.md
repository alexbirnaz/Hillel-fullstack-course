# File Compression with Gzip Streams

Async file compression and decompression using Node.js streams and the zlib module.

## Run

```bash
node main.js
```

## Functions

- `compressFile(filePath)` — compresses a file with Gzip, returns path to `.gz` file
- `decompressFile(compressedFilePath, destinationFilePath)` — decompresses a `.gz` file, returns path to output

## Notes

- Uses streams (createReadStream/createWriteStream) and pipeline for memory-efficient processing
- Generates a unique filename (adds a counter) if the target file already exists
- Errors on read/write/access are caught and re-thrown with a clear message
