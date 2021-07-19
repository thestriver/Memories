import { useState } from "react";
import { create } from "ipfs-http-client";
import axios from "axios";

const client = create("https://ipfs.infura.io:5001/api/v0");

export default function Save() {
  const [fileUrl, updateFileUrl] = useState(``);
  const [textMemory, updateTextMemory] = useState("");
  const [finalText, setFinaText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowtText] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [textCopy, setTextCopy] = useState(``);
  const [showCopy, setShowCopy] = useState(false);

  async function onChange(e) {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
      setShowCopy(true);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function submitMemory() {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
    const mem = JSON.stringify(textMemory);
    console.log(JSON.stringify(textMemory));
    try {
      const textAdded = await client.add(mem);
      const textUrl = `https://ipfs.infura.io/ipfs/${textAdded.path}`;
      // console.log(textUrl);
      setTextCopy(textUrl);
      setShowCopy(true);
      const response = await axios.get(textUrl);
      // console.log(response.data);
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

  const copy = fileUrl ? fileUrl : textCopy;

  return (
    <div id="hero">
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
            <button
              class="px-16 py-3 text-lg font-semibold rounded bg-green-400 text-coolGray-50 hover:text-white "
              onClick={() => {
                setShowImage(true);
                setShowtText(false);
                setFinaText("");
              }}
            >
              Images
            </button>
            <button
              class="px-20 py-3 text-lg font-semibold border rounded bg-coolGray-800 text-coolGray-50 border-coolGray-700 hover:bg-green-400 hover:text-white"
              onClick={() => {
                setShowtText(true);
                setShowImage(false);
                updateFileUrl(``);
              }}
            >
              Text
            </button>
          </div>
        </div>
      </section>

      {showCopy ? (
        <div className="mx-8">
          <small class="md:px-48">Your generated url:</small>
          <div className="flex flex-col items-center w-full mb-4 md:flex-row md:px-48">
            <input
              value={copy}
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-gray-400 focus:outline-none focus:shadow-outline"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(copy);
              }}
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-400 rounded shadow-md md:w-auto hover:bg-green-500 focus:shadow-outline focus:outline-none"
            >
              Copy
            </button>
          </div>
        </div>
      ) : null}

      {/* File - Images */}

      {showImage ? (
        <div
          className="px-20 py-16 mx-8 my-2 bg-gray-100 rounded-xl md:mx-72 "
          onClick={() => {
            setTimeout(() => {
              setAnimate(true);
            }, 100);
          }}
        >
          <input type="file" onChange={onChange} />
        </div>
      ) : null}

      {showText ? (
        <div className="mx-8 md:mx-72">
          <textarea
            class="w-full h-48 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            onChange={(e) => updateTextMemory(e.target.value)}
            placeholder="Text here"
          />
          <button
            class="inline-block px-16 py-3 mb-3 mr-4 text-xl font-medium leading-normal bg-green-400 hover:bg-green-500 text-white rounded transition duration-200"
            onClick={submitMemory}
          >
            Submit
          </button>
        </div>
      ) : null}

      {animate ? (
        <span class="hidden md:inline-block  animate-bounce rounded-full p-4 bg-green-400 text-white text-sm">
          <svg
            class="w-6 h-6 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </span>
      ) : null}

      {/* Spinner */}
      {/* <div className="pl-3 mx-32">
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2   text-base leading-6 font-medium rounded-md text-white bg-green-400 transition ease-in-out duration-150"
          >
            <svg
              class="animate-spin  h-12 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </button>
        </span>
      </div> */}

      {fileUrl && (
        <section class="md:mx-72 py-6 bg-coolGray-100 text-coolGray-900">
          <div class="">
            <img
              alt=""
              class="w-full h-full rounded shadow-sm min-h-96"
              src={fileUrl}
            />
          </div>
        </section>
      )}

      {finalText && (
        <div>
          <div class="bg-gray-100 py-20 px-20 mx-8 md:mx-72 my-10 rounded-md ">
            {finalText}
          </div>
        </div>
      )}
    </div>
  );
}
