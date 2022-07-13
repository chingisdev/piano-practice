import Soundfont, {InstrumentName, Player} from "soundfont-player";
import {FunctionComponent, ReactElement, useEffect, useRef, useState} from "react";
import {MidiValue} from "../../domain/note";
import Keyboard from "../../components/Keyboard";
import {AudioNodesRegistry, DEFAULT_INSTRUMENT} from "../../domain/sound";
import {Optional} from "../../domain/types";

type ProviderProps = {
    instrument: InstrumentName;
    AudioContext: AudioContextType;
    render(props: ProvidedProps): ReactElement;
}

type ProvidedProps = {
    loading: boolean;
    play(note: MidiValue): Promise<void>;
    stop(note: MidiValue): Promise<void>;
}

// function renderKeyboard({play, stop, loading}: ProvidedProps): ReactElement {
//     return <Keyboard play={play} stop={stop} loading={loading}/>
// }

export const SoundfontProvider: FunctionComponent<ProviderProps> = ({
    AudioContext,
    instrument,
    render
}) => {
    let activeNodes: AudioNodesRegistry = {};
    const [current, setCurrent] = useState<Optional<InstrumentName>>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [player, setPlayer] = useState<Optional<Player>>(null);
    const audio = useRef(new AudioContext());

    async function load(instrument: InstrumentName = DEFAULT_INSTRUMENT) {
        setLoading(true);
        const player = await Soundfont.instrument(
            audio.current,
            instrument
        )
        setCurrent(instrument);
        setPlayer(player);
        setLoading(false);
    }

    async function play(note: MidiValue) {
        await resume();
        if (!player) return;

        const node = player.play(note.toString());
        activeNodes = {...activeNodes, [note]: node}
    }

    async function stop(note: MidiValue) {
        await resume();
        if (!activeNodes[note]) return;

        activeNodes[note]!.stop();
        activeNodes = {...activeNodes, [note]: null};
    }

    async function resume() {
        return audio.current.state === 'suspended'
            ? await audio.current.resume()
            : Promise.resolve();
    }

    useEffect(() => {
        if (!loading && instrument !== current) load(instrument)
    }, [load, loading, instrument, current]);

    return render({
        loading,
        play,
        stop
    })
}
