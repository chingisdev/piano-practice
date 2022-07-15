import {useInstrument} from "../../state/Instrument/Context";
import useAudioContext from "../AudioContextProvider";
import {Keyboard} from "./Keyboard";
import {SoundfontProvider} from "../../adapters/Soundfont/SoundfontProvider";

export const KeyboardWithInstrument = () => {
    const AudioContext = useAudioContext()!;
    const { instrument } = useInstrument();

    return (
        <SoundfontProvider
            AudioContext={AudioContext}
            instrument={instrument}
            render={(props) => <Keyboard {...props} />}
        />
    )
}
