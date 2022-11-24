import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Pruebas MainApp', () => { 
  
    test('should show HomePage', () => { 
        /**
         * MemoryRouter actua como interprete de BrowserRouter (situado en el main.jsx), de este modo
         * conseguimos que emular todo lo necesario para testear las rutas en la consola
         */
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('should show LoginPage', () => { 
        /**
         * initialEntries -> Se le pasa un objeto o arreglo para simular una ruta especifica
         */
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });
    test('should show AboutPage', () => { 
        /**
         * initialEntries -> Se le pasa un objeto o arreglo para simular una ruta especifica
         */
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>
        );
        expect(screen.getByText('AboutPage')).toBeTruthy();
    });
    test('should show AboutPage if user enter in a non-existent route', () => { 
        /**
         * initialEntries -> Se le pasa un objeto o arreglo para simular una ruta especifica
         */
        render(
            <MemoryRouter initialEntries={['/*']}>
                <MainApp/>
            </MemoryRouter>
        );
        expect(screen.getByText('AboutPage')).toBeTruthy();
    });

    
})