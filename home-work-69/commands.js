// Homework 69 - MongoDB Shell operations
// All commands were executed in mongosh

// --- Task 1: Basic operations ---

// 1-2. Create database and collection
use studentDB

// 3. Insert 5 students
db.assignments.insertMany([
  { name: "Alice", subject: "Math", score: 90 },
  { name: "Bob", subject: "Math", score: 75 },
  { name: "Charlie", subject: "Physics", score: 82 },
  { name: "Diana", subject: "Physics", score: 68 },
  { name: "Adam", subject: "Chemistry", score: 88 }
])

// 4. Find all documents where score > 80
db.assignments.find({ score: { $gt: 80 } })

// 5. Update: add 5 points to a student with score < 85
db.assignments.updateOne(
  { score: { $lt: 85 } },
  { $inc: { score: 5 } }
)

// 6. Delete the student with the lowest score (Diana, 68)
db.assignments.deleteOne({ name: "Diana" })

// 7. Find with projection: only name and score
db.assignments.find({}, { name: 1, score: 1, _id: 0 })

// --- Task 2 (optional): Aggregation ---

// Group by subject, average score, only subjects with avg > 75
db.assignments.aggregate([
  { $group: { _id: "$subject", avgScore: { $avg: "$score" } } },
  { $match: { avgScore: { $gt: 75 } } }
])

// --- Task 3 (optional): Indexes ---

// 1. Create a unique index on name
db.assignments.createIndex({ name: 1 }, { unique: true })

// 2. Find students whose name starts with 'A'
db.assignments.find({ name: /^A/ })

// 3. Explain: with index (IXSCAN) vs without index (COLLSCAN)
db.assignments.find({ name: /^A/ }).explain("executionStats")     // uses index -> IXSCAN
db.assignments.find({ subject: "Math" }).explain("executionStats") // no index -> COLLSCAN