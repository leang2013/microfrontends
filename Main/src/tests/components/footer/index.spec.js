import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../../components/footer';

test('Grid Component renders the text inside it', () => {
  const { container } = render(<Footer />);
  expect(container.textContent).toBe('@ 2021');
});
