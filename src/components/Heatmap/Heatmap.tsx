import { Group } from '@visx/group';
import { HeatmapRect } from '@visx/heatmap';
import { Bin, Bins } from '@visx/mock-data/lib/generators/genBins';
import { scaleLinear } from '@visx/scale';
import React from 'react';

import { Workout } from '../../types';
import { numberOfWeeksToDisplay, workoutsToBins } from '../../utils/workoutsToBins'

const cool1 = '#ECEFF1';
const cool2 = '#E81C0F';

function max<Datum>(data: Datum[], value: (d: Datum) => number): number {
  return Math.max(...data.map(value));
}

function min<Datum>(data: Datum[], value: (d: Datum) => number): number {
  return Math.min(...data.map(value));
}

// accessors
const bins = (d: Bins) => d.bins;
const count = (d: Bin) => d.count;

export type HeatmapProps = {
  workouts: Workout[],
  events?: boolean;
};

export const Heatmap = ({ workouts, events=false }: HeatmapProps) => {

  const generatedBins = workoutsToBins(workouts);
  const separation = 12;
  const binWidth = 12;
  const binHeight = 12;
  const xMax = binWidth * numberOfWeeksToDisplay + separation * (numberOfWeeksToDisplay - 1);
  const yMax = binHeight * 7 + separation * 6;
  const colorMax = max(generatedBins, (d) => max(bins(d), count));
  const bucketSizeMax = max(generatedBins, (d) => bins(d).length);


  // scales
  const xScale = scaleLinear<number>({
    range: [xMax, 0],
    domain: [0, generatedBins.length],
  });
  const yScale = scaleLinear<number>({
    range: [yMax, 0],
    domain: [0, bucketSizeMax],
  });
  const rectColorScale = scaleLinear<string>({
    range: [cool1, cool2],
    domain: [0, colorMax],
  });
  const opacityScale = scaleLinear<number>({
    range: [0.5, 1],
    domain: [0, colorMax],
  });

  return (
    <svg width="100%" height='100%' viewBox={`0 0 ${xMax} ${yMax}`}>
      <Group >
        <HeatmapRect
          data={generatedBins}
          xScale={(d) => xScale(d+1)}
          yScale={(d) => yScale(d+1)}
          colorScale={rectColorScale}
          opacityScale={opacityScale}
          binWidth={binWidth}
          binHeight={binHeight}
          gap={0}
        >
          {(heatmap) =>
            heatmap.map((heatmapBins) =>
              heatmapBins.map((bin) => (
                <rect
                  key={`heatmap-rect-${bin.row}-${bin.column}`}
                  className="visx-heatmap-rect"
                  width={bin.width}
                  height={bin.height}
                  x={xMax - (bin.width * (bin.column + 1)  + separation * (bin.column ))}
                  y={yMax - (bin.height * (bin.row + 1) + separation * (bin.row ))}
                  fill={bin.color}
                  fillOpacity={bin.opacity}
                  onClick={() => {
                    if (!events) return;
                    const { row, column } = bin;
                    alert(JSON.stringify({ row, column, bin: bin.bin }));
                  }}
                />
              )),
            )
          }
        </HeatmapRect>
      </Group>
    </svg>
  );
}
