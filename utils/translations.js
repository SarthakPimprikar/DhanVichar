export const translations = {
    english: {
        // Home Screen
        welcomeBack: 'Welcome Back',
        whatLearn: 'Search financial videos...',
        guidancePreviews: 'Featured Videos',
        inProgress: 'Continue Watching',
        seeAll: 'See All',
        popularCourses: 'Popular Videos',
        courseProgress: 'Video Progress',
        lessons: 'Videos',
        enrollNow: 'Watch Now',

        // Courses
        myCourse: 'My Videos',
        coursesFor: 'You have',
        coursesForYou: 'videos to watch.',

        // Chat
        messages: 'Messages',
        youHave: 'You have',
        newMessages: 'new messages.',
        unread: 'Unread',
        markAsRead: 'Mark as read',
        typeMessage: 'Type a message...',
        online: 'Online',

        // Profile
        profile: 'Profile',
        enrolledCourses: 'Watched Videos',
        mockTestsDone: 'Quizzes Completed',
        examReadiness: 'Financial Knowledge',
        personalData: 'Personal Data',
        settings: 'Settings',
        eStatement: 'E-Statement',
        referralCode: 'Referral Code',
        faqs: 'FAQs',
        logOut: 'Log Out',
        aspirantName: 'Your Name',

        // Course Details
        upscRecommended: 'Recommended',
        reviews: 'reviews',
        createdBy: 'Created by',
        aboutCourse: 'About This Series',
        curriculum: 'Video Playlist',
        mins: 'mins',

        // Common
        upscAspirant: 'Financial Learner',

        // Course Names
        course1: 'Stock Market Basics for Beginners',
        course2: 'Mutual Funds Complete Guide',
        course3: 'Personal Finance & Budgeting',
        course4: 'Investing in Indian Stock Market',
        course5: 'Tax Planning & Savings',
        course6: 'Cryptocurrency & Digital Assets',
        course7: 'Real Estate Investment Strategies',
        course8: 'Retirement Planning Masterclass',
        course9: 'Financial Freedom Blueprint',
    },
    marathi: {
        // Home Screen
        welcomeBack: 'पुन्हा स्वागत आहे',
        whatLearn: 'आर्थिक व्हिडिओ शोधा...',
        guidancePreviews: 'वैशिष्ट्यीकृत व्हिडिओ',
        inProgress: 'पाहणे सुरू ठेवा',
        seeAll: 'सर्व पहा',
        popularCourses: 'लोकप्रिय व्हिडिओ',
        courseProgress: 'व्हिडिओ प्रगती',
        lessons: 'व्हिडिओ',
        enrollNow: 'आता पहा',

        // Courses
        myCourse: 'माझे व्हिडिओ',
        coursesFor: 'तुमच्याकडे',
        coursesForYou: 'व्हिडिओ पाहण्यासाठी आहेत.',

        // Chat
        messages: 'संदेश',
        youHave: 'तुमच्याकडे',
        newMessages: 'नवीन संदेश आहेत.',
        unread: 'न वाचलेले',
        markAsRead: 'वाचले म्हणून चिन्हांकित करा',
        typeMessage: 'संदेश टाइप करा...',
        online: 'ऑनलाइन',

        // Profile
        profile: 'प्रोफाइल',
        enrolledCourses: 'पाहिलेले व्हिडिओ',
        mockTestsDone: 'क्विझ पूर्ण',
        examReadiness: 'आर्थिक ज्ञान',
        personalData: 'वैयक्तिक माहिती',
        settings: 'सेटिंग्ज',
        eStatement: 'ई-स्टेटमेंट',
        referralCode: 'रेफरल कोड',
        faqs: 'सामान्य प्रश्न',
        logOut: 'लॉग आउट',
        aspirantName: 'तुमचे नाव',

        // Course Details
        upscRecommended: 'शिफारस केलेले',
        reviews: 'पुनरावलोकने',
        createdBy: 'निर्मिती',
        aboutCourse: 'या मालिकेबद्दल',
        curriculum: 'व्हिडिओ प्लेलिस्ट',
        mins: 'मिनिटे',

        // Common
        upscAspirant: 'आर्थिक शिकणारा',

        // Course Names
        course1: 'नवशिक्यांसाठी शेअर बाजार मूलभूत',
        course2: 'म्युच्युअल फंड संपूर्ण मार्गदर्शक',
        course3: 'वैयक्तिक वित्त आणि बजेटिंग',
        course4: 'भारतीय शेअर बाजारात गुंतवणूक',
        course5: 'कर नियोजन आणि बचत',
        course6: 'क्रिप्टोकरन्सी आणि डिजिटल मालमत्ता',
        course7: 'रिअल इस्टेट गुंतवणूक धोरणे',
        course8: 'सेवानिवृत्ती नियोजन मास्टरक्लास',
        course9: 'आर्थिक स्वातंत्र्य योजना',
    }
};

export const getTranslation = (language, key) => {
    return translations[language]?.[key] || translations.english[key] || key;
};
