import axios from "axios"
import { useState } from "react"
import { useUserContext } from "./UseUserContext"


const useLogin = () => {
    
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useUserContext()
    
    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        await axios.post('http://localhost:9000/login', {
            email,password
        })
            .then((res) => {
                //saving the user into local host
                localStorage.setItem('user', JSON.stringify(res.data))

                //updating he user context
                console.log(res.data)
                dispatch({ type: 'LOGIN', payload: res.data })
                console.log(res.data)

                //updating the loading state
                setIsLoading(false)
            })
            .catch(function (error) {
                if (error.response) {
                    setError(error.response.data.error)
                    setIsLoading(false)
                }
            })
    }
    return {login, isLoading,error}
}

export default useLogin