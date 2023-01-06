import "./roomlist.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Roomdatatable from "./Tableroom"

const Roomlist = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Roomdatatable/>
      </div>
    </div>
  )
}

export default Roomlist