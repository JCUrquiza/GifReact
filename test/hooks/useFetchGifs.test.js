import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el Hook useFetchGifs', () => {

    test('Debe de regresar el estado inicial', () => {

        // Obtener el resultado el Hook
        const { result } =  renderHook( () => useFetchGifs('One Punch') );

        // Desestructurar el Hook
        const { images, isLoading } = result.current;

        // Las imágenes sean de longitud 0, porque es el estado inicial
        expect( images.length ).toBe(0);
        // IsLoading sea verdadero
        expect( isLoading ).toBeTruthy();

    });

    test('Debe de retornar un arreglo dde imágenes y el isLoading en false', async() => {

        // Obtener el resultado el Hook
        const { result } =  renderHook( () => useFetchGifs('One Punch') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 2000
            }
        );

        // Desestructurar el Hook
        const { images, isLoading } = result.current;

        // Las imágenes sean de longitud 0, porque es el estado inicial
        expect( images.length ).toBeGreaterThan(0);
        // IsLoading sea verdadero
        expect( isLoading ).toBeFalsy();

    });

});


