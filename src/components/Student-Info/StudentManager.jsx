import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import StudentDashboard from './StudentDashboard'
import StudentForm from './StudentForm'
import StudentTable from './StudentTable'
import {
	getStudents,
	createStudent,
	updateStudent,
	deleteStudent as deleteStudentAPI,
} from '../Student-Info/StudentApi/StudentInfoApi'

const StudentManager = () => {
	const [students, setStudents] = useState([])
	const [loading, setLoading] = useState(false)

	const [search, setSearch] = useState('')
	const [selectedClass, setSelectedClass] = useState('all')

	const [showModal, setShowModal] = useState(false)
	const [editingStudent, setEditingStudent] = useState(null)

	const classes = Array.from({ length: 10 }, (_, i) => String(i + 1))

	useEffect(() => {
		loadStudents()
	}, [])

	const loadStudents = async () => {
		try {
			setLoading(true)

			const response = await getStudents()

			setStudents(response.data)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	const handleEditClick = (student) => {
		setEditingStudent(student)
		setShowModal(true)
	}

	const handleSubmitStudent = async (studentData) => {
		try {
			if (editingStudent) {
				await updateStudent(editingStudent._id, studentData)
			} else {
				await createStudent(studentData)
			}

			await loadStudents()

			setShowModal(false)
			setEditingStudent(null)
		} catch (error) {
			console.error(error)
		}
	}

	const deleteStudent = async (id) => {
		try {
			await deleteStudentAPI(id)
			await loadStudents()
		} catch (error) {
			console.error(error)
		}
	}

	const filteredStudents = students.filter((student) => {
		const matchName = student.name.toLowerCase().includes(search.toLowerCase())

		const matchClass =
			selectedClass === 'all' || student.class.toString() === selectedClass

		return matchName && matchClass
	})

	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				<span className="loading loading-spinner loading-lg text-primary"></span>
			</div>
		)
	}

	return (
		<div className="max-w-7xl mx-auto p-4 md:p-8">
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-4xl font-bold">🎓 Student Management</h1>

				<p className="text-base-content/70 mt-2">
					Manage students from Class 1 to Class 10
				</p>
			</div>

			{/* Dashboard */}
			<StudentDashboard
				students={students}
				filteredStudents={filteredStudents}
			/>

			{/* Search */}
			<SearchBar
				search={search}
				setSearch={setSearch}
				selectedClass={selectedClass}
				setSelectedClass={setSelectedClass}
				onAddStudent={() => {
					setEditingStudent(null)
					setShowModal(true)
				}}
			/>
			{filteredStudents.length === 0 && (
				<div className="alert alert-info my-6">
					<span>No students found.</span>
				</div>
			)}

			{/* Student Tables */}
			<div className="space-y-8">
				{classes.map((cls) => {
					const classStudents = filteredStudents.filter(
						(student) => student.class.toString() === cls,
					)

					return (
						<StudentTable
							key={cls}
							className={cls}
							students={classStudents}
							onEdit={handleEditClick}
							onDelete={deleteStudent}
						/>
					)
				})}
			</div>

			{/* Add / Edit Modal */}
			<StudentForm
				isOpen={showModal}
				editStudent={editingStudent}
				onClose={() => {
					setShowModal(false)
					setEditingStudent(null)
				}}
				onSubmit={handleSubmitStudent}
			/>
		</div>
	)
}

export default StudentManager
