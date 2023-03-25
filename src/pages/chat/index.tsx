import { fetchCheckChatAvailable, fetchHello } from "@/common/request";
import chatService from "@/services/chat";
import { FC, useCallback, useEffect, useState } from "react";
import {Button} from 'antd'
import styles from './index.module.less'
type Props = {
  available: boolean,
  error: string | undefined
}
export async function getStaticProps() {
  const available:boolean = chatService.available || false
  const error = chatService.error || 'please click <check available>'
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
  useEffect(() => {

  })
  const checkAvailable = useCallback(() => {
    setAvailableLoading(true)
    fetchCheckChatAvailable().then(resp => {
      setChatAvailable(resp.data.available)
      setErrorMessage(resp.data.error)
      setAvailableLoading(false)
    })
  }, [])
  if (!chatAvailable) {
    return <div className={styles.error}>
      <div>{errorMessage}</div>
      <Button onClick={checkAvailable} loading={availableLoading}>check available</Button>
    </div>
  }
  if (chatAvailable) {
    return <div>now you can talk</div>
  }
  return <></>
}

export default Chat