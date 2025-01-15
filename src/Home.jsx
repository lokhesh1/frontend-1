import React from "react";
import './Home.css'
//import Product from "./Product";
import TypeOfProd from "./TypeOfProd";
import { Link } from 'react-router-dom'
function Home() {
    
    return (
      <div>
        <div className="home">
            <div className="home_container">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-visualizing-e-commerce-in-sierra-leone-a-3d-rendering-for-online-image_3637566.jpg" 
                alt="" className="home_Image" />
                <div className="home_row">
                    <Link to="/frontend-1/watches" className="link-tag" style={{ textDecoration:"none", flex:1}}>
                        <TypeOfProd 
                            nameOf="WATCHES"
                            image="https://img.tatacliq.com/images/i12/658Wx734H/MP000000018772101_658Wx734H_202308161557593.jpeg"
                        />
                    </Link>
                    <Link to="/frontend-1/footwear" className="link-tag" style={{ textDecoration:"none", flex:1 }}>
                        <TypeOfProd 
                            nameOf="FOOTWEAR"
                            image="https://img.tatacliq.com/images/i6/658Wx734H/MP000000006404559_658Wx734H_20200129073605.jpeg"
                        />
                    </Link>
                </div>
                <div className="home_row">
                    <Link to="/frontend-1/jwells" className="link-tag" style={{ textDecoration:"none", flex:1 }}>
                        <TypeOfProd 
                            nameOf="JWELLS"
                            image="https://img.tatacliq.com/images/i9/658Wx734H/MP000000016431668_658Wx734H_202302080130041.jpeg"
                        />
                    </Link>
                    <Link to="/frontend-1/eyewear" className="link-tag" style={{ textDecoration:"none" , flex:1}}>
                        <TypeOfProd 
                            nameOf="EYEWEAR"
                            image="https://img.tatacliq.com/images/i10/658Wx734H/MP000000014109370_658Wx734H_202302231203092.jpeg"
                        />
                    </Link>  
                    <Link to="/frontend-1/perfumes" className="link-tag" style={{ textDecoration:"none" , flex:1}}>
                        <TypeOfProd 
                            nameOf="PERFUMES"
                            image="https://img.tatacliq.com/images/i16//658Wx734H/MP000000020936300_658Wx734H_202401262013143.jpeg"
                        />
                    </Link>  
                </div>
                <div className="home_row">
                    <Link to="/frontend-1/clothing" className="link-tag" style={{ textDecoration:"none", flex:1 }}>
                        <TypeOfProd 
                            nameOf="CLOTHING"
                            image="https://m.media-amazon.com/images/I/813Jh2ElZhL._AC_UY1100_.jpg"
                        />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;