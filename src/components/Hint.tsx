import React from 'react';
import { Box, Newline, Text } from 'ink';

// * utils
import { spaces } from '../utils/space.js';

// * constants
const TAB = spaces(4);

const Hint = () => {
  return (
    <Box flexDirection='column'>
      <Text color='blueBright'>
        Instructions:
        <Newline />
        {TAB}[Enter]: Choose color
        <Newline />
        {TAB}[ &#x2190; / &#x2191; / &#x2193; / &#x2192;]: Move pointer
        <Newline />
      </Text>
    </Box>
  );
};

export default Hint;
