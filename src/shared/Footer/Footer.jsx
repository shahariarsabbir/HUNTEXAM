import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {
	FaFacebookF,
	FaYoutube,
	FaInstagram,
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
} from 'react-icons/fa'
import Newsletter from './NewsLetter'

const Footer = () => {
	return (
		<footer className="bg-neutral text-neutral-content mt-20">
			<Newsletter />
			<div className="max-w-7xl mx-auto px-6 py-14">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Logo */}
					<div>
						<img
							src={Logo}
							alt="Hunt Exam Academy"
							className="h-25 w-auto mb-4"
						/>

						<h2 className="text-2xl font-bold">Hunt Exam Academy</h2>

						<p className="mt-3 text-sm leading-7 text-gray-300">
							শিক্ষার মাধ্যমে সফল ভবিষ্যৎ গড়ে তুলতে আমরা প্রতিশ্রুতিবদ্ধ।
							অভিজ্ঞ শিক্ষক, আধুনিক পাঠদান এবং নিয়মিত মূল্যায়নের মাধ্যমে আপনার
							স্বপ্নপূরণে পাশে আছি।
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="footer-title text-white">দ্রুত লিংক</h3>

						<div className="flex flex-col gap-3 mt-4">
							<Link to="/" className="hover:text-primary transition">
								হোম
							</Link>

							<Link
								to="/student-info"
								className="hover:text-primary transition"
							>
								শিক্ষার্থী তথ্য
							</Link>

							<Link to="/about" className="hover:text-primary transition">
								আমাদের সম্পর্কে
							</Link>

							<Link to="/contact" className="hover:text-primary transition">
								যোগাযোগ
							</Link>
						</div>
					</div>

					{/* Contact */}
					<div>
						<h3 className="footer-title text-white">যোগাযোগ</h3>

						<div className="space-y-4 mt-4">
							<div className="flex gap-3">
								<FaMapMarkerAlt className="text-primary mt-1" />

								<p>আপনার ঠিকানা এখানে</p>
							</div>

							<div className="flex gap-3">
								<FaPhoneAlt className="text-primary mt-1" />

								<p>+880 17XX-XXXXXX</p>
							</div>

							<div className="flex gap-3">
								<FaEnvelope className="text-primary mt-1" />

								<p>info@huntexamacademy.com</p>
							</div>
						</div>
					</div>

					{/* Social */}
					<div>
						<h3 className="footer-title text-white">আমাদের অনুসরণ করুন</h3>

						<p className="mt-4 text-gray-300">
							সর্বশেষ আপডেট ও নোটিশ পেতে আমাদের সোশ্যাল মিডিয়ায় যুক্ত থাকুন।
						</p>

						<div className="flex gap-4 mt-6">
							<a href="#" className="btn btn-circle btn-primary">
								<FaFacebookF />
							</a>

							<a href="#" className="btn btn-circle btn-error">
								<FaYoutube />
							</a>

							<a href="#" className="btn btn-circle btn-secondary">
								<FaInstagram />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom */}

				<div className="divider divider-neutral my-10"></div>

				<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
					<p className="text-sm text-gray-400">
						© {new Date().getFullYear()} Hunt Exam Academy. সর্বস্বত্ব সংরক্ষিত।
					</p>

					<p className="text-sm text-gray-400">
						Developed by smshahariarsabbir
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
