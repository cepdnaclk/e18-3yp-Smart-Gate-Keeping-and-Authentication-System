import "./instanceroomlist.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Instanceroomdatatable from "./Instanceroomdatatable"

const Instanceroomlist = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Instanceroomdatatable/>
      </div>
    </div>
  )
}

export default Instanceroomlist