import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp>', () => {

    test('Debe de tener un título', () => {

        render( <GifExpertApp /> );
        // screen.debug();

        expect( screen.getByText('Gif Expert App') );
        expect( screen.getByText('One Punch') );
        expect( screen.getByText('Cargando...') );

    });

});

