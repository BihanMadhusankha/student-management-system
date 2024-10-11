import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import StudentForm from './studentForm'
export default function StudentHome() {
    return (
        <div >
            <div className="container">
                <div className="row">
                    <StudentForm/>
                </div>
            </div>

        </div>
    )
}
