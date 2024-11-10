import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../farebase/farebase.init";
import { useState } from "react";

const LOgin = () => {
    const [user,setUser] =useState(null)
    const provider =new GoogleAuthProvider()

    const hendleGoogleSingIn= () =>{
        signInWithPopup(auth,provider)
        .then((result) =>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch((error) =>{
            console.log(error)
        })
        console.log('Tanzid anana');
        setUser(null)
    }

    const hendleSignOut = () =>{
        signOut(auth)
        .then(() =>{
            console.log('sing out done')
        })
        
    }


    return (
        <div>
            <button onClick={hendleGoogleSingIn}>Login with Google</button>
            <button onClick={hendleSignOut}>Sing Out</button>
            {user && <h2>{user.displayName}</h2>}
        </div>
    );
};

export default LOgin;