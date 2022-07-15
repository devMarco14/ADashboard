/* eslint-disable prettier/prettier */
export type MediaData = {
    [key: string]: number | string;
    channel: string;
    imp: number;
    click: number;
    cost: number;
    conv: number;
    convValue: number;
    ctr: number;
    cvr: number;
    cpc: number;
    cpa: number;
    roas: number;
    date: string;
};

export type TransformedMediaData = {
    [key: string]: number | string;
    name: string;
    google: number;
    facebook: number;
    naver: number;
    kakao: number;
    total: number;
};

export type TargetType = 'cost' | 'convValue' | 'imp' | 'click' | 'conv';

export type CompanyType = 'google' | 'facebook' | 'naver' | 'kakao';
