const QUESTIONS = [
    {
        "prompts": "What's the best thing that happened to you today so far?",
        "response 1": "Received a free coffee from starbucks.",
        "response 2": "My blueberries tasted good today.",
        "response 3": "Disciplining myself to take care of groceries",
        "response 4": ""
    },
    {
        "prompts": "Though they are not perfect, I appreciate that my family...",
        "response 1": "Is always supportive.",
        "response 2": "...are very supportive.",
        "response 3": "supports me",
        "response 4": ""
    },
    {
        "prompts": "What are three things you appreciate about where you are right now?",
        "response 1": "I appreciate my health, education and friendships.",
        "response 2": "Financial aid, opportunity to get into a 4-year university, and not quitting too soon",
        "response 3": "Friends, Family, My privilege",
        "response 4": ""
    },
    {
        "prompts": "I am grateful that I am healthy enough to...",
        "response 1": "to wake every morning and start a new day",
        "response 2": "...wake up and go to school every day.",
        "response 3": "get out of bed",
        "response 4": ""
    },
    {
        "prompts": "Which places (cities, beaches, etc...) do you most appreciate, and why?",
        "response 1": "The beach becasue I find the sounds of waves crashing soothing",
        "response 2": "libraries",
        "response 3": "Beaches because they are calming",
        "response 4": ""
    },
    {
        "prompts": "Though I may not be rich. I'm thankful that I have enough money to...",
        "response 1": "Afford my education",
        "response 2": "...get tea, gas, boba, and food.",
        "response 3": "Go to school",
        "response 4": ""
    },
    {
        "prompts": "Which household items do you most appreciate, and why?",
        "response 1": "The couch because it's my favorite place to do anything",
        "response 2": "Utensils, because this means I don't have to eat with my hands",
        "response 3": "Guitar, music makes me feel alive",
        "response 4": ""
    },
    {
        "prompts": "Though I sometimes take it for granted, I'm thankful for water because...",
        "response 1": "It helps me stay hydrated and healthy",
        "response 2": "...it keeps me refreshed.",
        "response 3": "Clean water is taken for granted",
        "response 4": ""
    },
    {
        "prompts": "What do you most appreciate about spending time in nature?",
        "response 1": "The beauty of nature",
        "response 2": "the plants",
        "response 3": "The air",
        "response 4": ""
    },
    {
        "prompts": "What are some of the most fun expreiences you've had? What do you appreciate about them?",
        "response 1": "Trip to San Fransisco becasue it was spontaneous and lots of fun!",
        "response 2": "I appreciate the impact they leave with me",
        "response 3": "Traveling because the world has so much to offer",
        "response 4": ""
    },
    {
        "prompts": "Today I appreciated countless things I percieved with my eyes including...",
        "response 1": "A puppy on ring road",
        "response 2": "seeing the sunrise",
        "response 3": "People smiling",
        "response 4": ""
    },
    {
        "prompts": "Today I appreciated countless things I percieved with my ears including...",
        "response 1": "Hearing my significant other say I love you",
        "response 2": "that I'm not doing as horrible as I thought in school/work",
        "response 3": "People singing",
        "response 4": ""
    },
    {
        "prompts": "Today I appreciated countless things I percieved with my tongue including...",
        "response 1": "Tasting my delicious blaze pizza",
        "response 2": "blueberries!",
        "response 3": "peanut butter",
        "response 4": ""
    },
    {
        "prompts": "Today I appreciated countless things I percieved with my nose including...",
        "response 1": "Smelling in-n-out when passing by",
        "response 2": "good food",
        "response 3": "Fruits",
        "response 4": ""
    },
    {
        "prompts": "Today I appreciated countless things I percieved with my touch including...",
        "response 1": "My dog",
        "response 2": "my sweater",
        "response 3": "my blanket",
        "response 4": ""
    },
    {
        "prompts": "What's something you appreciated at work recently, and why?",
        "response 1": "The free snacks becasuse they come in handy",
        "response 2": "connecting with students outside of class",
        "response 3": "My manager, he's very supportive",
        "response 4": ""
    },
    {
        "prompts": "If you're unemployed, what are the benfits of having time away from work?",
        "response 1": "Spending time with my family",
        "response 2": "Have time to myself to rest and do whatever I want",
        "response 3": "Self discovery",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that it's never been hard for me to...",
        "response 1": "express my feelings",
        "response 2": "communicate with my family",
        "response 3": "be honest with myself",
        "response 4": ""
    },
    {
        "prompts": "When was the last time you appreciated a stranger and why were you grateful for them?",
        "response 1": "Last week because they offered me a job opportunity",
        "response 2": "A stranger had a conversation with me while I was walking back home at night",
        "response 3": "Today, because we could have engaging converation with each other",
        "response 4": ""
    },
    {
        "prompts": "Though I don't have everythign I want, I do have many things I need, including...",
        "response 1": "Apple Airpods",
        "response 2": "food, clothes, and transportation",
        "response 3": "People that care about me",
        "response 4": ""
    },
    {
        "prompts": "Which TV shows, movies, or books recently touched, inspired or uplifted you? Why?",
        "response 1": "One Big Giant Rock becasue it has made me realize what type of impact humans have on the world",
        "response 2": "Underrepresented minority being represented in Roma",
        "response 3": "I don't know",
        "response 4": ""
    },
    {
        "prompts": "Even though my life isn't perfect right now, I'm fortunate to...",
        "response 1": "to go out with my frineds",
        "response 2": "...have a sense of direction",
        "response 3": "Be alive",
        "response 4": ""
    },
    {
        "prompts": "Which musicians or songs are your favorites, and why?",
        "response 1": "Kid Cudi becasue his humming is out of this world",
        "response 2": "I just listen to any music that is upbeat because it makes me feel less tired",
        "response 3": "Verzache becaue it reminds me it's okay to feel the way I do sometimes",
        "response 4": ""
    },
    {
        "prompts": "What are some things you appreciate that start with the letter G?",
        "response 1": "Groceries",
        "response 2": "Gum",
        "response 3": "Good company",
        "response 4": ""
    },
    {
        "prompts": "What are some things you appreciate that start with the letter R?",
        "response 1": "Rap",
        "response 2": "Roses",
        "response 3": "Riffs",
        "response 4": ""
    },
    {
        "prompts": "What are some things you appreciate that start with the letter A?",
        "response 1": "Amazon",
        "response 2": "Airpods",
        "response 3": "Aspirations",
        "response 4": ""
    },
    {
        "prompts": "What are some things you appreciate that start with the letter T?",
        "response 1": "Tattoos",
        "response 2": "Tacos",
        "response 3": "tattoos",
        "response 4": ""
    },
    {
        "prompts": "What are some things you appreciate that start with the letter I?",
        "response 1": "Income",
        "response 2": "Ice cream",
        "response 3": "Internet",
        "response 4": ""
    },
    {
        "prompts": "What are some things you appreciate that start with the letter D?",
        "response 1": "Double-double",
        "response 2": "Donuts",
        "response 3": "Dogs",
        "response 4": ""
    },
    {
        "prompts": "What are some things you appreciate that start with the letter U?",
        "response 1": "University",
        "response 2": "Umbrella",
        "response 3": "Units of measurements",
        "response 4": ""
    },
    {
        "prompts": "What are some things you appreciate that start with the letter E?",
        "response 1": "Enterprises",
        "response 2": "Eskimo (ice cream)",
        "response 3": "Entropy",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that everyday I get to",
        "response 1": "wake up",
        "response 2": "...learn more",
        "response 3": "have options",
        "response 4": ""
    },
    {
        "prompts": "What was the best part of your childhood? What did you most appreciate about this?",
        "response 1": "Having no responsibilities becasue I literally had nothing to care about",
        "response 2": "being an only child (until I got a brother) because it was quieter",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What I most appreciate about my significant other (or being single) is that...",
        "response 1": "She supports me",
        "response 2": "...my significant other listens to me when I rant",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you most appreciate about your body and why?",
        "response 1": "My legs becasue they help me get to where I need to go",
        "response 2": "Its ability to move",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm grateful that I had the opportunity to learn how to ...",
        "response 1": "Program",
        "response 2": "drive",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's one thing that has changed for the better since this time last year?",
        "response 1": "Mental stability",
        "response 2": "my grades",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that I've had ___________ in my life for _________years because...",
        "response 1": "I appreciate that I've had my skateboard in my life for 12 years becasue I enjoy cruising around in it.",
        "response 2": "I appreciate that I've had my significant other in my life for 5 years because they have helped me mature as a person.",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's your favorite season, and why do you look forward to it?",
        "response 1": "Summer becasue I love going to the beach",
        "response 2": "Winter because I can wear sweaters and keep warm",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you most appreciate about this time of day/night?",
        "response 1": "Sunsets",
        "response 2": "The day is almost over",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Dear younger seld, you deserve more credit than I've give you. Thank you for ...",
        "response 1": "Always pulling through even when you don't feel like it",
        "response 2": "...continuing to accomplish each goal.",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you appreciate about the person who helped you get through the hardest time in your life?",
        "response 1": "Their compassion",
        "response 2": "Comforting me and everything was going to be OK",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "The best thing in life are free, including ...",
        "response 1": "free samples",
        "response 2": "food",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you most appreciate about being the age you are now?",
        "response 1": "Freedom and independence",
        "response 2": "having the choice to drink alcohol or not",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What can you do now that you couldn't do before?",
        "response 1": "Buy alcohol",
        "response 2": "Drink",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you know now that you didn't know before?",
        "response 1": "How to create an app",
        "response 2": "how hard this year would be mentally and physically",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that tomorrow I'll get to ...",
        "response 1": "stay in",
        "response 2": "get free food",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you were giving a \"Best Service\" aware to somone, who would that be ...",
        "response 1": "My coworkers becasue they are always there for any situtation",
        "response 2": "my supervisor",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate I live in part of the world where anyone can ...",
        "response 1": "Swim and surf on the same day",
        "response 2": "see their culture represented in public",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's your favorite stress reliever, and why are you thankful for this practice?",
        "response 1": "Working out becasue it helps me clear my mind",
        "response 2": "My favorite stress reliever is watch TV shows because it lets me escape from reality",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that I can always be myself around ...",
        "response 1": "My friends",
        "response 2": "my friends",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "When was the last time someone gave you compassion?",
        "response 1": "Last week",
        "response 2": "a few days ago",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "When was the last time someone gave you the benefit of doubt?",
        "response 1": "Last moth from an employer",
        "response 2": "don't know",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "When was the last time someone gave you attention?",
        "response 1": "This morning",
        "response 2": "few hours ago",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "When was the last time someone gave you advice?",
        "response 1": "Yesterday",
        "response 2": "a few days ago",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "When was the last time someone gave you an invitation?",
        "response 1": "Two days ago",
        "response 2": "last month",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "When was the last time someone gave you an opportunity?",
        "response 1": "Last week",
        "response 2": "two months ago",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "When was the last time someone gave you a second chance?",
        "response 1": "A year ago",
        "response 2": "don't know",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "When was the last time someone gave you a suprise?",
        "response 1": "two weeks ago",
        "response 2": "last week",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you won an Oscar, who would you thank?",
        "response 1": "My mother",
        "response 2": "my family",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "The best thing about this exact moment in time is that ..",
        "response 1": "I don't have to study",
        "response 2": "I don't have much responsibilities right now",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you appreciate about the most positive/inspiring person you know?",
        "response 1": "their ambition",
        "response 2": "confidence",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm fortunate that I don't currently have to worry about ...",
        "response 1": "paying a mortgage",
        "response 2": "a place to sleep",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's you greatest strength and what do you most appreciate about it?",
        "response 1": "Responsibility becasue it keeps me accountable",
        "response 2": "motivation",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Though it's easy to take for granted, I appreciate that electricity enables me to ...",
        "response 1": "Use all my electronic devices",
        "response 2": "see where I am",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which challenges are you proud to have overcome?",
        "response 1": "Fear of heights",
        "response 2": "stereotypes",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you most enjoy and appreciate about nighttime?",
        "response 1": "Quiteness",
        "response 2": "sleep time",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that my hands allow me to ...",
        "response 1": "do my job everyday",
        "response 2": "do common tasks easily",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you appreciate about being alive at this specific time in history?",
        "response 1": "The fast access to information",
        "response 2": "seeing unrepresented groups being more common in society and media",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I wouldn't have my current job, or have had my last job if not for ...",
        "response 1": "My willingness to step out of my comfort zone",
        "response 2": "seeing the advertisement to apply",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What was the most thoughtful gift you ever recieved, and why did you appreciate it?",
        "response 1": "A bicycle because it helps me commute",
        "response 2": "a crown because my younger sibling got it thinking I would appreciate it",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "It always makes me smile when ...",
        "response 1": "I see my friends happy",
        "response 2": "I see funny animal videos",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you were toasting your closest friend on their wedding day, what would you tell them?",
        "response 1": "I hope you enjoy your life even more than you already have.",
        "response 2": "good luck on their new life",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thankful to live in a time when I can easily learn what's going on all over the world because ...",
        "response 1": "It's important to stay connected",
        "response 2": "the ability to be informed",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you most appreciate about your heritage?",
        "response 1": "Food",
        "response 2": "food",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's your favorite activity, and why is this fun for you?",
        "response 1": "Working out becasue it makes me feel good",
        "response 2": "to read because it is a way for me to destress",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that I have the time and means to regularly ...",
        "response 1": "Check in with my family",
        "response 2": "hang out with my friends",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What are something sthat you value that you wouldn't have if not for your greatest challenges?",
        "response 1": "Wisdom from personal experiences",
        "response 2": "overcoming my fear of public speaking",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that people I love the most ...",
        "response 1": "Love me too",
        "response 2": "...are encouraging",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What is the most meaningful item in your possession and why do you appreciate this?",
        "response 1": "A baseball that I caught at a Dodgers game",
        "response 2": "the ring from my quinceanera because it signifies my culture and family",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "My life would be much harder or less enjoyable if I didn't have the technology to...",
        "response 1": "Skype my family in Mexico",
        "response 2": "...look through my social media",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you most appreciate about the person physically closest to you right now?",
        "response 1": "Their avialbility",
        "response 2": "MEMES",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate sleep because ...",
        "response 1": "I love to rest",
        "response 2": "it makes me less tired",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "When was the last time someone did something that made your life easier, without you having to ask?",
        "response 1": "Don't remember",
        "response 2": "my mentor gave me a lesson that I just had to teach to my students",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's your favorite animal and what do you love about it?",
        "response 1": "Dogs becasue they are frienddly and energetic",
        "response 2": "cats because they're sassy",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm grateful that I had the courage to ....",
        "response 1": "apply to jobs that i do not feel qualified for",
        "response 2": "overcoming my fear of public speaking",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If there was a fire and you could only grab three things. what would you grab?",
        "response 1": "My phone, laptop and dog",
        "response 2": "wallet, phone, jewelry",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that I have the ability and opportunity to create ...",
        "response 1": "New freindships",
        "response 2": "opportunities for the future",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you were to send an email expressing your appreciation to someone, who would it be?",
        "response 1": "My mentor",
        "response 2": "my mother",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that I was born with ...",
        "response 1": "a fast metabolism",
        "response 2": "a healthy body",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What are your favorite sounds and what do you most appreciate about them?",
        "response 1": "waves crashing becasue it sounds relaxing",
        "response 2": "white noise because it is easy to sleep if I hear it",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What I most appreciate about my car is ...",
        "response 1": "Droptop",
        "response 2": "the ability to transport me to places and it's convenient",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's the greatest opportunity you have recieved?",
        "response 1": "To attend a seminar held by Terry Crews",
        "response 2": "complete a program and save money because of it",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What did you most enjoy about you favorite vacation?",
        "response 1": "New foods",
        "response 2": "ability to separate self from reality",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I am grateful that I am somoene who ...",
        "response 1": "Can accomplish anything I set my mind to",
        "response 2": "is part of shaping today's youth",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you were writing your life's yearbook, who would win the \"Most generous\"",
        "response 1": "my friend Brian",
        "response 2": "My mother",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you were writing your life's yearbook, who would win the \"Best shoulder to cry on\"",
        "response 1": "My mother",
        "response 2": "My ex-best friend",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you were writing your life's yearbook, who would win the \"Best personality\"",
        "response 1": "my newphew",
        "response 2": "My friend Billy",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you were writing your life's yearbook, who would win the \"Biggest life of the party\"",
        "response 1": "my friend, Clinton",
        "response 2": "My friend Sinta",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you were writing your life's yearbook, who would win the \"Best hugger\"",
        "response 1": "my significant other",
        "response 2": "My brother",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you were writing your life's yearbook, who would win the \"Most likely to brighten someone's day\"",
        "response 1": "My little brother",
        "response 2": "My brothers",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you were writing your life's yearbook, who would win the \"Most understanding\"",
        "response 1": "My mother",
        "response 2": "my significant other",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you were writing your life's yearbook, who would win the \"Best sense of humor\"",
        "response 1": "my friend David",
        "response 2": "My friend Anna",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "When I look back on my life on my deathbed, I will remember how fortunate I was to ...",
        "response 1": "Spend my life with those I love",
        "response 2": "Have a great support system",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What are some things that recently went right or better than expected?",
        "response 1": "I recently got hired at my dream job",
        "response 2": "My supervised lesson",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that when I'm sick ...",
        "response 1": "My significant other takes care of me",
        "response 2": "I can sleep without feeling guilty",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What is the most fun or exciting thing you did recently, and what did you enjoy about this?",
        "response 1": "Surfing because it was a new experience",
        "response 2": "Going out to eat and having good food",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that I have access to ...",
        "response 1": "Clean water",
        "response 2": "The internet",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you value most about your home?",
        "response 1": "The feeling that I get when I am home",
        "response 2": "Proximity to school",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's something worth appreciating about one of your flaws or weakness?",
        "response 1": "Not sure",
        "response 2": "Too hard on myself but it keeps me in check",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Dear Earth, Thank you for ...",
        "response 1": "Providing us a place to live",
        "response 2": "Oxygen",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which emotions are you most thankful and why?",
        "response 1": "Happiness becasue it's contagious",
        "response 2": "Happiness because you feel good",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that I have the opportunity to follow my dreams because ...",
        "response 1": "Not many people have that opportunity",
        "response 2": "Others may not have the same chance and I can do something with this opportunity",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What are some child like activities that always lift your spirits?",
        "response 1": "Playing icebreakers",
        "response 2": "Board games",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate lots of things that are my favorite color, including ...",
        "response 1": "My backback and my favorite shirt",
        "response 2": "my socks",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which positive traits have you developed through hard times and what do you appreciate about those charecteristics?",
        "response 1": "Resiliency becasue it has taught me to get back up every single time I am knoecked down",
        "response 2": "Having a positive outlook because I used to be negative",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm grateful for the person who invented ...",
        "response 1": "the internet",
        "response 2": "waffles",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's your favorite food or meal and what do you enjoy about it?",
        "response 1": "In-n-out burgers because they are the best tasting burgers",
        "response 2": "Enchiladas because it reminds me of home",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's one good habit you've formed and why do you appreciate yourself for doing this?",
        "response 1": "Waking up early becasue my days are more productive",
        "response 2": "Looking out for people because I want to make sure people can count on me for help",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that I have people in my life to help me...",
        "response 1": "Through tough times",
        "response 2": "Survive",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What is one thing you appreciate about your parents?",
        "response 1": "Their unconditional love",
        "response 2": "their support",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I love that when the weather is like this ...",
        "response 1": "Becasue I can skate outside",
        "response 2": "I wear sweaters",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you appreciate abou tliving in a diverse world?",
        "response 1": "Diverse cultures",
        "response 2": "Seeing different cultures and trying out their food",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thankful for weekends because ...",
        "response 1": "I get to sleep in",
        "response 2": "I can sleep in",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you most appreciate about the work you do?",
        "response 1": "Being able to help people that are going to have a positive impact on the world.",
        "response 2": "It will help me later on in life",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's the most enjoyable and fulfilling part of your work?",
        "response 1": "Sharing stories",
        "response 2": "Seeing students wanting to learn",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Though I've never met this person, I'm grateful for ...",
        "response 1": "The person who always greets me outside of my job everyday",
        "response 2": "My grandpa",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which gadgets could you not live without, and why?",
        "response 1": "My phone becasue I use it for everything",
        "response 2": "My phone because I want to know what's happening in life",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you most appreciate about your mind and intellect?",
        "response 1": "My high ambition and dedication to get things done",
        "response 2": "I have common sense to help me with decisions",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "When I'm stressed, I need to remember that I'm fortunate to have tools to help myself, including...",
        "response 1": "This app that helps me with gratitude",
        "response 2": "Technology",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Who is one person you often take for granted?",
        "response 1": "Sometimes my family",
        "response 2": "My mother",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thankful for the scent of __________thta reminds me of childhood.",
        "response 1": "home cooked food",
        "response 2": "Outdoors",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thankful for the scent of _____ that I find calming",
        "response 1": "lavender",
        "response 2": "nothing really",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thankful for the scent of _________that invigorates me.",
        "response 1": "menthol",
        "response 2": "coffee",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thankful for the scent of _____ that invigorates me.",
        "response 1": "menthol",
        "response 2": "coffee",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thanful for the scent of _______ that smells delicious.",
        "response 1": "in-n-out",
        "response 2": "enchiladas and tacos",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thankful for the scent of ______ that always cheers me up.",
        "response 1": "candy",
        "response 2": "nothing really",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thankful for the scent of _______ that reminds me of my favorite place.",
        "response 1": "food",
        "response 2": "flowers",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thankful for the scent of ____ that reminds me of my significant other.",
        "response 1": "sweet peach",
        "response 2": "outdoors",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thankful for the scent of ______ that makes my house feel like home.",
        "response 1": "my dog",
        "response 2": "fresh laundry",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thankful for the scent of _______ that I like to wear on my body.",
        "response 1": "my cologne",
        "response 2": "flowers",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm thankful for the scent of _______ my favorite memory.",
        "response 1": "the fresh air",
        "response 2": "nothing really",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What was your favorite birthday, and what did you most appreciate about it?",
        "response 1": "My 21st because I got to spend it with all my friends",
        "response 2": "Smallest celebration because I could spend it with just my family",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Today, I appreciate myself for ...",
        "response 1": "Waking up on time and getting all my things done",
        "response 2": "Being able to help others",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What was the most beautiful or interesting thing you saw today?",
        "response 1": "The flowers next to HIB",
        "response 2": "Scenery as I was walking back home",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate when I get time for myself because....",
        "response 1": "I like to meditate",
        "response 2": "I can focus on my own things rather than focusing on what I need to do",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you most enjoy and appreciate about morning time?",
        "response 1": "all the shopping centers",
        "response 2": "Seeing the sunrise",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you most appreciate abou tthe area where you live?",
        "response 1": "Be a better version of yourself",
        "response 2": "Safeness",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that every day is a new opportunity to ...",
        "response 1": "Become a better version of msyelf",
        "response 2": "Learn",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If I could go back in time to tell someone who is no longer alive how much you appreciate them, who would you visit?",
        "response 1": "My grandma",
        "response 2": "My dad",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm greateful for the goals I've reached, including ...",
        "response 1": "receiving my degree",
        "response 2": "making it this far in college",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which part of your week, no matter how brief, would  you describe funny?",
        "response 1": "Monday",
        "response 2": "Today because I had a fun class",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which part of your week, no matter how brief, would you describe exciting?",
        "response 1": "Tuesday",
        "response 2": "Tomorrow because I'm excited to meet with friends and classmates over dinner",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which part of your week, no matter how brief, would  you describe interesting?",
        "response 1": "Wednesday",
        "response 2": "Thursday because we're dissecting frogs",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which part of your week, no matter how brief, would  you describe inspiring?",
        "response 1": "Thursday",
        "response 2": "nothing at the moment",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which part of your week, no matter how brief, would you describe hearwarming?",
        "response 1": "Friday",
        "response 2": "Looking forward to seeing my family in a few weeks",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which part of your week, no matter how brief, would you describe lucky?",
        "response 1": "Saturday",
        "response 2": "Having basic necessities every day",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which part of your week, no matter how brief, would  you describe peaceful?",
        "response 1": "Sunday",
        "response 2": "Weekends because I'm not as stressed",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which part of your week, no matter how brief, would  you describe satisfying?",
        "response 1": "Monday",
        "response 2": "Evenings because I can come back and not think about immediate work",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which part of your week, no matter how brief, would you describe enjoyable?",
        "response 1": "Tuesday",
        "response 2": "Afternoons because I can come back and just relax",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which part of your week, no matter how brief, would you describe awe-inspiring?",
        "response 1": "Wednesday",
        "response 2": "nothing at the moment",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that I have the potential to ...",
        "response 1": "Do whatever I out my mind to",
        "response 2": "to do better",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If you wrote an autobiography and had to write an acknowledgment section, you would thank ...",
        "response 1": "My family and friends",
        "response 2": "My family and friends",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that when I'm feeling down ...",
        "response 1": "I can always listen to music to cheer me back up",
        "response 2": "I can call on people for help",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Which freedoms do you often take for granted, and why are they worth appreciating?",
        "response 1": "The freedom to choose whatever I want to eat because I know not many people have that same opportunity.",
        "response 2": "My ability to make my own choices because somebody may not have this freedom",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's something you fell fortunate to have that other people lack?",
        "response 1": "I would say empathy becasue some people tend to lack that.",
        "response 2": "A support system",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I appreciate that everyday I get to make choices for myself, including ...",
        "response 1": "If i want to go to class or not",
        "response 2": "What I want to do for the day",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's the best advice you've gotten?",
        "response 1": "Appreciate the little things in life",
        "response 2": "Make sure I appreciate life and don't focus on just the negative things",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "If today was a movie, and I could rewind to go back to my favorite moment, I'd want to re-expreience ...",
        "response 1": "Thanksgiving 2011",
        "response 2": "My afternoon",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's youre favorite holiday, and what do you most enjoy and appreciate about it?",
        "response 1": "Thanksgiving because of all the delicious food and great company",
        "response 2": "Thanksgiving cause it's my birthday",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "My favorite part of the week so far is ...",
        "response 1": "The weekend",
        "response 2": "Friday because I can have some freedom",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Life would be pretty boring if not for ...",
        "response 1": "Music",
        "response 2": "My family",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What do you most appreciate about your imagination?",
        "response 1": "I appreciate how wild my imagination is",
        "response 2": "no idea",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What are some physical and emotional wounds you've healed from?",
        "response 1": "Close deaths",
        "response 2": "Family problems",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What I most appreciate about the internet is ...",
        "response 1": "How accessible it is",
        "response 2": "The ability to connect with people and find things online",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "The best meal I had this week ...",
        "response 1": "was chicken parmesan",
        "response 2": "Blueberries",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "The best conversation I had this week ...",
        "response 1": "Was with my coworker at lunch",
        "response 2": "Conversations with my friends being ourselves",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "The best thing I saw this week ....",
        "response 1": "The new marvel movie",
        "response 2": "Pictures of animals",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "The best thing you read this week ...",
        "response 1": "Government has re-opened",
        "response 2": "nothing in particular",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "The best thing you heard this week ....",
        "response 1": "Government has re-opened",
        "response 2": "That we were getting good food",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "The best thing you did this week ...",
        "response 1": "Work out consistently",
        "response 2": "nothing",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "The intangible thing I most appreciate in life include ...",
        "response 1": "The feeling of love",
        "response 2": "finishing my degree",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's something good abou tthis moment that you usually take for granted ?",
        "response 1": "I don't really self-reflect",
        "response 2": "Having knowledge about things and being prepared for the future",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "Though chores like cooking and cleaning can feel tedious, I'm thankful for these tasks because ..",
        "response 1": "They make my room cleaner which makes me feel at ease",
        "response 2": "I feel like I'm doing something that makes a difference and I feel accomplished doing it",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What are three grood things that happened recently to you or the people you love?",
        "response 1": "Got hired, won money on a scracher and purchased a new car",
        "response 2": "Tax returns, family bonding, and passing grades",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "I'm grateful for this app, and taking time to reflect on gratitude because ...",
        "response 1": "It helps with my mental health",
        "response 2": "I never thought about it until now",
        "response 3": "",
        "response 4": ""
    },
    {
        "prompts": "What's your favorite book, and what did you love about it?",
        "response 1": "The Outsiders, i loved it because it dealt with young teens which made the story relatable",
        "response 2": "A memoir about what happened to a YouTuber because it talked about her relationship that we didn't get to see beforehand and it made her story relatable",
        "response 3": "",
        "response 4": ""
    }
];

export default QUESTIONS;