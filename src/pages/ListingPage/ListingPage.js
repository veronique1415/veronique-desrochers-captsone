import "./ListingPage.scss"

const Listing = () => {

   

    return (
        <main>
            <section className="pdf__section">
                <div className="pdf__container">
                    <iframe src={process.env.PUBLIC_URL + '/Grand-Ordinaire-Jan2024.pdf'} title="grand-ordinaire-pdf"  className="pdf"></iframe>
                </div>
                <div className="pdf__button--container">
                    <a href={process.env.PUBLIC_URL + '/Grand-Ordinaire-Jan2024.pdf'} download={"grand-ordinaire-listing.pdf"} className="pdf__button--link">
                        <button type="download" className="pdf__button">Click to download</button>
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Listing;