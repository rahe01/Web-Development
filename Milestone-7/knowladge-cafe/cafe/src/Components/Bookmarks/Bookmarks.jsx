import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks ,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 rounded-lg ml-4 mt-2">

            <div>
                <h2 className="text-4xl"> Reading Time : {readingTime}</h2>
            </div>
            <h2 className="text-3xl text-center  rounded-lg">BookMarked Blogs : {bookmarks.length}</h2>
            {bookmarks.map((bookmark ,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )}
        </div>
    );
};

export default Bookmarks;