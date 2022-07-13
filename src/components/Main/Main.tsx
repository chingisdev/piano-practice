import useAudioContext from "../AudioContextProvider";
import NoAudioMessage from "../NoAudioMessage";
import {Playground} from "../Playground/Playground";

export const Main = () => {
    const AudioContext = useAudioContext();
    return AudioContext ? <Playground /> : <NoAudioMessage />;
}
