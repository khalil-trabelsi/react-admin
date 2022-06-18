import "./widgets.scss";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
function Widget({ type }) {
  let data;
  const amount = 100;
  const diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{ color: "crimson", background: "rgba(225, 0,0,0.2)" }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ color: "green", background: "rgba(0, 128,0,0.2)" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all orders",
        icon: (
          <ShoppingCartCheckoutOutlinedIcon
            className="icon"
            style={{ color: "goldenrod", background: "rgba(218, 165,32,0.2)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "More details",
        icon: (
          <AccountBalanceOutlinedIcon
            className="icon"
            style={{ color: "purple", background: "rgba(128,0,128,0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {" "}
          {data.isMoney && "$"} {amount}{" "}
        </span>
        <span className="link">{data.link} </span>
      </div>
      <div className="right">
        <div className="perc positive">
          <KeyboardControlKeyIcon />
          {diff}
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
