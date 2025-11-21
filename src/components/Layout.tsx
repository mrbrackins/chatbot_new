import type { CSSProperties, ReactNode } from "react";
import type React from "react";
import "./Layout.css";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <div className="layout" style={layout}>
      <div className="chat">{children}</div>
    </div>
  );
}

const layout: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export default Layout;
