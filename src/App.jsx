import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Desk from './pages/Desk.jsx'
import Placeholder from './pages/Placeholder.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/desk" element={<Desk />} />
      <Route
        path="/page2"
        element={<Placeholder code="page2" title="床边故事" hint="点床进来的页面，内容稍后一起写。" />}
      />
      <Route
        path="/page3"
        element={<Placeholder code="page3" title="电脑桌面" hint="点电脑进来的页面，内容稍后一起写。" />}
      />
      <Route
        path="/page4"
        element={<Placeholder code="page4" title="笔记本" hint="点笔记本进来的页面，内容稍后一起写。" />}
      />
      <Route
        path="/page5"
        element={<Placeholder code="page5" title="手机" hint="点手机进来的页面，内容稍后一起写。" />}
      />
    </Routes>
  )
}
