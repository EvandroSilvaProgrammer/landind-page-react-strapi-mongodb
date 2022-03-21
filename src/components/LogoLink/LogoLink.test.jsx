const { screen } = require('@testing-library/react');
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Logo text" />);
    expect(
      screen.getByRole('heading', { name: 'Logo text' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Logo text' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Logo text" srcImg="path/logo.svg" />,
    );
    expect(screen.getByRole('img', { name: 'Logo text' })).toHaveAttribute(
      'src',
      'path/logo.svg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Logo text" srcImg="path/logo.svg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
