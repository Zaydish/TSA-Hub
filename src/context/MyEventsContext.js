import { createContext, useContext, useEffect, useState } from "react";

const MyEventsContext = createContext();

export const MyEventsProvider = ({ children }) => {
  const [myEvents, setMyEvents] = useState([]);

  return (
    <MyEventsContext.Provider value={{ myEvents, setMyEvents }}>
      {children}
    </MyEventsContext.Provider>
  );
};

export const useMyEvents = () => useContext(MyEventsContext);