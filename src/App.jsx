import { useState } from 'react'
import Home from './components/Home/Home.jsx'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import StudentInfo from './components/Student-Info/StudentInfo.jsx'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
			children: [
				{ index: true, element: <Home /> },
				{ path: 'home', element: <Home /> },
				{ path: 'about', element: <About /> },
				{ path: 'contact', element: <Contact /> },
				{ path: 'student-info', element: <StudentInfo /> },
			],
		},
	])
	return <RouterProvider router={router} />
}

export default App
