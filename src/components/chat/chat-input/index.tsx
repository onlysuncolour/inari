import { Button, Input } from "antd";
import { FC, useState } from "react";
type Props = {
  loading: boolean;
  onComplete: (v: string) => void
}
const ChatInput:FC<Props> = ({
  loading,
  onComplete,
}) => {
  const [value, setValue] = useState<string>('')
  return <div>
    <Input value={value} onChange={e => setValue(e.target.value)} />
    <Button disabled={!value} loading={loading} onClick={() => onComplete(value)}>send</Button>
  </div>
}

export default ChatInput