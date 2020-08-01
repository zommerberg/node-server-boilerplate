import express, { Response } from 'express'

process.on('unhandledRejection', err => {
  throw err
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (res: Response) => {
  res.send('Hello User')
})

const port: any = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
