import sun from "../../images/desktop/icon-sun.svg"
import moon from "../../images/desktop/icon-moon.svg"
import {useEffect, useState} from "react";
import {getIp, getWorldTime} from "../../services/api/apiRote";
import {useDispatch, useSelector} from "react-redux";
import {
    getBackground,
    getBackgroundColor,
    getGreetings,
    getHour, getIsHidden, getTextColor,
    getTimeIcon
} from "../../redux/counterSlice";
import {format} from "date-fns";
import {utcToZonedTime} from "date-fns-tz";
import {Button, Clock, ClockGreeting, ClockTime, MainStiled} from "./mainStiled";
import {Footer} from "../footer/Footer";





export function Main() {
    // Redux
    const timeStatus = useSelector((state)=> state.date)
    const isHidden = useSelector((state)=> state.date.isHidden)
    const worldTime = useSelector((state)=> state.date.worldTime)
    const ip = useSelector((state)=> state.date.ip.IPv4)
    const locale = useSelector((state)=> state.date.ip)
    const dispatch = useDispatch();
    // Hooks
    const [time, setTime] = useState("")
    const [footer, setFooter] = useState(false)
    const [button, setButton] = useState({name: "MORE", img: <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" strokeWidth="2" fill="none" d="m14 20l6 6 6 -6"/></g></svg>
    })

    useEffect(() => {
        getIp(dispatch)
    },[dispatch])

    useEffect(() => {
        ip && getWorldTime(ip, dispatch);
        const interval = setInterval(() => {
            getWorldTime(ip, dispatch);
        }, 10000);
        return () => clearInterval(interval);
    }, [ip,dispatch]);

    useEffect(() => {
        worldTime && createAtConverted(setTime)
    },[worldTime])

// functions

    const createAtConverted = ()=> {
        const utcTime =  utcToZonedTime(worldTime.utc_datetime, worldTime.timezone)
        const timeFormat = format(utcTime, "HH:mm")
        const hour =  timeFormat.split(":")[0]
        hourCase(hour)
        console.log(time)
        setTime(timeFormat)
        dispatch(getHour(timeFormat))
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
            dispatch(getIsHidden(true))
            setButton({name: "LESS",
                img: <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6"/></g></svg>})
        }else{
            setFooter(false)
            dispatch(getIsHidden(false))
            setButton({name: "MORE",
                img: <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" strokeWidth="2" fill="none" d="m14 20l6 6 6 -6"/></g></svg>})
        }}

    return(
        <>
            <MainStiled position = {isHidden}>
                <Clock>
                    { }

                    <ClockGreeting>
                        <img src={timeStatus.timeIcon} alt=""/>
                        <h1>{timeStatus.greetings}, <span>it's currently</span></h1>
                    </ClockGreeting>

                    <ClockTime>
                        {ip === ""? <p>loading...</p>:<h2>{time}</h2>}
                        <h3>in <span>{`${locale.state}, ${locale.country_code}`}</span></h3>
                    </ClockTime>

                </Clock>
                <Button>
                    <button onClick={click}>
                        <p>{button.name}</p>{button.img}
                    </button>
                </Button>
            </MainStiled>
            {footer && <Footer/>}
        </>

    )
}