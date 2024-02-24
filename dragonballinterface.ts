export interface DragonBallCharacter {
    id: string;
    name: string;
    description: string;
    age: number;
    isActive: boolean;
    birthDate: string;
    imageUrl: string;
    status: string;
    specialMoves: string[];
    race: string;
    otherObject: DragonBallOtherObject;
}

export interface DragonBallOtherObject {
    id: string;
    powerLevel: number;
    hasRegeneration: boolean;
    hasTransformation: boolean;
    imageURL: string;
}