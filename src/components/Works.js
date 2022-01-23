export default function Works() {
  return (
    <div
      id="hero2"
      className="xl:mx-44 lg:mx-10 md:mx-20 mx-10 py-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-10"
    >
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-2/3">
          <h2 className="max-w-md mb-6 font-sans text-6xl font-bold tracking-wider text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            How It Works
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            When you store your memories with us, we save them on an immutable
            and secure distributed file system called <a href="https://docs.ipfs.tech/concepts/what-is-ipfs/">IPFS</a>. IPFS generates a unique address
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
        <div className="border-double border-4 border-green-600 rounded-xl p-2">
          <h6 className="mb-2 font-semibold leading-5">Remind Me</h6>
          <p className="mb-3 text-sm text-gray-900">
            Write a letter to your future self or loved ones and we will remind
            you when it's time.
          </p>
        </div>
        <div className="border-double border-4 border-green-600 rounded-xl p-2">
          <h6 className="mb-2 font-semibold leading-5">Multiple Images</h6>
          <p className="mb-3 text-sm text-gray-900">
            You will be able to save multiple images at once.
          </p>
        </div>
        <div className="border-double border-4 border-green-600 rounded-xl p-2">
          <h6 className="mb-2 font-semibold leading-5">Dashboard</h6>
          <p className="mb-3 text-sm text-gray-900">
            A personalized dashboard for your stored memories
          </p>
        </div>
        <div className="border-double border-4 border-green-600 rounded-xl p-2">
          <h6 className="mb-2 font-semibold leading-5">URL shortener</h6>
          <p className="mb-3 text-sm text-gray-900">
            A customized, shareable link for you.
          </p>
        </div>
      </div>
    </div>
  );
}
