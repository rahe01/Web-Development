
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())
app.use(express.json())


const user = [
    {
        id: 1,
    name: 'John',
    email: 'jajaj@gmail.com',
    phone: '1234567890'},
    {
        id: 1,
    name: 'Johnnn',
    email: 'jajaj@gmail.com',
    phone: '1234567890'},
    {
        id: 1,
    name: 'Johndsfsd',
    email: 'jajaj@gmail.com',
    phone: '1234567890'}
]


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/users' ,(req, res) =>{
    res.send(user)
} )

app.post('/users', (req, res) =>{
    const newUser = req.body
    newUser.id = user.length +1
    user.push(newUser)
    res.send(newUser)
    
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})