import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas LoginPage', () => { 

    const setUserMock = jest.fn();
    beforeEach( () => jest.clearAllMocks() );

    test("should show the component WITHOUT user", () => {
    
        render(
          <UserContext.Provider value={{ user: null}}>
            <LoginPage />
          </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML ).toBe('null');
    
    });

    test("should call setUser and set user", () => {
    
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );
        const setUserButton = screen.getByLabelText('setUserButton');
        fireEvent.click(setUserButton)
        expect(setUserMock).toHaveBeenCalledWith({"email": "adrian@google.com", "id": 123, "nombre": "Adrian Lopera"})
    
    });


    
})