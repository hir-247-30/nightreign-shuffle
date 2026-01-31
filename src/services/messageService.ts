import type { SelectedNightWalker } from '@common/types';

export function buildReportContent (entities: SelectedNightWalker[]): string {
    let message = '';
    for (const entity of entities) {
        message += `\n\n${entity.player}さんは「${entity.name}」で出撃してください。`;
    }

    // 先頭の改行を削除
    return message.substring(2);
}