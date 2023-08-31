
const Newsletter = () => {
    return (
        <div>
            <section className="newsletter section container">
                <div className="newsletter__bg grid">
                    <div>
                        <h2 className="newsletter__title">Subscribe Our <br /> Newsletter</h2>
                        <p className="newsletter__description">
                            Don't miss out on your discounts. Subscribe to our email 
                            newsletter to get the best offers, discounts, coupons, 
                            gifts and much more.
                        </p>
                    </div>

                    <form action="mailto:" className="newsletter__subscribe">
                        <input type="email" placeholder="Enter your email" className="newsletter__input" />
                        <button className="button">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Newsletter;