import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Login from './pages/login'
import HeroSection from './pages/student/HeroSection'
import MainLayout from './layout/MainLayout'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            {/* Courses */}
          </>
        )
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
])



function App() {

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
