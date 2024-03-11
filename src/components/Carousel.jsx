import styles from "./Carousel.module.css";
function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % items.length;
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + items.length) % items.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.slideContainer}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={
                            index === currentIndex ? "slide active" : "slide"
                        }
                    >
                        <img src={item.image} alt={item.description} />
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
            <button onClick={() => goToSlide(0)}>Go to Start</button>
            <button onClick={() => goToSlide(items.length - 1)}>
                Go to End
            </button>
        </div>
    );
}

export default Carousel;
