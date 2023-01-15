import "./widget.scss";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db,auth } from "../../firebase";

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null);
  const [email, setEmail] = useState(" Non "); //e18068@eng.pdn.ac.lk

  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        query:"users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
      case "devices":
        data = {
          title: "DEVICES",
          query:"devices",
          isMoney: false,
          link: "View all devices",
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        };
        break;
      case "rooms":
          data = {
            title: "Rooms",
            query:"rooms",
            isMoney: false,
            link: "View all rooms",
            icon: (
              <ShoppingCartOutlinedIcon
                className="icon"
                style={{
                  backgroundColor: "rgba(255, 165, 255, 0.2)",
                  color: "goldenrod",
                }}
              />
            ),
          };
          break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "product":
      data = {
        title: "PRODUCTS",
        query:"products",
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const getEmail=async()=>{
      auth.onAuthStateChanged(function(user) {
        try{
          if (user) {
            // User is signed in.
            // email = user.email.toString();
            console.log(email);  // This will print the user's email to the console.
            // return email;
            setEmail(user.email.toString());
          }
        }
         catch (err){
          console.log(err);
         }
      });
    };
    const fetchData = async () => {
    
      const lastMonthQuery = query(
        collection(db,"Institutes",email, data.query), // "Institutes",email, "users"
        // where("timeStamp", "<=", today),
        // where("timeStamp", ">", lastMonth)
      );
      console.log(lastMonthQuery);
      // const prevMonthQuery = query(
      //   collection(db, data.query),
      //   // where("timeStamp", "<=", lastMonth),
      //   // where("timeStamp", ">", prevMonth)
      // );

      const lastMonthData = await getDocs(lastMonthQuery);
      console.log(lastMonthData.docs);
      // const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);
      // setDiff(
      //   ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
      //     100
      // );
    };
    fetchData();
    getEmail();
  }, [email,amount,data.query]);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {/* <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/> }
          {diff} %
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
