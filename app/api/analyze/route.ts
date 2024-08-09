import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ message: 'GET analyze' });
}

export async function POST(request: Request) {
  const { url } = await request.json();

  let channel_id;

  // case 1: https://youtu.be/zWvUFsWMmhY?si=3NpnO-JFL0MOuQ-w
  if (url.includes('youtu.be')) {
    channel_id = url.split('.be/')[1].split('?')[0];
  }
  // case 2: https://www.youtube.com/watch?v=zWvUFsWMmhY
  else {
    channel_id = url.split('v=')[1];
  }
  const thumbnails = `https://img.youtube.com/vi/${channel_id}/sddefault.jpg`;

  const response = await fetch(
    `http://noembed.com/embed?url=http%3A//www.youtube.com/watch?v=${channel_id}`
  );

  if (!response.ok) {
    return NextResponse.error();
  }

  const { title, author_name } = await response.json();

  // fake_possibility is randomly generated between 1~99
  let fake_possibility = Math.floor(Math.random() * 99) + 1;

  return NextResponse.json({
    analysis_result: {
      fake_possibility,
      summary:
        '이 영상은 일본에서 발생한 대규모 화산 폭발에 대한 긴급 속보를 다룹니다. 영상에서는 화산 폭발로 인한 피해 상황과 관련된 뉴스 클립, 현지 주민들의 인터뷰, 그리고 전문가들의 분석을 포함하고 있습니다. 화산재와 용암이 인근 지역에 미치는 영향, 긴급 대피 명령, 정부의 대응 조치 등이 상세히 소개됩니다. 또한, 이번 화산 폭발의 원인과 앞으로의 추가 폭발 가능성에 대해서도 다루며, 시청자들에게 안전 수칙과 주의 사항을 전달합니다.',
    },
    json_file_path:
      'C:\\Users\\USER\\OneDrive\\바탕 화면\\rightpaper\\saved_data\\glSY0z0QMgA.json',
    related_articles: [
      {
        source: '경기일보',
        upload_time: '2024.08.01',
        title:
          '끊겼던 금빛 행진 재개…한국, 올림픽 통산 300호 메달 [파리 올림픽]',
        link: 'https://n.news.naver.com/article/666/0000048460?cds=news_media_pc&type=editn',
      },
      {
        source: '경기일보',
        upload_time: '2024.07.31',
        title:
          '‘티메프 사태’에 국내 이커머스 전반 신뢰도 하락 우려…온플법 탄력 받나',
        link: 'https://n.news.naver.com/article/138/0002178905?cds=news_media_pc&type=editn',
      },
      {
        source: '동아사이언스',
        upload_time: '2024.08.01',
        title: '콧구멍 깊숙한 곳, 면역세포 키우는 "훈련소" 있다',
        link: 'https://n.news.naver.com/article/584/0000028135?cds=news_media_pc&type=editn',
      },
    ],
    youtube_info: {
      captions: 'captions example',
      channel_id,
      channel_title: author_name,
      hashtags: [
        '30대',
        'SBS NEWS',
        'SBS 뉴스',
        'custom:뉴스넷',
        'format:리포트',
        'genre:사회',
        'location:서울',
        'person:박병일',
        'sbs',
        'sbs 실시간',
        'source:영상',
        'type:방송',
        '뉴스 실시간',
        '뉸',
        '박병일의 후스토리',
        '분노',
        '시청',
        '실시간뉴스',
        '에스비에스',
      ],
      like_count: '397',
      thumbnails,
      upload_date: '2024.08.01',
      video_title: title,
    },
  });
}
