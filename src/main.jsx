import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>

        <RouterProvider router={router}></RouterProvider>
        <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </div>
  </StrictMode>
);
