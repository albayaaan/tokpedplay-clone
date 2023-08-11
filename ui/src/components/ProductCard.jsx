const ProductCard = () => {
    return (
        <>
            <div className="bg-gray-100 p-4">
                <a className="block relative h-48 rounded overflow-hidden">
                    <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src="https://dummyimage.com/250"
                    />
                </a>
                <div className="mt-2">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                        The Catalyzer
                    </h2>
                    <p>$16.00</p>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
