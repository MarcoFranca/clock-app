import sun from "../../images/desktop/icon-sun.svg"
import moon from "../../images/desktop/icon-moon.svg"
import {useEffect, useState} from "react";
import {getIp, getWorldTime} from "../../services/api/apiRote";
import {useDispatch, useSelector} from "react-redux";
import {
    getBackground,
    getBackgroundColor,
    getGreetings,
    getHour, getTextColor,
    getTimeBase,
    getTimeIcon
} from "../../redux/counterSlice";
import {format} from "date-fns";
import {utcToZonedTime} from "date-fns-tz";
import {MainStiled} from "./mainStiled";
import {Footer} from "../footer/Footer";


export function Main() {
    // Redux
    const timeStatus = useSelector((state)=> state.date)
    const dispatch = useDispatch();
    // Hooks
    const [ip, setIp] = useState([])
    const [worldTime, setWorlodTime] = useState()
    const [footer, setFooter] = useState(false)
    const [button, setButton] = useState({name: "MORE", img: <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" strokeWidth="2" fill="none" d="m14 20l6 6 6 -6"/></g></svg>
    })

    useEffect(() => {
        getIp(setIp)
    },[])

    useEffect(() => {
        ip.length !== 0 && getWorldTime(ip.IPv4, setWorlodTime);
    },[ip])

    useEffect(() => {
        worldTime && createAtConverted();
    },[worldTime])

// functions

    const createAtConverted = ()=> {
        const utcTime =  utcToZonedTime(worldTime.utc_datetime, worldTime.timezone)
        const timeFormat = format(utcTime, "HH:mm")
        const hour =  timeFormat.split(":")[0]
        hourCase(hour)
        dispatch(getHour(timeFormat))
        dispatch(getTimeBase(worldTime))
    }

    const hourCase = (hour) =>{
        if (hour > 5 && hour < 12){
            dispatch(getGreetings("Good morning"))
            dispatch(getTimeIcon(sun))
            dispatch(getBackground(true))
            dispatch(getBackgroundColor(true))
            dispatch(getTextColor(true))
        }else if (hour > 12 && hour < 18){
            dispatch(getGreetings("Good afternoon"))
            dispatch(getTimeIcon(sun))
            dispatch(getBackground(true))
            dispatch(getBackgroundColor(true))
            dispatch(getTextColor(true))
        }else {
            dispatch(getGreetings("Good evening"))
            dispatch(getTimeIcon(moon))
            dispatch(getBackground(false))
            dispatch(getBackgroundColor(false))
            dispatch(getTextColor(false))
        }
    }
    const click = ()=>{
        if (!footer){
            setFooter(true)
            setButton({name: "LESS",
                img: <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6"/></g></svg>})
        }else{
            setFooter(false)
            setButton({name: "MORE",
                img: <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" strokeWidth="2" fill="none" d="m14 20l6 6 6 -6"/></g></svg>})
        }}

    return(
        <>
            <MainStiled>
                <div className="clock">

                    <div className="clock__greeting">
                        <img src={timeStatus.timeIcon} alt=""/>
                        <h1>{timeStatus.greetings}, <span>it's currently</span></h1>
                    </div>

                    <div className="clock__time">
                        <h2>{timeStatus.hour}</h2>
                        <h3>in <span>{`${ip.state}, ${ip.country_code}`}</span></h3>
                    </div>

                </div>
                <div className="button">
                    <button onClick={click}> <p>{button.name}</p>{button.img}
                    </button>
                </div>
            </MainStiled>
            {footer && <Footer/>}
        </>



    )

}