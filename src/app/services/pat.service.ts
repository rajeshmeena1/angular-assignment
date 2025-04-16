import { Injectable } from "@angular/core"; 
import { Pat } from "../models/pat.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PatService {
    private pats: Pat[] = [
        {
            id: 1,
            name: 'Buddy',
            breed: 'Doberman',
            gender: 'Male',
            animalType: 'Dog',
            age: 9,
            imageUrl: 'https://cdn.britannica.com/75/234475-050-7D0C0D7E/Doberman-pinscher-dog.jpg',
            description: 'User friendly dog',
            medicalNotes: 'all medical vaccination done',
            additionImages: ['https://cdn.britannica.com/75/234475-050-7D0C0D7E/Doberman-pinscher-dog.jpg', 'https://media.istockphoto.com/id/1223511966/photo/beautiful-tan-and-black-german-pinscher.jpg?s=612x612&w=0&k=20&c=8CxVvRyFA7klgRgwIKEbGInoTQhwoGoQ1kn_QgX8R_Q='],
            adopted: false
        },
        {
            id: 2,
            name: 'Tepu',
            breed: 'Jerman Seaffered',
            gender: 'Male',
            animalType: 'Dog',
            age: 8,
            imageUrl: 'https://cdn2.storyasset.link/2cda5a40-3a1f-4abd-9871-2ef0902aa7b3/js2-ms-dtykgpytcg.jpg',
            description: 'User friendly dog',
            medicalNotes: 'all medical vaccination done',
            additionImages: ['https://cdn2.storyasset.link/2cda5a40-3a1f-4abd-9871-2ef0902aa7b3/js2-ms-dtykgpytcg.jpg', 'https://i.pinimg.com/736x/4d/2f/2b/4d2f2bb1ef6a1fd8a898065afac7c318.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIU67T0R__cdj7kunyWZXqpyOpVWINGUr8Ig&s'],
            adopted: false
        },
        {
            id: 3,
            name: 'Tiger',
            breed: 'BullDog',
            gender: 'Male',
            animalType: 'Dog',
            age: 7,
            imageUrl: 'https://cdn.britannica.com/08/234208-050-C9A21C4C/English-bulldog-dog.jpg',
            description: 'User friendly dog',
            medicalNotes: 'all medical vaccination done',
            additionImages: ['https://cdn.britannica.com/08/234208-050-C9A21C4C/English-bulldog-dog.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkO_2uyXxNUycXqFsDwzV55INLV5ln-76NNA&s', 'https://i.ytimg.com/vi/GP6HQ1JUxa8/maxresdefault.jpg'],
            adopted: false
        },
        {
            id: 4,
            name: 'Patty',
            breed: 'regdoll',
            gender: 'Male',
            animalType: 'Cat',
            age: 9,
            imageUrl: 'https://media.istockphoto.com/id/1304538926/photo/beautiful-young-white-purebred-ragdoll-cat-with-blue-eyes.jpg?s=612x612&w=0&k=20&c=pf-_u7FjM6BHQp1oMY_RDKpzxKi_2_dOcAq2UzlEYvU=', 
            description: 'User friendly dog',
            medicalNotes: 'all medical vaccination done',
            additionImages: ['https://media.istockphoto.com/id/1304538926/photo/beautiful-young-white-purebred-ragdoll-cat-with-blue-eyes.jpg?s=612x612&w=0&k=20&c=pf-_u7FjM6BHQp1oMY_RDKpzxKi_2_dOcAq2UzlEYvU=', 'https://images.unsplash.com/photo-1620933288385-b2f6f1931d9e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFnZG9sbCUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D'],
            adopted: false
        },
        {
            id: 5,
            name: 'Macky',
            breed: 'British Shorthair',
            gender: 'Female',
            animalType: 'Cat',
            age: 9,
            imageUrl: 'https://cdn.shopify.com/s/files/1/2668/1922/files/british-shorthair-1.jpg?v=1689089942',
            description: 'User friendly dog',
            medicalNotes: 'all medical vaccination done',
            additionImages: ['https://cdn.shopify.com/s/files/1/2668/1922/files/british-shorthair-1.jpg?v=1689089942'],
            adopted: false
        },
        {
            id: 6,
            name: 'Puppy',
            breed: 'British Shorthair',
            gender: 'Female',
            animalType: 'Cat',
            age: 5,
            imageUrl: 'https://img.freepik.com/free-photo/gray-cat-relaxing_176474-6812.jpg?semt=ais_hybrid&w=740',
            description: 'User friendly dog',
            medicalNotes: 'all medical vaccination done',
            additionImages: ['https://img.freepik.com/free-photo/gray-cat-relaxing_176474-6812.jpg?semt=ais_hybrid&w=740', 'https://assets.lummi.ai/assets/QmZvsxSFYjhE8fjjuQz2dwrhCKgyvCB1mS4rqVNUbDF5vq?auto=format&w=640'],
            adopted: true
        },
        {
            id: 7,
            name: 'Victoria',
            breed: 'Beagle',
            gender: 'Female',
            animalType: 'Dog',
            age: 5,
            imageUrl: 'https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg',
            description: 'User friendly dog',
            medicalNotes: 'all medical vaccination done',
            additionImages: ['https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSl0sjQn75-54xePDrxDPgWfd_oBKnxLdDD4VKluIrJgENy6Pw11ET2oxSKG1dtx18-2IzuiZvb7VKcylZB9wyOcQ'],
            adopted: true
        },
        {
            id: 8,
            name: 'Jungle Tiger',
            breed: 'Pug',
            gender: 'Female',
            animalType: 'Dog',
            age: 5,
            imageUrl: 'https://cdn.britannica.com/34/233234-050-1649BFA9/Pug-dog.jpg',
            description: 'User friendly dog',
            medicalNotes: 'all medical vaccination done',
            additionImages: ['https://cdn.britannica.com/34/233234-050-1649BFA9/Pug-dog.jpg', 'https://cdn.britannica.com/35/233235-050-8DED07E3/Pug-dog.jpg'],
            adopted: true
        }
    ]

    private patSubject = new BehaviorSubject<Pat[]>(this.pats);

    constructor() {}

    getAllPats():Observable<Pat[]> {
        return this.patSubject.asObservable();
    }

    getPatById(id: number): Observable<Pat | undefined> {
        return new Observable((observer)=>{
            const pat = this.pats.find((p)=> p.id === id);
            observer.next(pat);
            observer.complete();
        })
    }

    adoptedPat(id: number) {
        const pat = this.pats.find((p)=> p.id === id); 
        if(pat) {
            pat.adopted = true;
            this.patSubject.next([...this.pats]);
        }
    }

    filteredPats(searchTerm: string, gender: string, animalType:string) {
        let filtered = [...this.pats];
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter((pat)=> pat.name.toLowerCase().includes(term) || pat.breed.toLowerCase().includes(term));
        if(gender != 'All') {
            filtered = filtered.filter((pat)=> pat.gender === gender);
        }
        if(animalType != 'All') {
            filtered = filtered.filter((pat)=> pat.animalType === animalType);
        }
        this.patSubject.next(filtered);
    }
}