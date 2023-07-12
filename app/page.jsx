import Topbar from "@/components/topbar";
import CoinTable from "@/components/cointable";
import Pagination from "@/components/pagination";





export default function Home() {

  return (
    <div className="coins">
      <div className="coins-body">
        <div className="coinlist">
          <Topbar />
          <CoinTable />
          <Pagination />
        </div>
      </div>
    </div>
  )
}
