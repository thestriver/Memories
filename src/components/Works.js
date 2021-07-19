export default function Works() {
  return (
    <div
      id="hero2"
      className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-6xl font-bold tracking-wider text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            How It Works
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg">
            When you store your memories with us, we save them on an immutable
            and secure blockchain called IPFS. IPFS generates a unique address
            which we use in generating a preview for you. We also give you the
            ability to save this links for future reference.
          </p>
        </div>
      </div>
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-900 uppercase bg-green-400 rounded-full">
          Coming Soon
        </p>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h6 className="mb-2 font-semibold leading-5">Remind Me</h6>
          <p className="mb-3 text-sm text-gray-900">
            Write a letter to your future self or loved ones and we will remind
            you when it's time.
          </p>
        </div>
        <div>
          <h6 className="mb-2 font-semibold leading-5">Multiple Images</h6>
          <p className="mb-3 text-sm text-gray-900">
            You will be able to save multiple images at once.
          </p>
        </div>
        <div>
          <h6 className="mb-2 font-semibold leading-5">Dashboard</h6>
          <p className="mb-3 text-sm text-gray-900">
            A personalized dashboard for your stored memories
          </p>
        </div>
        <div>
          <h6 className="mb-2 font-semibold leading-5">URL shortener</h6>
          <p className="mb-3 text-sm text-gray-900">
            A customized, shareable link for you.
          </p>
        </div>
      </div>
    </div>
  );
}
