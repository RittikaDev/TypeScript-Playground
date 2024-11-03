// TASK 1: Basic Data Types and First Program
const welcomeMessage: string =
	"Hello World, I will complete this course successfully and become a Next level Web Developer!";
console.log(welcomeMessage);

// TASK 2: Functions, Optional, and Literal Types
function optionalLiteralType(
	name: string,
	age: number,
	role?: "admin" | "user" | "guest"
) {
	if (role == undefined)
		console.log(`User's name is : ${name}, age is : ${age}`);
	else
		console.log(`User's name is : ${name}, age is : ${age}, role is : ${role}`);
}

const resultForAdmin = optionalLiteralType("Admin", 34, "admin");
const resultForVisitor = optionalLiteralType("Visitor", 34);

// TASK 3: Object Types, Type Alias, & Literal Types
type Color =
	| "black"
	| "brown"
	| "blonde"
	| "red"
	| "grey"
	| "blue"
	| "green"
	| "hazel";
type MaritalStatus = "single" | "married" | "divorced" | "widowed";

type Person = {
	name: string;
	address: string;
	hairColor: Color;
	eyeColor: Color;
	income: number;
	expense: number;
	hobbies: string[];
	familyMembers: string[];
	job: string;
	skills: string[];
	maritalStatus: MaritalStatus;
	friends: string[];
};

const person: Person = {
	name: "John Doe",
	address: "123 Main St, Anytown, USA",
	hairColor: "brown",
	eyeColor: "blue",
	income: 60000,
	expense: 25000,
	hobbies: ["reading", "hiking", "gaming"],
	familyMembers: ["Jane Doe", "Emily Doe"],
	job: "Software Engineer",
	skills: ["JavaScript", "TypeScript", "React"],
	maritalStatus: "married",
	friends: ["Alice", "Bob", "Charlie"],
};

console.log(person);

// TASK 4: Union and Intersection Types
interface Book {
	name: string;
	category: string;
	price: number;
	writer: string;
	publisher: string;
	publishDate: Date;
	isFiction: boolean;
}
interface Magazine {
	name: string;
	category: string;
	price: number;
	publisher: string;
	publishDate: Date;
}

type Publication = Book | Magazine;
type BookAndMagazine = Book & Magazine;

let PubOrMag: Publication = {
	name: "String",
	category: "String",
	price: 250,
	writer: "String",
	publisher: "String",
	publishDate: new Date("2024-10-01"),
};
let PubAndMag: BookAndMagazine = {
	name: "String",
	category: "String",
	price: 250,
	writer: "String",
	publisher: "String",
	isFiction: false,
	publishDate: new Date("2024-10-01"),
};

// TASK 5: Function Type
function reverseString(arg: string) {
	return arg.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("hello world"));

// TASK 6: Spread and Rest Operators, Destructuring
function restOperator(...args: number[]) {
	return args.reduce((accumulator, current) => accumulator + current);
}

console.log(restOperator(1, 2, 3, 4, 5));

// TASK 7: Type Assertion and Narrowing
function stringOrNum(input: string | number) {
	if (typeof input === "string") return input.length;
	else return input * input;
}

console.log(stringOrNum("hello"));
console.log(stringOrNum(2));

// TASK 8: Intersection Types
type User = {
	name: string;
	email: string;
};
type Admin = {
	adminLevel: string;
};
type AdminUser = User & Admin;

function describeAdmin(user: AdminUser): string {
	return `${user.name} has ${user.email} belongs to ${user.adminLevel}`;
}

console.log({ name: "Alice", email: "alice@example.com", adminLevel: 2 });

// TASK 9: Optional Chaining
type Employee = {
	name: string;
	address: {
		city: string;
		street: string;
	};
};
const employee1: Employee = {
	name: "John Doe",
	address: {
		city: "New York",
		street: "5th Avenue",
	},
};
function getEmployeeCity(employee: Employee) {
	return employee?.address?.city;
}

console.log(getEmployeeCity(employee1));

// TASK 10: Nullish Coalescing
function getDisplayName(name: string | null | undefined): string {
	return name ?? "Anonymous";
}
console.log(getDisplayName("Admin"));
console.log(getDisplayName(null));

// TASK 11: Unknown Type
function processData(data: unknown) {
	if (typeof data === "string") return data.toUpperCase();
	else if (typeof data === "number") return data * data;
}

console.log(processData("Hello"));
console.log(processData(2));

// TASK 12: Never Type
function handleError(message: string): never {
	throw new Error(message);
}
// console.log(handleError("Test => throw error"));

// TASK 13: Generics with Functions and Interfaces
function removeDuplicates<T>(array: T[]): T[] {
	return Array.from(new Set(array));
}

console.log(removeDuplicates([1, 2, 2, 3, 4]));
console.log(removeDuplicates(["apple", "apple", "banana"]));
console.log(removeDuplicates([true, false, true, true]));

// TASK 14: Asynchronous TypeScript and Type Aliases
// Step 1: Define a type alias for user data
type UserData = {
	name: string;
	age: number;
};

// Step 2: Create an asynchronous function to fetch user data
async function fetchUserData(): Promise<UserData> {
	return new Promise((resolve) => {
		setTimeout(() => {
			const userData: UserData = {
				name: "John Doe",
				age: 30,
			};
			resolve(userData);
		}, 2000);
	});
}

fetchUserData()
	.then((data) => {
		console.log("Fetched user data:", data);
	})
	.catch((error) => {
		console.error("Error fetching user data:", error);
	});

// TASK 15: Type Guards
// Custom type guard to check if a value is a string
function isString(value: unknown): value is string {
	return typeof value === "string";
}

function printUpperCase(value: unknown): void {
	if (isString(value)) console.log(value.toUpperCase());
	else console.log("The value is not a string.");
}

printUpperCase("Hello");
printUpperCase(42);
printUpperCase(true);

// TASK 16:  Utility Types and Keyof Constraints
type IPerson = {
	name: string;
	age: number;
	isEmployed: boolean;
};

function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

const pPerson: IPerson = {
	name: "Alice",
	age: 30,
	isEmployed: true,
};

const pName = getPropertyValue(pPerson, "name");
const pAge = getPropertyValue(pPerson, "age");

console.log(pName, pAge);
