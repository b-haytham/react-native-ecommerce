import { useEffect, useRef, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

export const useKeyboard = (): [number, boolean] => {
  const keyboardRef = useRef(0);
  const [keyboardShow, setKeyboardShow] = useState(false)

  function onKeyboardDidShow(e: KeyboardEvent): void {
    setKeyboardShow(true)
    keyboardRef.current = e.endCoordinates.height;
  }

  function onKeyboardDidHide(): void {
    setKeyboardShow(false)
    keyboardRef.current = 0;
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return (): void => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide);
    };
  }, []);

  return [keyboardRef.current, keyboardShow];
};