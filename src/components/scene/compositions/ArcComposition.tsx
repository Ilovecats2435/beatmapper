import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ArcAtom from "../atoms/ArcAtom";

export default function ArcComposition() {
  const arcs = useSelector((state: RootState) => state.arcs);
  return <>{arcs.map(a => <ArcAtom key={a.id} size={a.size} length={a.length} direction={a.direction} />)}</>;
}
