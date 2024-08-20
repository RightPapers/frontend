import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ message: 'GET analyze' });
}

export async function POST(request: Request) {
  const { url } = await request.json();

  let video_id;

  // case 1: https://youtu.be/zWvUFsWMmhY?si=3NpnO-JFL0MOuQ-w
  if (url.includes('youtu.be')) {
    video_id = url.split('.be/')[1].split('?')[0];
  }
  // case 2: https://www.youtube.com/watch?v=zWvUFsWMmhY
  else {
    video_id = url.split('v=')[1];
  }
  const thumbnails = `https://img.youtube.com/vi/${video_id}/sddefault.jpg`;

  const response = await fetch(
    `http://noembed.com/embed?url=http%3A//www.youtube.com/watch?v=${video_id}`
  ); //제목, 채널명, 썸네일

  if (!response.ok) {
    return NextResponse.error();
  }

  const { title: video_title, author_name: channel_title } =
    await response.json();

  // fake_possibility is randomly generated between 1~99
  let fake_probability = Math.floor(Math.random() * 99) + 1;

  return NextResponse.json({
    analysis_result: {
      fake_probability,
      summary:
        '요약: 러시아 군용 전투기가 한국의 독도 주변을 침범한 사건에 대해 미국 국방장관의 발언이 화제를 모으고 있다.\n\n상세 내용:\n- 러시아 군용 전투기가 한국 영공을 침범하여 한국군이 경고 사격을 했고, 이에 대해 일본이 독도 주변에서 사격을 한 듯하게 반응하는 이상한 일이 있었다.\n- 미국의 신임 국방장관은 러시아의 동해에서의 침해 사실을 인정하고 관련하여 발언했으며, 일본은 이를 무시당한 듯한 모습이었다.\n- 독도를 둘러싼 한국-러시아 간 사건에서 미국의 발언은 중립적인 입장을 벗어나 한국을 지지하는 쪽으로 해석될 수 있는데, 이는 현재 일본과의 갈등을 조장할 수 있다고 언급되고 있다.\n- 미국은 독도를 리앙쿠르 록스로 명명하며 중립적 입장을 유지해 왔는데, 이번 발언으로 한국을 응원하는 입장으로 이해될 가능성이 있어 상당히 논란이 되고 있다.',
    },
    related_articles: {
      first_news: {
        description:
          '그러나 그들은 이미 최소 300대의 제트 <b>전투기</b> 외에 더 많은 다른 유형의 <b>군용</b> 비행기를 들여왔다. 그리고... 유엔 측은 진정한 중립국인 스위스와 스웨덴을 지명했지만, 공산주의자들은 이에 <b>러시아</b>의 두 괴뢰국... ',
        link: 'https://www.chosun.com/opinion/column/2024/03/02/2ELVOS3ZSFHQFIMIV6QYPKHGHM/?utm_source=naver&utm_medium=referral&utm_campaign=naver-news',
        pubDate: 'Sat, 02 Mar 2024 02:01:00 +0900',
        title: '국제정치 이론가 이승만의 혜안, “공존은 가능한가?”',
      },
      second_news: {
        description:
          '마루타로 불리던 인간 모르모토의 실체가 만주국 항일 게릴라나 간첩, <b>러시아</b> 적군 병사, 중국에서 활동했던... 펑톈에는 <b>전투기</b> 공장이 있었다. 일본군은 기술을 가진 포로들이 그곳에서 일하길 기대했으나 모두가... ',
        link: 'https://view.asiae.co.kr/article/2024012014490321020',
        pubDate: 'Sun, 21 Jan 2024 09:00:00 +0900',
        title:
          '&quot;처형당하는 게 당연…인정하기까지 몇 년 걸렸다&quot;(中) [알고보면]',
      },
      third_news: {
        description:
          '이에 KAI는 FA-50 추가 수출은 물론 KF-21 <b>전투기</b>, 국산 헬기 수리온, 경공격헬기(LAH) 등에 대한 추가적인 사업... <b>러시아 군용</b>기술의 핵심 공급업체가 비우호적 국가들에 편중되어 있다는 점도 어려움을 가중시키는... ',
        link: 'http://weekly.chosun.com/news/articleView.html?idxno=30252',
        pubDate: 'Sun, 19 Nov 2023 07:01:00 +0900',
        title: 'K방산은 진짜 날개를 달았나?',
      },
    },
    youtube_info: {
      channel_id: 'UCtCp1dJ0QSuFMc8Z4M7g5LQ',
      channel_title,
      like_count: '46675',
      thumbnails,
      upload_date: '2019-07-25T22:00:06Z',
      video_title,
      video_id,
    },
  });
}
