import { fetchChatCompletion, fetchCheckChatAvailable, fetchHello } from "@/common/request";
import ChatService from "@/services/chat";
import { FC, useCallback, useEffect, useState } from "react";
import {Button} from 'antd'
import styles from './index.module.less'
import { IChatService } from "@/services/interface";
import { IChatConversion } from "@/common/index.interface";
import ChatContainer from "@/components/chat/chat-container";
import ChatInput from "@/components/chat/chat-input";
type Props = {
  available: boolean,
  error: string | undefined
}
export async function getStaticProps() {
  const result = ChatService.getResult({ok: true}).data as IChatService
  const available:boolean = result.available || false
  const error = result.error || 'please click <check available>'
  return {
    props: {
      available,
      error
    },
  };
}
const Chat:FC<Props> = ({
  available,
  error
}) => {
  const [chatAvailable, setChatAvailable] = useState<boolean>(available)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(error)
  const [availableLoading, setAvailableLoading] = useState<boolean>(false)
  const [conversions, setConversions] = useState<IChatConversion[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const checkAvailable = useCallback(() => {
    setAvailableLoading(true)
    fetchCheckChatAvailable().then(resp => {
      setChatAvailable(resp.data.available)
      setErrorMessage(resp.data.error)
      setAvailableLoading(false)
    })
  }, [])
  const sendChat = useCallback((message: string) => {
    setLoading(true)
    const myMsg = {"role": "user", content: message}
    const messages = [...conversions, myMsg]
    setConversions([...conversions, myMsg])
    fetchChatCompletion({
      messages,
      model: 'gpt-3.5-turbo',
      max_tokens: 500
    }).then(resp => {
      if (resp.ok) {
        setConversions([...conversions, myMsg, resp.data.choices[0].message])
      }
    }).finally(() => {
      setLoading(false)
    })
  }, [conversions])
  if (!chatAvailable) {
    return <div className={styles.error}>
      <div>{errorMessage}</div>
      <Button onClick={checkAvailable} loading={availableLoading}>check available</Button>
    </div>
  }
  return <div className={styles.chat}>
    <div className={styles.conversions}>
      <ChatContainer conversions={conversions} loading={loading} />
    </div>
    <div className={styles.inputContainer}>
      <ChatInput loading={loading} onComplete={v => sendChat(v)} />
    </div>
  </div>
  
  // if (chatAvailable) {
  //   return <div>now you can talk</div>
  // }
  // return <></>
}

export default Chat