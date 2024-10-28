import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material"

import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Box minHeight={"100vh"} minWidth={"100vw"}>
			{/* <Navbar /> */}
			<Routes>
				<Route path='/' element={<Chat />} />
				{/* <Route path='/create' element={< />} /> */}
			</Routes>
		</Box>
	);
}

export default App;