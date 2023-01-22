import { Grid,Flex  } from '@chakra-ui/react'
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import Allroutes from './Routes/Allroutes';
import { ChakraProvider } from "@chakra-ui/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import MUIRoute from './Routes/MUIRoute';
import './App.css'

function App() {
  return (
    <><ChakraProvider>
   <Allroutes />
  </ChakraProvider>
        
      <div className='Parent'>
    <ChakraProvider>
      <Sidebar />
    </ChakraProvider>
    <div className='secondParentDiv'>
      <ChakraProvider>
        <Topbar />
        </ChakraProvider>
      <MUIRoute />
    </div>
    </div>
    </>
  );
}

export default App;
