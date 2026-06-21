
import p101_img from '../assets/home1.jpg'
import p102_img from '../assets/home2.webp'
import p103_img from '../assets/home3.webp'
import p104_img from '../assets/home4.webp'
import p105_img from '../assets/home5.jpg'


import newcollection1 from "./newcollection1.webp"
import newcollection2 from "./newcollection2.webp"
import newcollection3 from "./newcollection3.jpg"
import newcollection4 from "./newcollection4.jpg"
import newcollection5 from "./newcollection5.jpg"
import newcollection6 from "./newcollection6.webp"
import newcollection7 from "./newcollection7.webp"
import newcollection8 from "./newcollection8.jpg"

import p1_img from '../assets/kidssection1.jpg'
import p2_img from '../assets/kidssection2.jpg'
import p3_img from '../assets/kidssection3.jpg'
import p4_img from '../assets/kidssection4.jpg'
import p5_img from '../assets/kidssection5.jpg'
import p6_img from '../assets/kidssection6.jpg'
import p7_img from '../assets/kidssection7.jpg'
import p8_img from '../assets/kidssection8.jpg'
import p9_img from '../assets/kidssection9.jpg'
import p10_img from '../assets/kidssection10.jpg'
import p11_img from '../assets/kidssection11.jpg'
import p12_img from '../assets/kidssection12.webp'

import p13_img from '../assets/mensection1.webp'
import p14_img from '../assets/mensection2.jpg'
import p15_img from '../assets/mensection3.jpg'
import p16_img from '../assets/mensection4.jpg'
import p17_img from '../assets/mensection5.jpg'
import p18_img from '../assets/mensection6.jpg'
import p19_img from '../assets/mensection7.jpg'
import p20_img from '../assets/mensection8.webp'
import p21_img from '../assets/mensection9.jpg'
import p22_img from '../assets/mensection10.jpg'
import p23_img from '../assets/mensection11.jpg'
import p24_img from '../assets/mensection12.webp'


import p25_img from '../assets/womensection1.jpg'
import p26_img from '../assets/womensection2.jpg'
import p27_img from '../assets/womensection3.webp'
import p28_img from '../assets/womensection4.webp'
import p29_img from '../assets/womensection5.jpg'
import p30_img from '../assets/womensection6.jpg'
import p31_img from '../assets/womensection7.jpg'
import p32_img from '../assets/womensection8.jpg'
import p33_img from '../assets/womensection9.webp'
import p34_img from '../assets/womensection10.webp'
import p35_img from '../assets/womensection11.jpg'
import p36_img from '../assets/womensection12.jpg'



let all_product = [
    {
        id: 1,
        name: "Pink co-ord set",
        category: "kids",
        image: p1_img,
        new_price: 50.0,
        old_price: 80
    },

    { id: 5, name: "Black Hoodie", category: "kids", image: p5_img, new_price: 45.0, old_price: 70.0 },
    { id: 2, name: "Blue set", category: "kids", image:p2_img, new_price: 60.0, old_price: 90.5 },
    { id: 7, name: "Green Shirt", category: "kids", image: p7_img, new_price: 95.0, old_price: 150.0 },
    { id: 3, name: "Black and White set", category: "kids", image:p3_img, new_price: 75.0, old_price: 120.0 },
    { id: 6, name: "Beige pants", category: "kids", image: p6_img, new_price: 85.0, old_price: 130.0},  
    { id: 4, name: "White striped set", category: "kids", image: p4_img, new_price: 90.0, old_price: 140.0 },
    { id: 8, name: "Brown Kid's set", category: "kids", image: p8_img, new_price: 55.0, old_price: 100.0 },
    { id: 9, name: "Orange Dress", category: "kids", image: p9_img, new_price: 67.0, old_price: 76.0 },
    { id: 34, name: "Red Bow Dress", category: "kids", image: p10_img, new_price: 34.0, old_price: 67.0 },
    { id: 35, name: "Kid's Striped set", category: "kids", image: p11_img, new_price: 65.0, old_price: 78.0 },
    { id: 36, name: "Kid's Blue set", category: "kids", image: p12_img, new_price: 70.0, old_price: 90.0 },



    { id: 10, name: "Blue linen Shirt", category: "men", image: p13_img, new_price: 69.0, old_price: 78.0 },
    { id: 11, name: "Green cotton Shirt", category: "men", image: p14_img, new_price: 35.0, old_price: 67.0 },
    { id: 12, name: "Beige pants", category: "men", image: p15_img, new_price: 48.0, old_price: 90.0 },
    { id: 13, name: "Multicolor Shirt", category: "men", image: p16_img, new_price: 40.0, old_price: 65.0 },
    { id: 14, name: "Navy Blue Shirt", category: "men", image: p17_img, new_price: 52.0, old_price: 85.0 },
    { id: 15, name: "Striped Shirt", category: "men", image: p18_img, new_price: 56.0, old_price: 78.0 },
    { id: 16, name: "Olive Shirt", category: "men", image:p19_img, new_price: 78.0, old_price: 110.0 },
    { id: 17, name: "Yellow Shirt", category: "men", image:p20_img, new_price: 45.0, old_price: 67.0 },
    { id: 18, name: "Pants", category: "men", image:p21_img, new_price: 34.0, old_price: 67.0 },
    { id: 19, name: "Soft Beige Shirt", category: "men", image:p22_img, new_price: 34.0, old_price: 90.0 },
    { id: 20, name: "Pink Shirt", category: "men", image:p23_img, new_price: 56.0, old_price: 67.0 },
    { id: 21, name: "Brown Shirt", category: "men", image:p24_img, new_price: 73.0, old_price: 87.0 },


    { id: 22, name: "Mini Dress", category: "women", image: p25_img, new_price: 85.0, old_price: 140.0 },  
    { id: 23, name: "Pink Co-ord set", category: "women", image:p26_img , new_price: 88.0, old_price: 130.0 },  
    { id: 24, name: "Blue Striped set", category: "women", image:p27_img , new_price: 76.0, old_price: 120.0 },
    { id: 25, name: "Green Dress", category: "women", image: p28_img, new_price: 49.0, old_price: 80.0 },
    { id: 26, name: "Orange Dress", category: "women", image:p29_img, new_price: 98.0, old_price: 160.0 },
    { id: 27, name: "Blue Midi", category: "women", image: p30_img, new_price: 150.0, old_price: 250.0 },
    { id: 28, name: "Floral Dress", category: "women", image: p31_img, new_price: 55.0, old_price: 98.0 },
    { id: 29, name: "Red Stone Dress", category: "women", image: p32_img, new_price: 132.0, old_price: 149.0 },
    { id: 30, name: "Mini neon Dress", category: "women", image: p33_img, new_price: 167.0, old_price: 189.0 },
    { id: 31, name: "Green Striped Dress", category: "women", image: p34_img, new_price: 105.0, old_price: 156.0 },
    { id: 32, name: "Yellow set", category: "women", image: p35_img, new_price: 94.0, old_price: 170.0 },
    { id: 33, name: "Jumpsuit", category: "women", image: p36_img, new_price: 178.0, old_price: 190.0 },
    {
            id: 101,
            name: "White Maxi Dress",
            category: "women",
            image: p101_img,
            new_price: 50.0,
            old_price: 70.0
        },
    
        { id: 102, name: "Pink Floral Dress", category: "women", image:p102_img, new_price: 65.0, old_price: 81.0 },
        { id: 103, name: "Orange Dress", category: "women", image:p103_img, new_price: 78.0, old_price: 45.0 },
        { id: 104, name: "Strapless Top", category: "women", image: p104_img, new_price: 34.0, old_price:42.0 },
        { id: 105, name: "Co-ord set", category: "women", image: p105_img, new_price: 89.0, old_price: 78.0 },
    
    {
            id:106,
            name:"Cotton T-Shirt",
            category: "men",
            image : newcollection1,
            new_price:50.0,
            old_price:62.0
        },
    
        {id:107, name:"Men's Shorts",category: "men",image : newcollection2, new_price:40.0, old_price:55.0},
        {id:108, name:"Green Midi",category: "kids",image : newcollection3, new_price:34.0, old_price:42.0},
        {id:109, name:"Bow Dress",category: "kids",image : newcollection4, new_price:67.0, old_price:73.0},
        {id:110, name:"Brown T-Shirt",category: "kids",image : newcollection5, new_price:43.0, old_price:51.0},
        {id:111, name:"Orange Short Dress",category: "women",image : newcollection6, new_price:78.0, old_price:94.0},
        {id:112, name:"White Floral Dress",category: "women",image : newcollection7, new_price:54.0, old_price:92.0},
        {id:113, name:"Pink Shirt",category: "men",image : newcollection8, new_price:67.0, old_price:71.0}

    
] 

export default all_product;