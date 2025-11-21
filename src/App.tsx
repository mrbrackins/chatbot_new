import type { JSX } from "react"
import ChatScreen from "./screens/ChatScreen"
import Layout from "./components/Layout"
function App(): JSX.Element {
  return (
    <>
      <Layout>
        <ChatScreen></ChatScreen>
      </Layout>
    </>
  )
}

export default App
