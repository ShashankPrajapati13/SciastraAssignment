
import * as React from 'react';
import '../StyleSheet/University.css'


const uData = [
    {mimg:"https://i.pinimg.com/564x/e0/4c/38/e04c383ed661003b1a599bb877eff836.jpg",mName:"Shubham",mUni:"canifornia"},
    {mimg:"https://i.pinimg.com/564x/47/91/f0/4791f027dcad85f85883359daf191c5d.jpg",mName:"john",mUni:"hawards"},
    {mimg:"https://i.pinimg.com/564x/e6/33/ee/e633eefbeb77cd4323a1557d33c91c83.jpg",mName:"john",mUni:"hawards"},
    {mimg:"https://i.pinimg.com/564x/ae/9b/ae/ae9bae263ed27be66a775eff13e603c5.jpg",mName:"john",mUni:"hawards"},
    {mimg:"https://i.pinimg.com/564x/78/97/67/78976741e2e594513d0ec7edfc5b1392.jpg",mName:"john",mUni:"hawards"},
    {mimg:"https://i.pinimg.com/564x/8b/15/7b/8b157b1d7d2392163058e0829ca028f5.jpg",mName:"john",mUni:"hawards"},
    {mimg:"https://i.pinimg.com/564x/64/18/11/641811c0bebe38bc3973170aa11ba2c4.jpg",mName:"john",mUni:"hawards"},
    {mimg:"https://i.pinimg.com/564x/2d/9f/4c/2d9f4c8214366dee638bcc82261ca1f0.jpg",mName:"john",mUni:"hawards"},
]
const showCards = uData.map(e =>(
    <div className="card mt-2 d-flex justify-content-center align-items-center" style={{width: "18rem", marginLeft:"5%", border:"none"}}>
        <div style={{height:"20vh",width:"20vh",borderRadius:"50%",overflow:"hidden"}}>
            <img src={e.mimg} alt="" style={{height:"100%",width:"100%",objectFit:"cover",objectPosition:"center"}} />
        </div>

        <div className="d-flex mt-2 justify-content-center align-items-center flex-column">
            <h5>{e.mName}</h5>
            <h6 style={{marginTop:"-1vh"}}>{e.mUni}</h6>
        </div>
    </div>
   ))

   const Mentors = () => {
  return (
    <div className='d-flex mt-5 flex-wrap align-items-center justfy-content-between flex-column'>
        <h1 >Meet Our Mentors!</h1>
        <div className='d-flex mt-4 flex-wrap justfy-content-between' style={{width:"100vw"}}>
            {showCards}
        </div>
    </div>
   
  );
}

export default Mentors