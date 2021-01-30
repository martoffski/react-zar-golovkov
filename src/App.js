import './App.module.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
function App() {
    return (
        <>
            <Header title="This is title" descr="This is Description!" />
            <Layout id="l1" title="This is first layout" descr="This is first Description" urlBg />
            <Layout id="l2" title="This is second layout" descr="This is second Description" colorBg />
            <Layout id="l3" title="This is third layout" descr="This is third Description" urlBg />
            <Footer />
        </>
    );
}

export default App;
