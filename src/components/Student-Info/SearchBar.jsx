const SearchBar = ({
	search,
	setSearch,
	selectedClass,
	setSelectedClass,
	onAddStudent,
}) => {
	const classes = Array.from({ length: 10 }, (_, i) => i + 1)

	return (
		<div className="card bg-base-100 shadow-xl border border-base-300 mb-8">
			<div className="card-body">
				<div className="flex flex-col lg:flex-row gap-4 items-center">
					{/* Search */}
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text font-semibold">
								🔍 Search Student
							</span>
						</label>

						<input
							type="text"
							placeholder="Search by student name..."
							className="input input-bordered w-full"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>

					{/* Filter */}
					<div className="form-control w-full lg:w-60">
						<label className="label">
							<span className="label-text font-semibold">📚 Filter Class</span>
						</label>

						<select
							className="select select-bordered"
							value={selectedClass}
							onChange={(e) => setSelectedClass(e.target.value)}
						>
							<option value="all">All Classes</option>

							{classes.map((cls) => (
								<option key={cls} value={cls}>
									Class {cls}
								</option>
							))}
						</select>
					</div>

					{/* Button */}
					<div className="w-full lg:w-auto lg:mt-8">
						<button
							className="btn btn-primary w-full lg:w-auto"
							onClick={onAddStudent}
						>
							➕ Add Student
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchBar
