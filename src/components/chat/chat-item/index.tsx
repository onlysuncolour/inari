import { IChatConversion } from "@/common/index.interface";
import { FC } from "react";
type Props = {
  conversion: IChatConversion;
}
const ChatItem:FC<Props> = ({
  conversion
}) => {
  const {
    content,
    role,
  } = conversion
  return <>
    {role}: {content}
  </>
}

export default ChatItem