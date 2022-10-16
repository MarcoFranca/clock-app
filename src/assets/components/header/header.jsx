import React, {useEffect, useState} from "react";
import {HeaderContainer} from "./headerStyle";
import {getQuotes} from "../../services/api/apiRote";
import refreshImg from "../../images/desktop/icon-refresh.svg"

export function Header() {
    const [cote, setCote] = useState()

    useEffect(()=>{
        getQuotes(setCote)
    },[])


    return(
        !cote? 'loading...':
            <HeaderContainer>
                <div className="quotes">
                    <h1>
                        “{cote.en}”
                    </h1>
                    <p>{cote.author}</p>

                </div>
                <div className="image" onClick={()=>getQuotes(setCote)}>
                    <img src={refreshImg} alt="refresh icon"/>
                </div>
            </HeaderContainer>

    )
}
