import Hero from '@/components/understanding-trouma/hero'
import Community from "../../assets/community-form.png"
import SidebarChatroom from '@/components/chat-room/sidebar-chatroom'

export default function ChatRoom() {
  return (
    <>
        <Hero image={Community} info='We offers a safe space for sharing, healing, support, connection, and understanding together.'/>
        <div className='flex gap-3 container'>
            <div className='w-[25%]'>
                <SidebarChatroom/>
            </div>

        </div>
    </>
  )
}
