import Router from "./Router/Router";
import { ChakraProvider } from '@chakra-ui/react'

import './App.css';

function App() {
  return (
    <ChakraProvider resetCSS >
     
        <Router />
    
    </ChakraProvider>
  );
}

export default App;
