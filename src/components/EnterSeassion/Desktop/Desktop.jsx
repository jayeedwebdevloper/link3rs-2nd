import { Link } from "react-router-dom";

export default function Desktop() {
    return (
        <div className="w-full">
            <img className="w-[130px] mx-auto text-center pt-[70px] mb-5" src="/images/Link3rsLogoPng.png" alt="Link3rs" />

            <div className="w-[650px] mx-auto relative">
                <img className="h-[96px] absolute -left-2 top-0" src="/images/airpodA.png" alt="airpod" />
                <h1 className="text-[50px] helve text-center leading-[1.2]">Hear in your language.</h1>
                <h1 className="text-[50px] helve text-center leading-[1.2]">With your headphones.</h1>
                <img className="h-[96px] absolute -right-1 -bottom-7" src="/images/airpodB.png" alt="airpod" />
            </div>

            <div className="w-[450px] bg-white h-[150px] rounded-2xl shadow-lg shadow-black/5 mx-auto mt-12 p-[25px]">
                <label htmlFor="code" className="block abcd pt-3 text-lg">Enter Session Code</label>
                <input type="text" placeholder="Type code" className="placeholder:text-white placeholder:font-semibold bg-[#d5d5d5] w-full py-3 px-5 text-black outline-none border-none rounded-s-full rounded-e-full mt-2 abcd tracking-wide" />
            </div>

            <Link className="text-lg abcd font-bold block text-center mt-5" to="/admin-login">Admin Log In</Link>
            <Link className="text-lg abcd font-bold block absolute right-8 bottom-6" to="https://www.link3rs.com">Discover Apricot</Link>
        </div>
    )
}
