class User{
	constructor(name, lastName, books, pets){
		this.name = name;
		this.lastName = lastName;
		this.books = books;
		this.pets = pets;
	}


	getFullName() {
    	console.log(`Hola!! mi nombre es ${this.name} y mi apellido es ${this.lastName}`);
	}

	addPets( newPet ){
       	this.pets.push( newPet );
	}

	countPets(){
        console.log(this.pets.length);
	}

	addBook(title, autor){
        this.books.push( {title: title, autor:autor} );
	}

 	getBookNames(){
        const bookNames = this.books.map( book => {
            return book.title
        } )
        console.log(bookNames);
    }
}


const user = new User ("Santiago", "Cachola",
[{title: "El Espejo Africano", autor: "Liliana Bodoc"},
{title: "Otra Vuelta de Tuerca", autor: "Herny James"}],
["Perro", "Gato", "Tortuga"]);

user.getFullName();
user.addPets("Hamster");
user.countPets();
user.addBook("El Caballero de la Armadura Oxidada","Robert Fisher");
user.getBookNames();