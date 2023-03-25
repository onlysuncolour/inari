import chatService from '@/services/chat'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method : reqMethod
  } = req
  if (reqMethod === 'GET') {
    return chatService.checkChatAvailable()
  }
}
