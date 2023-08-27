
import * as React from 'react';



const uData = [
  {mimg:"https://i.pinimg.com/564x/73/70/ad/7370ad3b7cd8fee8ddaac65db578ebdf.jpg",mName:"Shubham",mUni:"University of California"},
  {mimg:"https://i.pinimg.com/564x/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",mName:"john",mUni:"Howards University"},

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

 const Advisor = () => {
return (
  <div className='d-flex mt-5 flex-wrap align-items-center justfy-content-between flex-column'>
      <h1 >Meet Our Mentors!</h1>
      <div className='d-flex mt-4 justfy-content-between' style={{width:"100vw"}}>
          {showCards}
      </div>
  </div>
 
);
}
export default Advisor