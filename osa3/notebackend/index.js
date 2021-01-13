const express = require('express')
const app = express()
app.use(express.json())

const morgan = require('morgan')
app.use(morgan('tiny'))
morgan(':method :url :status :res[content-length] - :response-time ms')

const cors = require('cors')
app.use(cors())

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]


    app.get('/', (req, res) => {
        res.send('<h1>Hello World!</h1>')
    })

    app.get('/info', (req, res) => {
        const maara = persons.length
        const paiva = new Date()
        res.send(`<p> Phonebook has info for ${maara} people </p> <p> ${paiva} </p>`)
    
    })

    app.get('/api/persons', (req, res) => {
        res.json(persons)
    })

    app.get('/api/persons/:id', (request, response) => {
        const id = Number(request.params.id)
        const henkilo = persons.find(henkilo => henkilo.id === id)
        if (henkilo) {
            response.json(henkilo)
          } else {
            response.status(404).end()
          }
    })


    app.delete('/api/persons/:id', (request, response) => {
        const id = Number(request.params.id)
        persons = persons.filter(henkilo => henkilo.id !== id)
      
        response.status(204).end()
    })


    app.post('/api/persons', (request, response) => {
        const body = request.body
        if (!body.name) {
            return response.status(400).json({ 
              error: 'name missing' 
            })
        }

        if (!body.number) {
            return response.status(400).json({ 
              error: 'number missing' 
            })
        }

        const nimi = persons.find(henkilo => henkilo.name === body.name)
        if (nimi) {
            return response.status(400).json({ 
              error: 'name must be unique' 
            })
        }


        const henkilo = {  
            id: luoId(),
            name: body.name,
            number: body.number,
         
        }

        persons = persons.concat(henkilo)
      
        response.json(henkilo)
      })

      const luoId = () => {
        const maxId = persons.length > 0
          ? Math.max(...persons.map(n => n.id)) 
          : 0

        return maxId + 1
      }


    const PORT = process.env.PORT || 3001
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    })