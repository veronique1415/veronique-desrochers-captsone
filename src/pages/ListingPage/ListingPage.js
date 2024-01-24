import "./ListingPage.scss"

const Listing = () => {

   

    return (
        <main>
            <div className="pdf__container">
                <iframe src={process.env.PUBLIC_URL + '/Grand-Ordinaire-Jan2024.pdf'} title="grand-ordinaire-pdf"  className="pdf"></iframe>
            </div>
        </main>
    )
}

export default Listing;