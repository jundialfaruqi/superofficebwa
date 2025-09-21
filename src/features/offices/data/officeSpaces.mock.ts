import { OfficeSpace } from "../types/OfficeSpace.types";

export const officeSpace: OfficeSpace[] = [
    {
        id: 1,
        title: 'Angga Park Central Master Silicon Valley Star Class',
        slug: 'angga-park-central-master-silicon-valley-star-class',
        price: 18560000,
        duration: '20 Days',
        location: 'Jakarta Pusat',
        rating: 4.5,
        address: 'Jl. Angga Park Central, Jakarta Pusat, Jakarta',
        image: '/assets/images/thumbnails/thumbnails-1.png',
        images: [
            '/assets/images/thumbnails/thumbnails-details-3.png',
            '/assets/images/thumbnails/thumbnails-details-4.png',
        ],
        tags: ['Popular'],
        about: 'Wether you need quiet private space away from distractions or collaborate in person...',
        features: ['Global Event', 'Privacy', 'Free Move', 'Sustainbility', 'Compact', 'Extra Snacks'],
        isFullyBooked: false,
        salesContacts: [
            {
                name: 'Masayoshi',
                role: 'Sales Manager',
                photo: '/assets/images/photos/photo-1.png'
            },
            {
                name: 'Fuji Ovina',
                role: 'Sales Manager',
                photo: '/assets/images/photos/photo-2.png'
            }
        ],
    },
    {
        id: 2,
        title: 'Pondok Pekerja Remote Surabaya',
        slug: 'pondok-pekerja-remote-surabaya',
        price: 650000,
        duration: '10 Days',
        location: 'Surabaya',
        rating: 4.8,
        address: 'Jl. Ahmad Yani, Surabaya, Jawa Timur',
        image: '/assets/images/thumbnails/thumbnails-3.png',
        images: [
            '/assets/images/thumbnails/thumbnails-details-3.png',
            '/assets/images/thumbnails/thumbnails-details-4.png',
        ],
        tags: ['Rekomendasi'],
        about: 'Wether you need quiet private space away from distractions or collaborate in person...',
        features: ['Global Event', 'Privacy', 'Free Move', 'Sustainbility'],
        isFullyBooked: false,
        salesContacts: [
            {
                name: 'Rinda',
                role: 'Sales Manager',
                photo: '/assets/images/photos/photo-1.png'
            },
            {
                name: 'Amara',
                role: 'Sales Manager',
                photo: '/assets/images/photos/photo-2.png'
            }
        ],
    }
];