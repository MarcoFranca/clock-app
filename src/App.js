import {Main} from "./assets/components/main/Main";
import {Footer} from "./assets/components/footer/Footer";
import {Header} from "./assets/components/header/header";
import {AppStyle} from "./appStyle";

function App() {
  return (
      <div className="App">
        <AppStyle class="first-container-day">
          <Header/>
          <Main/>
          <Footer/>
        </AppStyle>
      </div>
  );
}

export default App;
