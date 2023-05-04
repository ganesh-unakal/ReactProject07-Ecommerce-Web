import { Fragment } from "react"
import classes from './Header.module.css'

const Header= () =>{
return(
    <Fragment>
        <header className={classes.header}>       
           <div className={classes.space} >
            <span >HOME</span>
            <span >STORE</span>
            <span >ABOUT</span>
           
           
            <button className={classes.BUtton}>cart </button>
            <span className={classes.num}>0</span>
           <h1 className={classes.h1}>The Generics</h1>
        
        </div>

       
        
        </header>
       </Fragment>
)
}
export default Header