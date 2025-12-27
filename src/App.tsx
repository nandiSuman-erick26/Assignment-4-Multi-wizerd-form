import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { Route } from "./routes/Route";
import { FormProvider } from "./hooks/context/Form.provider";
import "./index.css"
function App() {
  return (
    <>
      <FormProvider>
        <Toaster position="top-left" richColors />
        <RouterProvider router={Route} />
      </FormProvider>
    </>
  );
}

export default App;

//------entire packages for a react app--------//
//npm install react-router-dom yup react-hook-form @hookform/resolvers sonner lucide-react @mui/material @emotion/styled @emotion/react axios js-cookie @types/js-cookie
