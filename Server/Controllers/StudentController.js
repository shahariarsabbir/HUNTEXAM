const Student = require('../Modals/Student')

/*
|--------------------------------------------------------------------------
| GET ALL STUDENTS
|--------------------------------------------------------------------------
*/

const getStudents = async (req, res) => {
	try {
		const students = await Student.find().sort({
			class: 1,
			name: 1,
		})

		res.status(200).json(students)
	} catch (error) {
		res.status(500).json({
			message: error.message,
		})
	}
}

/*
|--------------------------------------------------------------------------
| CREATE STUDENT
|--------------------------------------------------------------------------
*/

const createStudent = async (req, res) => {
	try {
		const { name, class: studentClass } = req.body

		if (!name || !studentClass) {
			return res.status(400).json({
				message: 'Name and Class are required',
			})
		}

		const student = await Student.create({
			name,
			class: studentClass,
		})

		res.status(201).json(student)
	} catch (error) {
		res.status(500).json({
			message: error.message,
		})
	}
}

/*
|--------------------------------------------------------------------------
| UPDATE STUDENT
|--------------------------------------------------------------------------
*/

const updateStudent = async (req, res) => {
	try {
		const { id } = req.params

		const { name, class: studentClass } = req.body

		const student = await Student.findById(id)

		if (!student) {
			return res.status(404).json({
				message: 'Student not found',
			})
		}

		student.name = name
		student.class = studentClass

		const updatedStudent = await student.save()

		res.status(200).json(updatedStudent)
	} catch (error) {
		res.status(500).json({
			message: error.message,
		})
	}
}

/*
|--------------------------------------------------------------------------
| DELETE STUDENT
|--------------------------------------------------------------------------
*/

const deleteStudent = async (req, res) => {
	try {
		const { id } = req.params

		const student = await Student.findById(id)

		if (!student) {
			return res.status(404).json({
				message: 'Student not found',
			})
		}

		await student.deleteOne()

		res.status(200).json({
			message: 'Student deleted successfully',
		})
	} catch (error) {
		res.status(500).json({
			message: error.message,
		})
	}
}

module.exports = {
	getStudents,
	createStudent,
	updateStudent,
	deleteStudent,
}
