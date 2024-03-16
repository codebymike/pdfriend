interface ChatInputProps {
    isDisabled?: boolean
  }

const ChatInput = ({ isDisabled }: ChatInputProps) => {
  return (
    <div className="absolute bottom-0 left-0 w-full">
        <form action="" className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                <div className="relative flex flex-col w-full flex-grow p-4">
                    <div className="relative">
                        
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ChatInput