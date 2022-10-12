import {Main} from "./assets/components/main/Main";
import {Footer} from "./assets/components/footer/Footer";
import {Header} from "./assets/components/header/header";
import {AppStyle} from "./appStyle";

function App() {
    return (
        <AppStyle>
            <Header/>
            <Main/>
            <Footer/>
        </AppStyle>
    );
}

export default App;
