export const translations = {
    english: {
        // Home Screen
        welcomeBack: 'Welcome Back',
        whatLearn: 'Search courses...',
        guidancePreviews: 'Guidance Previews',
        inProgress: 'In Progress',
        seeAll: 'See All',
        popularCourses: 'Popular Courses',
        courseProgress: 'Course Progress',
        lessons: 'Lessons',
        enrollNow: 'Enroll Now',

        // Courses
        myCourse: 'My Course',
        coursesFor: 'There are',
        coursesForYou: 'courses for you.',

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
        enrolledCourses: 'Enrolled Courses',
        mockTestsDone: 'Mock Tests Done',
        examReadiness: 'Exam Readiness',
        personalData: 'Personal Data',
        settings: 'Settings',
        eStatement: 'E-Statement',
        referralCode: 'Referral Code',
        faqs: 'FAQs',
        logOut: 'Log Out',
        aspirantName: 'Aspirant Name',

        // Course Details
        upscRecommended: 'UPSC Recommended',
        reviews: 'reviews',
        createdBy: 'Created by',
        aboutCourse: 'About Course',
        curriculum: 'Curriculum',
        mins: 'mins',

        // Common
        upscAspirant: 'UPSC Aspirant',

        // Course Names
        course1: 'UPSC Prelims Complete Course',
        course2: 'MPSC Rajyaseva Preparation',
        course3: 'Indian Polity & Governance',
        course4: 'Modern Indian History',
        course5: 'Indian Geography & Environment',
        course6: 'Indian Economy & Budget Analysis',
        course7: 'Current Affairs 2026 - Complete',
        course8: 'CSAT Paper-II Mastery',
        course9: 'Essay Writing & Ethics',
    },
    marathi: {
        // Home Screen
        welcomeBack: 'पुन्हा स्वागत आहे',
        whatLearn: 'अभ्यासक्रम शोधा...',
        guidancePreviews: 'मार्गदर्शन पूर्वावलोकन',
        inProgress: 'प्रगतीपथावर',
        seeAll: 'सर्व पहा',
        popularCourses: 'लोकप्रिय अभ्यासक्रम',
        courseProgress: 'अभ्यासक्रम प्रगती',
        lessons: 'धडे',
        enrollNow: 'आता नोंदणी करा',

        // Courses
        myCourse: 'माझे अभ्यासक्रम',
        coursesFor: 'तुमच्यासाठी',
        coursesForYou: 'अभ्यासक्रम आहेत.',

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
        enrolledCourses: 'नोंदणीकृत अभ्यासक्रम',
        mockTestsDone: 'चाचणी पूर्ण',
        examReadiness: 'परीक्षा तयारी',
        personalData: 'वैयक्तिक माहिती',
        settings: 'सेटिंग्ज',
        eStatement: 'ई-स्टेटमेंट',
        referralCode: 'रेफरल कोड',
        faqs: 'सामान्य प्रश्न',
        logOut: 'लॉग आउट',
        aspirantName: 'उमेदवाराचे नाव',

        // Course Details
        upscRecommended: 'UPSC शिफारस केलेले',
        reviews: 'पुनरावलोकने',
        createdBy: 'निर्मिती',
        aboutCourse: 'अभ्यासक्रमाबद्दल',
        curriculum: 'अभ्यासक्रम',
        mins: 'मिनिटे',

        // Common
        upscAspirant: 'UPSC उमेदवार',

        // Course Names
        course1: 'UPSC प्रारंभिक संपूर्ण अभ्यासक्रम',
        course2: 'MPSC राज्यसेवा तयारी',
        course3: 'भारतीय राज्यशास्त्र आणि शासन',
        course4: 'आधुनिक भारतीय इतिहास',
        course5: 'भारतीय भूगोल आणि पर्यावरण',
        course6: 'भारतीय अर्थव्यवस्था आणि अर्थसंकल्प विश्लेषण',
        course7: 'चालू घडामोडी 2026 - संपूर्ण',
        course8: 'CSAT पेपर-II प्रभुत्व',
        course9: 'निबंध लेखन आणि नीतिशास्त्र',
    }
};

export const getTranslation = (language, key) => {
    return translations[language]?.[key] || translations.english[key] || key;
};
