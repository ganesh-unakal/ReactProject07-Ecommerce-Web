import { useState, useRef , useContext } from 'react';
import classes from './login.module.css';
import {useHistory} from 'react-router-dom'
import AuthContext from '../store/Auth-context';

const Login = () =>{
    const [isLogin, setIslogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();
    const authCntx = useContext(AuthContext)

 const emailInputRef=useRef();
 const passowrdInputRef = useRef()


 const switchAuthHandler =()=>{
    setIslogin((prevState) => !prevState)
 }

const submitHandler=(event)=>{
    event.preventDefault();

    const enteredEmail= emailInputRef.current.value;
    const enteredPassword = passowrdInputRef.current.value;

    let url;
    setIsLoading(true)
if(isLogin){
    url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBZ2InOGQ7wCS3rgt77JkpEnMz4suNWrE'
} else{
    url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBZ2InOGQ7wCS3rgt77JkpEnMz4suNWrE'
}
 fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
        }),
        headers: {
            'Content-Type' :  "application/json"
        },
    })
    .then((res)=>{
        setIsLoading(false)

        console.log(res)
        if(res.ok){
            return res.json()
        }else{
            const data =  res.json();
            let errormessage = 'aunthentication error';
            if (data && data.error && data.error.message) {
                errormessage = data.error.message;
                alert(errormessage);
            }
        }
    })
.then((data)=>{
      console.log(data)
      authCntx.login(data.idToken, data.email) //wn we get token id then we login 

      history.replace('/store')
}).catch((err)=>{
    alert('Authentication failed')
})

}

   


return(

    <section className={classes.login}>
    <h1>{isLogin ? 'login' : 'Sign up'}</h1>

    <form onSubmit={submitHandler}>
        <div >
        <label htmlFor="email">Email Id</label>
        <input type="email" ref={emailInputRef}/>

        <label htmlFor="passsword">Password</label>
        <input type="password" ref={passowrdInputRef}/>

<div>
        {!isLoading && <button
        type='submit'
        
        >{isLogin ? "Login" : "Sign up"}</button>}
        {isLoading && <p>loading...</p>}
       
       <button type="button" onClick={switchAuthHandler}
       style={{backgroundColor: "transparent" , color:"purple", border:"none", marginLeft:"7rem"}}>
        {isLogin ? 'create new account' : 'login with existing account'}
       </button>
       </div>  
       
        </div>
    </form>
    </section>
)
}
export default Login;