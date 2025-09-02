import { PlacementGridLayout } from "@/components/scene/layouts/placement-grid/layout";
import PlacementGridRoot from "@/components/scene/layouts/placement-grid/root";

import { NoteComposition } from "@/components/scene/compositions/note";
import { ObstacleComposition } from "@/components/scene/compositions/obstacle";
import { ArcComposition } from "@/components/scene/compositions/arc";
import { ChainComposition } from "@/components/scene/compositions/chain";

interface Props {
  notes: any[];
  obstacles: any[];
  arcs: any[];
  chains: any[];
}

export function PlacementGridVisualization({ notes, obstacles, arcs, chains }: Props) {
  return (
    <PlacementGridRoot>
      <PlacementGridLayout grid={{ numRows: 3, numCols: 4 }}>
        {notes.map((note) => (
          <NoteComposition key={note.id} {...note} />
        ))}

        {obstacles.map((obstacle) => (
          <ObstacleComposition key={obstacle.id} {...obstacle} />
        ))}

        {arcs.map((arc) => (
          <ArcComposition key={arc.id} {...arc} />
        ))}

        {chains.map((chain) => (
          <ChainComposition key={chain.id} {...chain} />
        ))}
      </PlacementGridLayout>
    </PlacementGridRoot>
  );
}
