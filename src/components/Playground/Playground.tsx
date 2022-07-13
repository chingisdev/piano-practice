import {InstrumentContextProvider} from "../../state/Instrument/Provider";
import {KeyboardWithInstrument} from "../Keyboard/WithInstrument";
import {InstrumentSelector} from "../InstrumentSelector/InstrumentSelector";

export const Playground = () => {
    return (
        <InstrumentContextProvider>
            <div className="playground">
                <KeyboardWithInstrument />
                <InstrumentSelector />
            </div>
        </InstrumentContextProvider>
    )
}
