/** TO DELETE WHEN DATABASE IS COMPLETE. CONTAINS DATA FOR BOTH OPPORTUNITIES AND ORGANIZATIONS. */

export const tempOpportunities = [
  {
    _id: 0,
    name: 'Community Clean-Up Day',
    size: 20,
    location: 'City Park, Springfield',
    organization: 'Green Earth Initiative',
    pictureURL: '/images/opportunities/ccday.jpg',
    description: 'Join us for a day of community bonding and environmental stewardship at City Park in Springfield. This event, organized by the Green Earth Initiative, aims to bring together volunteers of all ages to make a positive impact on our' +
        ' local ecosystem. Activities will include litter collection, trail maintenance, and planting native species. By participating, you\'ll not only help beautify our park but also contribute to the well-being of our community and wildlife. No' +
        ' special skills are required, just a willingness to get your hands dirty and a passion for preserving nature. Don\'t miss this opportunity to make a difference!',
    postedDate: new Date('2024-02-15'),
    opportunityDate: new Date('2024-03-10'),
    skillsRequired: 'Physical fitness, willingness to work outdoors',
  },
  {
    _id: 1,
    name: 'Food Drive at Local Shelter',
    size: 15,
    location: '123 Main Street, Anytown',
    organization: 'Helping Hands Foundation',
    pictureURL: '/images/opportunities/fooddrive.jpg',
    description: 'Help combat hunger in our community by participating in the Food Drive at 123 Main Street, Anytown, organized by the Helping Hands Foundation. This event aims to collect non-perishable food items to ' +
        'support local shelters and food banks. Your contributions will directly benefit individuals and families facing food insecurity in our neighborhood. Whether you donate canned goods, dry foods, or monetary donations,' +
        ' every little bit helps make a difference. Join us in spreading kindness and ensuring that everyone has access to nutritious meals. Together, we can make a meaningful impact on the lives of those in need.',
    postedDate: new Date('2024-02-18'),
    opportunityDate: new Date('2024-04-05'),
    skillsRequired: 'Interpersonal skills, organization',
  },
  {
    _id: 2,
    name: 'Tutoring Program for Underprivileged Youth',
    size: 10,
    location: 'Urban Youth Center, Downtown',
    organization: 'Brighter Futures Association',
    pictureURL: '/images/opportunities/tutoringprog.jpg',
    description: 'Make a lasting difference in the lives of underprivileged youth by volunteering for the Tutoring Program at the Urban Youth Center in Downtown. Organized by the Brighter Futures Association, this program provides' +
        ' academic support and mentorship to children from disadvantaged backgrounds. As a tutor, you\'ll have the opportunity to help students with homework, reinforce learning concepts, and inspire a love for education. No teaching' +
        ' experience is necessary - just a passion for learning and a desire to empower young minds. Join us in creating brighter futures for the next generation!',
    postedDate: new Date('2024-02-20'),
    opportunityDate: new Date('2024-03-15'),
    skillsRequired: 'Teaching experience, patience',
  },
  {
    _id: 3,
    name: 'Elderly Care and Companionship',
    size: 8,
    location: 'Sunny Days Retirement Home',
    organization: 'Caring Hearts Community',
    pictureURL: '/images/opportunities/elderlycare.jpg',
    description: 'Spread joy and companionship to the elderly residents of Sunny Days Retirement Home by volunteering with the Caring Hearts Community. Our program offers meaningful interactions and support to seniors who may feel lonely' +
        ' or isolated. As a volunteer, you\'ll have the opportunity to engage in conversations, assist with recreational activities, and provide emotional comfort to our residents. Your presence will not only brighten their day but also enrich' +
        ' your own life with their wisdom and experiences. Join us in making a difference in the lives of our beloved elders!',
    postedDate: new Date('2024-02-25'),
    opportunityDate: new Date('2024-04-10'),
    skillsRequired: 'Compassion, good communication skills',
  },
  {
    _id: 4,
    name: 'Environmental Conservation Expedition',
    size: 12,
    location: 'National Forest, Mountainville',
    organization: 'Wilderness Preservation Society',
    pictureURL: '/images/opportunities/enviromentalcons.jpg',
    description: 'Embark on an unforgettable journey to protect and preserve the natural beauty of the National Forest in Mountainville with the Wilderness Preservation Society. Our Environmental Conservation Expedition offers a unique ' +
        'opportunity to immerse yourself in nature while making a tangible impact on the environment. Activities may include trail maintenance, habitat restoration, and wildlife monitoring. No prior experience is required - just a passion ' +
        'for the great outdoors and a commitment to conservation. Join us in safeguarding our planet for future generations!',
    postedDate: new Date('2024-03-01'),
    opportunityDate: new Date('2024-03-25'),
    skillsRequired: 'Outdoor skills, environmental awareness',
  },
  {
    _id: 5,
    name: 'Animal Shelter Volunteer Day',
    size: 25,
    location: 'Sunset Animal Shelter, Riverdale',
    organization: 'Paws for Hope Rescue',
    pictureURL: '/images/opportunities/animalvolun.jpg',
    description: 'Spend a heartwarming day with adorable animals at Sunset Animal Shelter in Riverdale, organized by Paws for Hope Rescue. Our Volunteer Day offers an opportunity to make a difference in the lives of shelter animals by providing' +
        ' care, companionship, and enrichment. Whether you\'re walking dogs, socializing with cats, or assisting with feeding and cleaning, your presence will bring joy to our furry friends. No special skills are required - just a love for animals' +
        ' and a desire to make a positive impact. Join us in giving these animals the love and attention they deserve!',
    postedDate: new Date('2024-03-05'),
    opportunityDate: new Date('2024-04-15'),
    skillsRequired: 'Animal handling, compassion',
  },
  {
    _id: 6,
    name: 'Habitat Restoration Project',
    size: 30,
    location: 'Local Wetlands Preserve, Willow Creek',
    organization: 'Nature Conservancy',
    pictureURL: '/images/opportunities/habitatrestore.jpg',
    description: 'Join the Nature Conservancy in a vital mission to restore the natural habitat of Willow Creek\'s wetlands. Our Habitat Restoration Project aims to revitalize this precious ecosystem by removing' +
        ' invasive species, planting native vegetation, and monitoring wildlife populations. By volunteering with us, you\'ll play a crucial role in preserving biodiversity and protecting the delicate balance of our ' +
        'planet\'s ecosystems. No prior experience is necessary - just a passion for nature and a willingness to get your hands dirty. Join us in making a lasting impact on the health of our planet!',
    postedDate: new Date('2024-03-10'),
    opportunityDate: new Date('2024-04-20'),
    skillsRequired: 'Physical fitness, environmental awareness',
  },
  {
    _id: 7,
    name: 'Homeless Outreach Program',
    size: 20,
    location: 'Downtown Homeless Shelter, Beacon City',
    organization: 'Hope in Humanity',
    pictureURL: '/images/opportunities/homelessoutreach.jpg',
    description: 'Make a meaningful difference in the lives of homeless individuals in Beacon City by participating in the Homeless Outreach Program, organized by Hope in Humanity. This program provides essential services,' +
        ' such as meals, clothing, and hygiene kits, to those experiencing homelessness. By volunteering with us, you\'ll have the opportunity to connect with individuals in need, offer compassion and support, and help' +
        ' break the cycle of homelessness. No specific skills are required - just a willingness to lend a helping hand and make a positive impact in our community. Join us in spreading hope and humanity to those who need it most!',
    postedDate: new Date('2024-03-15'),
    opportunityDate: new Date('2024-04-05'),
    skillsRequired: 'Empathy, communication skills',
  },
  {
    _id: 8,
    name: 'Community Garden Maintenance',
    size: 15,
    location: 'City Community Garden, Bloomington',
    organization: 'Green Thumb Coalition',
    pictureURL: '/images/opportunities/commgarden.jpg',
    description: 'Join the Green Thumb Coalition in maintaining the vibrant City Community Garden in Bloomington. Our Community Garden Maintenance program offers an opportunity to cultivate community bonds while nurturing green' +
        ' spaces. Tasks may include planting, watering, weeding, and harvesting produce for donation. Whether you\'re an experienced gardener or just starting out, there\'s a place for you in our garden. Join us in' +
        ' fostering sustainable practices and promoting urban agriculture for a greener future!',
    postedDate: new Date('2024-03-20'),
    opportunityDate: new Date('2024-04-10'),
    skillsRequired: 'Gardening experience, teamwork',
  },
];

export const tempOrganizations = [
  {
    _id: 0,
    organizationName: 'Green Earth Initiative',
    organizationDescription: 'Green Earth Initiative is dedicated to promoting environmental conservation and sustainability in local communities. ' +
        'Through various initiatives such as community clean-up events and educational programs, we strive to inspire individuals to take action for a greener planet.',
    organizationWebsite: 'https://www.greenearthinitiative.org',
    orgImage: '/images/organizations/gei.jpg',
  },
  {
    _id: 1,
    organizationName: 'Helping Hands Foundation',
    organizationDescription: 'Helping Hands Foundation is committed to providing essential support and resources to those in need within our community.' +
        ' From food drives to shelter assistance, we aim to make a positive impact on the lives of individuals facing hardship.',
    organizationWebsite: 'https://www.helpinghandsfoundation.org',
    orgImage: '/images/organizations/hhf.jpg',
  },
  {
    _id: 2,
    organizationName: 'Brighter Futures Association',
    organizationDescription: 'Brighter Futures Association is dedicated to empowering underprivileged youth through education and mentorship programs.' +
        ' Our goal is to provide them with the necessary tools and support to overcome obstacles and achieve their full potential.',
    organizationWebsite: 'https://www.brighterfuturesassociation.org',
    orgImage: '/images/organizations/bfa.png',
  },
  {
    _id: 3,
    organizationName: 'Caring Hearts Community',
    organizationDescription: 'Caring Hearts Community is committed to enhancing the quality of life for elderly individuals by providing compassionate care' +
        ' and companionship. Our team of volunteers works tirelessly to ensure that every senior receives the attention and support they deserve.',
    organizationWebsite: 'https://www.caringheartscommunity.org',
    orgImage: '/images/organizations/chc.jfif',
  },
  {
    _id: 4,
    organizationName: 'Wilderness Preservation Society',
    organizationDescription: 'Wilderness Preservation Society is dedicated to protecting and conserving natural habitats and wildlife across the globe. Through' +
        ' advocacy, research, and hands-on conservation efforts, we strive to safeguard the planet\'s biodiversity for future generations.',
    organizationWebsite: 'https://www.wildernesspreservation.org',
    orgImage: '/images/organizations/wps.jpg',
  },
  {
    _id: 5,
    organizationName: 'Paws for Hope Rescue',
    organizationDescription: 'Paws for Hope Rescue is committed to rescuing and rehoming abandoned and abused animals. Our dedicated team works tirelessly to provide' +
        ' medical care, rehabilitation, and loving homes for animals in need.',
    organizationWebsite: 'https://www.pawsforhoperescue.org',
    orgImage: '/images/organizations/pfhr.jpg',
  },
  {
    _id: 6,
    organizationName: 'Nature Conservancy',
    organizationDescription: 'Nature Conservancy is a global environmental organization dedicated to conserving the lands and waters on which all life depends. Through' +
        ' innovative solutions and partnerships, we work to protect the planet\'s most important natural places.',
    organizationWebsite: 'https://www.natureconservancy.org',
    orgImage: '/images/organizations/nc.jpg',
  },
  {
    _id: 7,
    organizationName: 'Hope in Humanity',
    organizationDescription: 'Hope in Humanity is committed to serving the homeless community by providing essential services and support. Through outreach programs and' +
        ' advocacy, we strive to create a brighter future for those experiencing homelessness.',
    organizationWebsite: 'https://www.hopeinhumanity.org',
    orgImage: '/images/organizations/hih.jpg',
  },
  {
    _id: 8,
    organizationName: 'Green Thumb Coalition',
    organizationDescription: 'Green Thumb Coalition is dedicated to promoting urban gardening and sustainable food practices. Through community gardens and educational' +
        ' programs, we empower individuals to grow their own food and foster green spaces in cities.',
    organizationWebsite: 'https://www.greenthumbcoalition.org',
    orgImage: '/images/organizations/gtc.png',
  },
];

export const tempSkills = [
  {
    firstName: 'Joshua',
    lastName: 'Galeria',
    technicalSkills: 'None',
    softSkills: 'Communication',
    interests: 'Climate',
    experience: 'University Education',
    languages: 'English',
    preferredRoles: 'Volunteer',
  },
  {
    firstName: 'James',
    lastName: 'Lee',
    technicalSkills: 'Excel',
    softSkills: 'Team player',
    interests: 'Ocean',
    experience: 'University Education',
    languages: 'English',
    preferredRoles: 'Volunteer',
  },
  {
    firstName: 'Wyatt',
    lastName: 'Matson',
    technicalSkills: 'None',
    softSkills: 'Communication',
    interests: 'Ocean',
    experience: 'University Education',
    languages: 'English',
    preferredRoles: 'Volunteer',
  },
];

export const contactsList = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    image: '/images/userImages/johnDoe.jpg',
    id: 1,
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    image: '/images/userImages/janeSmith.jpg',
    id: 2,
  },
  {
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    image: '/images/userImages/michaelJohnson.jpg',
    id: 3,
  },
  {
    name: 'Emily Brown',
    email: 'emily.brown@example.com',
    image: '/images/userImages/emilyBrown.jpg',
    id: 4,
  },
  {
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    image: '/images/userImages/davidWilson.jpg',
    id: 5,
  },
];

// CHAT SPECIFIC: DELETE THESE WHEN ACTUAL DATABASE IS MADE
export const currentUser = 'robjenkins@gmail.com';

export const messageLog = [
  {
    id: 1,
    sender: 'robjenkins@gmail.com',
    receiver: 'john.doe@example.com',
    message: "Hey John, how's it going?",
  },
  {
    id: 2,
    sender: 'john.doe@example.com',
    receiver: 'robjenkins@gmail.com',
    message: "Hey Rob, I'm good! How about you?",
  },
  {
    id: 3,
    sender: 'robjenkins@gmail.com',
    receiver: 'john.doe@example.com',
    message: "I'm doing great, thanks for asking!",
  },
  {
    id: 4,
    sender: 'john.doe@example.com',
    receiver: 'robjenkins@gmail.com',
    message: "That's good to hear. What have you been up to lately?",
  },
  {
    id: 5,
    sender: 'robjenkins@gmail.com',
    receiver: 'john.doe@example.com',
    message: 'Just been busy with work. How about you?',
  },
  {
    id: 6,
    sender: 'john.doe@example.com',
    receiver: 'robjenkins@gmail.com',
    message: 'Same here. Work never seems to end!',
  },
  {
    id: 7,
    sender: 'robjenkins@gmail.com',
    receiver: 'john.doe@example.com',
    message: 'Tell me about it! Do you have any plans for the weekend?',
  },
  { id: 8,
    sender: 'john.doe@example.com',
    receiver: 'robjenkins@gmail.com',
    message: 'Not much planned. Probably just relaxing at home. You?',
  },
  {
    id: 9,
    sender: 'robjenkins@gmail.com',
    receiver: 'john.doe@example.com',
    message: "Thinking of going for a hike if the weather's nice.",
  },
  {
    id: 10,
    sender: 'john.doe@example.com',
    receiver: 'robjenkins@gmail.com',
    message: 'Sounds like a plan. Enjoy your hike!',
  },
  {
    id: 11,
    sender: 'jane.smith@example.com',
    receiver: 'robjenkins@gmail.com',
    message: 'Hello! How are you doing?',
  },
  {
    id: 12,
    sender: 'michael.johnson@example.com',
    receiver: 'robjenkins@gmail.com',
    message: 'Hi im Michael Johnson',
  },
  {
    id: 13,
    sender: 'david.wilson@example.com',
    receiver: 'robjenkins@gmail.com',
    message: 'David Wilson is inside your house',
  },
  {
    id: 14,
    sender: 'emily.brown@example.com',
    receiver: 'robjenkins@gmail.com',
    message: 'When is the best time for you to meet?',
  },
  {
    id: 15,
    sender: 'robjenkins@gmail.com',
    receiver: 'emily.brown@example.com',
    message: 'Next saturday probably',
  },
  {
    id: 16,
    sender: 'robjenkins@gmail.com',
    receiver: 'jane.smith@example.com',
    message: 'I am doing great, thanks for asking!',
  },
];

export const serviceRequests = [
  {
    id: 1,
    title: 'Graphic Design Assistance Needed',
    userName: 'Emily Brown',
    timeOfRequest: '04/02/2024',
    location: 'Honolulu, Hawaii',
    latitude: 21.3069,
    longitude: -157.8583,
    description: "I'm working on a project and need help with designing graphics for social media posts. Looking for someone with experience in Adobe Photoshop or Illustrator.",
    skills: 'Graphic Design, Adobe Photoshop, Adobe Illustrator',
    image: '/images/userImages/emilyBrown.jpg',
  },
  {
    id: 2,
    title: 'Math Tutor Required',
    userName: 'Michael Johnson',
    timeOfRequest: '04/02/2024',
    location: 'Kaneohe, Hawaii',
    latitude: 21.4022,
    longitude: -157.8015,
    description: 'Seeking a math tutor to help me prepare for an upcoming exam. Topics include calculus and algebra. Must be patient and able to explain concepts clearly.',
    skills: 'Mathematics, Calculus, Algebra, Teaching',
    image: '/images/userImages/michaelJohnson.jpg',
  },
  {
    id: 3,
    title: 'Web Development Assistance',
    userName: 'Jane Smith',
    timeOfRequest: '04/03/2024',
    location: 'Waipahu, Hawaii',
    latitude: 21.3863,
    longitude: -158.0094,
    description: "I'm building a website for my portfolio and need assistance with CSS styling and responsive design. Looking for someone with experience in frontend development.",
    skills: 'HTML, CSS, JavaScript, Frontend Development',
    image: '/images/userImages/janeSmith.jpg',
  },
  {
    id: 4,
    title: 'English Language Conversation Partner',
    userName: 'John Doe',
    timeOfRequest: '04/04/2024',
    location: 'Pearl City',
    latitude: 21.3972,
    longitude: -157.9735,
    description: "I'm a non-native English speaker looking for a conversation partner to practice English speaking skills. Preferably a native speaker or someone fluent in English.",
    skills: 'English Language, Conversation Practice',
    image: '/images/userImages/johnDoe.jpg',
  },
  {
    id: 5,
    title: 'Fitness Trainer Needed',
    userName: 'David Wilson',
    timeOfRequest: '04/05/2024',
    location: 'Kailua',
    latitude: 21.4022,
    longitude: -157.7394,
    description: 'Seeking a fitness trainer to help me create a personalized workout plan and provide guidance on nutrition. Must be certified and experienced in personal training.',
    skills: 'Fitness Training, Nutrition, Personal Training',
    image: '/images/userImages/davidWilson.jpg',
  },
];
