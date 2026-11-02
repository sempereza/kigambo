import { Suspense } from "react"
import ChatView from "./chat-view"

export default function ChatPage({ params }: PageProps<"/chat/[id]">) {
  return (
    <Suspense fallback={<div className="h-dvh bg-[var(--background)]" />}>
      {params.then(({ id }) => <ChatView id={id} />)}
    </Suspense>
  )
}