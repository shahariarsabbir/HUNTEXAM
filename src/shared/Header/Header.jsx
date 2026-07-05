import React from 'react'
import Logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	const menuItems = [
		{ name: 'Home', path: '/' },
		{ name: 'Student Info', path: '/student-info' },
		{ name: 'About', path: '/about' },
		{ name: 'Contact', path: '/contact' },
	]

	const navLinkClass = ({ isActive }) =>
		`px-3 py-2 rounded-lg transition-all duration-200 ${
			isActive
				? 'text-primary font-bold bg-primary/10'
				: 'hover:text-primary hover:bg-base-200'
		}`

	return (
		<header className="sticky top-0 z-50 bg-base-100 shadow-md">
			<div className="navbar max-w-7xl mx-auto px-4">
				{/* Navbar Start */}
				<div className="navbar-start">
					{/* Mobile Menu */}
					<div className="dropdown lg:hidden">
						<label tabIndex={0} className="btn btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</label>

						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 w-60 rounded-box bg-base-100 shadow-lg p-2 z-[100]"
						>
							{menuItems.map((item) => (
								<li key={item.path}>
									<NavLink to={item.path} className={navLinkClass}>
										{item.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>

					{/* Logo */}
					<Link to="/" className="flex items-center gap-3">
						<img
							src={Logo}
							alt="Hunt Exam Academy"
							className="h-33 w-auto object-contain"
						/>

						<div className="hidden md:block">
							<h2 className="text-2xl font-bold text-primary">
								Hunt Exam Academy
							</h2>

							<p className="text-xs uppercase tracking-[4px] text-gray-500">
								Learning Center
							</p>
						</div>
					</Link>
				</div>

				{/* Desktop Menu */}
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal gap-2">
						{menuItems.map((item) => (
							<li key={item.path}>
								<NavLink to={item.path} className={navLinkClass}>
									{item.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				{/* Navbar End */}
				<div className="navbar-end gap-2">
					<button className="btn btn-outline btn-primary hidden md:flex">
						Login
					</button>

					<button className="btn btn-primary rounded-full px-6">
						Enroll Now
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
