import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ChainAtom from "../atoms/ChainAtom";

export default function ChainComposition() {
  const chains = useSelector((state: RootState) => state.chains);
  return <>{chains.map(c => <ChainAtom key={c.id} x={c.x} y={c.y} length={c.length} direction={c.direction} />)}</>;
}
