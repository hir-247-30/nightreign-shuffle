export type NightWalker = {
    name : string;
    dlc  : boolean;  
    style: 'MELEE' | 'RANGED';
};

export type SelectedNightWalker = {
    name  : string;
    player: string;  
};