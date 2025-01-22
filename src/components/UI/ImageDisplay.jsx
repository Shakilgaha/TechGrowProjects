import { FiDownload } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

export const ImageDisplay = ({ curElem }) => {

    const [like, SetLike] = useState(false);
  
    //* For Like Dislike Feature
    const handleLikeBtn = () => {
        SetLike(!like);
    }

    //* For Image Download
    const handleImgDownload = () => {
        const fileName = curElem.alt;
        const imgUrl = curElem.src.original;

        const link = document.createElement("a");
        link.href = imgUrl;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
    }

    return (
        <li key={curElem.id} className="mb-5  dark:border dark:border-gray-600 rounded-2xl" >
            
            <figure className="group relative overflow-hidden rounded-2xl shadow-md  ">
                <img src={curElem.src.original} alt={curElem.alt}
                    className="w-full h-full "
                />

                {/* //? div Hover Contain  */}
                <div className="hidden group-hover:flex inset-0 absolute flex-col h-full justify-between  bottom-0 left-0 w-full p-4 bg-gradient-to-t from-gray-800 via-transparent to-transparent text-white ">

                    <div className="flex justify-end w-full text-2xl ">
                        <button onClick={handleLikeBtn} className={` ${like ? "liked" : false}  `}>
                            <FaRegHeart />
                        </button>
                    </div>

                    {/* //?For User Info  */}
                    <section className="flex w-full h-fit gap-3 justify-between" >
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">
                                <FaUserCircle />
                            </span>
                            <h1 className="font-semibold "> {curElem.photographer} </h1>
                        </div>

                        <button className="btn-img flex gap-3  rounded-lg"
                            onClick={handleImgDownload}
                        >
                            <FiDownload />
                            <span className="hidden md:flex">
                                Download
                            </span>
                        </button>
                    </section>

                </div>
            </figure>
        </li>
    )
}