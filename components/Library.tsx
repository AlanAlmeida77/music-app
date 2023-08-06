"use client";
import {TbPlaylist} from "react-icons/tb";

const Library = () => {
    const onClick = () => {
        // handle upload 
    };
    return (
        <div className="flex flex-col">
    <div
        className="
        flex
        items-center
        justify-betweeen
        px-5
        pt-4
        "
    >
        <div 
        className="
        inline-flex
        items-center
        gap-x-2
        "
        >
            <TbPlaylist />
            </div>

        </div>
    </div>
    )
}

export default Library;