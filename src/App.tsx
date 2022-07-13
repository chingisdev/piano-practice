import React from 'react';
import './App.css';
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import styles from './App.module.css';
import Main from "./components/Main";

function App() {
    return (
        <div className={styles.app}>
            <Logo/>
            {/*<main className={styles.content} />*/}
            <Main/>
            <Footer/>
        </div>
    )
}

export default App;
