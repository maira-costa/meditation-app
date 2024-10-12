import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface TimerContextTipe {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextTipe>({
  duration: 10,
  setDuration: () => {},
});

interface TimeProviderProps {
  children: ReactNode;
}

const TimerProvider = ({ children }: TimeProviderProps) => {
  const [duration, setDuration] = useState(10);

  return (
    <TimerContext.Provider value={{ duration, setDuration }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
