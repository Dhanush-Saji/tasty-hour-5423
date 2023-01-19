import { Grid  } from '@chakra-ui/react'
import Sidebar from './Components/Sidebar/Sidebar';
function App() {
  return (
    <Grid templateColumns='20% auto' gap={6} bg='#282C35' h='100vh'>
      <Sidebar />
    </Grid>
  );
}

export default App;
