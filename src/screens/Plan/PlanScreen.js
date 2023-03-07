import React, {useEffect, useState} from "react";
import './PlanScreen.css';
import firebaseDb from "../../firebase";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";
import {loadStripe} from "@stripe/stripe-js";
import {publishableKey} from "../../stripeConsts";

const PlanScreen = ({ setCurrentPlan }) => {
    const [products, setProducts] = useState([]);
    const [subscription, setSubscription] = useState(null);
    const user = useSelector(selectUser);

    useEffect(() => {
        firebaseDb.collection('customers')
            .doc(user.userId)
            .collection('subscriptions')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(async (subscription) => {
                    setSubscription({
                        role: subscription.data().role,
                        current_period_end: subscription.data().current_period_end.seconds,
                        current_period_start: subscription.data().current_period_start.seconds,

                    })
                    setCurrentPlan(subscription.data().role.charAt(0).toUpperCase() + subscription.data().role.slice(1))
                })
            })
    }, [user.userId])

    console.log('sub', subscription)
    useEffect(() => {
        firebaseDb.collection('products')
            .where('active', '==', true)
            .get()
            .then(querySnapshot => {
                const products = {};
                querySnapshot.forEach(async (productDoc) => {
                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc.ref.collection('prices').get();
                    priceSnap.docs.forEach(price => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data()
                        }
                    })
                })
                setProducts(products);
            })
    }, []);

    const loadCheckout = async (priceId) => {
        const docRef = await firebaseDb
            .collection('customers')
            .doc(user.userId)
            .collection('checkout_sessions')
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            })

        docRef.onSnapshot(async (snapshot) => {
            const {error, sessionId} = snapshot.data();

            if (error) {
                // In case of error occured inspect Cloud function logs  in the firebase console
                alert(`An error occured: ${error.message}`)
            }

            if (sessionId) {
                // We have a session, then we redirect to Checkout
                // Init Stripe
                const stripe = await loadStripe(publishableKey)
                stripe.redirectToCheckout({sessionId})
            }
        })
    }

    return (
        <div className='planScreen'>
            <br/>
            {subscription && <p>Renewal date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>}
            {Object.entries(products).map(([productId, productData]) => {
                const isCurrentPackage = productData?.name.toLowerCase().includes(subscription?.role.toLowerCase());
                return (
                    <div key={productId} className={`${isCurrentPackage && 'planScreen__plan--disabled'} planScreen__plan`}>
                        <div className='planScreen__info'>
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                            {isCurrentPackage ? 'Current Package' : 'Subscribe'}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default PlanScreen;