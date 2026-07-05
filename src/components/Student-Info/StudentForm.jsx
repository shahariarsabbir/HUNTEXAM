import { useEffect, useState } from 'react'

const StudentForm = ({ isOpen, onClose, onSubmit, editStudent = null }) => {
	const [name, setName] = useState('')
	const [studentClass, setStudentClass] = useState('1')

	const handleEditClick = (student) => {
		setEditingStudent(student)
		setShowModal(true)
	}

	const handleSubmitStudent = async (studentData) => {
		try {
			if (editingStudent) {
				const { data } = await updateStudent(editingStudent._id, studentData)

				setStudents((prev) =>
					prev.map((student) => (student._id === data._id ? data : student)),
				)
			} else {
				const { data } = await createStudent(studentData)

				setStudents((prev) => [...prev, data])
			}

			setShowModal(false)
			setEditingStudent(null)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		if (editStudent) {
			setName(editStudent.name)
			setStudentClass(editStudent.class)
		} else {
			setName('')
			setStudentClass('1')
		}
	}, [editStudent, isOpen])

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!name.trim()) return

		onSubmit({
			...editStudent,
			name: name.trim(),
			class: studentClass,
		})

		setName('')
		setStudentClass('1')
	}

	if (!isOpen) return null

	return (
		<dialog className="modal modal-open">
			<div className="modal-box max-w-lg">
				{/* Header */}
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-bold">
						{editStudent ? '✏️ Edit Student' : '➕ Add Student'}
					</h2>

					<button className="btn btn-circle btn-sm" onClick={onClose}>
						✕
					</button>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label className="label">
							<span className="label-text font-semibold">Student Name</span>
						</label>

						<input
							type="text"
							className="input input-bordered w-full"
							placeholder="Enter student name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div>
						<label className="label">
							<span className="label-text font-semibold">Class</span>
						</label>

						<select
							className="select select-bordered w-full"
							value={studentClass}
							onChange={(e) => setStudentClass(e.target.value)}
						>
							{Array.from({ length: 10 }, (_, i) => (
								<option key={i + 1} value={String(i + 1)}>
									Class {i + 1}
								</option>
							))}
						</select>
					</div>

					<div className="modal-action">
						<button type="button" className="btn" onClick={onClose}>
							Cancel
						</button>

						<button type="submit" className="btn btn-primary">
							{editStudent ? 'Update Student' : 'Add Student'}
						</button>
					</div>
				</form>
			</div>

			<div className="modal-backdrop" onClick={onClose}></div>
		</dialog>
	)
}

export default StudentForm
