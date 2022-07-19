/* eslint-disable prettier/prettier */
import { MediaData } from 'types/dashboard';

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

export interface ExtendedMediaData extends MediaData {
    광고비?: number,
    매출?: number,
    노출수?: number,
    클릭수?: number,
    전환수?: number,
    '클릭률 (CTR)'?: number,
    '전환율 (CVR)'?: number,
    '클릭당비용 (CPC)'?: number,
    '전환당비용 (CPA)'?: number,
}
