import App from '@/App'
import { LayoutPublic } from '@/components/organisms/LayoutPublic'
import { LayoutThree } from '@/components/organisms/LayoutThree'
import { LayoutTwo } from '@/components/organisms/LayoutTwo'
import { NotFound } from '@/pages/NotFound'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <LayoutPublic/>
      },
      {
        path:'dashboard-1',
        element: <LayoutTwo/>
      },
      {
        path:'dashboard-2',
        element: <LayoutThree/>
      }
    ]
  }
])