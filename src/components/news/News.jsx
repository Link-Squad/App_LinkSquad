import React, {useEffect, useState} from 'react';
import { getOffers } from '../../services/api.service';
import OfferCard from '../offerCard/OfferCard';
import './News.scss'

const News = () => {
    const [offers, setOffers] = useState()
    useEffect(() => {
        getOffers()
            .then(o => {
                setOffers(o)
            })
    }, [])


    const content = offers?.map(offer => <OfferCard offer={offer} />)



    return (
        <section className="News">
            <h2 className="News__title title">News</h2>
            {content || <h2>There is nothing new for you!</h2>}
        </section>
    )
}

export default News