
import { useSession, getSession } from "next-auth/react"
import { NextPageContext } from 'next';
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";


const Iletisim = async() => {

    // PROTECT THE PAGE:
    // const session = await getServerSession(options)
    // console.log("SESSION: ", session);

    // if(!session){
    //     redirect('/api/auth/signin?callbackUrl=/server')

    // }

    return(
        <div>
            This is İletişm page!!!!!
        </div>
    )
}

export default Iletisim;