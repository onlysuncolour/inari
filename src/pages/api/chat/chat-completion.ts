import ChatService from '@/services/chat'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method : reqMethod,
    body
  } = req
  if (reqMethod === 'POST') {
    res.send(await ChatService.makeChatCompletion(body))
  }
}
