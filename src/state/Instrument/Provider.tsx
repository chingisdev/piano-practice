import {FunctionComponent, useState} from "react";
import {InstrumentContext} from "./Context";
import {DEFAULT_INSTRUMENT} from "../../domain/sound";

type ContextProps = {
    children: any;
}

export const InstrumentContextProvider: FunctionComponent<ContextProps> = ({
    children
}) => {
    const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT);

    return (
        <InstrumentContext.Provider value={{
            instrument,
            setInstrument
        }}>
            {children}
        </InstrumentContext.Provider>
    )
}
