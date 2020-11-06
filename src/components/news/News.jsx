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


    const content = offers?.map(offer => <OfferCard offer={offer} key={offer.id}/>)



    return (
        <section className="News">
            {content || <h2>There is nothing new for you!</h2>}
        </section>
    )
}

export default News