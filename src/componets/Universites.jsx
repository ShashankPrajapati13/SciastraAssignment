
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../StyleSheet/University.css'


const uData = [
    {uimg:"https://images.ctfassets.net/szez98lehkfm/7fgrnKsC4zTwWZnp8ybmQr/e205ac1959f51d6539e45b6ab3fad648/MyIC_Article_112726",uName:"Cambridge University",uDes:"The University of Cambridge is a public collegiate research university in Cambridge, England. Founded in 1209, the University of Cambridge is the third-oldest university in continuous operation."},
    {uimg:"https://images.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg",uName:"Harvard University",uDes:"Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636 as Harvard College and named for its first benefactor, the Puritan ."},
    {uimg:"https://wp.dailybruin.com/images/2021/07/web.news_.admissions.breaking.jj_.jpg",uName:"University of California",uDes:"The University of California (UC) is a public land-grant research university system in the U.S. state of California. "},
    {uimg:"https://ethz.ch/en/campus/access/zentrum/_jcr_content/par/fullwidthimage/image.imageformat.930.152068286.jpg",uName:"ETH Zürich",uDes:"ETH Zurich is a public research university in Zürich, Switzerland. Founded by the Swiss federal government in 1854, it was modeled on the École polytechnique in Paris."},
    {uimg:"https://www.mpinat.mpg.de/3123/original-1640252154.jpg?t=eyJ3aWR0aCI6MTE0MCwiaGVpZ2h0Ijo0ODgsImZpdCI6ImNyb3AiLCJmaWxlX2V4dGVuc2lvbiI6ImpwZyIsIm9ial9pZCI6MzEyM30%3D--3002a5e61d8973fc318c219f1bc854228ad4b2d1",uName:"Max Planck",uDes:"The Max Planck Society for the Advancement of Science is a formally independent non-governmental and non-profit association of German research institutes. Founded in 1911 as the Kaiser Wilhelm Society."},
    {uimg:"https://cdn.universitycompare.com/content/images/UniUnderCover--University-of-Edinburgh.jpg",uName:"University of Edinburgh",uDes:"The University of Edinburgh is a public research university based in Edinburgh, Scotland. Founded by the town council under the authority of a royal charter of King James VI in 1582 and officially opened in 1583, it is one of Scotland's four ancient universities and the sixth-oldest university in continuous operation in the English-speaking world."},
    {uimg:"https://s3-prod.pionline.com/s3fs-public/john%20hopkins-main_i.jpg",uName:"Johns Hopkins",uDes:"Johns Hopkins University is a private research university in Baltimore, Maryland. Founded in 1876, Johns Hopkins was the first U.S. university based on the European research institution model. The university was named for its first benefactor, the American entrepreneur and Quaker philanthropist Johns Hopkins."},
    {uimg:"https://moderntexasliving.com/wp-content/uploads/2023/01/Baylor.png",uName:"Baylor University",uDes:"Baylor University is a private Baptist Christian research university in Waco, Texas. Baylor was chartered in 1845 by the last Congress of the Republic of Texas. Baylor is the oldest continuously operating university in Texas and one of the first educational institutions west of the Mississippi River in the United States"},
    {uimg:"https://map.illinois.edu/webservices/images/map/header_map.jpg",uName:"University of Illinois",uDes:"The University of Illinois Urbana-Champaign is a public land-grant research university in Champaign, Illinois, and Urbana, Illinois. It is the flagship institution of the University of Illinois system and was founded in 1867. With over 56,000 students, the University of Illinois is one of the largest public universities by enrollment in the United States."},
    {uimg:"https://blog.rmgoe.org/wp-content/uploads/2022/06/Humboldt-University-of-Berlin-1.jpg",uName:"Humboldt University",uDes:"The Humboldt University of Berlin is a public research university in the central borough of Mitte in Berlin, Germany.The university was established by Frederick William III on the initiative of Wilhelm von Humboldt."},
]
const showCards = uData.map(e =>(
    <Card sx={{ maxWidth: 345, maxheight: 400 }} className="card mb-5" style={{width: "18rem", marginLeft:"5%"}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="160"
        image={e.uimg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {e.uName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {e.uDes}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
   ))

   const universities = () =>  {
  return (
   <div className='d-flex mt-5 flex-wrap align-items-center justfy-content-between flex-column'>
   <h1 >Learn from scientists, research scholars from the top institutes from the world !</h1>
   <div className='d-flex mt-4 flex-wrap justfy-content-between'style={{width:"100vw"}}>
       {showCards}
   </div>
</div>
  );
}

export default universities