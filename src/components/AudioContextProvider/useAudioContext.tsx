import {Optional} from "../../domain/types";
import {useRef} from "react";
import {accessContext} from "../../domain/audio";

export function useAudioContext(): Optional<AudioContextType>{
    const AudioCtx = useRef(accessContext());
    return AudioCtx.current;
}
