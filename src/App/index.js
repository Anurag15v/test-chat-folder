import React,{ Suspense, lazy} from 'react'
import { BrowserRouter as Router,
  Routes,Route } from 'react-router-dom';
import ChatWindow from '../../src/screens/ChatWindow/index';

export default function index() {
  const Home = lazy(() => import('../../src/screens/Home/index'));
  // connecting to socket using userId
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path="/chat/:id" element={<ChatWindow />} />
      </Routes>
    </Router>
  )
}
