
import Topbar from "@/components/topbar";
import CoinTable from "@/components/cointable";
import Pagination from "@/components/pagination";



export async function getTopTenCoins(){
  try {
    const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.API_KEY_CMC}&limit=50`,{cache:"no-store"});
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error.message);
  }
}



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
