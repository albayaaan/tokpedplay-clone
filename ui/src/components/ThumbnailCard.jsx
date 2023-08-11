const ThumbnailCard = () => {
    return (
        <>
            <div className="bg-gray-100 p-3 rounded-lg">
                <img
                    className="h-40 rounded w-full object-cover object-center mb-2"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font">
                    Chichen Itza
                </h2>
            </div>
        </>
    );
};

export default ThumbnailCard;
