//copied from geeksforgeeks
// import { useState, useEffect } from "react"

// export default function Stopwatch(){

//     const [isActive, setIsActive] = useState(false)
//     const [time, setTime] = useState(0)

//     useEffect(() => {

//         let interval = null

//         if(!isActive){
//             interval = setInterval(() => {
//                 setTime((time) => time + 10);
//               }, 10);
//         } else{
//             clearInterval(interval)
//         }
//     })

//     return <div class = "timer">TIMER</div>
//}