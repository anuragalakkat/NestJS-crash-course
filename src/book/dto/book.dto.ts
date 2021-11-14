
//dto for GET, specifying it to be an array of data
export class FindBookResponseDto{
    id: string;
    name: string;
    details: string
}

//dto for PUT, specifying it to be an array of data
export class BookResponseDto{
    id: string;
    name: string;
    details: string
}

//dto for POST, specifying the typr of data to be returned
export class CreateBookDto {
    name: string;
    details: string
}

//dto for PUT, , specifying the typr of data to be returned
export class UpdateBookDto{
    name: string;
    details: string
}