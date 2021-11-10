import React from 'react'
import Header from './Component/Header'
import ControlledCarousel from './Component/Carousel'
import Footer from './Component/Footer'



function Home() {


    return (
        <div>
         <div>
        <Header/> 
         </div>
         <div className="wrapper">
             <div>
             <ControlledCarousel/>
             </div>
             <div>
                 <Footer/>
             </div>
        
         </div>
         
        
        
               
               
            
           
            
        
  
    
            
        </div>
    )
}

export default Home
