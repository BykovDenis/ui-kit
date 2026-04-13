import { render, screen } from '@testing-library/react';
import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import { themes } from '../../styles/src/themes';
import Typography from '../src';

const renderTypography = (ui: React.ReactElement) => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);
  return render(<ReactThemeContext.Provider value={themes.light}>{ui}</ReactThemeContext.Provider>);
};

it('Typography renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.light}>
      <Typography variant="H1">Some text</Typography>
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});

it('renders H2 variant as h2 element', () => {
  renderTypography(<Typography variant="H2">Heading 2</Typography>);

  expect(screen.getByRole('heading', { level: 2, name: 'Heading 2' })).toBeInTheDocument();
});

it('renders H3 variant as h3 element', () => {
  renderTypography(<Typography variant="H3">Heading 3</Typography>);

  expect(screen.getByRole('heading', { level: 3, name: 'Heading 3' })).toBeInTheDocument();
});

it('renders Phrase variant as paragraph', () => {
  renderTypography(<Typography variant="Phrase">Paragraph text</Typography>);

  expect(screen.getByText('Paragraph text').tagName.toLowerCase()).toBe('p');
});

it('renders H4, H5 and H6 variants content', () => {
  renderTypography(
    <>
      <Typography variant="H4">Heading 4</Typography>
      <Typography variant="H5">Heading 5</Typography>
      <Typography variant="H6">Heading 6</Typography>
    </>
  );

  expect(screen.getByText('Heading 4')).toBeInTheDocument();
  expect(screen.getByText('Heading 5')).toBeInTheDocument();
  expect(screen.getByText('Heading 6')).toBeInTheDocument();
});

it('falls back to H1 for unknown variant', () => {
  renderTypography(<Typography variant={'unknown' as any}>Fallback title</Typography>);

  expect(screen.getByRole('heading', { level: 1, name: 'Fallback title' })).toBeInTheDocument();
});
