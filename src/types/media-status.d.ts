/* eslint-disable prettier/prettier */
export interface MediaData {
    channel: string;
    imp: number;
    click: number;
    cost: number;
    convValue: number;
    ctr: number;
    cvr: number;
    cpc: number;
    cpa: number;
    roas: number;
    date: string;
};

export type TargetType = 'cost' | 'imp' | 'click' | 'convValue' | 'ctr' | 'cvr' | 'cpc' | 'cpa' | 'roas';
export interface TransformedMediaData {
    name: TargetType;
    google: number;
    facebook: number;
    naver: number;
    kakao: number;
    total: number;
};

export type CompanyType = 'google' | 'facebook' | 'naver' | 'kakao';
