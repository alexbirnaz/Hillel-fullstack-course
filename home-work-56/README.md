cd /Users/alex/Hillel-fullstack-course/home-work-56 && cat > README.md << 'EOF'

# Node.js Event Loop

Demonstrates async execution order in Node.js event loop.

## Run

```bash
node main.js
```

## Concepts

- Synchronous code runs first
- process.nextTick — microtask, highest priority
- setImmediate — check phase
- setTimeout(0) — timers phase
  EOF
