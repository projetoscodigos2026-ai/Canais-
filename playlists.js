// playlists.js - DB TV - Listas M3U salvas
// Todas as listas válidas - só 2026 pra cima

const SAVED_PLAYLISTS = [
  {
    id: 'blue4k',
    name: 'BLUE4K',
    icon: '💎',
    exp: '19/04/2027',
    server: 'blue4k.xyz',
    url: 'https://blue4k.xyz:8880/get.php?username=EmirAl-jumaily&password=aGI05gaOUZ&type=m3u_plus',
    info: '7000+ canais • Filmes • Séries'
  },
  {
    id: 'proipc1',
    name: 'ProIPC IPTV #1',
    icon: '📡',
    exp: '11/03/2027',
    server: 'ipc.proipciptv.com',
    url: 'https://ipc.proipciptv.com:8000/get.php?username=Hazemalayan2&password=v9ESWHAFyGte&type=m3u_plus',
    info: 'Canais ao vivo • VOD'
  },
  {
    id: 'proipc2',
    name: 'ProIPC IPTV #2',
    icon: '📡',
    exp: '12/04/2027',
    server: 'ipc.proipciptv.com',
    url: 'https://ipc.proipciptv.com:8000/get.php?username=654654uzuz&password=rew698765&type=m3u_plus',
    info: 'Canais ao vivo • VOD'
  },
  {
    id: 'proipc3',
    name: 'ProIPC IPTV #3',
    icon: '📡',
    exp: '13/02/2027',
    server: 'ipc.proipciptv.com',
    url: 'https://ipc.proipciptv.com:8000/get.php?username=325465uz&password=tz4552415&type=m3u_plus',
    info: 'Canais ao vivo • VOD'
  },
  {
    id: 'ktv1',
    name: 'KTV IPTV',
    icon: '🎯',
    exp: '28/09/2027',
    server: 'serverinfo.one',
    url: 'https://serverinfo.one:8080/get.php?username=Tiger123&password=Tiger123&type=m3u_plus',
    info: 'Multi-idioma • Esportes'
  },
  {
    id: 'ktv2',
    name: 'KTV IPTV #2',
    icon: '🎯',
    exp: '05/12/2026',
    server: 'ktv.im',
    url: 'https://ktv.im:8080/get.php?username=vZLVqaZqmE&password=uTfWGYyzU3&type=m3u_plus',
    info: 'Multi-idioma • Esportes'
  },
  {
    id: 'xiptv1',
    name: 'X IPTV',
    icon: '✨',
    exp: '27/07/2026',
    server: 'pro.xviptv.com',
    url: 'https://pro.xviptv.com/get.php?username=V20wa8vckgb65&password=3ety1LjvwW&type=m3u_plus&output=m3u8',
    info: '9547 canais • 33175 VOD • 3463 Séries'
  },
  {
    id: 'mohtv1',
    name: 'MOH TV #1',
    icon: '🔥',
    exp: '07/10/2027',
    server: 'yesimes.oknirvana.club',
    url: 'https://yesimes.oknirvana.club:8880/get.php?username=D12m2439&password=62229525&type=m3u_plus',
    info: '7558 canais • 8989 VOD • 417 Séries'
  },
  {
    id: 'mohtv2',
    name: 'MOH TV #2',
    icon: '🔥',
    exp: '13/06/2027',
    server: 'newlife3.wanicelife.com',
    url: 'https://newlife3.wanicelife.com:8880/get.php?username=D12m1834&password=22925265&type=m3u_plus',
    info: '7558 canais • 8989 VOD'
  },
  {
    id: 'mohtv3',
    name: 'MOH TV #3',
    icon: '🔥',
    exp: '08/05/2027',
    server: 'yesimes.oknirvana.club',
    url: 'https://yesimes.oknirvana.club:8880/get.php?username=D12m1539&password=79663448&type=m3u_plus',
    info: '7558 canais • 8989 VOD'
  },
  {
    id: 'mohtv4',
    name: 'MOH TV #4',
    icon: '🔥',
    exp: '03/05/2027',
    server: 'yesimes.oknirvana.club',
    url: 'https://yesimes.oknirvana.club:8880/get.php?username=D12m1495&password=23236986&type=m3u_plus',
    info: '7558 canais • 8989 VOD'
  },
  {
    id: 'mohtv5',
    name: 'MOH TV #5',
    icon: '🔥',
    exp: '25/02/2027',
    server: 'yesimes.oknirvana.club',
    url: 'https://yesimes.oknirvana.club:8880/get.php?username=D12m0846&password=702669023&type=m3u_plus',
    info: '7558 canais • 8989 VOD'
  },
  {
    id: 'mohtv6',
    name: 'MOH TV #6',
    icon: '🔥',
    exp: '06/01/2027',
    server: 'yesimes.oknirvana.club',
    url: 'https://yesimes.oknirvana.club:8880/get.php?username=DYJ12M2224&password=8945634583&type=m3u_plus',
    info: '7558 canais • 8989 VOD'
  },
  {
    id: 'mohtv7',
    name: 'MOH TV #7',
    icon: '🔥',
    exp: '21/09/2026',
    server: 'yesimes.oknirvana.club',
    url: 'https://yesimes.oknirvana.club:8880/get.php?username=29us031901&password=adsf3rdsdc&type=m3u_plus',
    info: '7558 canais • 8989 VOD'
  },
  {
    id: 'rprotv',
    name: 'RPro TV',
    icon: '⚡',
    exp: '28/02/2027',
    server: 'x.rprotv.com',
    url: 'https://x.rprotv.com:25443/get.php?username=V18k3wAdAOU4T&password=k82QKpfffK&type=m3u_plus',
    info: 'Multi-idioma • HD'
  },
];

window.SAVED_PLAYLISTS = SAVED_PLAYLISTS;
