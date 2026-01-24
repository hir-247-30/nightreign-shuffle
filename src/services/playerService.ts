import { err, ok } from 'neverthrow';
import type { Result } from 'neverthrow';

export function getPlayerNames (): Result<string[], Error> {
    const undefinedPlayerNames = [
        process.env['PLAYER_NAME_1'],
        process.env['PLAYER_NAME_2'],
        process.env['PLAYER_NAME_3']
    ];

    const playerNames = undefinedPlayerNames.filter(v => v !== '' && v !== undefined) as string[];

    if (!playerNames.length) {
        return err(new Error('プレイヤーを1人以上登録してください。'));
    }

    return ok(playerNames);
}