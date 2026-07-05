require('dotenv').config()

const express = require('express')
const cors = require('cors')

const connectDB = require('./Config/db')
const studentRoutes = require('./Routes/StudentRoutes')

const app = express()

// Connect Database
connectDB()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Home Route
app.get('/', (req, res) => {
	res.send('🎓 Student Management API is Running...')
})

// Student Routes
app.use('/api/students', studentRoutes)

// 404 Route
app.use('', (req, res) => {
	res.status(404).json({
		success: false,
		message: 'Route Not Found',
	})
})

// Start Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`)
})
