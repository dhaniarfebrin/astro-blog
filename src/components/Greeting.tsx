import { useState } from "preact/hooks"

interface IGreeting {
    messages: string[]
}

export default function Greeting({ messages }: IGreeting) {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))]

    const [greeting, setGreeting] = useState<string>(messages[0])

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  )
}
