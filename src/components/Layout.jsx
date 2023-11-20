import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
      </div>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">

      </main>
    </div>
  )
}

export default Layout
