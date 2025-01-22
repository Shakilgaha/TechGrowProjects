import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./components/Layout/AppLayout"
import { StopWatch } from "./Pages/StopWatch"
import { BMICalculator } from "./Pages/BMICalculator"
import { ImageGallery } from "./Pages/ImageGallery"
import {  useState } from "react"


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const setTheme = () => {
    console.log("1",darkMode)

    setDarkMode(!darkMode)

    console.log(darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark');
      console.log("dark")
    } else {
      document.documentElement.classList.remove('dark')
    }

  }



  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout
        setTheme={setTheme}
      />,
      children: [
        {
          path: "/",
          element: <BMICalculator />
        },
        {
          path: "/stopwatch",
          element: <StopWatch />

        },
        {
          path: "/Gallery",
          element: <ImageGallery />
        }
      ]
    }
  ])

  return (
    <div className={` h-screen`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
