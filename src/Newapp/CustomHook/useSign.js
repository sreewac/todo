
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { login } from  '../Services'

 export function useSign() {

    const[credintials,setCredintials] = useState({

      email: '',
      password: ''  
    })
     const[error,setError] = useState(false)
    const navigate = useNavigate()
    
    const handleChange = (e) =>{
     setCredintials({
       ...credintials,

        [e.target.id]:e.target.value})
        console.log( credintials)

    }

    const handleSubmit = (e) =>{

    e.preventDefault();
    console.log(error)
    if(credintials.email !== '' && credintials.password !== ''){

        let data = {
            email : credintials.email,
            password : credintials.password
        }

        let result = login(data)
        if(result === 'success'){
         if(error) setError(false)
             navigate('/dash')

        }else{

            setError(true)

        }

    }else{
        setError(true)
    }
    }
    return [
         handleChange,
        handleSubmit,
        error
    ]

}

export default useSign

