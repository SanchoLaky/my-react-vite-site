import { Layout } from "antd"
import { Link, useLocation } from "react-router-dom"

const siderStyle = {
  textAlign: "center",
  color: "#23336D",
  backgroundColor: "#F0F5FF",
}

const partSiderStyle = {
  height: "50%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}

export default function AppSider(props) {
  let location = useLocation()
  return (
    <Layout.Sider width="25%" style={siderStyle}>
      <div style={partSiderStyle}>
        <p style={{ fontSize: "xx-large" }}>{props.sum.toFixed(2)}</p>
        <p>Остаток средств</p>
      </div>
      <div style={{ ...partSiderStyle, ...{ fontSize: "large" } }}>
        <nav>
          <ul>
            <li style={location.pathname == "/" ? { fontWeight: "bold" } : {}}>
              <Link to="/">Перевести</Link>
            </li>
            <li
              style={
                location.pathname == "/history" ? { fontWeight: "bold" } : {}
              }
            >
              <Link to="/history">История операций</Link>
            </li>
            <li
              style={
                location.pathname == "/friends" ? { fontWeight: "bold" } : {}
              }
            >
              <Link to="/friends">Список друзей</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Layout.Sider>
  )
}
