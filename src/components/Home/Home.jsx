import React from 'react'

const Home = () => {
	return (
		<div>
			{/* Hero Section */}
			<section className="hero min-h-screen lg:min-h-[90vh] bg-base-200 py-10">
				<div className="hero-content flex-col-reverse lg:flex-row-reverse max-w-7xl mx-auto gap-10 px-5">
					<img
						src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900&auto=format&fit=crop&q=80"
						alt="Books"
						className="rounded-3xl shadow-2xl lg:w-1/2 h-[500px] object-cover"
					/>

					<div className="lg:w-1/2">
						<h1 className="text-5xl font-bold leading-tight">
							আপনার স্বপ্ন পূরণের
							<span className="text-primary block mt-2">
								বিশ্বস্ত শিক্ষা প্রতিষ্ঠান
							</span>
						</h1>

						<p className="py-6 text-lg text-gray-600">
							Hunt Exam Academy-তে রয়েছে অভিজ্ঞ শিক্ষক, আধুনিক পাঠদান পদ্ধতি,
							নিয়মিত মডেল টেস্ট এবং সফলতার নিশ্চয়তা। আমরা এসএসসি, এইচএসসি,
							বিশ্ববিদ্যালয় ভর্তি, ব্যাংক, বিসিএস ও চাকরির প্রতিযোগিতামূলক
							পরীক্ষার জন্য মানসম্মত শিক্ষা প্রদান করি।
						</p>

						<div className="flex gap-4">
							<button className="btn btn-primary btn-lg">
								কোর্সসমূহ দেখুন
							</button>

							<button className="btn btn-outline btn-lg">যোগাযোগ করুন</button>
						</div>
					</div>
				</div>
			</section>

			{/* About */}
			{/* Why Choose Us */}
			<section className="py-24 bg-base-100">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold">
							কেন বেছে নেবেন
							<span className="text-primary"> Hunt Exam Academy?</span>
						</h2>

						<p className="mt-6 text-lg text-gray-500 leading-8">
							আমরা শুধু পাঠদান করি না, বরং প্রতিটি শিক্ষার্থীর দক্ষতা,
							আত্মবিশ্বাস এবং সফল ক্যারিয়ার গড়ে তোলার জন্য সর্বোচ্চ আন্তরিকতার
							সঙ্গে কাজ করি।
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{/* Card 1 */}
						<div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div className="card-body items-center text-center">
								<div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl">
									🎓
								</div>

								<h3 className="text-xl font-bold mt-4">অভিজ্ঞ শিক্ষক</h3>

								<p className="text-gray-500">
									বিষয়ভিত্তিক দক্ষ ও অভিজ্ঞ শিক্ষকদের মাধ্যমে সহজ ও কার্যকর
									পাঠদান।
								</p>
							</div>
						</div>

						{/* Card 2 */}
						<div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div className="card-body items-center text-center">
								<div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-4xl">
									📖
								</div>

								<h3 className="text-xl font-bold mt-4">আধুনিক পাঠদান</h3>

								<p className="text-gray-500">
									স্মার্ট ক্লাসরুম, আপডেটেড স্টাডি ম্যাটেরিয়াল এবং
									প্রযুক্তিনির্ভর শিক্ষা ব্যবস্থা।
								</p>
							</div>
						</div>

						{/* Card 3 */}
						<div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div className="card-body items-center text-center">
								<div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center text-4xl">
									📝
								</div>

								<h3 className="text-xl font-bold mt-4">নিয়মিত মূল্যায়ন</h3>

								<p className="text-gray-500">
									সাপ্তাহিক পরীক্ষা, মডেল টেস্ট এবং ব্যক্তিগত পারফরম্যান্স
									বিশ্লেষণ।
								</p>
							</div>
						</div>

						{/* Card 4 */}
						<div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div className="card-body items-center text-center">
								<div className="w-20 h-20 rounded-full bg-warning/10 flex items-center justify-center text-4xl">
									🏆
								</div>

								<h3 className="text-xl font-bold mt-4">সাফল্যের ধারাবাহিকতা</h3>

								<p className="text-gray-500">
									হাজারো সফল শিক্ষার্থীর আস্থা ও দীর্ঘদিনের সাফল্যের অভিজ্ঞতা।
								</p>
							</div>
						</div>
					</div>

					{/* Bottom Statistics */}

					<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
						<div className="text-center">
							<h3 className="text-4xl font-bold text-primary">৫,০০০+</h3>
							<p className="mt-2 text-gray-500">সফল শিক্ষার্থী</p>
						</div>

						<div className="text-center">
							<h3 className="text-4xl font-bold text-primary">২৫+</h3>
							<p className="mt-2 text-gray-500">অভিজ্ঞ শিক্ষক</p>
						</div>

						<div className="text-center">
							<h3 className="text-4xl font-bold text-primary">১০+</h3>
							<p className="mt-2 text-gray-500">বছরের অভিজ্ঞতা</p>
						</div>

						<div className="text-center">
							<h3 className="text-4xl font-bold text-primary">৯৮%</h3>
							<p className="mt-2 text-gray-500">সফলতার হার</p>
						</div>
					</div>
				</div>
			</section>

			{/* Courses */}

			<section className="py-20 bg-base-200">
				<div className="max-w-7xl mx-auto px-5">
					<h2 className="text-4xl font-bold text-center mb-12">
						আমাদের জনপ্রিয় কোর্সসমূহ
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							'এসএসসি প্রস্তুতি',
							'এইচএসসি প্রস্তুতি',
							'বিশ্ববিদ্যালয় ভর্তি',
							'ব্যাংক চাকরি',
							'বিসিএস প্রস্তুতি',
							'ইংরেজি স্পোকেন কোর্স',
						].map((course) => (
							<div key={course} className="card bg-base-100 shadow-xl">
								<div className="card-body">
									<h2 className="card-title">{course}</h2>

									<p>অভিজ্ঞ শিক্ষকদের মাধ্যমে সম্পূর্ণ প্রস্তুতি গ্রহণ করুন।</p>

									<div className="card-actions justify-end">
										<button className="btn btn-primary">বিস্তারিত দেখুন</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Statistics */}

			<section className="py-20">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-10">আমাদের অর্জন</h2>

					<div className="stats stats-vertical lg:stats-horizontal shadow w-full">
						<div className="stat">
							<div className="stat-value text-primary">৫,০০০+</div>
							<div className="stat-title">শিক্ষার্থী</div>
						</div>

						<div className="stat">
							<div className="stat-value text-primary">২৫+</div>
							<div className="stat-title">অভিজ্ঞ শিক্ষক</div>
						</div>

						<div className="stat">
							<div className="stat-value text-primary">৯৮%</div>
							<div className="stat-title">সফলতার হার</div>
						</div>

						<div className="stat">
							<div className="stat-value text-primary">১০+</div>
							<div className="stat-title">বছরের অভিজ্ঞতা</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}

			<section className="hero bg-primary text-primary-content py-20">
				<div className="hero-content text-center">
					<div>
						<h2 className="text-5xl font-bold">
							আজই আপনার স্বপ্নের যাত্রা শুরু করুন
						</h2>

						<p className="py-6 text-lg">
							সফল ক্যারিয়ার গড়তে Hunt Exam Academy-এর সাথে যুক্ত হোন।
						</p>

						<button className="btn btn-neutral btn-lg">এখনই ভর্তি হন</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
