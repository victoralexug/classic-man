
const Scroll = (props) => {
    return (
        <div>
            <a href="/" className={props.scrollTop ? "scrollup show-scroll": "scrollup" } id="scroll-up"> 
                <i className='bx bx-up-arrow-alt scrollup__icon' ></i>
            </a>
        </div>
    );
};

export default Scroll;