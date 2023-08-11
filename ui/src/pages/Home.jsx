import ThumbnailCard from "../components/ThumbnailCard";

const Home = () => {
    return (
        <div className="grid grid-cols-4 gap-3">
            <ThumbnailCard />
            <ThumbnailCard />
            <ThumbnailCard />
            <ThumbnailCard />
            <ThumbnailCard />
        </div>
    );
};

export default Home;
