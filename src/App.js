import DestinationSearch from './components/DestinationSearch'

import './App.css'

const bookList = [{
        id: 1,
        name: '"Deacon King Kong" by James McBride',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCab9RJqoqHa_TYbzLl9Mn9SXqNxCthfKi-Qo7k3Kzk5xlx4Cx',
        subject: 'Thriller',
        date: '2020',
    },
    {
        id: 2,
        name: 'The Good Lord Bird by James MCBride',
        imgUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdTPSOJwgNMGwQT9HrEfvIeWcFgt-AvjsIR3-2qR5kYihzDEi2',
        subject: 'Science',
        date: '2020',
    },
    {
        id: 3,
        name: 'How Much of These Hills Is Gold by C pam Zhang',
        imgUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzQIKb1AsoztmwgW11Ko9I-AiAr-l9dzENbL4snWiZ3Yl8oxRJ',
        subject: 'Fiction',
        date: '2019',
    },
    {
        id: 4,
        name: 'The Undocumented Americans by Karla Cornejo Villavice',
        imgUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpaFAkiKunlwudq5zQtnbJqCsxv3DH0PXG01oOUIRJaQTzsVX3',
        subject: 'Economics',
        date: '2019',
    },
    {
        id: 5,
        name: 'The Vanishing Half  Brit Bennett',
        imgUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3Ixsmqk6hk7O0kStzU030_b7hf0p2izLG2NqD_UG17K4UoJin',
        subject: 'Economics',
        date: '2020',
    },
    {
        id: 6,
        name: 'Uncanny Valley by Anna Wiener',
        imgUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQZ-kKNMJGxFUx43ew9QM0CkCxwjINPRpMj-KTk7G2PLniQ9It',
        subject: 'Science',
        date: '2019',
    },
    {
        id: 7,
        name: 'Caste: The Origins of Our Discontents by Isabel Wilkerson',
        imgUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR1wHLboXhY_WB1zg5PFHKxymcUTFODrVTXi0AWJJD_kp-xCDXo',
        subject: 'Economics',
        date: '2019',
    },
    {
        id: 8,
        name: 'John Henry Days by Colson Whitehead',
        imgUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKtM-vnqFUHFIr1lH-V4J8PlgB_wVx-o_MnZFajs9qGgnNnihv',
        subject: 'Drama',
        date: '2016',
    },
    {
        id: 9,
        name: 'Sag Harbor by Colson Whitehead',
        imgUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSqSbtERtyONKErKzFUMQ1s1sE8NPPAkMaAAK-2Eh4NES80Vetq',
        subject: 'Economics',
        date: '2018',
    },
    {
        id: 10,
        name: 'Crook Manifesto: A Novel by Colson Whitehead',
        imgUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxruv_RvECEa-sQnAPxvdVRnSg_nmA2q3hf2TEVlXh-u0-SQ8O',
        subject: 'Economics',
        date: '2015',
    },
    {
        id: 11,
        name: 'The Noble Hustle by Colson Whitehead',
        imgUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSVA-fzGV30E8kc55-k3yWPQZWHuDo7gNjT1ZBEY8aGU-WiwszZ',
        subject: 'Economics',
        date: '2019',
    },
    {
        id: 12,
        name: 'These Precious Days by  Ann Patchett',
        imgUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCQpl1nfTQ_oYZcHkk5iQgk1sp8YwehgUnBEhlQAqZgUdooekm',
        subject: 'Economics',
        date: '2019',
    },
]

const App = () => < DestinationSearch destinationsList = { bookList }
/>

export default App