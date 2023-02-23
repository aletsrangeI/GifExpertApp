import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components';

describe('Pruebas en GifItem', () => {
  const title = 'Diosito';
  const url = 'https://www.diosito.com.mx/';
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con el url y el alt indicado', () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Debe de mostrar el titulo del componente', () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
