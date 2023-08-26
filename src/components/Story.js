
const Story = () => {
    return (
        <div>
            <section className="story section container">
                <div className="story__container grid">
                    <div className="story__data">
                        <h2 className="section__title story__section-title">
                            Our Story
                        </h2>
    
                        <h1 className="story__title">
                            Best Seller brand of <br/> this year
                        </h1>
    
                        <p className="story__description">
                            The latest and modern watches & snickers of this year, is available in various 
                            presentations in this store, discover them now.
                        </p>
    
                        <a href="https://victoralexug.github.io/victoralexug/" className="button button--small">Discover</a>
                    </div>

                    <div className="story__images">
                        <img src="../img/story.png" alt="story" className="story__img" />
                        <div className="story__square"></div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Story;