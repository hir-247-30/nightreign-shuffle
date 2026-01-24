import type { NightWalker } from '@common/types';

export const NIGHT_WALKERES: readonly NightWalker[] = [
    { name: '追跡者', dlc: false, style: 'MELEE' },
    { name: '守護者', dlc: false, style: 'MELEE' },
    { name: '無頼漢', dlc: false, style: 'MELEE' },
    { name: '鉄の目', dlc: false, style: 'RANGED' },
    { name: 'レディ', dlc: false, style: 'MELEE' },
    { name: '隠者', dlc: false, style: 'RANGED' },
    { name: '復讐者', dlc: false, style: 'RANGED' },
    { name: '執行者', dlc: false, style: 'MELEE' },
    { name: '学者', dlc: true, style: 'RANGED' },
    { name: '葬儀屋', dlc: true, style: 'MELEE' },
] as const;