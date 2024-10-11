const db = require('../config/db-config');

function registerStudent(req, res) {
    
    const { studentName, age, contactNumber } = req.body;

    const query = `INSERT INTO student (studentName, age, contactNumber) VALUES (?, ?, ?)`;

    db.query(query, [studentName, age, contactNumber], (err, result) => {
        if (err) {
            console.log("Student not added:", err.message);
            res.status(500).send("Error adding student");
        } else {
            console.log("Student added successfully");
            res.send(result);
        }
    });
}

exports.registerStudent = registerStudent;

