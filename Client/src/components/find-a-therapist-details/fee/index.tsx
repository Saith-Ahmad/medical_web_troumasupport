
function Fee() {
    return (
        <div className='w-full lg:min-w-[700px] bg-white p-5 my-10 rounded-xl py-10'>
            <article className='flex flex-col justify-start items-start  gap-5 para-medium'>
                <div>
                    <p className='para-large font-semibold'>Fee</p>
                    <p className="ps-4">£40.00 - £50.00</p>
                    <p className="ps-4">Free initial telephone session</p>
                </div>

                <div className="mt-3">
                    <p className='para-large font-semibold'>Concessions offered for</p>
                    <p className="ps-4">Students</p>
                    <p className="ps-4">Unemployed</p>
                    <p className="ps-4">Trainee counsellors</p>
                </div>

                <div className="mt-3">
                    <p className='para-large font-semibold'>Additional information</p>
                    <p className="ps-4">Face to face - £50</p>
                </div>
               

            </article>
        </div>
    )
}

export default Fee