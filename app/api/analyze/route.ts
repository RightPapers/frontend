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
  // const thumbnails = `https://img.youtube.com/vi/${video_id}/sddefault.jpg`;

  // const response = await fetch(
  //   `http://noembed.com/embed?url=http%3A//www.youtube.com/watch?v=${video_id}`
  // ); //제목, 채널명, 썸네일

  // if (!response.ok) {
  //   return NextResponse.error();
  // }

  // const { title: video_title, author_name: channel_title } =
  //   await response.json();

  // fake_probability is randomly generated between 0.01~0.99
  // let fake_probability = Math.random() * 0.98 + 0.01;

  if (video_id === '4-d-Nm2lncI') {
    return NextResponse.json({
      analysis_result: {
        fake_probability: 1.0,
        summary:
          '손흥민이 멀티골을 기록한 경기에서 상대 골키퍼의 공격적인 플레이가 논란이 되고 있습니다. 손흥민은 상대 골키퍼의 위험한 행동에 대해 비판을 피하고 자신의 경기를 이어갔습니다. 이에 대한 팬들과 전문가들의 다양한 의견이 나뉘고 있습니다. 손흥민은 상대 골키퍼의 위험한 플레이에 조던 픽포드의 과거 사례를 언급하며 비판했습니다. 이에 대한 논란은 계속되고 있습니다.',
      },
      related_articles: [
        {
          description:
            '자신을 향한 의심을 한 <b>경기</b> 만에 확신으로 바꾼 <b>손흥민</b>이 주간 베스트 일레븐에 모두 이름을 올렸다.... 몰아쳤던 <b>손흥민</b>은 에버턴전 <b>멀티골</b>로 자신의 PL 121호골·122호골을 <b>기록</b>하며 과거 맨체스터 유나이티드와 첼시... ',
          link: 'https://www.xportsnews.com/article/1898087',
          pubDate: 'Tue, 27 Aug 2024 16:30:00 +0900',
          title:
            "<b>손흥민</b> 대체 누가 의심했나...'<b>멀티골</b>' <b>손흥민</b>, 주간 베스트 11 '싹쓸이...",
        },
        {
          description:
            '그는 8골 5도움을 <b>기록</b>하며 강원FC의 선두 질주를 이끌고 있다. 지난 달 잉글리시 프리미어리그(EPL) 토트넘과 계약도 마쳤다. 양민혁은 승강제 이후 K리그 최연소 <b>멀티골</b>, 최연소 두 자릿수 공격포인트, 고등학교 재학... ',
          link: 'http://www.osen.co.kr/article/G1112404649',
          pubDate: 'Tue, 27 Aug 2024 16:19:00 +0900',
          title:
            'SON-이강인 본 中의 분노, &quot;아시아 3차 예선서 우리만 유럽파가 없다&quot;',
        },
        {
          description:
            '개막전에서 부진한 <b>손흥민</b>이 2라운드에서 <b>멀티골</b>을 터뜨리며 프리미어리그 2라운드 베스트 11에 이름을... 시어러는 에버턴과의 리그 2라운드 <b>경기</b>에서 2골을 <b>기록</b>한 <b>손흥민</b>을 왼쪽 윙어로 선정하며 &quot;도미니크 솔란케의... ',
          link: 'https://www.xportsnews.com/article/1898044',
          pubDate: 'Tue, 27 Aug 2024 15:35:00 +0900',
          title:
            "'슈팅 0개→<b>멀티골</b>' <b>손흥민</b>, BBC+PL 공식 베스트 11 선정…방출설 단박에...",
        },
      ],
      youtube_info: {
        channel_id: 'UC6lUwSSWz_elt4bf8CvGEvw',
        channel_title: '더스포츠',
        like_count: '2198',
        thumbnails: 'https://i.ytimg.com/vi/4-d-Nm2lncI/hqdefault.jpg',
        upload_date: '2024-08-26T08:15:00Z',
        video_id: '4-d-Nm2lncI',
        video_title:
          '"저 골키퍼 아주 상습범이네요" BBC 손흥민 멀티골 정밀분석 해설하다 충격의 딱 한장면에 아연실색하면서, 손흥민 다리를 부러뜨릴 심산으로 저런 플레이 했다 말해, 영국 난리',
      },
    });
  } else if (video_id === 'Sm2ZQCRIW9w') {
    return NextResponse.json({
      analysis_result: {
        fake_probability: 0.999,
        summary:
          '미국 대선에서 해리스와 트럼프가 치열한 경쟁을 벌이고 있으며, 두 후보는 최근 여론조사에서 치열한 접전을 벌이고 있습니다. 해리스는 한국을 미국 최고의 동맹으로 강조하고 있는 반면, 트럼프는 한국을 협박하는 태도를 보이고 있습니다. 해리스는 한국과의 동맹을 강조하며 트럼프의 협상적인 태도를 비판하고 있습니다. 미국 대선 결과에 따라 한반도 안보 상황이 크게 바뀔 수 있을 것으로 예측됩니다.',
      },
      related_articles: [
        {
          description:
            '<b>해리스</b> 부통령은 최근 민주당 전당대회에서 가진 연설에서 중국을 딱 1번 언급하며 &quot;21세기 <b>경쟁</b>에서 중국이 아닌 <b>미국</b>이 승리하도록 하겠다&quot;고 다짐했다. <b>트럼프</b> 전 대통령은 지난달 열린 공화당 전당대회에서 중국을 14번... ',
          link: 'https://www.news1.kr/world/northeast-asia/5522897',
          pubDate: 'Tue, 27 Aug 2024 16:43:00 +0900',
          title:
            '&quot;중국, <b>해리스</b>냐 <b>트럼프</b>냐…그나마 덜한 악 당선되길 바랄 수밖에&quot;',
        },
        {
          description:
            "데릭 모건 부대표는 이날 오전 서울 강남구 그랜드 인터컨티넨탈 파르나스에서 한국무역협회가 개최한 'CEO 조찬회'에 참석해 민주당 카멀라 <b>해리스</b> 후보와 공화당 도널드 <b>트럼프</b> 후보가 <b>경쟁</b>하는 <b>미국 대선</b> 판세와 관련... ",
          link: 'http://news.mt.co.kr/mtview.php?no=2024082714194796005',
          pubDate: 'Tue, 27 Aug 2024 16:41:00 +0900',
          title:
            '헤리티지재단 부대표 &quot;美 대통령 누가 돼도 한미관계 견고&quot;',
        },
        {
          description:
            '미·중 무역<b>경쟁</b>을 계기로 <b>미국</b>의 수입에서 중국의 비중이 감소하고 있으나 다른 수출국의 중국 의존도가... 2024년 <b>대선</b>에 대해서는 <b>해리스</b> 부통령과 <b>트럼프</b> 전 대통령 모두 <b>미국</b> 노동자 보호를 강조함에 따라 <b>대선</b>... ',
          link: 'https://cwn.kr/article/1065592143361265',
          pubDate: 'Tue, 27 Aug 2024 15:46:00 +0900',
          title: '국회미래연구원 &quot;美 보호무역 기조 강화 대비해야&quot;',
        },
      ],
      youtube_info: {
        channel_id: 'UCcF4bW5as0UDKYvhrBZko8A',
        channel_title: '소문의 중심',
        like_count: '506',
        thumbnails: 'https://i.ytimg.com/vi/Sm2ZQCRIW9w/hqdefault.jpg',
        upload_date: '2024-08-22T14:58:44Z',
        video_id: 'Sm2ZQCRIW9w',
        video_title:
          '(속보) 트럼프 결국 비극적 선택! 트럼프 충격발표에 미국 정부 경악',
      },
    });
  } else if (video_id === 'al0_s03ZOYE') {
    return NextResponse.json({
      analysis_result: {
        fake_probability: 0.026,
        summary:
          '영상 요약: 영상은 통화정책과 중앙은행에 대한 설명을 다루고 있으며, 금리 결정 및 경제 영향을 다루고 있습니다.\n\n상세 내용 요약:\n1. 정부의 경제정책은 통화정책과 재정정책으로 구성되며, 통화정책은 중앙은행이 담당하고 재정정책은 정부가 담당한다.\n2. 통화정책은 금리 조정뿐만 아니라 양적완화와 지급준비율도 고려된다.\n3. 금리가 인상되면 돈의 가치가 올라가고, 이는 경제 활동에 영향을 준다.\n4. 중앙은행은 물가안정을 위해 금리 인상 또는 인하를 결정하며, 물가가 목표치인 2% 이상일 때는 금리를 인상하고, 그 이하일 때는 인하한다.',
      },
      related_articles: [
        {
          description:
            '캐나다 <b>중앙은행</b>은 주요 7개국(G7) 중 가장 먼저 금리인상 중단을 시사했다. 지난달 25일(현지시간) 기준금리를 4.5%로 0.25%p 올리면서 &quot;<b>통화정책</b>이 물가상승률을 되돌리기에 충분했는지 잠시 멈추고 평가할 것... ',
          link: 'https://www.tokenpost.kr/article-121419',
          pubDate: 'Mon, 06 Feb 2023 10:44:00 +0900',
          title:
            '올해 첫 FOMC...시장·연준 &quot;긴축 효과 충분&quot; VS &quot;아직 멀었다&quot; 의견 갈려',
        },
      ],
      youtube_info: {
        channel_id: 'UCl_tB4AqPkkxuYcJQHz6dMw',
        channel_title: 'EBSCulture (EBS 교양)',
        like_count: '4296',
        thumbnails: 'https://i.ytimg.com/vi/al0_s03ZOYE/hqdefault.jpg',
        upload_date: '2022-09-20T06:38:18Z',
        video_id: 'al0_s03ZOYE',
        video_title:
          '여기저기서 들려오는 금리 인상 뉴스! 금리 인상과 인하는 경제적으로 어떤 의미를 가질까?┃클래스e┃알고e즘',
      },
    });
  } else if (video_id === 'K_tLlpbYCxo') {
    return NextResponse.json({
      analysis_result: {
        fake_probability: 0.024,
        summary:
          '요약: 영상은 건강 기능 식품과 의약품 상호작용에 대한 내용이며, 오메가 3, 인삼, 홍삼, 유산균, 밀크시슬 등을 함께 복용할 때 주의해야 할 점을 다룬다.\n\n상세 내용: 첫째, 오메가 3와 와파린(항응고제) 복용 시 혈전에 유의해야 하며, 오메가 3와 당뇨약 복용 시 효과 감소 가능성은 낮음. 둘째, 인삼과 면역 억제제 복용 시 면역 약물의 효능 감소 가능성이 있고, 페네노린 복용 시 에이즈 약과 함께 복용 시 간독성 발생 가능성 있다. 셋째, 유산균과 항생제 복용 시 효과 저하 가능성 있으며, 알로에와 이뇨제 복용 시 저칼륨 혈증 위험 있음. 넷째, 밀크시슬과 항응고제 복용 시 상승 작용 있을 수 있으며, 간마리놀렌산과 페노타이아딘 복용 시 효과 감소 가능성 있음.',
      },
      related_articles: [
        {
          description:
            "핵<b>영상</b> 진단용 탐침(probe)으로서의 가능성이 확인됐다고 설명했다. 이에 더해 구조-활성 및 마우스 모델... 이번 신제품은 액상스틱 파우치 형태의 간 보호 <b>건강기능식품</b> '모닝케어 간솔루션'을 젤리스틱 형태로... ",
          link: 'https://dealsite.co.kr/articles/124616',
          pubDate: 'Fri, 28 Jun 2024 13:22:00 +0900',
          title: "[제약+] 신라젠, 'BAL0891' 1상 IND 변경 식약처 승인 外",
        },
        {
          description:
            "등으로 <b>요약</b>된다. 또한 지배구조(G) 부분에서도 상당한 진전을 이뤄냈다. 대웅제약은 환경 경영이 기업... 사진/압타머사이언스 ◇안국약품 쥬비스다이어트와 콜라보, <b>건강기능식품</b> '브이팩 다이어트' 출시... ",
          link: 'http://www.press9.kr/news/articleView.html?idxno=59538',
          pubDate: 'Fri, 28 Jun 2024 11:50:00 +0900',
          title:
            '[Today Pharm] SK바이오팜, 신약 개발 AI 전문가 신봉근 박사 영입 外',
        },
        {
          description:
            "제품은 액상스틱 파우치 형태의 간 보호 <b>건강기능식품</b> '모닝케어 간솔루션'을 젤리스틱 형태로 개발한... 후기 <b>기능</b>을 공감할 수 있는 스토리와 패러디 등으로 재미있게 풀어내는 데 집중했다고 설명했다. 캠페인 <b>영상</b>에... ",
          link: 'https://www.newsworks.co.kr/news/articleView.html?idxno=757432',
          pubDate: 'Fri, 28 Jun 2024 10:28:00 +0900',
          title:
            "[#헬스콕] 동아 '모닝케어 간솔루션 젤리스틱'·바디프랜드 '로봇카페 2...",
        },
      ],
      youtube_info: {
        channel_id: 'UCMFk5S7g5DY-CZNVh_Kyz_A',
        channel_title: '약사가 들려주는 약 이야기',
        like_count: '1158',
        thumbnails: 'https://i.ytimg.com/vi/K_tLlpbYCxo/hqdefault.jpg',
        upload_date: '2024-08-25T10:00:18Z',
        video_id: 'K_tLlpbYCxo',
        video_title:
          '오메가3, 마그네슘, 유산균 등 흔하게 먹는 영양제와 상호작용이 있는 의약품, 그로 인한 이러한 부작용 주의하셔야 합니다. (영양제, 의약품 상호작용)',
      },
    });
  }
}
