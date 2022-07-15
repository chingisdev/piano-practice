import {Key as KeyLabel} from '../../domain/keyboard';
import {useEffect, useState} from "react";

type IsPressed = boolean;
type EventCode = string;
type CallbackFunction = () => void;

type Settings = {
    watchKey: KeyLabel;
    onStartPress: CallbackFunction;
    onFinishPress: CallbackFunction;
    setIsActive: (value: boolean) => void;
}

function fromEventCode(code: EventCode): KeyLabel {
    const prefixRegex = /Key|Digit/gi;
    return code.replace(prefixRegex, "");
}

function equal(watchedKey: KeyLabel, eventCode: EventCode): boolean {
    return (fromEventCode(eventCode).toUpperCase() === watchedKey.toUpperCase());
}

export function usePressObserver({
    watchKey,
    onStartPress,
    onFinishPress,
    setIsActive
}: Settings): IsPressed {
    const [pressed, setPressed] = useState<IsPressed>(false);

    useEffect(() => {
        function handlePressStart({ code }: KeyboardEvent): void {
            if (pressed || !equal(watchKey, code)) return;
            setPressed(true)
            setIsActive(true);
            onStartPress();
        }

        function handlePressFinish({ code }: KeyboardEvent): void {
            if (!pressed || !equal(watchKey, code)) return;
            setPressed(false);
            setIsActive(false);
            onFinishPress();
        }

        document.addEventListener("keydown", handlePressStart);
        document.addEventListener("keyup", handlePressFinish);

        return () => {
            document.removeEventListener("keydown", handlePressStart);
            document.removeEventListener("keyup", handlePressFinish);
        }
    }, [watchKey, pressed, setPressed, onStartPress, onFinishPress]);

    return pressed;
}


