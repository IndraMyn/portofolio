import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingPage from './Pages/LoadingPage'

const HomePage      = lazy(() => import('./Pages/HomePage'))
const NotFoundPage  = lazy(() => import('./Pages/NotFoundPage'))

function App() {
    return (
        <>
            <Router>
                <Suspense fallback={<LoadingPage />}>
                    <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/portofolio" exact component={HomePage} />
                            <Route component={NotFoundPage} />
                    </Switch>
                </Suspense>
            </Router>
        </>
    )
}

export default App
