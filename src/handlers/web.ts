import { buildReportContent } from '@services/messageService';
import { NightWalkerEntity } from '@domain/nightWalkerEntity';

function main (): void {
    document.getElementById('error')!.style.display = '';

    const player1 = (document.getElementById('player1')! as HTMLInputElement).value;
    const player2 = (document.getElementById('player2')! as HTMLInputElement).value;
    const player3 = (document.getElementById('player3')! as HTMLInputElement).value;

    const playerNames = [player1, player2, player3].filter(v => v.trim() !== '');

    if (!playerNames.length) {
        error('プレイヤー名を1人以上入力してください！');
        return;
    }

    const nightWalkerEntity = new NightWalkerEntity(playerNames);
    const SelectedNightWalkers = nightWalkerEntity.selectNightWalkers();

    const message = buildReportContent(SelectedNightWalkers);

    document.getElementById('result')!.innerHTML = message;
}

function error (message: string): void {
    document.getElementById('error')!.innerHTML = message;
    document.getElementById('error')!.style.display = 'block';
}

function copy (): void {
    const text = document.getElementById('result')!.innerText;

    navigator.clipboard.writeText(text)
    .then(() => {
        const resultCopyBtn = document.getElementById('copy-result')!;
        const tmp = resultCopyBtn.textContent;
        resultCopyBtn.textContent = 'コピーしました！';

        setTimeout(() => {
            resultCopyBtn.textContent = tmp;
        }, 500);
    });
}

document.getElementById('night-walker-select')!.addEventListener('click', () => {
    main();
});

document.getElementById('copy-result')!.addEventListener('click', () => {
    copy();
});