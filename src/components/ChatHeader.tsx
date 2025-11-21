import React from "react"

interface HeaderProps {
  chatTitle: string
}
export const ChatHeader = ({ chatTitle }: HeaderProps): React.JSX.Element => {
  return (
    <div className=" chatHeader">
      <div className="icon">{"<"}</div>
      <div className="title">{chatTitle}</div>
      <div className="closeChat">x</div>
    </div>
  )
}
