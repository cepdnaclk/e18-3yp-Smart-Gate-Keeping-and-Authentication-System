import "./devicelist.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Devicedatatable from "./devicedatatable"

const Devicelist = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Devicedatatable/>
      </div>
    </div>
  )
}

export default Devicelist