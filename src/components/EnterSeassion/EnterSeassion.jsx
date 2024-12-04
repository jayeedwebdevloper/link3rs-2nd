import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";

export default function EnterSeassion() {
    return (
        <div className="w-full h-screen overflow-y-auto">
            <div className="max-md:hidden bg-[#e7e7e7] w-full h-full">
                <Desktop />
            </div>
            <div className="md:hidden bg-[#f5f5f5] w-full h-full">
                <Mobile />
            </div>
        </div>
    )
}
