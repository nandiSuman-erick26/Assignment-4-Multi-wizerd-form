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


