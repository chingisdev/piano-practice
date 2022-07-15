import {InstrumentContextProvider} from "../../state/Instrument/Provider";
import {KeyboardWithInstrument} from "../Keyboard/WithInstrument";
import {InstrumentSelector} from "../InstrumentSelector/InstrumentSelector";
import styles from './Playground.module.css';

export const Playground = () => {
    return (
        <InstrumentContextProvider>
            <div className={styles.playground}>
                <KeyboardWithInstrument />
                <InstrumentSelector />
            </div>
        </InstrumentContextProvider>
    )
}
