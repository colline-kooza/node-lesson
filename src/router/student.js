import { createStudent, getStudents } from "../controller/student";

const { Router } = require("express");

export const student=Router()
student.post("api/student" , createStudent)
student.get("api/students" , getStudents)