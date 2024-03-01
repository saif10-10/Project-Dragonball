import axios from 'axios';
import { DragonBallCharacter } from './dragonballinterface';


async function fetchDragonBallData(): Promise<DragonBallCharacter[]> {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/saif10-10/projectdragonball/main/dragonballCharacters.json');
        return response.data as DragonBallCharacter[];
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}


function viewAllData(characters: DragonBallCharacter[]) {
    console.log('Welcome to the Dragonball data viewer!\n');
    characters.forEach(character => {
        console.log(`- ${character.name} (${character.id})`);
    });
    console.log('\n');
}


function filterByID(characters: DragonBallCharacter[], id: string) {
    const character = characters.find(character => character.id === id);
    if (character) {
        console.log(`- ${character.name} (${character.id})`);
        console.log(`  - Description: ${character.description}`);
        console.log(`  - Age: ${character.age}`);
        console.log(`  - Active: ${character.isActive}`);
        console.log(`  - Birthdate: ${character.birthDate}`);
        console.log(`  - Image: ${character.imageUrl}`);
        console.log(`  - Status: ${character.status}`);
        console.log(`  - Special Moves: ${character.specialMoves.join(', ')}`);
        console.log(`  - Race: ${character.race}`);
        console.log(`  - Other Object:`);
        console.log(`    - ID: ${character.otherObject.id}`);
        console.log(`    - Power Level: ${character.otherObject.powerLevel}`);
        console.log(`    - Has Regeneration: ${character.otherObject.hasRegeneration}`);
        console.log(`    - Has Transformation: ${character.otherObject.hasTransformation}`);
        console.log(`    - Image URL: ${character.otherObject.imageURL}`);
    } else {
        console.log(`Character with ID ${id} not found.`);
    }
}


async function main() {
    const characters = await fetchDragonBallData();
    if (characters.length === 0) {
        console.log('No data available.');
        return;
    }

    let choice = 0;
    while (choice !== 3) {
        console.log('Welcome to the Dragonball data viewer!\n');
        console.log('1. View all data');
        console.log('2. Filter by ID');
        console.log('3. Exit\n');
        choice = parseInt(await prompt('Please enter your choice: '));

        switch (choice) {
            case 1:
                viewAllData(characters);
                break;
            case 2:
                const id = await prompt('Please enter the ID you want to filter by: ');
                filterByID(characters, id);
                break;
            case 3:
                console.log('Exiting...');
                break;
            default:
                console.log('Invalid choice. Please try again.');
        }
    }
}


async function prompt(message: string): Promise<string> {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        readline.question(message, (input: string) => {
            readline.close();
            resolve(input);
        });
    });
}


main();
