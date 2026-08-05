# MongoDB Shell Operations

Practice with MongoDB Shell (mongosh): documents, aggregation, and indexes.

## How to run

Start a MongoDB container and open the shell:

docker run -d --name mongo-shell -p 27018:27017 mongo
docker exec -it mongo-shell mongosh

Then run the commands from commands.js inside the shell.

## Task 1 — Basic operations

- Create database studentDB and collection assignments
- Insert 5 students (name, subject, score)
- Find documents where score > 80 ($gt)
- Update: add 5 points to a student with score < 85 ($lt + $inc)
- Delete the student with the lowest score (deleteOne)
- Find with projection: only name and score

## Task 2 — Aggregation

Group by subject and compute average score, then filter subjects with average > 75:

db.assignments.aggregate([
{ group: { _id: " subject", avgScore: {
𝑎
𝑣
𝑔
:
"
avg:"score" } } },
{ $match: { avgScore: { $gt: 75 } } }
])

## Task 3 — Indexes

- Create a unique index on name (prevents duplicate names)
- Search names starting with 'A' using a regex
- Compare performance with explain("executionStats"):
  - search by name (indexed) -> IXSCAN, examined only matching documents
  - search by subject (not indexed) -> COLLSCAN, examined all documents

This demonstrates how an index speeds up queries by avoiding a full collection scan.

## Files

- commands.js — all shell commands with comments
