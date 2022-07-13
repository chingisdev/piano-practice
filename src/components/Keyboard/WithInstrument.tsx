import {useEffect} from "react";
import {useInstrument} from "../../state/Instrument/Context";
import useAudioContext from "../AudioContextProvider";
import {useSoundfont} from "../../adapters/Soundfont/useSoundfont";
import {Keyboard} from "./Keyboard";
import {useMount} from "../../utils/useMount/useMount";
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
