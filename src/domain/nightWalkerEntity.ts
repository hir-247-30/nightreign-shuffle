import type { SelectedNightWalker } from '@common/types';
import { NIGHT_WALKERES } from '@const/v1/nightWalkers';

export class NightWalkerEntity {

    private playerNames: string[];

    constructor(playerNames: string[]) {
        this.playerNames = playerNames;
    }

    public selectNightWalkers(): SelectedNightWalker[] {
        return this.playerNames.map((playerName) => ({
            name  : this.getRandomNightWalkerName(),
            player: playerName
        }));
    }

    private getRandomNightWalkerName(): string {
        const nw = NIGHT_WALKERES[Math.floor(Math.random() * NIGHT_WALKERES.length)];
        return nw!.name;
    }
}