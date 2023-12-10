import { render } from '@testing-library/react';

import NInventory from './products';

describe('Products', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NInventory />);
    expect(baseElement).toBeTruthy();
  });
});
