import Topbar from './topbar'
import CoinTable from './cointable'
import Pagination from './pagination'


const Coinlist = () => {
  return (
    <div className="coinlist">
        <Topbar />
        <CoinTable />
        <Pagination />
    </div>
  )
}

export default Coinlist