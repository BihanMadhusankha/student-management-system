import React from "react"
import userpng from '../img/userpng.png'
const StudentForm = () => {
    return (
        <div class="container">
            <div className="row">
                <div className="col-6 mt-5">
                    <img src={userpng} alt="" srcset="" />
                </div>
                <div className="col-6 mt-5">
                    <div>
                        <h3>Student Information</h3>
                        <hr />
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name:</label>
                                <input type="text" class="form-control" id="name" />

                            </div>
                            <div class="mb-3">
                                <label for="age" class="form-label">Age:</label>
                                <input type="text" class="form-control" id="age" />
                            </div>
                            <div class="mb-3">
                                <label for="contact" class="form-label">Contact Number:</label>
                                <input type="text" class="form-control" id="contact" />
                            </div>
                        </form>
                    </div>

                    <div class="mt-6">
                        <h3>Guardian Information</h3>
                        <hr />
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name:</label>
                                <input type="text" class="form-control" id="name" />

                            </div>
                            <div class="mb-3">
                                <label for="age" class="form-label">Address:</label>
                                <input type="text" class="form-control" id="age" />
                            </div>
                            <div class="mb-3">
                                <label for="contact" class="form-label">Contact Number:</label>
                                <input type="text" class="form-control" id="contact" />
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )

}
export default StudentForm
