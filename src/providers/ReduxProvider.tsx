"use client";

// Instruments //
import { Provider } from "react-redux";

// State Management //
import store from "@/store";

type Props = {
  children: React.ReactNode;
};

const ReduxProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
