import TransactionsIcon from '../icons/TransactionsIcon'
import WalletIcon from '../icons/WalletIcon'

import {
  longDateFormatter,
  shortDateFormatter,
} from '../utils/helpers/dateFormatters'

export const people = [
  {
    id: 1,
    name: 'Liam Smith',
    profilePicture: 'src/assets/images/LiamSmith.png',
  },
  {
    id: 2,
    name: 'Henry Jonson',
    profilePicture: 'src/assets/images/HenryJohnson.png',
  },
  {
    id: 3,
    name: 'Noah Williams',
    profilePicture: 'src/assets/images/NoahWilliams.png',
  },
  {
    id: 4,
    name: 'Lucas Brown',
    profilePicture: 'src/assets/images/LucasBrown.png',
  },
  {
    id: 5,
    name: 'Oliver Jones',
    profilePicture: 'src/assets/images/OliverJones.png',
  },
  {
    id: 6,
    name: 'William Garcia',
    profilePicture: 'src/assets/images/WilliamGarcia.png',
  },
  {
    id: 7,
    name: 'Benjamin Miller',
    profilePicture: 'src/assets/images/BenjaminMiller.png',
  },
  {
    id: 8,
    name: 'Jack Davis',
    profilePicture: 'src/assets/images/JackDavis.png',
  },
  {
    id: 9,
    name: 'Michael Rodriguez',
    profilePicture: 'src/assets/images/MichaelRodriguez.png',
  },
  {
    id: 10,
    name: 'Lucas Jones',
    profilePicture: 'src/assets/images/LucasJones.png',
  },
  {
    id: 11,
    name: 'Olivia Martinez',
    profilePicture: 'src/assets/images/OliviaMartinez.png',
  },
  {
    id: 12,
    name: 'Ava Lopez',
    profilePicture: 'src/assets/images/AvaLopez.png',
  },
  {
    id: 13,
    name: 'Amelia Wilson',
    profilePicture: 'src/assets/images/AmeliaWilson.png',
  },
  {
    id: 14,
    name: 'Emma Anderson',
    profilePicture: 'src/assets/images/EmmaAnderson.png',
  },
  {
    id: 15,
    name: 'Mia Thomas',
    profilePicture: 'src/assets/images/MiaThomas.png',
  },
  {
    id: 16,
    name: 'Sophia Taylor',
    profilePicture: 'src/assets/images/SophiaTaylor.png',
  },
  {
    id: 17,
    name: 'Jessica Garcia',
    profilePicture: 'src/assets/images/JessicaGarcia.png',
  },
  {
    id: 18,
    name: 'Luna Moore',
    profilePicture: 'src/assets/images/LunaMoore.png',
  },
  {
    id: 19,
    name: 'Isabella Jackson',
    profilePicture: 'src/assets/images/IsabellaJackson.png',
  },
  {
    id: 20,
    name: 'Lauren Martin',
    profilePicture: 'src/assets/images/LaurenMartin.png',
  },
]

export const purposes = ['Gift', 'Bills', 'Family', 'Others']

export const tableHeaders = [
  {
    id: 1,
    label: 'Name',
  },
  {
    id: 2,
    label: 'Purpose',
  },
  {
    id: 3,
    label: 'Date',
  },
  {
    id: 4,
    label: 'Amount',
  },
]

export const navigation = [
  { name: 'My Wallet', href: '/', icon: WalletIcon },
  {
    name: 'Recent Transactions',
    href: '/recent-transactions',
    icon: TransactionsIcon,
  },
]

export const senderInformations = {
  image: './src/assets/images/james-williams.png',
  name: 'James Williams',
}

export const balance = [
  {
    balance: 56517,
    date: longDateFormatter(new Date('March 5, 2024 17:42:37')),
  },
  {
    balance: 55450,
    date: longDateFormatter(new Date('April 5, 2024 17:42:37')),
  },
  {
    balance: 51934,
    date: longDateFormatter(new Date('May 5, 2024 17:42:37')),
  },
  {
    balance: 49034,
    date: longDateFormatter(new Date('Jun 5, 2024 17:42:37')),
  },
]

export const transactions = [
  {
    receiverImage: './src/assets/images/william-garcia.png',
    receiverName: 'William Garcia',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Others',
    date: shortDateFormatter(new Date('2024-6-3')),
    amount: 1700,
    message: 'Hi William!\n\nThank you for being an amazing friend.',
  },
  {
    receiverImage: 'src/assets/images/oliver-jones.png',
    receiverName: 'Oliver Jones',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Others',
    date: shortDateFormatter(new Date('2024-6-2')),
    amount: 1200,
    message: 'Hi Oliver!\n\nCongrats on winning the bet.',
  },
  {
    receiverImage: 'src/assets/images/spotify.png',
    receiverName: 'Spotify',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-5-25')),
    amount: 10,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/adobe-photoshop.png',
    receiverName: 'Adobe Photoshop',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-5-24')),
    amount: 22,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/loom.png',
    receiverName: 'Loom',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-5-24')),
    amount: 12,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/dribbble.png',
    receiverName: 'Dribbble',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-5-24')),
    amount: 8,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/shopify.png',
    receiverName: 'Shopify',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-5-24')),
    amount: 24,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/mailchimp.png',
    receiverName: 'Mailchimp',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-5-21')),
    amount: 10,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/jessica-garcia.png',
    receiverName: 'Jessica Garcia',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Others',
    date: shortDateFormatter(new Date('2024-5-20')),
    amount: 825,
    message: 'Hi Jessica!\n\nIYKYK.',
  },
  {
    receiverImage: 'src/assets/images/lucas-jones.png',
    receiverName: 'Lucas Jones',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Others',
    date: shortDateFormatter(new Date('2024-5-20')),
    amount: 1499,
    message:
      'Hi Lucas!\n\nHere is a little help during this tough time. Stay strong!',
  },
  {
    receiverImage: 'src/assets/images/mia-thomas.png',
    receiverName: 'Mia Thomas',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Gift',
    date: shortDateFormatter(new Date('2024-5-19')),
    amount: 200,
    message:
      'Hi Mia!\n\nJust want to say thank you for being an incredible friend.',
  },
  {
    receiverImage: 'src/assets/images/benjamin-miller.png',
    receiverName: 'Benjamin Miller',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Bills',
    date: shortDateFormatter(new Date('2024-5-16')),
    amount: 246,
    message: 'Hi Benjamin.\n\nAs always...',
  },
  {
    receiverImage: 'src/assets/images/henry-johnson.png',
    receiverName: 'Henry Johnson',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Others',
    date: shortDateFormatter(new Date('2024-5-5')),
    amount: 660,
    message:
      'Hi Henry! \n\nMaking your house a home. Here is help for repairs.',
  },
  {
    receiverImage: 'src/assets/images/spotify.png',
    receiverName: 'Spotify',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-4-25')),
    amount: 10,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/noah-williams.png',
    receiverName: 'Noah Williams',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Gift',
    date: shortDateFormatter(new Date('2024-4-25')),
    amount: 500,
    message: 'Hi Noah!\n\nThank you for always being there for me',
  },
  {
    receiverImage: 'src/assets/images/adobe-photoshop.png',
    receiverName: 'Adobe Photoshop',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-4-24')),
    amount: 22,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/loom.png',
    receiverName: 'Loom',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-6-2')),
    amount: 12,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/shopify.png',
    receiverName: 'Shopify',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-4-24')),
    amount: 12.99,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/lucas-jones.png',
    receiverName: 'Lucas Jones',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Others',
    date: shortDateFormatter(new Date('2024-4-20')),
    amount: 1499,
    message: 'Hi Lucas!\n\nCongrats on winning the bet again.',
  },
  {
    receiverImage: 'src/assets/images/benjamin-miller.png',
    receiverName: 'Benjamin Miller',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Bills',
    date: shortDateFormatter(new Date('2024-4-16')),
    amount: 246,
    message: 'Hi Benjamin.\n\nAs always...',
  },
  {
    receiverImage: 'src/assets/images/henry-johnson.png',
    receiverName: 'Henry Johnson',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Others',
    date: shortDateFormatter(new Date('2024-4-5')),
    amount: 660,
    message:
      'Hi Henry!\n\nSmooth move! Here is a little help for your new start.',
  },
  {
    receiverImage: 'src/assets/images/spotify.png',
    receiverName: 'Spotify',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-3-25')),
    amount: 10,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/adobe-photoshop.png',
    receiverName: 'Adobe Photoshop',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-3-24')),
    amount: 22,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/loom.png',
    receiverName: 'Loom',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-3-24')),
    amount: 12,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/spotify.png',
    receiverName: 'Spotify',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-3-24')),
    amount: 10,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/shopify.png',
    receiverName: 'Shopify',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Subscription',
    date: shortDateFormatter(new Date('2024-3-24')),
    amount: 24,
    message: '',
  },
  {
    receiverImage: 'src/assets/images/lucas-jones.png',
    receiverName: 'Lucas Jones',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Others',
    date: shortDateFormatter(new Date('2024-3-20')),
    amount: 1499,
    message: 'Hi Lucas!\n\nCongrats on winning the bet.',
  },
  {
    receiverImage: 'src/assets/images/benjamin-miller.png',
    receiverName: 'Benjamin Miller',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Bills',
    date: shortDateFormatter(new Date('2024-3-16')),
    amount: 246,
    message: 'Hi Benjamin.\n\nAs always...',
  },
  {
    receiverImage: 'src/assets/images/henry-johnson.png',
    receiverName: 'Henry Johnson',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    purpose: 'Others',
    date: shortDateFormatter(new Date('2024-3-5')),
    amount: 660,
    message:
      'Hi Henry!\n\nSafe travels! Here is a little help for your journey.',
  },
]
