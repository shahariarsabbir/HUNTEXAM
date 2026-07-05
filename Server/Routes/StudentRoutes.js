const express = require('express')

const {
	getStudents,
	createStudent,
	updateStudent,
	deleteStudent,
} = require('../Controllers/StudentController')

const router = express.Router()

// GET all students
router.get('/', getStudents)

// CREATE student
router.post('/', createStudent)

// UPDATE student
router.put('/:id', updateStudent)

// DELETE student
router.delete('/:id', deleteStudent)

module.exports = router
