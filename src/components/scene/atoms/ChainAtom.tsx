import React from "react";

interface ChainAtomProps {
  x: number;       // grid X position
  y: number;       // grid Y position
  length: number;  // how many chain segments
  direction?: number; // optional arrow direction
  color?: string;
}

export default function ChainAtom({ x, y, length, direction = 0, color = "green" }: ChainAtomProps) {
  return (
    <mesh position={[x, y, length / 2]} rotation={[0, direction * (Math.PI / 4), 0]}>
      {/* Simple vertical bar for now */}
      <boxGeometry args={[0.2, 0.2, length]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
