const blogsFakeData = [
    {
        id: 1,
        question: "Difference between authorization and authentication",
        answer: `
                    Authentication বলতেঃ কাউকে কোন কিছু বা কারো কোন act(যা সঠিক বলে দাবী করা হচ্ছে) প্রকৃতপক্ষে তা সত্য কি না সেইটা নির্ণয় করার বা নিশ্চয়তা দেওয়ার প্রক্রিয়াকে বোঝায়। সহজ কোথায় কাওকে ভেরিফাই করার পদ্ধতিকেই Authentication বলে। যেমনঃ লগইন করতে দেওয়া বা সাইন ইন করতে দেওয়া কোন একটা সাইটে। 

                    আর Authorization বলতেঃ কাউকে কোন কাজ করার জন্য বা কোন resource ব্যবহার করতে পারার permission দেওয়ার প্রক্রিয়াকে বোঝায়। অন্য কথায়, একজন ইউজার কোন কোন application, file or data কে ব্যবহার বা access করতে পারবে তা ভেরিফাই করার পদ্ধতি। যেমনঃ ফেসবুকের এডমিন, মডারেটর।
                `,
    },
    {
        id: 2,
        question:
            "Why are you using firebase? what other options do you have to implement authentication? ",
        answer: `
                    মূলত Firebase এর Authentication & Hosting features গুলোর জন্যই এখন মুলত firebase ব্যবহার করছি। এছাড়াও এখানে database, machine learning ও storage এর মতো সুবিধা গুলো রয়েছে। তবে এই features গুলোর ভিতর থেকে firebase authentication feature এর মতো feature অন্য কিছু জায়গাতেও রয়েছে। যেমনঃ Auth0, MongoDB, Passport, Okta এগুলো সবথেকে পপুলার। 
                `,
    },
    {
        id: 3,
        question:
            "What other services does firebase provide other than authentication?",
        answer: `
                Firebase authentication এর পাশাপাশি আরও যে সকল service গুলো provide করে থাকেঃ Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config.
            `,
    },
];

export default blogsFakeData;
