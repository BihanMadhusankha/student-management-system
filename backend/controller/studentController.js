const db = require('../config/db-config');

function registerStudent() {
    const query = `INSERT INTO student ( studentName, age,contactNumber) VALUES ('?,?,?')`;
    db.query(query,[studentName,age,contactNumber], (err, result) => {
        if(err) {
            console.log("student not added");
        } else {
            console.log("student is added");
            res.send(result);
        }
    })
}
exports.registerStudent = registerStudent;