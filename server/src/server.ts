import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

import { convertMinutesToTime, convertTimeToMinutes } from './utils/time'

const app = express()
const prisma = new PrismaClient({
  log: ['query']
})

app.use(express.json())
app.use(cors())

app.get('/games', async (req: Request, res: Response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })

  res.json(games)
})

app.post('/games/:id/ads', async (req: Request, res: Response) => {
  const gameId = req.params.id
  const body = req.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertTimeToMinutes(body.hourStart),
      hourEnd: convertTimeToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    }
  })

  return res.status(201).json(ad)
})

app.get('/games/:id/ads', async (req: Request, res: Response) => {
  const gameId = req.params.id

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      yearsPlaying: true,
      weekDays: true,
      hourStart: true,
      hourEnd: true,
      useVoiceChannel: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  res.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToTime(ad.hourStart),
      hourEnd: convertMinutesToTime(ad.hourEnd),
    }
  }))
})

app.get('/games/:id/Discord', async (req: Request, res: Response) => {
  const adId = req.params.id

  const ad = await prisma.ad.findUnique({
    where: {
      id: adId
    },
    select: {
      discord: true
    }
  })

  res.json({
    discord: ad?.discord
  })
})

app.listen(3000, () => {
  console.log('Server is running, port 3000')
})