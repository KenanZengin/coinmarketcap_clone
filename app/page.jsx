import Coinlist from "@/components/coinlist";


export default function Home() {
  return (
    <div className="coins" style={{height:"100vh"}}>
      <div className="coins-body">
        <Coinlist />
      </div>
    </div>
  )
}
