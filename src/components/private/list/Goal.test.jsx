import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Goal from './Goal'

vi.mock('react-router', () => {
    const originalModule = vi.importActual('react-router');
    return {
        ...originalModule,
        Link: ({children}) => <div>{children}</div>
    }
})


describe('Componente Meta', () => {
    it('renderiza el boton', () => {
        render(<Goal />);
        const button = screen.getByText("Completado");
        expect(button).toBeTruthy();
    });

    it('renderiza el icono', () => {
        render(<Goal icon='⚽' />)
        const icon = screen.getByText('⚽');
        expect(icon).toBeTruthy();
    })
});

