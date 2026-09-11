import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 5000
const submissions = []

app.use(cors())
app.use(express.json())

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  message: { type: String, required: true, trim: true },
}, { timestamps: true })

const Contact = mongoose.model('Contact', contactSchema)

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) return res.status(400).json({ message: 'Name, email and message are required.' })
  try {
    const entry = mongoose.connection.readyState === 1
      ? await Contact.create({ name, email, message })
      : submissions.push({ name, email, message, createdAt: new Date() })
    return res.status(201).json({ message: 'Thanks! Your message has been received.', id: entry?._id || submissions.length })
  } catch (error) {
    console.error('Unable to save contact submission:', error)
    return res.status(500).json({ message: 'Unable to save your message right now.' })
  }
})

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection failed; using in-memory storage:', error.message))
}

app.listen(port, () => console.log(`Portfolio API running on http://localhost:${port}`))
