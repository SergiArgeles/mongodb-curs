//Find all students
//print("Find all students")
//printjson(db.students.find({}))
//print("Find all students and limit to one student ")
//printjson(db.students.find({}).limit(1))

//Insert one student with insertOne instruction
//print("Insert one student with insertOne instruction")
//printjson(db.students.insertOne({name: "Sergi", major: "Computer Science", gpa: 8.0}))

//Insert multiple students with insertMany instruction
//print("Insert multiple student with insertMany instruction")
//printjson(db.students.insertMany([
//  {name: "Joan", major: "Programacio", gpa: 9.0},
//  {name: "Pere", major: "Hardware", gpa: 2.5}
//                                ])
//         )


//Update a student with updateOne instruction
//print("Update a student with updateOne instruction")
//printjson(db.students.updateOne(
//  { name: "Sergi" },
//  { $set: { gpa: 10 } }
//))


//Update multiple students with updateMany instruction
//print("Update multiple students with updateMani instruction")
//printjson(db.students.updateMany(
//  { gpa: { $lt: 3.9 } },
//  { $inc: { gpa: 0.5 } }
//                                )
//         )

//Delete multiple students with deleteMany instruction
//print("Delete multiple students with deleteMany instruction")
//printjson(db.students.deleteMany(
//  { gpa: { $lt: 3.9} }
//                                )
//         )

//Per netejar, esborrem les files inserides abans
//print("Delete multiple students with deleteMany instruction")
//printjson(db.students.deleteMany(
//  { name: "Sergi"}
//                                )
//         )
//print("Delete multiple students with deleteMany instruction")
//printjson(db.students.deleteMany(
//  { name: "Pere"}
//                                )
//         )
//print("Delete multiple students with deleteMany instruction")
//printjson(db.students.deleteMany(
//  { name: "Joan"}
//                                )
//         )


//Find first student according insertion order
//print("Find first student according insertion order")
//printjson(db.students.findOne({}))

//Find all students ordered by name
print("Find all students ordered by name")
printjson(db.students.find().sort({name: 1}))

//drop students collection
print("drop students collection")
printjson(db.students.drop())










