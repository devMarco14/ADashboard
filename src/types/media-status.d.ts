/* eslint-disable prettier/prettier */
export type DataType = 'cost' | 'imp' | 'click' | 'convValue' | 'ctr' | 'cvr' | 'cpc' | 'cpa' | 'roas' | 'revenue';
export type KoreanDataType = '광고비' | '매출' | '노출수' | '클릭수' | '전환수' | '클릭률 (CTR)' | '전환율 (CVR)' | '클릭당비용 (CPC)' | '전환당비용 (CPA)'

export type CompanyType = 'google' | 'facebook' | 'naver' | 'kakao';
export interface TransformedMediaData {
    name: DataType | KoreanDataType;
    google: number;
    facebook: number;
    naver: number;
    kakao: number;
    total: number;
};

export interface ExtendedMediaData {
    channel: string;
    date: string;
    imp: number;
    click: number;
    cost: number;
    convValue: number;
    ctr: number;
    cvr: number;
    cpc: number;
    cpa: number;
    roas: number;
    revenue: number;
    광고비: number,
    매출: number,
    노출수: number,
    클릭수: number,
    전환수: number,
    '클릭률 (CTR)': number,
    '전환율 (CVR)': number,
    '클릭당비용 (CPC)': number,
    '전환당비용 (CPA)': number,
}
