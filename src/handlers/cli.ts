import  dotenv from 'dotenv';
import { getPlayerNames } from '@services/playerService';
import { execReport } from '@services/reportService';
import { NightWalkerEntity } from '@domain/nightWalkerEntity';

dotenv.config({ path: '.env' });

function main(): void {
    const playerResult = getPlayerNames();
    if (playerResult.isErr()) {
        console.error(playerResult.error.message);
        return;
    }

    const playerNames = playerResult.value;
    const nightWalkerEntity = new NightWalkerEntity(playerNames);

    const SelectedNightWalkers = nightWalkerEntity.selectNightWalkers();

    execReport(SelectedNightWalkers);
}

main();