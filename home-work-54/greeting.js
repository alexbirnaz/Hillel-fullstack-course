export function getUserGreeting() {
  const name = process.argv[2];

  if (name) {
    return `Hello, ${name}`;
  }
  return "Hello, Guest";
}
