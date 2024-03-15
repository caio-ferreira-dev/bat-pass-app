export default function generatePass() {
    let password: string = '';
    let characters: string = 'Aa@$#123456789abcdefghijFGHIJKLMNOP!' ;
    let passLength: number = 8;

    for(let index = 0; index < passLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }


    return password
}