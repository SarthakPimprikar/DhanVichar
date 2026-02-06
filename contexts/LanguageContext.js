import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('english'); // 'english' or 'marathi'

    const toggleLanguage = () => {
        setLanguage(prev => {
            if (prev === 'english') return 'hindi';
            if (prev === 'hindi') return 'marathi';
            return 'english';
        });
    };

    const value = {
        language,
        setLanguage,
        toggleLanguage,
        isMarathi: language === 'marathi',
        isEnglish: language === 'english',
        isHindi: language === 'hindi'
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
