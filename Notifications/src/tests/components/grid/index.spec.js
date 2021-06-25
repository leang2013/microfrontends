import React from 'react';
import { render } from '@testing-library/react';
import Grid from '../../../components/grid';

test('Grid Component renders the text inside it', () => {
  const { container } = render(<Grid />);
  expect(container.firstChild).toHaveClass('MuiPaper-root MuiTableContainer-root MuiPaper-elevation1 MuiPaper-rounded');
});
