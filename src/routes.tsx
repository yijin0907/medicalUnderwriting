import type { RouteObject } from 'react-router-dom'
import Home from '@/pages/home'
import NotFound from '@/pages/notFound'
import Survey from '@/pages/survey'
import PersonalInfo from '@/pages/survey/components/PersonalInfo'
import DisInfo from './pages/survey/components/DisInfo'
import FillOut from './pages/survey/components/FillOut'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
        children: [],
    },
    {
        path: '/survey',
        element: <Survey />,
        children: [
            {
                path: '/survey/personalInfo',
                element: <PersonalInfo />,
            },
            {
                path: '/survey/:items',
                element: <DisInfo />,
            },
            {
                path: '/survey/fillOut',
                element: <FillOut />,
            },
        ],
    },
    // {
    //     path: '/result',
    //     element: <Result />,
    //     children: [
    //         {
    //             path: '/result/resulttable',
    //             element: <ResultTable />,
    //         },
    //         {
    //             path: '/result/csqrcode',
    //             element: <CsQrcode />,
    //         },
    //     ],
    // },
    {
        path: '*',
        element: <NotFound />,
        children: [],
    },
]

export default routes
