export default function BaseLayout({ children }) {
    return <div
        className='w-screen h-screen bg-[#010204] text-[#94a4b8]'
    >
        <main
            className='px-5 sm:mx-auto sm:max-w-2xl sm:px-8 lg:px-10 antialiased md:max-w-6xl grid gap-12 mt-4 mb-10 overflow-hidden md:overflow-visible'
        >
            {children}
        </main>
    </div>
}