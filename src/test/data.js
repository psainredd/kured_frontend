export const getRandomInt = (max) => Math.floor(Math.random()*max);
export const TimeSlotOptions = [
    {
        label: '15 min', 
        value:15,
    },
    {
        label: '30 min', 
        value:30,
    },
    {
        label: '45 min', 
        value:45,
    },
    {
        label: '1 Hour', 
        value:60,
    },
]

const imageLink = '/images/dj.jpg';
const longText = "Kured India Private Limited reserves the right to change details in this invoice at any time if any discrepencies are found at customer's end."

export const dashboardData = {
    appointmentData: [
        { id: 1, docName: "Dr. Subramanyam Aiyangar", appointmentDate: '27 Jan 2022', bookingDate: '27 Jan 2022', amount: '$160', follow_up: '31 Jan 2022', status: 'Completed', actions: imageLink },
        { id: 2, docName: 'Dr. Hello', appointmentDate: '27 Jan 2022', bookingDate: '27 Jan 2022', amount: '$160', follow_up: '31 Jan 2022', status: 'Cancelled', actions: imageLink },
        { id: 3, docName: 'Dr. Hello', appointmentDate: '27 Jan 2022', bookingDate: '27 Jan 2022', amount: '$160', follow_up: '31 Jan 2022', status: 'Upcoming', actions: imageLink },
        { id: 4, docName: 'Dr. Hello', appointmentDate: '27 Jan 2022', bookingDate: '27 Jan 2022', amount: '$160', follow_up: '31 Jan 2022', status: 'Confirm', actions: imageLink },
        { id: 5, docName: 'Dr. Hello', appointmentDate: '27 Jan 2022', bookingDate: '27 Jan 2022', amount: '$160', follow_up: '31 Jan 2022', status: 'Confirm', actions: imageLink },
        { id: 6, docName: 'Dr. Hello', appointmentDate: '27 Jan 2022', bookingDate: '27 Jan 2022', amount: '$160', follow_up: '31 Jan 2022', status: 'Confirm', actions: imageLink },
        { id: 7, docName: 'Dr. Hello', appointmentDate: '27 Jan 2022', bookingDate: '27 Jan 2022', amount: '$160', follow_up: '31 Jan 2022', status: 'Confirm', actions: imageLink },
        { id: 8, docName: 'Dr. Hello', appointmentDate: '27 Jan 2022', bookingDate: '27 Jan 2022', amount: '$160', follow_up: '31 Jan 2022', status: 'Confirm', actions: imageLink },
        { id: 9, docName: 'Dr. Hello', appointmentDate: '27 Jan 2022', bookingDate: '27 Jan 2022', amount: '$160', follow_up: '31 Jan 2022', status: 'Confirm', actions: imageLink },
        { id: 10, docName: 'Dr. Hello', appointmentDate: '27 Jan 2022', bookingDate: '27 Jan 2022', amount: '$160', follow_up: '31 Jan 2022', status: 'Confirm', actions: imageLink },
    ],
    presriptionData: [
        { id: 1, docName: "Dr. Subramanyam Aiyangar", bookingDate: '27 Jan 2022', bookingId: '#ABC-12345', actions: imageLink },
        { id: 2, docName: "Dr. Subramanyam Aiyangar", bookingDate: '27 Jan 2022', bookingId: '#ABC-12345', actions: imageLink },
        { id: 3, docName: "Dr. Subramanyam Aiyangar", bookingDate: '27 Jan 2022', bookingId: '#ABC-12345', actions: imageLink },
        { id: 4, docName: "Dr. Subramanyam Aiyangar", bookingDate: '27 Jan 2022', bookingId: '#ABC-12345', actions: imageLink },
        { id: 5, docName: "Dr. Subramanyam Aiyangar", bookingDate: '27 Jan 2022', bookingId: '#ABC-12345', actions: imageLink },
        { id: 6, docName: "Dr. Subramanyam Aiyangar", bookingDate: '27 Jan 2022', bookingId: '#ABC-12345', actions: imageLink },
        { id: 7, docName: "Dr. Subramanyam Aiyangar", bookingDate: '27 Jan 2022', bookingId: '#ABC-12345', actions: imageLink },
        { id: 8, docName: "Dr. Subramanyam Aiyangar", bookingDate: '27 Jan 2022', bookingId: '#ABC-12345', actions: imageLink },
        { id: 9, docName: "Dr. Subramanyam Aiyangar", bookingDate: '27 Jan 2022', bookingId: '#ABC-12345', actions: imageLink },
        { id: 10, docName: "Dr. Subramanyam Aiyangar", bookingDate: '27 Jan 2022', bookingId: '#ABC-12345', actions: imageLink },
    ],
    recordsData: [
        { id: 1, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', recId: '#ABC-12345', actions: imageLink, description: 'A very long description, a very very long description. Indeed this description is so long.', attachment: 'dj.jpg' },
        { id: 2, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', recId: '#ABC-12345', actions: imageLink, description: 'A very long description, a very very long description. Indeed this description is so long.', attachment: 'dj.jpg' },
        { id: 3, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', recId: '#ABC-12345', actions: imageLink, description: 'A very long description, a very very long description. Indeed this description is so long.', attachment: 'dj.jpg' },
        { id: 4, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', recId: '#ABC-12345', actions: imageLink, description: 'A very long description, a very very long description. Indeed this description is so long.', attachment: 'dj.jpg' },
        { id: 5, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', recId: '#ABC-12345', actions: imageLink, description: 'A very long description, a very very long description. Indeed this description is so long.', attachment: 'dj.jpg' },
        { id: 6, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', recId: '#ABC-12345', actions: imageLink, description: 'A very long description, a very very long description. Indeed this description is so long.', attachment: 'dj.jpg' },
        { id: 7, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', recId: '#ABC-12345', actions: imageLink, description: 'A very long description, a very very long description. Indeed this description is so long.', attachment: 'dj.jpg' },
        { id: 8, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', recId: '#ABC-12345', actions: imageLink, description: 'A very long description, a very very long description. Indeed this description is so long.', attachment: 'dj.jpg' },
        { id: 9, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', recId: '#ABC-12345', actions: imageLink, description: 'A very long description, a very very long description. Indeed this description is so long.', attachment: 'dj.jpg' },
        { id: 10, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', recId: '#ABC-12345', actions: imageLink, description: 'A very long description, a very very long description. Indeed this description is so long.', attachment: 'dj.jpg' },
    ],
    billingsData: [
        { id: 1, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', invId: '#ABC-12345', actions: imageLink, amount: '$160' },
        { id: 2, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', invId: '#ABC-12345', actions: imageLink, amount: '$160' },
        { id: 3, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', invId: '#ABC-12345', actions: imageLink, amount: '$160' },
        { id: 4, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', invId: '#ABC-12345', actions: imageLink, amount: '$160' },
        { id: 5, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', invId: '#ABC-12345', actions: imageLink, amount: '$160' },
        { id: 6, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', invId: '#ABC-12345', actions: imageLink, amount: '$160' },
        { id: 7, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', invId: '#ABC-12345', actions: imageLink, amount: '$160' },
        { id: 8, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', invId: '#ABC-12345', actions: imageLink, amount: '$160' },
        { id: 9, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', invId: '#ABC-12345', actions: imageLink, amount: '$160' },
        { id: 10, docName: "Dr. Subramanyam Aiyangar", date: '27 Jan 2022', invId: '#ABC-12345', actions: imageLink, amount: '$160' },
    ],  
}

export const DocProfile = {
    aboutMe: `Alice Eve is one of the most beautiful actresses in Hollywood. I like her acting in the movie 'She's Out of My League'. Taking about the movie, it is one of most favorite movies because I can relate to Kirk Kettner the most. I wish I had someone like Molly in my life. I don't have one till now, but I'll keep looking till I find one. Alice Eve is one of the most beautiful actresses in Hollywood. I like her acting in the movie 'She's Out of My League'. Taking about the movie, it is one of most favorite movies because I can relate to Kirk Kettner the most. I wish I had someone like Molly in my life. I don't have one till now, but I'll keep looking till I find one.`,
    educationDetails: [
        {
            institution: 'Kurnool Medical College',
            degree: 'MD - General Medicine',
            duration: '2012-2015'
        },
        {
            institution: 'Kurnool Medical College',
            degree: 'MBBS',
            duration: '2007-2012'
        },
        {
            institution: 'Sri Lakshmi High School',
            degree: 'Metriculation',
            duration: '1996-2006'
        }
    ],
    workExperience: [
        {
            institution: 'Allay Health',
            duration: '2021-present'
        },
        {
            institution: 'Apollo Hospitals',
            duration: '2017-2021 (4 years)'
        },
        {
            institution: 'Yashoda Hospitals',
            duration: '2015-2017 (2 years)'
        }
    ],
    awards: [
        {
            year: 'July 2019',
            award: 'Humanitarian Award',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
        {
            year: 'March 2011',
            award: 'Humanitarian Award',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
        {
            year: 'May 2008',
            award: 'Professional of The Year Award',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
    ],
    services: ["Trauma care", "Neuropathy treatment", "Surgery", "Composite Bonding", "Fissure Sealants", "Surgical Extractions"],
    specializations: ["Children Care", "Dental Care", "Oral and Maxillofacial Surgery", "Orthodontist", "Periodontist", "Prosthodontics"]
}

export const DoctorLocations = 
{
    locations: [
        {
            facilityDetails: {
                facilityName: 'Smile Cute Dental Care Center',
                department: 'MDS - Periodontology and Oral Implantology, BDS',
                rating: 4,
                ratingsCount: 45,
                location: '2286 Sundown Lane, Austin, Texas 78749, USA',
                images: [imageLink, imageLink, imageLink, imageLink]
            },
            timings: {
                daysOfWeek :[
                    {
                        duration: 'Mon-Sat',
                        dayTimings: ['10:00 AM - 2:00 PM', '4:00 PM - 9:00 PM']
                    },
                    {
                        duration: 'Sun',
                        dayTimings: ['10:00 AM - 2:00 PM']
                    }
                ]
            },
            fees: '$250'
        },
        {
            facilityDetails: {
                facilityName: 'The Family Dentistry Clinic',
                department: 'MDS - Periodontology and Oral Implantology, BDS',
                rating: 4,
                ratingsCount: 54,
                location: '2883 University Street, Seattle, Washington, 98155',
                images: [imageLink, imageLink, imageLink, imageLink]
            },
            timings: {
                daysOfWeek :[
                    {
                        duration: 'Tue-Sat',
                        dayTimings: ['11:00 AM - 1:00 PM', '6:00 PM - 11:00 PM']
                    },
                    {
                        duration: 'Sat - Sun',
                        dayTimings: ['8:00 AM - 10:00 AM', '3:00 PM - 7:00 PM']
                    }
                ]
            },
            fees: '$350'
        }
    ]
}

export const Comments = [
    {
        docName: 'Carl Kelly',
        image: imageLink, 
        name: 'Travis Trimble',
        rating: 4,
        dateOfReview: '2022-01-14',
        hasRecommendation: true,
        commentText: "Alice Eve is one of the most beautiful actresses in Hollywood. I like her acting in the movie 'She's Out of My League'. Taking about the movie, it is one of most favorite movies because I can relate to Kirk Kettner the most. I wish I had someone like Molly in my life. I don't have one till now, but I'll keep looking till I find one. Alice Eve is one of the most beautiful actresses in Hollywood. I like her acting in the movie 'She's Out of My League'. Taking about the movie, it is one of most favorite movies because I can relate to Kirk Kettner the most. I wish I had someone like Molly in my life. I don't have one till now, but I'll keep looking till I find one."
    },
    {
        docName: 'Carl Kelly',
        image: imageLink,
        name: 'Michelle Fairfax',
        rating: 4,
        dateOfReview: '2021-11-14',
        hasRecommendation: false,
        commentText: "Alice Eve is one of the most beautiful actresses in Hollywood. I like her acting in the movie 'She's Out of My League'. Taking about the movie, it is one of most favorite movies because I can relate to Kirk Kettner the most. I wish I had someone like Molly in my life. I don't have one till now, but I'll keep looking till I find one. Alice Eve is one of the most beautiful actresses in Hollywood. I like her acting in the movie 'She's Out of My League'. Taking about the movie, it is one of most favorite movies because I can relate to Kirk Kettner the most. I wish I had someone like Molly in my life. I don't have one till now, but I'll keep looking till I find one."
    }
]

export const BusinessHours = {
    today: {
        isAvailable: true,
        businessHours: '07:00 AM - 09:00 PM'
    },
    days: [
        {
            isAvailable: true,
            name: 'Monday',
            businessHours: '07:00 AM - 09:00 PM'
        },
        {
            isAvailable: true,
            name: 'Tuesday',
            businessHours: '07:00 AM - 09:00 PM'
        },
        {
            isAvailable: true,
            name: 'Wednesday',
            businessHours: '07:00 AM - 09:00 PM'
        },
        {
            isAvailable: true,
            name: 'Thursday',
            businessHours: '07:00 AM - 09:00 PM'
        },
        {
            isAvailable: true,
            name: 'Friday',
            businessHours: '07:00 AM - 09:00 PM'
        },
        {
            isAvailable: true,
            name: 'Saturday',
            businessHours: '07:00 AM - 09:00 PM'
        },
        {
            isAvailable: false,
            name: 'Sunday',
            businessHours: ''
        },
    ]
}

export const BookingSuccessData = {
    docName: 'Carl Kelly',
    bookingDate : new Date().toDateString(),
    timeSlot: '6:00 PM - 7:00PM'
}

export const InvoiceData = {
    invoiceNo: 'ABC-1234',
    invoiceDate: new Date().toLocaleDateString(),
    docName: 'Carl Kelly',
    address: '806 Twin Willow Lane, Old Forge, New York',
    patientName: 'Sainath Reddy',
    patientAddr1:'299 Star Trek Drive, Panama City',
    patientAddr2: 'Florida, 32405, USA',
    paymentMethod: 'Debit Card',
    obfuscatedPayerId: 'XXXXXXXXXXXX-2541',
    paymentIssuer: 'JP Morgan Chase',
    lineItems: [
        {
            desc: 'Fixing Broken Heart',
            qty: 1,
            tax: 7,
            price: '$100'
        },
        {
            desc: 'Intense Love Making',
            qty: 1,
            tax: 7,
            price: '$100'
        }
    ],
    invoiceSubtotal: '$200',
    invoiceTaxes: '$14',
    total: '$214',
    disclaimer: longText
}

export const DocAppointmentsData = {
    firstColumn: [
        { patientId: 'SD0001HYD',id: 1, patientName: 'Richard Wilson', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 2, patientName: 'Richard Wilson', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 3, patientName: 'Richard Wilson', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 4, patientName: 'Richard Wilson', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 5, patientName: 'Richard Wilson', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 6, patientName: 'Richard Wilson', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 7, patientName: 'Richard Wilson', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 8, patientName: 'Richard Wilson', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 9, patientName: 'Richard Wilson', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 10, patientName: 'Richard Wilson', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
    ],
    secondColumn: [
        { patientId: 'SD0001HYD',id: 1, patientName: 'Charlene Reed', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 2, patientName: 'Charlene Reed', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 3, patientName: 'Charlene Reed', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 4, patientName: 'Charlene Reed', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 5, patientName: 'Charlene Reed', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 6, patientName: 'Charlene Reed', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 7, patientName: 'Charlene Reed', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 8, patientName: 'Charlene Reed', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 9, patientName: 'Charlene Reed', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
        { patientId: 'SD0001HYD',id: 10, patientName: 'Charlene Reed', appointmentDate: '10:00 AM', purpose: 'General', type: 'Old Patient', status: 'Upcoming', amount: '$100', actions: '#PT001HYD'},
    ],
}

export const DocDashboardSidePanelInfo = {
    docName: 'Carl Kelly',
    imgLink: '/images/dj.jpg',
    imgSrc: '/images/dj.jpg',
    name: 'Carl Kelly',
    nameLink:'/images/dj.jpg',
    degree: 'MBBS, MD - General Medicine, DM - Neurology'
}

export function getAvailableTimeSlots(timeSlotOptions) {
    if(!getRandomInt(2)) {
        return [];
    }
    let timeslot = TimeSlotOptions.filter(slot => slot.value == timeSlotOptions.value)[0];
    let availableTimeSlots =  timeslot.timeSlots.filter(ts => {
        return getRandomInt(3)? false: true;
    });
    return availableTimeSlots;
}

export const DocInvoiceData = [
    { patientId: 'SD0001HYD',id: 1, patientName: 'Richard Wilson', paymentDate: '27 Jan 2022',  amount: '$100', actions: '#PT001HYD', invId: '#ABC-12345'},
    { patientId: 'SD0001HYD',id: 2, patientName: 'Richard Wilson', paymentDate: '27 Jan 2022',  amount: '$100', actions: '#PT001HYD', invId: '#ABC-12345'},
    { patientId: 'SD0001HYD',id: 3, patientName: 'Richard Wilson', paymentDate: '27 Jan 2022',  amount: '$100', actions: '#PT001HYD', invId: '#ABC-12345'},
    { patientId: 'SD0001HYD',id: 4, patientName: 'Richard Wilson', paymentDate: '27 Jan 2022',  amount: '$100', actions: '#PT001HYD', invId: '#ABC-12345'},
    { patientId: 'SD0001HYD',id: 5, patientName: 'Richard Wilson', paymentDate: '27 Jan 2022',  amount: '$100', actions: '#PT001HYD', invId: '#ABC-12345'},
    { patientId: 'SD0001HYD',id: 6, patientName: 'Richard Wilson', paymentDate: '27 Jan 2022',  amount: '$100', actions: '#PT001HYD', invId: '#ABC-12345'},
    { patientId: 'SD0001HYD',id: 7, patientName: 'Richard Wilson', paymentDate: '27 Jan 2022',  amount: '$100', actions: '#PT001HYD', invId: '#ABC-12345'},
    { patientId: 'SD0001HYD',id: 8, patientName: 'Richard Wilson', paymentDate: '27 Jan 2022',  amount: '$100', actions: '#PT001HYD', invId: '#ABC-12345'},
    { patientId: 'SD0001HYD',id: 9, patientName: 'Richard Wilson', paymentDate: '27 Jan 2022',  amount: '$100', actions: '#PT001HYD', invId: '#ABC-12345'},
    { patientId: 'SD0001HYD',id: 10, patientName: 'Richard Wilson', paymentDate: '27 Jan 2022',  amount: '$100', actions: '#PT001HYD', invId: '#ABC-12345'},
]

export const PatientProfileSettings = {
    imgSrc : imageLink
}

export const DocProfileSettings = {
    imgSrc : imageLink,
    services: ["Trauma care", "Neuropathy treatment", "Surgery", "Composite Bonding", "Fissure Sealants", "Surgical Extractions"],
    specializations: ["Children Care", "Dental Care", "Oral and Maxillofacial Surgery", "Orthodontist", "Periodontist", "Prosthodontics"]
}
