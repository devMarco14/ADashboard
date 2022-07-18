/* eslint-disable prettier/prettier */
export type DataType = 'cost' | 'imp' | 'click' | 'convValue' | 'ctr' | 'cvr' | 'cpc' | 'cpa' | 'roas' | 'revenue';

export type CompanyType = 'google' | 'facebook' | 'naver' | 'kakao';
export interface TransformedMediaData {
    name: DataType;
    korean?: string;
    google: number;
    facebook: number;
    naver: number;
    kakao: number;
    total: number;
};


