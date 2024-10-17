import { Paperclip, SendHorizontal, Smile } from "lucide-react"
interface JoinDiscussionProps {
    placeholder?: string;
  }

function JoinDiscussion({ placeholder='' }: JoinDiscussionProps) {
  return (
    <div className="border-2 border-gray-300 p-5 rounded-lg mt-3 flex gap-3 justify-between items-start text-gray-500">
        <Smile className="hover:scale-110"/>
        <Paperclip className="hover:scale-110"/>
        <input type="text" name="" id="" placeholder={placeholder} className="w-full focus:outline-none"/>
        <SendHorizontal className="hover:scale-110"/>
    </div>
  )
}

export default JoinDiscussion