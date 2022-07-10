/**
 * This file holds the hooks that enable us to dispatch actions into our redux slice
 * and knows right types for our state and our dispatch that we defined while creating slice
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, DispatchType } from "./store";

export const Dispatch = () => useDispatch<DispatchType>();
export const Selector: TypedUseSelectorHook<RootState> = useSelector;
