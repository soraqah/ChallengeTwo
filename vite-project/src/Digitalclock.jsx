import React,{useState, useEffect} from "react";


function Digitalclock(){
    const  [clock ,setClock] = useState(new Date());
    useEffect(() =>{
        const intervalId = setInterval(() =>{
            setClock(new Date())
        } ,1000)
        return () => clearInterval(intervalId);

    },[]);

    function formattime(){
        const hours = clock.getHours() % 12 || 12;
        const minuts = clock.getMinutes();
        const secounds = clock.getSeconds();
        const mirdim = hours >= 12 ? 'AM': "PM";

        return `${hours} : ${minuts} : ${secounds} ${mirdim}`
    }
    return(
        <>
        <div className="digital-clock">
            <div className="oclock">
                <p>{formattime()}</p>

            </div>

        </div>
        </>
    )

}
export default Digitalclock;