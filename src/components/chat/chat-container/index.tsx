import { IChatConversion } from "@/common/index.interface";
import { FC } from "react";
import ChatItem from "../chat-item";
type Props = {
  conversions: IChatConversion[];
  loading: boolean;
}
const ChatContainer:FC<Props> = ({
  conversions,
  loading,
}) => {

  return <div>
    {
      conversions.map((conversion, i) => <ChatItem key={i} conversion={conversion} />)
    }
    {
      loading && <div>loading...</div>
    }
  </div>
}

export default ChatContainer