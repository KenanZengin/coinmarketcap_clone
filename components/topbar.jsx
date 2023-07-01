import {BiSolidUpArrow} from 'react-icons/bi'

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="title">
           <h1> Today's Cryptocurrency Prices by Market Cap</h1>
           <p className='desc'>
            The global crypto market cap is $1.2T, a &nbsp;
            <span><BiSolidUpArrow size={7}/> 0.75%</span>
            &nbsp;increase over the last day.           
            <span>Read More</span>
           </p>
            
        </div>
    </div>
  )
}

export default Topbar