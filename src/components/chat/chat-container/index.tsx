import { IChatConversion } from "@/common/index.interface";
import { FC } from "react";
import styles from './index.module.less'
import ChatItem from "../chat-item";
type Props = {
  conversions: IChatConversion[];
  loading: boolean;
  className?: string
}
const ChatContainer:FC<Props> = ({
  conversions,
  loading,
  className
}) => {
  return <div className={`${styles.root} ${className}`}>
    {
      conversions.map((conversion, i) => <ChatItem key={i} conversion={conversion} />)
    }
    {
      loading && <div className={styles.loading}>loading...</div>
    }
  </div>
}

export default ChatContainer