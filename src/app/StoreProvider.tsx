"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { configureStore } from "../lib/store";

const store = configureStore();

export default function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
