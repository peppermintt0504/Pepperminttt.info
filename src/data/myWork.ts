
export interface Iwork {
    name : string,
    desc : string,
    git : string|undefined|URL,
    notion : string|undefined|URL,
    link : string|undefined|URL,
    image : string,
}

export const myWorkList : Iwork[] = [
    {
        name : 'Smilegate Stove Dev Camp',
        desc : "스마일게이트 스토브에서 진행한 실무체험형 인턴십 (메타버스 서비스 SGther Town 개발)",
        git : 'https://github.com/peppermintt0504/SGather-Town',
        notion : undefined,
        link : undefined,
        image : 'SGDC.jpg',
    },
    {
        name : 'CHIC 어플 개발',
        desc : '국내 최대 규모의 명품 카페 Chicment와 Kream과 협업하여 개발한 Chic 어플 초기 맴버',
        git : undefined,
        notion : undefined,
        link : 'https://www.chicment.kr/',
        image : 'Chic.png',
    },
    {
        name : '항해99 React기술 매니저',
        desc : '항해99 웹 개발 부트캠프의 React 기술 매니저를 담당하여 React 기술 세션 진행',
        git : undefined,
        notion : undefined,
        link : 'https://hanghae99.spartacodingclub.kr/v2/fullTime',
        image : 'hanghea.png',
    },
    {
        name : 'We-Wirte',
        desc : '실시간으로 릴레이 소설을 만들어 나가는 서비스 We-wirte 개발',
        git : 'https://github.com/WeWriteSparta',
        notion : 'https://spiritual-notebook-05f.notion.site/We-Write-8f2948c6dc1b472f81e28085f2e189e0',
        link : undefined,
        image : 'weWirte.png',
    },
];
