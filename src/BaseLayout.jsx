export default function BaseLayout({ children }) {
    return <div className='w-full h-full bg-[#010204] text-[#94a4b8]'>
        <main className=''>
            {children}
        </main>
    </div>
}