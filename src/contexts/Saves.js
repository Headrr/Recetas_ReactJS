import React, { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";
export const CartContext = createContext({});

const SavesContextProvider = ({ children }) => {
  
  const [recetaFav, setRecetaFav] = useLocalStorage("Favoritos", []);
  const [idRecetaFav, setIdRecetaFav] = useLocalStorage("IdFavoritos", []);
  const [cart, setCart] = useState(recetaFav);
  const [existe, setExiste] = useState(idRecetaFav);

  const getCharacters = () => {
    setRecetaFav(cart);
    setIdRecetaFav(existe);
  };

  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, existe]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        existe,
        setExiste,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default SavesContextProvider;
