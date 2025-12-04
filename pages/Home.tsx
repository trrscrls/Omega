import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Heritage from '../components/Heritage';
import Services from '../components/Services';
import Footer from '../components/Footer';

// Lazy load below-the-fold components
const Portfolio = React.lazy(() => import('../components/Portfolio'));
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const ContactForm = React.lazy(() => import('../components/ContactForm'));

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-brand-red selection:text-white animate-fade-in">
            <Navbar />
            <main>
                <Hero />
                <Heritage />
                <Services />
                <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin"></div></div>}>
                    <Portfolio />
                    <Testimonials />
                    <ContactForm />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
