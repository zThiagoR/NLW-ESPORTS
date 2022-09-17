import express, { Request, Response } from 'express'

const app = express()

app.get('/ads', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running')
})