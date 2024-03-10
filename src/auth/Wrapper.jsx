export default function AuthWrapper({children}) {
    return (
      <div className='flex min-h-full flex-col justify-center pt-10 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white text-zinc-900 py-8 px-4 shadow-xl ring-1 ring-gray-900/10 sm:rounded-lg sm:px-10 overflow-hidden'>
            <div className='-mt-8'>
              { children }
            </div>
          </div>
        </div>
      </div>
    );
  }