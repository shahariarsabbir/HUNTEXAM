import React from 'react'

const Newsletter = () => {
	return (
		<section className="bg-primary text-primary-content py-16">
			<div className="max-w-6xl mx-auto px-6 text-center">
				<h2 className="text-4xl font-bold">
					সর্বশেষ আপডেট পেতে সাবস্ক্রাইব করুন
				</h2>

				<p className="mt-4 text-lg opacity-90">
					নতুন কোর্স, নোটিশ এবং অফার সম্পর্কে জানতে আমাদের নিউজলেটারে যুক্ত
					থাকুন।
				</p>

				<div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
					<input
						type="email"
						placeholder="আপনার ইমেইল লিখুন"
						className="input input-bordered text-black w-full md:w-96"
					/>

					<button className="btn btn-neutral">সাবস্ক্রাইব করুন</button>
				</div>
			</div>
		</section>
	)
}

export default Newsletter
