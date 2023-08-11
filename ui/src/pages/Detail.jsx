import ProductCard from "../components/ProductCard";

const Detail = () => {
    return (
        <div className="flex">
            <div>
                <iframe
                    className="w-[758px] h-[426px]"
                    src="https://www.youtube.com/embed/OK5uV4F7HrU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                asda
            </div>
            <div className="flex-auto grid grid-cols-3 place-content-start gap-2 p-4">
                <ProductCard />
                {/* <ProductCard />
                <ProductCard />
                <ProductCard /> */}
            </div>
        </div>
    );
};

export default Detail;
