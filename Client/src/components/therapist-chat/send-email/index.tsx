
function SendEmail() {
  return (
    <div className="p-4 bg-offwhite rounded-lg shadow-md">
        <form className="flex flex-col gap-3 lg:flex-row justify-between items-center space-x-2">
            <input className="w-full p-3 pr-10 border rounded-lg font-light bg-white border-none outline-none focus:ring-2 focus:ring-primary placeholder-gray-900" 
                placeholder="Email Aaddress"
            />

          <button
            type="submit"
            className="lg:py-3 py-2 px-10 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark flex gap-2 hvr-scl-primary"
          >
            Send
          </button>
        </form>
      </div>
  )
}

export default SendEmail