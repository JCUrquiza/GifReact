import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} } /> );

        // Buscar un input
        const input = screen.getByRole('textbox');

        // Disparar un evento
        fireEvent.input( input, { target: { value: 'Saitama' } } );
        
        expect( input.value ).toBe('Saitama');

    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Disparar un evento
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        
        // Evaluar que el input esté vacío
        expect( input.value ).toBe('');

        // Evaluar que la función ha sido llamada
        expect( onNewCategory ).toHaveBeenCalled();
        // La función sea llamada sólo una vez
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        // La función fue llamada con un valor
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('No debe de llamar el onNewCategory si el input está vacío', () => {
        
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');

        // Disparar un evento
        fireEvent.submit( form );
        
        // La función no sea llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        
    });

});

