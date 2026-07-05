const StudentTable = ({ className, students, onEdit, onDelete }) => {
	return (
		<div className="card bg-base-100 shadow-xl border border-base-300 mb-8">
			<div className="card-body">
				{/* Header */}
				<div className="flex items-center justify-between mb-6">
					<div>
						<h2 className="text-2xl font-bold">📚 Class {className}</h2>

						<p className="text-sm opacity-70">Students of Class {className}</p>
					</div>

					<div className="badge badge-primary badge-lg">
						{students.length} Student{students.length !== 1 && 's'}
					</div>
				</div>

				{/* Empty State */}
				{students.length === 0 ? (
					<div className="text-center py-16">
						<div className="text-6xl mb-4">🎓</div>

						<h3 className="text-xl font-semibold">No Students Found</h3>

						<p className="opacity-60 mt-2">
							There are no students in this class.
						</p>
					</div>
				) : (
					<div className="overflow-x-auto">
						<table className="table table-zebra">
							<thead>
								<tr>
									<th>#</th>
									<th>Student</th>
									<th>Class</th>
									<th className="text-center">Action</th>
								</tr>
							</thead>

							<tbody>
								{students.map((student, index) => (
									<tr key={student._id} className="hover">
										<td>{index + 1}</td>

										<td>
											<div className="flex items-center gap-4">
												{/* Avatar */}
												<div className="avatar placeholder">
													<div className="bg-primary text-primary-content rounded-full w-12">
														<span className="font-bold">
															{student.name
																.split(' ')
																.map((word) => word[0])
																.join('')
																.substring(0, 2)
																.toUpperCase()}
														</span>
													</div>
												</div>

												{/* Name */}
												<div>
													<div className="font-bold">{student.name}</div>

													<div className="text-sm opacity-60">Student</div>
												</div>
											</div>
										</td>

										<td>
											<span className="badge badge-outline badge-primary">
												Class {student.class}
											</span>
										</td>

										<td>
											<div className="flex justify-center gap-2">
												<button
													className="btn btn-warning btn-sm"
													onClick={() => onEdit(student)}
												>
													✏️ Edit
												</button>

												<button
													className="btn btn-error btn-sm"
													onClick={() => onDelete(student._id)}
												>
													🗑 Delete
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	)
}

export default StudentTable
