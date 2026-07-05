import {
	AcademicCapIcon,
	UserGroupIcon,
	BookOpenIcon,
	TrophyIcon,
	SparklesIcon,
	CheckBadgeIcon,
} from '@heroicons/react/24/outline'

export default function About() {
	return (
		<div className="bg-base-100">
			{/* Hero */}
			<section className="hero min-h-[70vh] bg-gradient-to-br from-primary via-secondary to-accent text-primary-content">
				<div className="hero-content text-center">
					<div className="max-w-4xl">
						<div className="badge badge-lg badge-outline mb-6">
							আগামী প্রজন্ম গড়ার অঙ্গীকার
						</div>

						<h1 className="text-5xl md:text-7xl font-black leading-tight">
							শিখুন।
							<span className="block text-yellow-300">এগিয়ে যান।</span>
							<span className="block">সফল হোন।</span>
						</h1>

						<p className="py-8 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
							আমরা প্রথম শ্রেণি থেকে দশম শ্রেণি পর্যন্ত শিক্ষার্থীদের জন্য
							মানসম্মত ও আধুনিক শিক্ষা প্রদান করি। দক্ষ শিক্ষক, যুগোপযোগী পাঠদান
							এবং নিয়মিত মূল্যায়নের মাধ্যমে প্রতিটি শিক্ষার্থীকে আত্মবিশ্বাসী,
							মেধাবী ও সফল করে গড়ে তোলাই আমাদের লক্ষ্য।
						</p>

						<button className="btn btn-neutral btn-lg rounded-full">
							আমাদের কোর্সসমূহ
						</button>
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="py-16 container mx-auto px-6">
				<div className="stats stats-vertical lg:stats-horizontal shadow w-full">
					<div className="stat">
						<div className="stat-figure text-primary">
							<UserGroupIcon className="w-10" />
						</div>
						<div className="stat-value">২৫০০+</div>
						<div className="stat-title">সফল শিক্ষার্থী</div>
					</div>

					<div className="stat">
						<div className="stat-figure text-secondary">
							<AcademicCapIcon className="w-10" />
						</div>
						<div className="stat-value">১০+</div>
						<div className="stat-title">বছরের অভিজ্ঞতা</div>
					</div>

					<div className="stat">
						<div className="stat-figure text-success">
							<TrophyIcon className="w-10" />
						</div>
						<div className="stat-value">৯৮%</div>
						<div className="stat-title">সফলতার হার</div>
					</div>
				</div>
			</section>

			{/* About */}
			<section className="container mx-auto px-6 py-16">
				<div className="grid lg:grid-cols-2 gap-14 items-center">
					<div>
						<span className="text-primary font-bold tracking-widest">
							আমাদের সম্পর্কে
						</span>

						<h2 className="text-4xl md:text-5xl font-bold mt-4">
							প্রতিটি শিক্ষার্থীর স্বপ্ন পূরণে আমরা প্রতিশ্রুতিবদ্ধ
						</h2>

						<p className="mt-6 text-base-content/70 leading-8">
							আমাদের প্রতিষ্ঠান প্রথম শ্রেণি থেকে দশম শ্রেণি পর্যন্ত
							শিক্ষার্থীদের জন্য উন্নত ও মানসম্মত শিক্ষা নিশ্চিত করে। আমরা শুধু
							পরীক্ষায় ভালো ফলাফলের দিকে নয়, বরং শিক্ষার্থীদের নৈতিকতা,
							সৃজনশীলতা, যুক্তিবোধ এবং আত্মবিশ্বাস বৃদ্ধির প্রতিও সমান গুরুত্ব
							দিই।
						</p>

						<p className="mt-5 text-base-content/70 leading-8">
							অভিজ্ঞ শিক্ষক, আধুনিক শিক্ষণ পদ্ধতি, নিয়মিত পরীক্ষা, ব্যক্তিগত
							যত্ন এবং প্রযুক্তিনির্ভর শিক্ষার মাধ্যমে প্রতিটি শিক্ষার্থীকে তার
							সর্বোচ্চ সম্ভাবনায় পৌঁছে দিতে আমরা নিরলসভাবে কাজ করি।
						</p>

						<button className="btn btn-primary mt-8">আরও জানুন</button>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
						<div className="card bg-base-200 shadow-xl">
							<div className="card-body">
								<BookOpenIcon className="w-10 text-primary" />
								<h3 className="font-bold text-xl">পূর্ণাঙ্গ পাঠ্যক্রম</h3>
								<p>
									জাতীয় শিক্ষাক্রম অনুযায়ী সকল বিষয় দক্ষতার সঙ্গে পাঠদান।
								</p>
							</div>
						</div>

						<div className="card bg-base-200 shadow-xl">
							<div className="card-body">
								<AcademicCapIcon className="w-10 text-secondary" />
								<h3 className="font-bold text-xl">অভিজ্ঞ শিক্ষক</h3>
								<p>অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকদের মাধ্যমে মানসম্মত শিক্ষা।</p>
							</div>
						</div>

						<div className="card bg-base-200 shadow-xl">
							<div className="card-body">
								<SparklesIcon className="w-10 text-accent" />
								<h3 className="font-bold text-xl">আধুনিক শিক্ষা ব্যবস্থা</h3>
								<p>
									প্রযুক্তিনির্ভর ও ইন্টারঅ্যাকটিভ ক্লাসের মাধ্যমে সহজে শেখা।
								</p>
							</div>
						</div>

						<div className="card bg-base-200 shadow-xl">
							<div className="card-body">
								<TrophyIcon className="w-10 text-success" />
								<h3 className="font-bold text-xl">অসাধারণ ফলাফল</h3>
								<p>
									ধারাবাহিকভাবে শিক্ষার্থীদের সফলতা ও চমৎকার একাডেমিক অর্জন।
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="bg-base-200 py-20">
				<div className="container mx-auto px-6">
					<div className="text-center max-w-3xl mx-auto">
						<h2 className="text-4xl font-bold">কেন আমাদের বেছে নেবেন?</h2>

						<p className="mt-5 text-base-content/70">
							আমরা বিশ্বাস করি, সঠিক শিক্ষা একজন শিক্ষার্থীর জীবন বদলে দিতে
							পারে।
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
						{[
							'ব্যক্তিগত যত্নসহ শিক্ষা',
							'অভিজ্ঞ শিক্ষক',
							'সাপ্তাহিক মূল্যায়ন',
							'সাশ্রয়ী ফি',
							'ডিজিটাল শিক্ষা উপকরণ',
							'সুন্দর ও নিরাপদ শিক্ষার পরিবেশ',
						].map((item) => (
							<div
								key={item}
								className="card bg-base-100 shadow-xl hover:-translate-y-2 transition-all duration-300"
							>
								<div className="card-body">
									<CheckBadgeIcon className="w-10 text-success" />
									<h3 className="font-bold text-xl">{item}</h3>

									<p className="text-base-content/70">
										শিক্ষার্থীদের দক্ষতা, আত্মবিশ্বাস এবং ভবিষ্যতের জন্য
										প্রস্তুত করে তোলাই আমাদের লক্ষ্য।
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Timeline */}
			<section className="py-20 container mx-auto px-6">
				<div className="text-center">
					<h2 className="text-4xl font-bold">আমাদের শিক্ষার ধাপ</h2>
				</div>

				<ul className="timeline timeline-vertical mt-16">
					<li>
						<div className="timeline-start">প্রাথমিক ভিত্তি</div>

						<div className="timeline-middle">📘</div>

						<div className="timeline-end timeline-box">
							প্রথম থেকে পঞ্চম শ্রেণির জন্য শক্তিশালী মৌলিক শিক্ষা।
						</div>

						<hr />
					</li>

					<li>
						<hr />

						<div className="timeline-start">মাধ্যমিক প্রস্তুতি</div>

						<div className="timeline-middle">📚</div>

						<div className="timeline-end timeline-box">
							ষষ্ঠ থেকে অষ্টম শ্রেণির জন্য উন্নত ও ধারণাভিত্তিক শিক্ষা।
						</div>

						<hr />
					</li>

					<li>
						<hr />

						<div className="timeline-start">বোর্ড পরীক্ষার প্রস্তুতি</div>

						<div className="timeline-middle">🎓</div>

						<div className="timeline-end timeline-box">
							নবম ও দশম শ্রেণির শিক্ষার্থীদের জন্য বিশেষ পরীক্ষাভিত্তিক
							প্রস্তুতি।
						</div>
					</li>
				</ul>
			</section>

			{/* CTA */}
			<section className="py-20 bg-primary text-primary-content">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-5xl font-bold">
						আজই আপনার শেখার যাত্রা শুরু করুন
					</h2>

					<p className="max-w-2xl mx-auto mt-6 text-lg opacity-90">
						আমাদের সঙ্গে যুক্ত হয়ে মানসম্মত শিক্ষা গ্রহণ করুন এবং আপনার
						শিক্ষাজীবনকে আরও সফল ও সমৃদ্ধ করে তুলুন।
					</p>

					<div className="mt-10 flex justify-center gap-4 flex-wrap">
						<button className="btn btn-neutral btn-lg rounded-full">
							ভর্তি হোন
						</button>

						<button className="btn btn-outline btn-lg rounded-full">
							যোগাযোগ করুন
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}
