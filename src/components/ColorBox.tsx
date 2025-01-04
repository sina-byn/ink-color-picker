import React from 'react';
import { Box, Text, TextProps } from 'ink';

// *  utils
import { spaces } from '../utils/space.js';

const bottomCenter = (text: string) => spaces(7) + text + spaces(2);

// * types
type Color = TextProps['backgroundColor'];

type ColorProps = { color: Color; active?: boolean };

const ColorBox = ({ color, active }: ColorProps) => {
  return (
    <Box width={5} height={4}>
      {active ? (
        <Text backgroundColor={color}>{bottomCenter('\u25CF')}</Text>
      ) : (
        <Text backgroundColor={color}>{spaces()}</Text>
      )}
    </Box>
  );
};

export default ColorBox;
