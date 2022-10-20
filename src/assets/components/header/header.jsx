import React, {useEffect, useState} from "react";
import {HeaderContainer, Image, Quotes} from "./headerStyle";
import {getQuotes} from "../../services/api/apiRote";
import refreshImg from "../../images/desktop/icon-refresh.svg"
import {useSelector} from "react-redux";

export function Header() {
    const [cote, setCote] = useState()
    const isHidding = useSelector((state) => state.date.isHidden)

    useEffect(()=>{
        getQuotes(setCote)
    },[])


    return(
        !cote? 'loading...':
            <HeaderContainer hidding={isHidding}>
                <Quotes className="quotes">
                    <h1>
                        “{cote.en}”
                    </h1>
                    <p>{cote.author}</p>

                </Quotes>
                <Image className="image" onClick={()=>getQuotes(setCote)}>
                    <img src={refreshImg} alt="refresh icon"/>
                </Image>
            </HeaderContainer>

    )
}
