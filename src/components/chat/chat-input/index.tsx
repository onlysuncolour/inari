import { Button, Input } from "antd";
import { FC, useState } from "react";
import styles from './index.module.less'
const {TextArea} = Input
type Props = {
  loading: boolean;
  onComplete: (v: string) => void
}
const ChatInput:FC<Props> = ({
  loading,
  onComplete,
}) => {
  const [value, setValue] = useState<string>('')

  const handleComplete = () => {
    onComplete(value)
    setValue('')
  }
  return <div className={styles.root}>
    <TextArea
      className={styles.textInput}
      value={value}
      onChange={e => setValue(e.target.value)}
      // onPressEnter={handleComplete}
      autoSize={false}
    />
    <Button
      block
      className={styles.button}
      disabled={!value}
      loading={loading}
      onClick={handleComplete}
    >
      Send A Message To ChatGPT
    </Button>
  </div>
}

export default ChatInput