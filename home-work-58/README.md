# Crypto: Hashing & Password Security

Node.js functions for hashing and password security using the built-in `crypto` module.

## Run

```bash
node main.js
```

## Functions

- `generateHash(input)` — SHA-256 hash of a string, returns hex
- `generatePasswordHash(password, salt, iterations, keylen, digest)` — PBKDF2 password hash with salt
- `verifyPassword(inputPassword, storedHash, salt, ...)` — checks a password against a stored hash, returns boolean

## Notes

- SHA-256 for general hashing (deterministic)
- PBKDF2 with salt and iterations for passwords (resistant to brute-force and rainbow tables)
- Defaults: 10000 iterations, keylen 64, digest sha512
