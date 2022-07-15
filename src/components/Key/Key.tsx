import {FunctionComponent, useState} from "react";
import clsx from 'clsx';
import {NotePitch, NoteType} from "../../domain/note";
import styles from './Key.module.css';
import {usePressObserver} from "../PressObserver/usePressObserver";

type PressCallback = () => void;
type KeyProps = {
    type: NoteType;
    label: string;
    disabled?: boolean;
    onUp: PressCallback;
    onDown: PressCallback;
}

export const Key: FunctionComponent<KeyProps> = (props) => {
    const [isActive, setIsActive] = useState(false);
    const {type, label, onDown, onUp, ...rest} = props;
    const pressed = usePressObserver({
        watchKey: label,
        onStartPress: onDown,
        onFinishPress: onUp,
        setIsActive: setIsActive,
    });

    return (
        <button
            className={clsx(styles.key, styles[type], pressed && "is-active", isActive && styles.activeButton)}
            type="button"
            onMouseDown={onDown}
            onMouseUp={onUp}
            {...rest}
        >
            {label}
        </button>
    )
}
