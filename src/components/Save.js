import { useState } from "react";
import { create } from "ipfs-http-client";
import axios from "axios";

const client = create("https://ipfs.infura.io:5001/api/v0");

export default function Save() {
  const [fileUrl, updateFileUrl] = useState(``);
  const [textMemory, updateTextMemory] = useState("");
  const [finalText, setFinaText] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function submitMemory() {
    const mem = JSON.stringify(textMemory);
    console.log(JSON.stringify(textMemory));
    try {
      const textAdded = await client.add(mem);
      const textUrl = `https://ipfs.infura.io/ipfs/${textAdded.path}`;
      const response = await axios.get(textUrl);
      console.log(response.data);
      // const data = response.json();
      setFinaText(response.data);
      // fetch(textUrl)
      // .then(response => response.json())
      // .then(data => {setFinaText(data);});
      // setIsLoading(true);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 1000);
    } catch (error) {
      console.log("Error adding text", error);
    }
  }

  return (
    <div>
      {/* Buttons */}
      <section class="py-6 bg-coolGray-100 text-coolGray-900">
        <div class="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 class="text-5xl font-bold leading-none text-center">
            Save Your Memories Today
          </h1>
          <p class="text-xl font-normal text-center">
            Please select an option below to get started. Do you want to store
            an image or text?
          </p>
          <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
            <button class="px-16 py-3 text-lg font-semibold rounded bg-green-400 text-coolGray-50">
              Images
            </button>
            <button class="px-20 py-3 text-lg font-semibold border rounded bg-coolGray-800 text-coolGray-50 border-coolGray-700">
              Text
            </button>
          </div>
        </div>
      </section>
      <div class="flex items-center mx-20 justify-between p-4 border-l-8 sm:py-8 border-green-400 bg-coolGray-50 text-coolGray-800">
        <div>
          Coming soon :<br></br>
          <li>Remind me - write a letter to your future self</li>
          <li>Multiple images</li>
        </div>
      </div>

      {/* File - Images */}
      <div className="bg-gray-100 py-20 px-20 mx-72 my-10 rounded-md ">
        <input type="file" onChange={onChange} />
      </div>
      {fileUrl && (
        //   <img src={fileUrl} alt="imagegenerated" width="600px" />

        <section class="py-6 bg-coolGray-100 text-coolGray-900">
          <div class="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
            <img
              alt=""
              class="w-full h-full rounded shadow-sm min-h-48"
              src={fileUrl}
            />
            <img
              alt=""
              class="w-full h-full rounded shadow-sm min-h-48"
              src={fileUrl}
            />
            <img
              alt=""
              class="w-full h-full rounded shadow-sm min-h-48"
              src={fileUrl}
            />
            <img
              alt=""
              class="w-full h-full rounded shadow-sm min-h-48"
              src={fileUrl}
            />
            <img
              alt=""
              class="w-full h-full rounded shadow-sm min-h-48"
              src={fileUrl}
            />
            <img
              alt=""
              class="w-full h-full rounded shadow-sm min-h-48"
              src={fileUrl}
            />
            <img
              alt=""
              class="w-full h-full rounded shadow-sm min-h-48"
              src={fileUrl}
            />
            <img
              alt=""
              class="w-full h-full rounded shadow-sm min-h-48"
              src={fileUrl}
            />
          </div>
        </section>
      )}

      {/* Text */}
      {/* <div className="flex flex-row my-20">
        <input
          type="text"
          placeholder="Memory"
          onChange={(e) => updateTextMemory(e.target.value)}
          className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
        />
        <button
          onClick={submitMemory}
          type="button"
          className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-green-600 text-coolGray-50"
        >
          Submit
        </button>
      </div> */}

      <div className="my-20">
        <label>
          Essay:
          <textarea onChange={(e) => updateTextMemory(e.target.value)} />
        </label>
        <button onClick={submitMemory}>Submit</button>
      </div>

      {/* <input
        type="text"
        placeholder="Memory"
        onChange={(e) => updateTextMemory(e.target.value)}
      />
      <button onClick={submitMemory}>Submit</button> */}
      {/* {isLoading ? (
        <img
          src="https://media1.giphy.com/media/WiIuC6fAOoXD2/giphy.gif"
          alt="loading"
          width="50px"
          height="50px"
        />
      ) : null} */}

      {finalText && (
        // <div class="bg-gray-100 py-20 px-20 mx-72 my-10 rounded-md ">
        //   {finalText}
        // </div>
        <div
          className="mx-20 bg-gray-100"
          dangerouslySetInnerHTML={{ __html: finalText }}
        />
      )}
    </div>
  );
}
