import {Main} from "./assets/components/main/Main";
import {Header} from "./assets/components/header/header";
import {AppStyle} from "./appStyle";
import {useSelector} from "react-redux";

function App() {
    const backGround = useSelector((state)=> state.date.background)
    return (

            <AppStyle
                backGround={backGround}>
                <Header/>
                <Main/>
            </AppStyle>
    );
}

export default App;
