import { useEffect, useRef, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

export const useKeyboard = (): [number] => {
  const keyboardRef = useRef(0);

  function onKeyboardDidShow(e: KeyboardEvent): void {
    keyboardRef.current = e.endCoordinates.height;
  }

  function onKeyboardDidHide(): void {
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

  return [keyboardRef.current];
};