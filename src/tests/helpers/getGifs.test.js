import { any } from 'prop-types';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs()', () => {
  test('Debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('Chavo del Ocho');

    const gifArrStructure = {
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    };

    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual(gifArrStructure);
  });
});
