import {signIn, signOut, useSession} from 'next-auth/react'

export const Login = async(provider:string)=>{
    const {data:session} = useSession();

    if(session){
        return;
    }

    else{
        return signIn(provider);
    }
}