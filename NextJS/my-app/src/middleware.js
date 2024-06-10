import { NextResponse } from "next/server"

export const middleware =(request) => {
    return NextResponse.redirect(new URL('/About/history' , request.url))
}


export const config ={
    matcher : '/About'
}