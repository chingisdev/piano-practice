import {InstrumentName} from "soundfont-player";
import {createContext, useContext} from "react";
import {DEFAULT_INSTRUMENT} from "../../domain/sound";

export type ContextValue = {
    instrument: InstrumentName;
    setInstrument: (instrument: InstrumentName) => void;
}

export const InstrumentContext = createContext<ContextValue>
({
    instrument: DEFAULT_INSTRUMENT,
    setInstrument() {return }
});

export const InstrumentContextConsumer = InstrumentContext.Consumer;
export const useInstrument = () => useContext(InstrumentContext);

