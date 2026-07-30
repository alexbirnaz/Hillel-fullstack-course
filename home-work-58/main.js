import { createHash, pbkdf2Sync } from "crypto";

function generateHash(input) {
  return createHash("sha256").update(input).digest("hex");
}

function generatePasswordHash(
  password,
  salt,
  iterations = 10000,
  keylen = 64,
  digest = "sha512",
) {
  return pbkdf2Sync(password, salt, iterations, keylen, digest).toString("hex");
}

function verifyPassword(
  inputPassword,
  storedHash,
  salt,
  iterations = 10000,
  keylen = 64,
  digest = "sha512",
) {
  const inputHash = generatePasswordHash(
    inputPassword,
    salt,
    iterations,
    keylen,
    digest,
  );
  return inputHash === storedHash;
}

export { generateHash, generatePasswordHash, verifyPassword };
