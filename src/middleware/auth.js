export default function guest ({ to,from,next,store }){
    console.log(to)
    console.log(from)
    console.log(next)
    console.log(store)
    return next()
   }