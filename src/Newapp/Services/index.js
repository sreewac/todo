import Credintials from '../Data/Credintial.json'
import Home from '../MainPages/Home'
import Main from '../MainPages/Main'
import Signup from '../MainPages/Signup'
import PageOne from '../Pages/PageOne'
import PageTwo from '../Pages/PageTwo'
import PageThree from '../Pages/PageThree'
import PageFour from '../Pages/PageFour'



export const isLogin = () => {
    if (localStorage.getItem('access')) {
        return true
    }

    return false
    
    

}
export const login = (data) => {
    if (data.email=== Credintials.email) {
        if (data.password === Credintials.password) {
            localStorage.setItem('access', Credintials.email)
            return 'success'
        }
        else {
            return 'False'
        }
    }
    else {
        return 'False'
    }
}
 export const CarouselItem=[
    {
      imageSrc:"./slide1.jpg",
      alt:"First slide",
      title:"Food zone",
      content:"Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
     imageSrc:"./slide2.jpg",
     alt:"Second slide",
     title:"Natural",
     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
   },
   {
     imageSrc:"./slide3.jpg",
     alt:"Blue",
     title:"Food zone",
     content:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."
   }
  ];

  
  export const RouteItem=[
    { id:"1",
      path:"/",
      element:<Home/>
    },
    {
      id:"2",
      path:"/signin",
      element:<Signup/>
          
    },
    {  
        id:"3",
        path:"/dash",
        element:<Main/>
      },
      { id:"4",
        path:"/PathOne",
        element:<PageOne/>
      },
      {id:"5",
        path:"/PathTwo",
        element:<PageTwo/>
      },
      { id:"6",
        path:"/PathThree",
        element:<PageThree/>
      },
      { id:"7",
        path:"/PathFour",
        element:<PageFour/>
      },
]