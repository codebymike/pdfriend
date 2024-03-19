import { cn } from "@/lib/utils"

interface MessageProps {
    message:
    isNextMessage: boolean
}

const Message = ({ message, isNextMessage }: MessageProps) => {
  return (
    <div className={cn("flex items-end")}>

    </div>
  )
}

export default Message