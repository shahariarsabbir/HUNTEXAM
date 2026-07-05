const StudentDashboard = ({ students, filteredStudents }) => {
	const totalStudents = students.length
	const totalClasses = 10

	// Count students in each class
	const classCounts = {}

	students.forEach((student) => {
		classCounts[student.class] = (classCounts[student.class] || 0) + 1
	})

	// Find class with the highest number of students
	let topClass = '-'
	let highest = 0

	Object.entries(classCounts).forEach(([cls, count]) => {
		if (count > highest) {
			highest = count
			topClass = `Class ${cls}`
		}
	})

	const cards = [
		{
			title: 'Total Students',
			value: totalStudents,
			icon: '👨‍🎓',
			color: 'from-primary to-primary/70',
		},
		{
			title: 'Total Classes',
			value: totalClasses,
			icon: '📚',
			color: 'from-secondary to-secondary/70',
		},
		{
			title: 'Search Results',
			value: filteredStudents.length,
			icon: '🔍',
			color: 'from-accent to-accent/70',
		},
		{
			title: 'Largest Class',
			value: topClass,
			icon: '🏆',
			color: 'from-success to-success/70',
		},
	]

	return (
		<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 mb-8">
			{cards.map((card) => (
				<div
					key={card.title}
					className={`rounded-2xl bg-gradient-to-r ${card.color} text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl`}
				>
					<div className="p-6 flex items-center justify-between">
						<div>
							<p className="text-sm opacity-90">{card.title}</p>

							<h2 className="text-3xl font-bold mt-2">{card.value}</h2>
						</div>

						<div className="text-5xl">{card.icon}</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default StudentDashboard
