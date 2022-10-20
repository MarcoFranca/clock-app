import {useSelector} from "react-redux";
import {FooterStiled, TimeInfo} from "./footerStyled";

export function Footer (){
    const timeStatus = useSelector((state)=> state.date.worldTime)
    const backGround = useSelector((state)=> state.date.backgroundColor)
    const textColor = useSelector((state)=> state.date.textColor)

    return(
        <FooterStiled background={backGround}>
            <div className="container1">
                <TimeInfo textColor={textColor}><h2>Current timezone</h2><p>{timeStatus.timezone}</p></TimeInfo>
                <TimeInfo textColor={textColor}> <h2>Day of the year</h2><p>{timeStatus.day_of_year}</p></TimeInfo>
            </div>
            <div className="container2">
                <TimeInfo textColor={textColor}><h2>Day of the week</h2><p>{timeStatus.day_of_week}</p></TimeInfo>
                <TimeInfo textColor={textColor}><h2>Week number</h2><p>{timeStatus.week_number}</p></TimeInfo>
            </div>
        </FooterStiled>
    )
}