import Hero from '@/components/understanding-trouma/hero'
import Community from "../../assets/community-form.png"
import SidebarChatroom from '@/components/chat-room/sidebar-chatroom'
import ChatSection from '@/components/chat-room/chat-section'

export default function ChatRoom() {
  return (
    <>
        <Hero image={Community} info='We offers a safe space for sharing, healing, support, connection, and understanding together.'/>
        <div className='flex flex-col md:flex-row gap-3 container my-10'>
            <div className='w-full lg:w-[25%]'>
                <SidebarChatroom/>
            </div>
            <div className='w-full lg:w-[74%]'>
              <ChatSection/>
            </div>
        </div>
    </>
  )
}
