import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe("Pruebas en HomePage", () => {
    const user = {
        id: 1,
        name: 'Adrian'
    };

  test("should show the component WITHOUT user", () => {
    /**
     * Usar un functional component que tiene un useContext, es necesario
     * introducirlo dentro de un UserConext.Provider y proveer el valor que usa
     */
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML ).toBe('null');

  });
  test("should show the component WITH user", () => {
    
    render(
      <UserContext.Provider value={{ user: user}}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);
    // expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(`${user.id}`);
    screen.debug();

  });

});
