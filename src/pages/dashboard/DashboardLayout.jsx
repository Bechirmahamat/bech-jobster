import { Outlet } from 'react-router-dom'
import { DashboardNav, Sidebar } from '../../components'

const DashboardLayout = () => {
    return (
        <main className='flex relative flex-col bg-slate-100  '>
            {/* navbar */}
            <section className=' border-b sticky z-10 top-0  h-[80px] bg-white py-4 px-8 lg:px-12'>
                <DashboardNav />
            </section>

            {/* body */}
            <section className='flex relative w-full'>
                {/* sidebar */}

                <div className='hidden sticky bg-white  lg:block  top-[80px] border-r border-slate-100 py-6 h-[calc(100vh-80px)]'>
                    {/* sideBar content */}
                    <Sidebar />
                </div>

                {/* body element or pages */}
                <div className='flex-1 py-8 px-8 lg:px-12'>
                    <Outlet />
                </div>
            </section>
        </main>
    )
}
export default DashboardLayout
