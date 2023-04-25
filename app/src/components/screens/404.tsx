
function Page404() {
  return (
    <>

      <div className="grid h-screen place-items-center dark:bg-gray-800">
        <div className="text-center text-3xl font-bold text-white dark:text-gray-600">
          <div>
            <h1>
              The page is not found.
            </h1>
            <div className='mt-4'>
              <a href='/' className='link-primary'>Top Page</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page404