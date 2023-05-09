import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// Hacer un mock
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        // screen.debug();
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );

    });

    test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http://saitama.jpg'
            },
            {
                id: 'DEF',
                title: 'Saint S',
                url: 'http://saintse.jpg'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> );
        // Comprobar que el componente me esté regresando dos imágenes
        expect( screen.getAllByRole('img').length ).toBe(2);
        
    });

});







