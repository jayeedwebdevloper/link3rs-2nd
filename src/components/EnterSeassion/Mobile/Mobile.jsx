import { Link } from "react-router-dom";
import './mobile.css';
import { useState } from "react";

export default function Mobile() {
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Captured file:", file);
            alert("Camera app opened and file captured!");
        } else {
            setError("No file captured.");
        }
    };

    return (
        <div className="w-full">
            <div className="w-full py-4 px-5 bg-[#e1e1e1]">
                <img className="w-[100px]" src="/images/Link3rsLogoPng.png" alt="Link3rs" />
            </div>

            <div className="w-full py-4 px-5 text-center">
                <h1 className="text-[25px] helve leading-[1.2] pt-[75px]">Hear in your language.</h1>
                <h1 className="text-[25px] helve leading-[1.2]">With your headphones.</h1>
            </div>

            <div className="px-5">
                <div className="w-full sm:w-[400px] bg-white h-[170px] rounded-2xl boxShadowBlue mx-auto p-[15px]">
                    <label htmlFor="code" className="block abcd">Enter Session Code</label>
                    <input
                        type="text"
                        placeholder="Type code"
                        className="placeholder:text-[#919191] placeholder:font-semibold bg-[#e1e1e1] w-full py-3 px-5 text-black outline-none border-none rounded-xl mt-2 abcd tracking-wide"
                    />

                    <div className="flex justify-between items-center pt-4">
                        <p className="abcd py-2">or Scan QR Code</p>
                        <label
                            htmlFor="cameraInput"
                            className="flex gap-1 items-center justify-center py-2 px-5 rounded-lg bg-[#e1e1e1] text-[#919191] cursor-pointer"
                        >
                            Open <img className="w-7" src="/images/camera.png" alt="" />
                        </label>
                        <input
                            id="cameraInput"
                            type="file"
                            accept="image/*"
                            capture="environment"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full sm:w-[400px] mx-auto px-8 pt-3">
                <Link className="text-lg abcd font-bold block" to="https://www.link3rs.com">Discover Apricot</Link>
            </div>

            {error && (
                <div className="w-full text-center mt-4 text-red-500">
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
}