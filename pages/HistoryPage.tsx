import React from 'react';
import Navbar from '../components/Navbar';
import History from '../components/History';
import Footer from '../components/Footer';

const HistoryPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-brand-red selection:text-white animate-fade-in">
            <Navbar />
            <main className="pt-20">
                <History />
            </main>
            <Footer />
        </div>
    );
};

export default HistoryPage;
