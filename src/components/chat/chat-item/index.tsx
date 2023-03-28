import { IChatConversion } from "@/common/index.interface";
import { Tag } from "antd";
import { FC, useMemo } from "react";
import styles from './index.module.less'
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
  const [displayName, tagColor] = useMemo(() => {
    if (role === 'user') {
      return ['You', 'blue']
    }
    return ['ChatGPT', 'green']
  }, [role]);
  return <div className={styles.root}>
    <Tag className={styles.tag} color={tagColor}>{displayName}</Tag>
    <p className={styles.content}>{content}</p>
  </div>
}

export default ChatItem