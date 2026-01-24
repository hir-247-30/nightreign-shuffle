import type { SelectedNightWalker } from '@common/types';
import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';

export function execReport (entities: SelectedNightWalker[]): void {
    const reportContent = buildReportContent(entities);
    reportByDiscord(reportContent);
}

function buildReportContent (entities: SelectedNightWalker[]): string {
    let message = '';
    for (const entity of entities) {
        message += `\n\n${entity.player}さんは「${entity.name}」で出撃してください。`;
    }

    // 先頭の改行を削除
    return message.substring(2);
}


function reportByDiscord (content: string): void {
    const requestOptions = {
        url    : process.env['DISCORD_REPORT_URL']!,
        method : 'POST',
        data   : { content },
        headers: { 'Content-Type': 'application/json' },
    };

    axiosRequest<void | string>(requestOptions);
}

async function axiosRequest<T> (requestOptions: AxiosRequestConfig): Promise<T | void> {
    return axios(requestOptions)
        .then((res: AxiosResponse<T>) => {
            return res.data;
        })
        .catch((e: AxiosError<{ error: string }>) => {
            console.log(e.message);
        }
    );
}