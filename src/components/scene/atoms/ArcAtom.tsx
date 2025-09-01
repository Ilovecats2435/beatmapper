import React from "react";

interface ArcAtomProps {
  size: number;   // how far out the arc goes
  length: number; // how long the arc is
  direction?: number; // optional arrow direction (not used yet)
  color?: string; // optional color
}

export default function ArcAtom({ size, length, direction = 0, color = "blue" }: ArcAtomProps) {
  return (
    <mesh position={[size, 0, length / 2]} rotation={[0, direction * (Math.PI / 4), 0]}>
      {/* A simple box to represent the arc */}
      <boxGeometry args={[0.2, 0.2, length]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
