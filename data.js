// =========================================================================
// 1-1. 初級排隊員專屬題目庫（1~2 個屬性組合，玩家可點擊提示與參數進行注入）
// =========================================================================
const rookieLevels = [
    {
        id: 1,
        instruction: "【初級第1關：大腸包小腸】攤位在最右邊。請點選 <code>justify-content</code> 並選擇 <code>flex-end</code>，將隊伍往右邊靠攏！",
        storeStyle: "justify-content: flex-end; align-items: center;",
        storeHtml: `<div class="store">大腸包小腸</div>`,
        targetStyle: "justify-content: flex-end; align-items: center; padding-right: 145px;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: "padding-right: 145px;"
    },
    {
        id: 2,
        instruction: "【初級第2關：阿宗麵線】排隊人潮擋到鄰居了！請點選 <code>justify-content</code> 並選擇 <code>center</code>，讓隊伍在畫面水平中央置中。",
        storeStyle: "justify-content: center; align-items: center;",
        storeHtml: `<div class="store">阿宗麵線</div>`,
        targetStyle: "justify-content: center; align-items: center;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div>`,
        playerPaddingHint: ""
    },
    {
        id: 3,
        instruction: "【初級第3關：師大生煎包】大家想要分散一點保持安全距離。請點選 <code>justify-content</code> 並選擇 <code>space-between</code>，讓客人平均分配在兩端與中間！",
        storeStyle: "justify-content: space-between; align-items: center;",
        storeHtml: `<div class="store">師大生煎包</div>`,
        targetStyle: "justify-content: space-between; align-items: center;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: ""
    },
    {
        id: 4,
        instruction: "【初級第4關：寧夏木瓜牛奶】這家店習慣讓後面來的客人排在最前面。請點選 <code>flex-direction</code> 並選擇 <code>row-reverse</code>，反轉水平排隊的方向！",
        storeStyle: "justify-content: flex-start; align-items: center;",
        storeHtml: `<div class="store">寧夏木瓜牛奶</div>`,
        targetStyle: "flex-direction: row-reverse; justify-content: flex-end; align-items: center; padding-left: 145px;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div>`,
        playerPaddingHint: "padding-left: 145px;"
    },
    {
        id: 5,
        instruction: "【初級第5關：士林大香腸】攤位改到下方了。請點選 <code>flex-direction</code> 並選擇 <code>column</code>，讓隊伍改成垂直向下排成一列！",
        storeStyle: "justify-content: center; align-items: flex-end;",
        storeHtml: `<div class="store">士林大香腸</div>`,
        targetStyle: "flex-direction: column; justify-content: flex-start; align-items: center; padding-bottom: 145px;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: "padding-bottom: 145px;"
    },
    {
        id: 6,
        instruction: "【初級第6關：饒河胡椒餅】攤位在正上方。請點選 <code>flex-direction</code> 選擇 <code>column-reverse</code>，讓客理由下往上垂直反向排隊！",
        storeStyle: "justify-content: center; align-items: flex-start;",
        storeHtml: `<div class="store">饒河胡椒餅</div>`,
        targetStyle: "flex-direction: column-reverse; justify-content: flex-start; align-items: center; padding-top: 145px;",
        htmlContent: `<div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: "padding-top: 145px;"
    },
    {
        id: 7,
        instruction: "【初級第7關：基隆廟口營養三明治】攤位在最右邊，且需要垂直排列。請連續注入：<code>flex-direction: column;</code> 與 <code>justify-content: flex-end;</code> 試試看複合效果！",
        storeStyle: "justify-content: flex-end; align-items: flex-end;",
        storeHtml: `<div class="store">營養三明治</div>`,
        targetStyle: "flex-direction: column; justify-content: flex-end; align-items: center; padding-bottom: 145px; padding-right: 20px;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div>`,
        playerPaddingHint: "padding-bottom: 145px; padding-right: 20px;"
    },
    {
        id: 8,
        instruction: "【初級第8關：延三臭豆腐】攤位在畫面正中央。請同時設定垂直排列與居中，點擊注入 <code>flex-direction: column;</code> 與 <code>justify-content: center;</code>！",
        storeStyle: "justify-content: center; align-items: center;",
        storeHtml: `<div class="store">延三臭豆腐</div>`,
        targetStyle: "flex-direction: column; justify-content: center; align-items: center;",
        htmlContent: `<div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: ""
    },
    {
        id: 9,
        instruction: "【初級第9關：樂華蚵仔煎】客人們貼得太近了。請在垂直排列下，使用 <code>space-around</code> 讓上下客人四周都保有平均的空隙！",
        storeStyle: "justify-content: center; align-items: center;",
        storeHtml: `<div class="store">樂華蚵仔煎</div>`,
        targetStyle: "flex-direction: column; justify-content: space-around; align-items: center;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: ""
    },
    {
        id: 10,
        instruction: "【初級第10關：瑞豐地瓜球】客人突然變多了！請點選 <code>flex-wrap</code> 並選擇 <code>wrap</code>，允許排不下的隊伍自動換到下一行！",
        storeStyle: "justify-content: flex-start; align-items: center;",
        storeHtml: `<div class="store">瑞豐地瓜球</div>`,
        targetStyle: "flex-wrap: wrap; justify-content: flex-start; align-items: center;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div><div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div><div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: ""
    },
    {
        id: 11,
        instruction: "【初級第11關：旱溪夜市排骨酥】攤位在右下角。請注入 <code>justify-content: flex-end;</code> 與 <code>align-items: flex-end;</code>，讓水平與交錯軸都靠向尾端！",
        storeStyle: "justify-content: flex-end; align-items: flex-end;",
        storeHtml: `<div class="store">台中排骨酥</div>`,
        targetStyle: "justify-content: flex-end; align-items: flex-end; padding-right: 145px;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: "padding-right: 145px;"
    },
    {
        id: 12,
        instruction: "【初級第12關：南機場山內雞肉】恭喜來到最後一關！請將隊伍改成垂直排列（column），並且在交錯軸（水平）也完全居中對齊（center）吧！",
        storeStyle: "justify-content: center; align-items: center;",
        storeHtml: `<div class="store">山內雞肉</div>`,
        targetStyle: "flex-direction: column; justify-content: center; align-items: center;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: ""
    }
];

// =========================================================================
// 1-2. 排隊大師專屬題目庫（2 個以上複合屬性，提示無法點擊，玩家必須完全手動輸入）
// =========================================================================
const masterLevels = [
    {
        id: 1,
        instruction: "【大師級第1關：逢甲地瓜球】歡迎來到大師硬核盲打模式！請輸入複合語法，使隊伍垂直由下往上排，並在下方垂直置底位置集合。提示參數不開放點擊喔！",
        storeStyle: "justify-content: center; align-items: flex-end;",
        storeHtml: `<div class="store">逢甲地瓜球</div>`,
        targetStyle: "flex-direction: column; justify-content: flex-end; align-items: center; padding-bottom: 145px;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: "padding-bottom: 145px;"
    },
    {
        id: 2,
        instruction: "【大師級第2關：花園夜市大份蚵仔煎】攤位在畫面最右下角。請手打語法，讓隊伍在水平軸與垂直交錯軸同時靠向末端（flex-end）！",
        storeStyle: "justify-content: flex-end; align-items: flex-end;",
        storeHtml: `<div class="store">台南蚵仔煎</div>`,
        targetStyle: "justify-content: flex-end; align-items: flex-end; padding-right: 145px;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: "padding-right: 145px;"
    },
    {
        id: 3,
        instruction: "【大師級第3關：大東夜市拔絲地瓜】店長希望後面來的排前面，而且整排要在畫面中央置中。請結合反向水平排列與置中屬性！",
        storeStyle: "justify-content: center; align-items: center;",
        storeHtml: `<div class="store">拔絲地瓜</div>`,
        targetStyle: "flex-direction: row-reverse; justify-content: center; align-items: center;",
        htmlContent: `<div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: ""
    },
    {
        id: 4,
        instruction: "【大師級第4關：墾丁大街烤魷魚】攤位在左邊，但需要隊伍『由下往上』垂直排列，並且靠在畫面的垂直頂端。請仔細思考 column-reverse 的主軸方向！",
        storeStyle: "justify-content: flex-start; align-items: flex-start;",
        storeHtml: `<div class="store">墾丁烤魷魚</div>`,
        targetStyle: "flex-direction: column-reverse; justify-content: flex-end; align-items: center; padding-top: 145px;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div>`,
        playerPaddingHint: "padding-top: 145px;"
    },
    {
        id: 5,
        instruction: "【大師級第5關：廟口東山鴨頭】請使用垂直主軸（column），並讓所有客人貼齊垂直最底部（flex-end），且在交錯軸（水平）也要完全置中對齊。",
        storeStyle: "justify-content: center; align-items: flex-end;",
        storeHtml: `<div class="store">東山鴨頭</div>`,
        targetStyle: "flex-direction: column; justify-content: flex-end; align-items: center; padding-bottom: 145px;",
        htmlContent: `<div class="person-shadow female-shadow">🙋‍♀️</div><div class="person-shadow student-shadow">🙋</div>`,
        playerContent: `<div class="person female">🙋‍♀️</div><div class="person student">🙋</div>`,
        playerPaddingHint: "padding-bottom: 145px;"
    },
    {
        id: 6,
        instruction: "【大師級第6關：東大門夜市烤麻糬】隊伍需要垂直排列。希望首位和末位客人分別貼齊頂端和底端，中間的客人等距平分空隙。請結合 <code>column</code> 與適當的 <code>justify-content</code> 分散屬性！",
        storeStyle: "justify-content: center; align-items: center;",
        storeHtml: `<div class="store">原住民烤麻糬</div>`,
        targetStyle: "flex-direction: column; justify-content: space-between; align-items: center; height: 100%;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: ""
    },
    {
        id: 7,
        instruction: "【大師級第7關：六合夜市土魠魚羹】人潮大爆滿！請手打加入換行屬性，並讓主軸靠右對齊（flex-end），確保換行後的客人都整齊靠右排好！",
        storeStyle: "justify-content: flex-end; align-items: center;",
        storeHtml: `<div class="store">土魠魚羹</div>`,
        targetStyle: "flex-wrap: wrap; justify-content: flex-end; align-items: center;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div><div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div><div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: ""
    },
    {
        id: 8,
        instruction: "【大師級第8關：南雅夜市麻油雞】今天攤位在最頂端正中央。請將主軸設為垂直反向（column-reverse），且讓所有客人在主軸與交錯軸都完美置中！",
        storeStyle: "justify-content: center; align-items: flex-start;",
        storeHtml: `<div class="store">板橋麻油雞</div>`,
        targetStyle: "flex-direction: column-reverse; justify-content: center; align-items: center;",
        htmlContent: `<div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: ""
    },
    {
        id: 9,
        instruction: "【大師級第9關：三和夜市地瓜球】要讓換行後的隊伍也呈現反向排列（多行從底部往上排）。請大膽嘗試複合屬性 <code>flex-wrap: wrap-reverse;</code> 並將水平置中！",
        storeStyle: "justify-content: center; align-items: center;",
        storeHtml: `<div class="store">三和地瓜球</div>`,
        targetStyle: "flex-wrap: wrap-reverse; justify-content: center; align-items: center;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div><div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div><div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: ""
    },
    {
        id: 10,
        instruction: "【大師級第10關：新竹城隍廟潤餅】店面在左下角，客人需要垂直由下往上排。請仔細調配 <code>flex-direction: column-reverse;</code> 與 <code>align-items</code> 將隊伍靠向最左側（flex-start）。",
        storeStyle: "justify-content: flex-start; align-items: flex-end;",
        storeHtml: `<div class="store">城隍廟潤餅</div>`,
        targetStyle: "flex-direction: column-reverse; justify-content: flex-start; align-items: flex-start; padding-bottom: 145px;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: "padding-bottom: 145px;"
    },
    {
        id: 11,
        instruction: "【大師級第11關：一中街大熱狗】隊伍需要有多行換行（wrap）功能，且每個行與行之間、客人的四周都要保持絕對相等的均勻空間，請靈活運用 <code>justify-content: space-evenly;</code>！",
        storeStyle: "justify-content: center; align-items: center;",
        storeHtml: `<div class="store">一中街大熱狗</div>`,
        targetStyle: "flex-wrap: wrap; justify-content: space-evenly; align-items: center;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div><div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div><div class="person student">🙋</div><div class="person male">🙋‍♂️</div>`,
        playerPaddingHint: ""
    },
    {
        id: 12,
        instruction: "【大師級第12關：終極試煉：士林豪大大雞排】終極大難關！攤位在右上角。請將隊伍改成垂直排列（column），並且想辦法同時讓它靠右（align-items）以及靠頂部（justify-content）。挑戰你的 Flexbox 全能視野！",
        storeStyle: "justify-content: flex-end; align-items: flex-start;",
        storeHtml: `<div class="store">豪大大雞排</div>`,
        targetStyle: "flex-direction: column; justify-content: flex-start; align-items: flex-end; padding-top: 145px; padding-right: 20px;",
        htmlContent: `<div class="person-shadow student-shadow">🙋</div><div class="person-shadow male-shadow">🙋‍♂️</div><div class="person-shadow female-shadow">🙋‍♀️</div>`,
        playerContent: `<div class="person student">🙋</div><div class="person male">🙋‍♂️</div><div class="person female">🙋‍♀️</div>`,
        playerPaddingHint: "padding-top: 145px; padding-right: 20px;"
    }
];