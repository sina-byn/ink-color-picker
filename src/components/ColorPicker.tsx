import React, { useState } from 'react';
import { Box, useInput } from 'ink';

// * components
import Hint from './Hint.js';
import ColorBox from './ColorBox.js';

// * types
type PointerPosition = { x: number; y: number };

// * constants
const COLORS = ['white', 'black', 'red', 'blue', 'green', 'yellow', 'cyan', 'magenta'] as const;

const DEFAULT_POINTER_POSITION = { x: 0, y: 0 };

const COLUMN_COUNT = 4;
const WIDTH = 5 * COLUMN_COUNT;

// * types
export type Color = (typeof COLORS)[number];

type ColorPickerProps = { hint?: boolean };

export const ColorPicker = ({ hint = true }: ColorPickerProps) => {
  const [pointerPosition, setPointerPosition] = useState<PointerPosition>(DEFAULT_POINTER_POSITION);
  const { x, y } = pointerPosition;
  const currentColor = COLORS[y * COLUMN_COUNT + x]!;

  useInput((input, key) => {
    if (key.return) {
      // * onSubmit
      return;
    }

    if (input) return;

    let stepX = 0;
    let stepY = 0;

    if (key.leftArrow) stepX--;
    if (key.rightArrow) stepX++;

    if (key.upArrow) stepY--;
    if (key.downArrow) stepY++;

    setPointerPosition(({ x, y }) => ({
      x: Math.max(0, Math.min(x + stepX, 3)),
      y: Math.max(0, Math.min(y + stepY, 1)),
    }));
  });

  return (
    <>
      {hint && <Hint />}

      <Box width={WIDTH} flexWrap='wrap' rowGap={-2}>
        {COLORS.map(color => (
          <ColorBox key={color} color={color} active={color === currentColor} />
        ))}
      </Box>
    </>
  );
};
