import { CardBooster } from '../model/model';

export const boosterMock: CardBooster[] = [
  {
    name: 'Decimator Beetle',
    manaCost: '{3}{B}{G}',
    cmc: 5,
    colors: ['B', 'G'],
    colorIdentity: ['B', 'G'],
    type: 'Creature — Insect',
    types: ['Creature'],
    subtypes: ['Insect'],
    rarity: 'Uncommon',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'When Decimator Beetle enters the battlefield, put a -1/-1 counter on target creature you control.\nWhenever Decimator Beetle attacks, remove a -1/-1 counter from target creature you control and put a -1/-1 counter on up to one target creature defending player controls.',
    artist: 'Adrian Majkrzak',
    number: '197',
    power: '4',
    toughness: '5',
    layout: 'normal',
    multiverseid: '426899',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426899&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'Decimator Beetle’s second ability can target any creature you control, not just one with a -1/-1 counter on it. It’ll put a -1/-1 counter on the opponent’s creature even if there isn’t one to remove from your creature.',
      },
      {
        date: '2017-04-18',
        text: 'If one target of Decimator Beetle’s second ability becomes illegal, the other will still be affected.',
      },
    ],
    foreignNames: [
      {
        name: 'Dezimierender Käfer',
        text: 'Wenn der Dezimierende Käfer ins Spiel kommt, lege eine -1/-1-Marke auf eine Kreatur deiner Wahl, die du kontrollierst.\nImmer wenn der Dezimierende Käfer angreift, entferne eine -1/-1-Marke von einer Kreatur deiner Wahl, die du kontrollierst, und lege eine -1/-1-Marke auf bis zu eine Kreatur deiner Wahl, die der verteidigende Spieler kontrolliert.',
        type: 'Kreatur — Insekt',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427168&type=card',
        language: 'German',
        multiverseid: 427168,
      },
      {
        name: 'Escarabajo diezmador',
        text: 'Cuando el Escarabajo diezmador entre al campo de batalla, pon un contador -1/-1 sobre la criatura objetivo que controlas.\nSiempre que el Escarabajo diezmador ataque, remueve un contador -1/-1 de la criatura objetivo que controlas y pon un contador -1/-1 sobre hasta una criatura objetivo que controla el jugador defensor.',
        type: 'Criatura — Insecto',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427437&type=card',
        language: 'Spanish',
        multiverseid: 427437,
      },
      {
        name: 'Scarabée de décimation',
        text: "Quand le Scarabée de décimation arrive sur le champ de bataille, mettez un marqueur -1/-1 sur une créature ciblée que vous contrôlez.\nÀ chaque fois que le Scarabée de décimation attaque, retirez un marqueur -1/-1 d'une créature ciblée que vous contrôlez, ciblez jusqu'à une créature que le joueur défenseur contrôle et mettez un marqueur -1/-1 sur elle.",
        type: 'Créature : insecte',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427706&type=card',
        language: 'French',
        multiverseid: 427706,
      },
      {
        name: 'Coleottero Decimatore',
        text: 'Quando il Coleottero Decimatore entra nel campo di battaglia, metti un segnalino -1/-1 su una creatura bersaglio che controlli.\nOgniqualvolta il Coleottero Decimatore attacca, rimuovi un segnalino -1/-1 da una creatura bersaglio che controlli e scegli fino a una creatura bersaglio controllata dal giocatore in difesa. Metti un segnalino -1/-1 su di essa.',
        type: 'Creatura — Insetto',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427975&type=card',
        language: 'Italian',
        multiverseid: 427975,
      },
      {
        name: '潰滅甲虫',
        text: '潰滅甲虫が戦場に出たとき、あなたがコントロールするクリーチャー１体を対象とし、それの上に－１/－１カウンターを１個置く。\n潰滅甲虫が攻撃するたび、あなたがコントロールするクリーチャー１体と、防御プレイヤーがコントロールするクリーチャー最大１体を対象とする。その前者の上から－１/－１カウンターを１個取り除き、その後者の上に－１/－１カウンターを１個置く。',
        type: 'クリーチャー — 昆虫',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428244&type=card',
        language: 'Japanese',
        multiverseid: 428244,
      },
      {
        name: '대량학살 풍뎅이',
        text: '대량학살 풍뎅이가 전장에 들어올 때, 당신이 조종하는 생물을 목표로 정한다. 그 생물에 -1/-1 카운터 한 개를 올려놓는다.\n대량학살 풍뎅이가 공격할 때마다, 당신이 조종하는 생물 한 개와 수비플레이어가 조종하는 생물을 최대 한 개까지 목표로 정한다. 첫 번째 목표에서 -1/-1 카운터 한 개를 제거하고 두 번째 목표에 -1/-1 카운터 한 개를 올려놓는다.',
        type: '생물 — 곤충',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428513&type=card',
        language: 'Korean',
        multiverseid: 428513,
      },
      {
        name: 'Besouro Dizimador',
        text: 'Quando Besouro Dizimador entrar no campo de batalha, coloque um marcador -1/-1 na criatura alvo que você controla.\nToda vez que Besouro Dizimador atacar, remova um marcador -1/-1 da criatura alvo que você controla e coloque um marcador -1/-1 em até uma criatura alvo que o jogador defensor controla.',
        type: 'Criatura — Inseto',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428782&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428782,
      },
      {
        name: 'Жук-Истребитель',
        text: 'Когда Жук-Истребитель выходит на поле битвы, положите один жетон -1/-1 на целевое существо под вашим контролем.\nКаждый раз, когда Жук-Истребитель атакует, удалите один жетон -1/-1 с целевого существа под вашим контролем и положите один жетон -1/-1 на не более чем одно целевое существо под контролем защищающегося игрока.',
        type: 'Существо — Насекомое',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429051&type=card',
        language: 'Russian',
        multiverseid: 429051,
      },
      {
        name: '摧残甲虫',
        text: '当摧残甲虫进战场时，在目标由你操控的生物上放置一个-1/-1指示物。\n每当摧残甲虫攻击时，从目标由你操控的生物上移去一个-1/-1指示物，且在至多一个目标由防御牌手操控的生物上放置一个-1/-1指示物。',
        type: '生物～昆虫',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429320&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429320,
      },
      {
        name: '摧殘甲蟲',
        text: '當摧殘甲蟲進戰場時，在目標由你操控的生物上放置一個-1/-1指示物。\n每當摧殘甲蟲攻擊時，從目標由你操控的生物上移去一個-1/-1指示物，且在至多一個目標由防禦玩家操控的生物上放置一個-1/-1指示物。',
        type: '生物～昆蟲',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429589&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429589,
      },
    ],
    printings: ['AKH'],
    originalText:
      'When Decimator Beetle enters the battlefield, put a -1/-1 counter on target creature you control.\nWhenever Decimator Beetle attacks, remove a -1/-1 counter from target creature you control and put a -1/-1 counter on up to one target creature defending player controls.',
    originalType: 'Creature - Insect',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Restricted',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: 'e312c3b5-4605-527b-992f-36ff87ad39d9',
  },
  {
    name: 'Festering Mummy',
    manaCost: '{B}',
    cmc: 1,
    colors: ['B'],
    colorIdentity: ['B'],
    type: 'Creature — Zombie',
    types: ['Creature'],
    subtypes: ['Zombie'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'When Festering Mummy dies, you may put a -1/-1 counter on target creature.',
    flavor: 'As its parched flesh withers away, its malignant hunger grows.',
    artist: 'Christopher Burdett',
    number: '91',
    power: '1',
    toughness: '1',
    layout: 'normal',
    multiverseid: '426793',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426793&type=card',
    foreignNames: [
      {
        name: 'Eiternde Mumie',
        text: 'Wenn die Eiternde Mumie stirbt, kannst du eine -1/-1-Marke auf eine Kreatur deiner Wahl legen.',
        type: 'Kreatur — Zombie',
        flavor:
          'Ihr unstillbarer Hunger wächst mit jedem Stück verrotteten Fleisches, das von ihr abfällt.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427062&type=card',
        language: 'German',
        multiverseid: 427062,
      },
      {
        name: 'Momia pútrida',
        text: 'Cuando la Momia pútrida muera, puedes poner un contador -1/-1 sobre la criatura objetivo.',
        type: 'Criatura — Zombie',
        flavor:
          'Mientras su carne reseca se marchita, su voracidad maligna aumenta.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427331&type=card',
        language: 'Spanish',
        multiverseid: 427331,
      },
      {
        name: 'Momie pourrissante',
        text: 'Quand la Momie pourrissante meurt, vous pouvez mettre un marqueur -1/-1 sur une créature ciblée.',
        type: 'Créature : zombie',
        flavor:
          "Alors que sa chair desséchée s'étiole, sa faim malveillante s'accroît.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427600&type=card',
        language: 'French',
        multiverseid: 427600,
      },
      {
        name: 'Mummia Putrefatta',
        text: 'Quando la Mummia Putrefatta muore, puoi mettere un segnalino -1/-1 su una creatura bersaglio.',
        type: 'Creatura — Zombie',
        flavor:
          'Mentre la sua carne rinsecchita avvizzisce, cresce in lei una fame maligna.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427869&type=card',
        language: 'Italian',
        multiverseid: 427869,
      },
      {
        name: 'ただれたミイラ',
        text: 'ただれたミイラが死亡したとき、クリーチャー１体を対象とする。あなたはそれの上に－１/－１カウンターを１個置いてもよい。',
        type: 'クリーチャー — ゾンビ',
        flavor: 'その肉体が干からび衰える一方で、凶悪な飢えが増大する。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428138&type=card',
        language: 'Japanese',
        multiverseid: 428138,
      },
      {
        name: '종기 미라',
        text: '종기 미라가 죽을 때, 생물을 목표로 정한다. 당신은 그 생물에 -1/-1 카운터 한 개를 올려놓을 수 있다.',
        type: '생물 — 좀비',
        flavor: '말라붙은 육신이 시들면서 사악한 굶주림은 더 커져 간다.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428407&type=card',
        language: 'Korean',
        multiverseid: 428407,
      },
      {
        name: 'Múmia Pustulenta',
        text: 'Quando Múmia Pustulenta morre, você pode colocar um marcador -1/-1 na criatura alvo.',
        type: 'Criatura — Zumbi',
        flavor: 'Conforme a carne ressecada murcha, sua fome maligna cresce.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428676&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428676,
      },
      {
        name: 'Гниющая Мумия',
        text: 'Когда Гниющая Мумия умирает, вы можете положить один жетон -1/-1 на целевое существо.',
        type: 'Существо — Зомби',
        flavor:
          'Чем меньше остается на костях иссохшей плоти, тем сильнее растет терзающий ее голод.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428945&type=card',
        language: 'Russian',
        multiverseid: 428945,
      },
      {
        name: '溃伤木乃伊',
        text: '当溃伤木乃伊死去时，你可以在目标生物上放置一个-1/-1指示物。',
        type: '生物～灵俑',
        flavor: '身上死肉逐渐剥落，内底恶欲逐渐增长。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429214&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429214,
      },
      {
        name: '潰傷木乃伊',
        text: '當潰傷木乃伊死去時，你可以在目標生物上放置一個-1/-1指示物。',
        type: '生物～殭屍',
        flavor: '身上死肉逐漸剝落，內底惡欲逐漸增長。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429483&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429483,
      },
    ],
    printings: ['AKH', 'AKR'],
    originalText:
      'When Festering Mummy dies, you may put a -1/-1 counter on target creature.',
    originalType: 'Creature - Zombie',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '8d486592-aea9-5693-a2c9-f966a6eb5167',
  },
  {
    name: 'Hyena Pack',
    manaCost: '{2}{R}{R}',
    cmc: 4,
    colors: ['R'],
    colorIdentity: ['R'],
    type: 'Creature — Hyena',
    types: ['Creature'],
    subtypes: ['Hyena'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    flavor:
      'With carrion a rarity in the Broken Lands, the hyenas that stalk the deserts hunt in packs.',
    artist: 'Winona Nelson',
    number: '139',
    power: '3',
    toughness: '4',
    layout: 'normal',
    multiverseid: '426841',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426841&type=card',
    foreignNames: [
      {
        name: 'Hyänenrudel',
        type: 'Kreatur — Hyäne',
        flavor:
          'Aas ist in der Splitterwüste so selten, dass selbst die Hyänen anfangen, auf die Jagd zu gehen.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427110&type=card',
        language: 'German',
        multiverseid: 427110,
      },
      {
        name: 'Manada de hienas',
        type: 'Criatura — Hiena',
        flavor:
          'La carroña no abunda en las Tierras Desoladas, por lo que las hienas que acechan en los desiertos cazan en manadas.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427379&type=card',
        language: 'Spanish',
        multiverseid: 427379,
      },
      {
        name: 'Meute de hyènes',
        type: 'Créature : hyène',
        flavor:
          "Les charognes sont rares dans les Terres brisées, c'est pourquoi les hyènes qui arpentent le désert chassent en meute.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427648&type=card',
        language: 'French',
        multiverseid: 427648,
      },
      {
        name: 'Branco di Iene',
        type: 'Creatura — Iena',
        flavor:
          'Poiché le carogne scarseggiano nelle Terre spezzate, le iene che si aggirano per i deserti cacciano in branco.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427917&type=card',
        language: 'Italian',
        multiverseid: 427917,
      },
      {
        name: 'ハイエナの群れ',
        type: 'クリーチャー — ハイエナ',
        flavor: '遺棄地に稀有なる屍肉あらば、砂漠に群れ成すハイエナあり。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428186&type=card',
        language: 'Japanese',
        multiverseid: 428186,
      },
      {
        name: '하이에나 무리',
        type: '생물 — 하이에나',
        flavor:
          '시체를 찾기 어려운 망가진 땅에서는 사막을 배회하는 하이에나들이 무리를 지어 사냥한다.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428455&type=card',
        language: 'Korean',
        multiverseid: 428455,
      },
      {
        name: 'Alcateia de Hienas',
        type: 'Criatura — Hiena',
        flavor:
          'Como carcaças são uma raridade nas Terras Partidas, as hienas que espreitam nos desertos caçam em bando.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428724&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428724,
      },
      {
        name: 'Стая Гиен',
        type: 'Существо — Гиена',
        flavor:
          'Падаль редко встречается в Смятенных Землях, и живущие в пустыне гиены сбиваются для охоты в стаи.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428993&type=card',
        language: 'Russian',
        multiverseid: 428993,
      },
      {
        name: '鬣狗群',
        type: '生物～鬣狗',
        flavor: '荒土中腐肉稀缺，于沙漠中游荡的鬣狗常常成群狩猎。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429262&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429262,
      },
      {
        name: '鬣狗群',
        type: '生物～鬣狗',
        flavor: '荒土中腐肉稀缺，於沙漠中遊蕩的鬣狗常常成群狩獵。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429531&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429531,
      },
    ],
    printings: ['AKH', 'MB1'],
    originalType: 'Creature - Hyena',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '5a9e9993-1216-55cf-9c6d-ac6412009469',
  },
  {
    name: 'Crocodile of the Crossing',
    manaCost: '{3}{G}',
    cmc: 4,
    colors: ['G'],
    colorIdentity: ['G'],
    type: 'Creature — Crocodile',
    types: ['Creature'],
    subtypes: ['Crocodile'],
    rarity: 'Uncommon',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'Haste\nWhen Crocodile of the Crossing enters the battlefield, put a -1/-1 counter on target creature you control.',
    flavor:
      '"Everything in the trial has teeth. You will overcome them, or you will feed them."\n—Rhonas, god of strength',
    artist: 'Kev Walker',
    number: '162',
    power: '5',
    toughness: '4',
    layout: 'normal',
    multiverseid: '426864',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426864&type=card',
    foreignNames: [
      {
        name: 'Krokodil des Scheidewegs',
        text: 'Eile\nWenn das Krokodil des Scheidewegs ins Spiel kommt, lege eine -1/-1-Marke auf eine Kreatur deiner Wahl, die du kontrollierst.',
        type: 'Kreatur — Krokodil',
        flavor:
          '„Alles, was einem in der Prüfung begegnet, hat Reißzähne und nichts davon will nur spielen." —Rhonas, Gott der Stärke',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427133&type=card',
        language: 'German',
        multiverseid: 427133,
      },
      {
        name: 'Cocodrilo de La Encrucijada',
        text: 'Prisa.\nCuando el Cocodrilo de La Encrucijada entre al campo de batalla, pon un contador -1/-1 sobre la criatura objetivo que controlas.',
        type: 'Criatura — Cocodrilo',
        flavor:
          '"Todo lo que compone la prueba tiene dientes. O los superas, o los alimentas". —Rhonas, dios de la fuerza',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427402&type=card',
        language: 'Spanish',
        multiverseid: 427402,
      },
      {
        name: 'Crocodile de la Traversée',
        text: 'Célérité\nQuand le Crocodile de la Traversée arrive sur le champ de bataille, mettez un marqueur -1/-1 sur une créature ciblée que vous contrôlez.',
        type: 'Créature : crocodile',
        flavor:
          '« Pendant les épreuves, tous les dangers ont des dents. Surmontez-les, ou nourrissez-les. » —Rhonas, dieu de la Force',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427671&type=card',
        language: 'French',
        multiverseid: 427671,
      },
      {
        name: 'Coccodrillo del Guado',
        text: 'Rapidità\nQuando il Coccodrillo del Guado entra nel campo di battaglia, metti un segnalino -1/-1 su una creatura bersaglio che controlli.',
        type: 'Creatura — Coccodrillo',
        flavor:
          '"Nell\'ordalia vi ritroverete denti ovunque. Spezzateli o saranno loro a spezzare voi." —Rhonas, dio della forza',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427940&type=card',
        language: 'Italian',
        multiverseid: 427940,
      },
      {
        name: '横断地のクロコダイル',
        text: '速攻\n横断地のクロコダイルが戦場に出たとき、あなたがコントロールするクリーチャー１体を対象とし、それの上に－１/－１カウンターを１個置く。',
        type: 'クリーチャー — クロコダイル',
        flavor:
          '「試練は過酷である。襲い来るものに勝たねば餌となるのみ。」 ――活力の神、ロナス',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428209&type=card',
        language: 'Japanese',
        multiverseid: 428209,
      },
      {
        name: '횡단 길목의 악어',
        text: '신속\n횡단 길목의 악어가 전장에 들어올 때, 당신이 조종하는 생물을 목표로 정한다. 그 생물에 -1/-1 카운터 한 개를 올려놓는다.',
        type: '생물 — 악어',
        flavor:
          '"시험에 등장하는 모든 괴수는 날카로운 이를 가졌다. 이 놈들을 처치하지 못다면 먹잇감이 될 것이다." —힘의 신 로나스',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428478&type=card',
        language: 'Korean',
        multiverseid: 428478,
      },
      {
        name: 'Crocodilo do Vau',
        text: 'Ímpeto\nQuando Crocodilo do Vau entrar no campo de batalha, coloque um marcador -1/-1 na criatura alvo que você controla.',
        type: 'Criatura — Crocodilo',
        flavor:
          '"Tudo na prova tem dentes. Supere-os ou alimente-os." — Rhonas, deus da força',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428747&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428747,
      },
      {
        name: 'Крокодил Переправы',
        text: 'Ускорение\nКогда Крокодил Переправы выходит на поле битвы, положите один жетон -1/-1 на целевое существо под вашим контролем.',
        type: 'Существо — Крокодил',
        flavor:
          '«В этом испытании у каждого есть зубы. Ты или победишь, или станешь пищей». — Ронас, бог силы',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429016&type=card',
        language: 'Russian',
        multiverseid: 429016,
      },
      {
        name: '分岔口鳄鱼',
        text: '敏捷\n当分岔口鳄鱼进战场时，在目标由你操控的生物上放置一个-1/-1指示物。',
        type: '生物～鳄鱼',
        flavor:
          '「这祀炼中你所面对的一切都有尖牙利齿。赢不了的话，你就会成为盘中美餐。」 ～力量之神罗纳斯',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429285&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429285,
      },
      {
        name: '分岔口鱷魚',
        text: '敏捷\n當分岔口鱷魚進戰場時，在目標由你操控的生物上放置一個-1/-1指示物。',
        type: '生物～鱷魚',
        flavor:
          '「這祀煉中你所面對的一切都有尖牙利齒。贏不了的話，你就會成為盤中美餐。」 ～力量之神羅納斯',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429554&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429554,
      },
    ],
    printings: ['AKH', 'AKR'],
    originalText:
      'Haste\nWhen Crocodile of the Crossing enters the battlefield, put a -1/-1 counter on target creature you control.',
    originalType: 'Creature - Crocodile',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Restricted',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '57ed2278-3c90-55f7-b058-6b5e79976cfd',
  },
  {
    name: 'Tah-Crop Elite',
    manaCost: '{3}{W}',
    cmc: 4,
    colors: ['W'],
    colorIdentity: ['W'],
    type: 'Creature — Bird Warrior',
    types: ['Creature'],
    subtypes: ['Bird', 'Warrior'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: "Flying\nYou may exert Tah-Crop Elite as it attacks. When you do, creatures you control get +1/+1 until end of turn. (An exerted creature won't untap during your next untap step.)",
    artist: 'Raoul Vitale',
    number: '31',
    power: '2',
    toughness: '2',
    layout: 'normal',
    multiverseid: '426733',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426733&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'You can’t exert a creature unless an effect allows you to do so. Similar effects that “tap and freeze” a creature (such as that of Decision Paralysis) don’t exert that creature.',
      },
      {
        date: '2017-04-18',
        text: 'If an exerted creature is already untapped during your next untap step (most likely because it had vigilance or an effect untapped it), exert’s effect preventing it from untapping expires without having done anything.',
      },
      {
        date: '2017-04-18',
        text: 'If you gain control of another player’s creature until end of turn and exert it, it will untap during that player’s untap step.',
      },
      {
        date: '2017-04-18',
        text: 'All cards in the Amonkhet set that let you exert a creature let you do so as you declare it as an attacking creature, as do some of the cards in the Hour of Devastation set. You can’t do so later in combat, and creatures put onto the battlefield attacking can’t be exerted. Any abilities that trigger on exerting an attacking creature will resolve before blockers are declared.',
      },
    ],
    foreignNames: [
      {
        name: 'Elite der Tah-Saat',
        text: 'Fliegend\nDu kannst die Elite der Tah-Saat erschöpfen, sowie sie angreift. Wenn du dies tust, erhalten Kreaturen, die du kontrollierst, +1/+1 bis zum Ende des Zuges. (Eine erschöpfte Kreatur enttappt nicht während deines nächsten Enttappsegments.)',
        type: 'Kreatur — Vogel, Krieger',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427002&type=card',
        language: 'German',
        multiverseid: 427002,
      },
      {
        name: 'Élite de la simiente Tah',
        text: 'Vuela.\nPuedes espolear a la Élite de la simiente Tah en cuanto ataque. Cuando lo hagas, las criaturas que controlas obtienen +1/+1 hasta el final del turno. (Una criatura espoleada no se enderezará durante tu próximo paso de enderezar.)',
        type: 'Criatura — Guerrero ave',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427271&type=card',
        language: 'Spanish',
        multiverseid: 427271,
      },
      {
        name: 'Élite de la moisson Tah',
        text: "Vol\nVous pouvez surmener l'Élite de la moisson Tah au moment où elle attaque. Quand vous faites ainsi, les créatures que vous contrôlez gagnent +1/+1 jusqu'à la fin du tour. (Une créature surmenée ne se dégage pas pendant votre prochaine étape de dégagement.)",
        type: 'Créature : oiseau et guerrier',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427540&type=card',
        language: 'French',
        multiverseid: 427540,
      },
      {
        name: 'Elite della Messe Tah',
        text: "Volare\nPuoi stremare l'Elite della Messe Tah mentre attacca. Quando lo fai, le creature che controlli prendono +1/+1 fino alla fine del turno. (Una creatura stremata non STAPpa durante il tuo prossimo STAP.)",
        type: 'Creatura — Guerriero Uccello',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427809&type=card',
        language: 'Italian',
        multiverseid: 427809,
      },
      {
        name: 'ター一門の精鋭',
        text: '飛行\nター一門の精鋭が攻撃するに際し、あなたはこれを督励してもよい。そうしたとき、ターン終了時まで、あなたがコントロールするクリーチャーは＋１/＋１の修整を受ける。（督励されたクリーチャーは、あなたの次のアンタップ・ステップにアンタップしない。）',
        type: 'クリーチャー — 鳥・戦士',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428078&type=card',
        language: 'Japanese',
        multiverseid: 428078,
      },
      {
        name: '타 입문자 정예병',
        text: '비행\n당신은 타 입문자 정예병으로 공격을 선언하면서 타 입문자 정예병을 분전시킬 수 있다. 그렇게 할 때, 당신이 조종하는 생물들은 턴종료까지 +1/+1을 받는다. (분전한 생물은 당신의 다음 언탭단에 언탭되지 않는다.)',
        type: '생물 — 조류 전사',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428347&type=card',
        language: 'Korean',
        multiverseid: 428347,
      },
      {
        name: 'Elite da Safra Tah',
        text: 'Voar\nVocê pode exaurir Elite da Safra Tah conforme ela ataca. Quando faz isso, as criaturas que você controla recebem +1/+1 até o final do turno. (Uma criatura exaurida não será desvirada durante sua próxima etapa de desvirar.)',
        type: 'Criatura — Ave Guerreiro',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428616&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428616,
      },
      {
        name: 'Избранный Снопа Тах',
        text: 'Полет\nВы можете подстегнуть Избранного Снопа Тах в момент его атаки. Когда вы это делаете, существа под вашим контролем получают +1/+1 до конца хода. (Подстегнутое существо не разворачивается во время вашего следующего шага разворота.)',
        type: 'Существо — Птица Воин',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428885&type=card',
        language: 'Russian',
        multiverseid: 428885,
      },
      {
        name: '塔哈祀群精英',
        text: '飞行\n你可以于塔哈祀群精英攻击时耗竭之。当你如此作时，由你操控的生物得+1/+1直到回合结束。（已耗竭的生物于你的下一个重置步骤中不能重置。）',
        type: '生物～鸟／战士',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429154&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429154,
      },
      {
        name: '塔哈祀群精英',
        text: '飛行\n你可以於塔哈祀群精英攻擊時耗竭之。當你如此作時，由你操控的生物得+1/+1直到回合結束。（已耗竭的生物於你的下一個重置步驟中不能重置。）',
        type: '生物～鳥／戰士',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429423&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429423,
      },
    ],
    printings: ['AKH', 'AKR'],
    originalText:
      "Flying\nYou may exert Tah-Crop Elite as it attacks. When you do, creatures you control get +1/+1 until end of turn. (An exerted creature won't untap during your next untap step.)",
    originalType: 'Creature - Bird Warrior',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: 'f349dfe0-3d94-5acc-bca7-9d1a7a36cc6d',
  },
  {
    name: 'Aven Initiate',
    manaCost: '{3}{U}',
    cmc: 4,
    colors: ['U'],
    colorIdentity: ['U'],
    type: 'Creature — Bird Warrior',
    types: ['Creature'],
    subtypes: ['Bird', 'Warrior'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: "Flying\nEmbalm {6}{U} ({6}{U}, Exile this card from your graveyard: Create a token that's a copy of it, except it's a white Zombie Bird Warrior with no mana cost. Embalm only as a sorcery.)",
    artist: 'Jakub Kasper',
    number: '43',
    power: '3',
    toughness: '2',
    layout: 'normal',
    multiverseid: '426745',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426745&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'For each card with embalm, a corresponding game play supplement token can be found in some Amonkhet booster packs. These supplements are not required to play with cards with embalm; you can use the same items to represent an embalmed token as you would any other token.',
      },
      {
        date: '2017-04-18',
        text: 'The token copies exactly what was printed on the original card and nothing else. It doesn’t copy any information about the object the card was before it was put into your graveyard.',
      },
      {
        date: '2017-04-18',
        text: 'The token is a Zombie in addition to its other types and is white instead of its other colors. It has no mana cost, and thus its mana value is 0. These are copiable values of the token that other effects may copy.',
      },
      {
        date: '2017-07-14',
        text: 'If a spell or ability puts a creature card with embalm into your graveyard during your main phase, you’ll have priority immediately after that spell or ability resolves. You can activate the creature card’s embalm ability before any player can exile it with an effect, such as that of Crook of Condemnation, if it’s legal for you to do so.',
      },
      {
        date: '2017-07-14',
        text: 'Once you’ve activated an embalm ability, the card is immediately exiled. Opponents can’t try to stop the ability by exiling the card with an effect such as that of Crook of Condemnatnion.',
      },
    ],
    foreignNames: [
      {
        name: 'Avior-Geweihter',
        text: 'Fliegend\nEinbalsamieren {6}{U} ({6}{U}, schicke diese Karte aus deinem Friedhof ins Exil: Erzeuge einen Spielstein, der eine Kopie von ihr ist, außer dass er ein weißer Zombie-Vogel-Krieger ohne Manakosten ist. Spiele Einbalsamieren wie eine Hexerei.)',
        type: 'Kreatur — Vogel, Krieger',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427014&type=card',
        language: 'German',
        multiverseid: 427014,
      },
      {
        name: 'Iniciado aven',
        text: 'Vuela.\nEmbalsamar {6}{U}. ({6}{U}, exiliar esta carta de tu cementerio: Crea una ficha que es una copia de esta carta, excepto que es un Guerrero Ave Zombie blanco sin coste de maná. Activa la habilidad de embalsamar solo como un conjuro.)',
        type: 'Criatura — Guerrero ave',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427283&type=card',
        language: 'Spanish',
        multiverseid: 427283,
      },
      {
        name: 'Adepte avemain',
        text: "Vol\nEmbaumement {6}{U} ({6}{U}, exilez cette carte de votre cimetière : Créez un jeton qui en est une copie, excepté que c'est un zombie et oiseau et guerrier blanc sans coût de mana. N'utilisez l'embaumement que lorsque vous pourriez lancer un rituel.)",
        type: 'Créature : oiseau et guerrier',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427552&type=card',
        language: 'French',
        multiverseid: 427552,
      },
      {
        name: 'Iniziato Aviano',
        text: 'Volare\nImbalsamare {6}{U} ({6}{U}, Esilia questa carta dal tuo cimitero: Crea una pedina che è una copia della carta, tranne che è un Guerriero Uccello Zombie bianco senza costo di mana. Imbalsama solo quando potresti lanciare una stregoneria.)',
        type: 'Creatura — Guerriero Uccello',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427821&type=card',
        language: 'Italian',
        multiverseid: 427821,
      },
      {
        name: 'エイヴンの修練者',
        text: '飛行\n不朽{6}{U}（{6}{U}, あなたの墓地からこのカードを追放する：マナ・コストを持たない白のゾンビ・鳥・戦士であることを除きこれのコピーであるトークンを１体生成する。不朽はソーサリーとしてのみ行う。）',
        type: 'クリーチャー — 鳥・戦士',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428090&type=card',
        language: 'Japanese',
        multiverseid: 428090,
      },
      {
        name: '에이븐 입회자',
        text: '비행\n방부처리 {6}{U} ({6}{U}, 이 카드를 당신의 무덤에서 추방한다: 이 카드의 복사본인 토큰 한 개를 만든다. 단, 그 토큰은 마나 비용이 없는 백색 좀비 조류 전사다. 당신이 집중마법을 발동할 수 있는 시기에만 방부처리를 할 수 있다.)',
        type: '생물 — 조류 전사',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428359&type=card',
        language: 'Korean',
        multiverseid: 428359,
      },
      {
        name: 'Iniciado Aviano',
        text: 'Voar\nEmbalsamar {6}{U} ({6}{U}, Exile este card de seu cemitério: Crie uma ficha que seja uma cópia dele, com a exceção de ser um Zumbi Ave Guerreiro branco sem custo de mana. Embalsame somente como um feitiço.)',
        type: 'Criatura — Ave Guerreiro',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428628&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428628,
      },
      {
        name: 'Авен-Послушник',
        text: 'Полет\nБальзамирование {6}{U} ({6}{U}, изгоните эту карту из вашего кладбища: создайте фишку, являющуюся ее копией, но при этом являющуюся белым Зомби Птицей Воином без мана-стоимости. Бальзамируйте только как волшебство.)',
        type: 'Существо — Птица Воин',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428897&type=card',
        language: 'Russian',
        multiverseid: 428897,
      },
      {
        name: '艾文祀徒',
        text: '飞行\n遗存{6}{U}（{6}{U}，从你的坟墓场放逐此牌：派出一个衍生物，且为此牌的复制品，但它是白色灵俑／鸟／战士，且没有法术力费用。遗存的时机视同法术。）',
        type: '生物～鸟／战士',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429166&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429166,
      },
      {
        name: '艾文祀徒',
        text: '飛行\n遺存{6}{U}（{6}{U}，從你的墳墓場放逐此牌：派出一個衍生物，且為此牌的複製品，但它是白色殭屍／鳥／戰士，且沒有魔法力費用。遺存的時機視同巫術。）',
        type: '生物～鳥／戰士',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429435&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429435,
      },
    ],
    printings: ['2X2', 'AKH', 'AKR'],
    originalText:
      "Flying\nEmbalm {6}{U} ({6}{U}, Exile this card from your graveyard: Create a token that's a copy of it, except it's a white Zombie Bird Warrior with no mana cost. Embalm only as a sorcery.)",
    originalType: 'Creature - Bird Warrior',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '82061a2f-26c0-5df1-a0a1-c8e3066db42d',
  },
  {
    name: 'Festering Mummy',
    manaCost: '{B}',
    cmc: 1,
    colors: ['B'],
    colorIdentity: ['B'],
    type: 'Creature — Zombie',
    types: ['Creature'],
    subtypes: ['Zombie'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'When Festering Mummy dies, you may put a -1/-1 counter on target creature.',
    flavor: 'As its parched flesh withers away, its malignant hunger grows.',
    artist: 'Christopher Burdett',
    number: '91',
    power: '1',
    toughness: '1',
    layout: 'normal',
    multiverseid: '426793',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426793&type=card',
    foreignNames: [
      {
        name: 'Eiternde Mumie',
        text: 'Wenn die Eiternde Mumie stirbt, kannst du eine -1/-1-Marke auf eine Kreatur deiner Wahl legen.',
        type: 'Kreatur — Zombie',
        flavor:
          'Ihr unstillbarer Hunger wächst mit jedem Stück verrotteten Fleisches, das von ihr abfällt.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427062&type=card',
        language: 'German',
        multiverseid: 427062,
      },
      {
        name: 'Momia pútrida',
        text: 'Cuando la Momia pútrida muera, puedes poner un contador -1/-1 sobre la criatura objetivo.',
        type: 'Criatura — Zombie',
        flavor:
          'Mientras su carne reseca se marchita, su voracidad maligna aumenta.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427331&type=card',
        language: 'Spanish',
        multiverseid: 427331,
      },
      {
        name: 'Momie pourrissante',
        text: 'Quand la Momie pourrissante meurt, vous pouvez mettre un marqueur -1/-1 sur une créature ciblée.',
        type: 'Créature : zombie',
        flavor:
          "Alors que sa chair desséchée s'étiole, sa faim malveillante s'accroît.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427600&type=card',
        language: 'French',
        multiverseid: 427600,
      },
      {
        name: 'Mummia Putrefatta',
        text: 'Quando la Mummia Putrefatta muore, puoi mettere un segnalino -1/-1 su una creatura bersaglio.',
        type: 'Creatura — Zombie',
        flavor:
          'Mentre la sua carne rinsecchita avvizzisce, cresce in lei una fame maligna.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427869&type=card',
        language: 'Italian',
        multiverseid: 427869,
      },
      {
        name: 'ただれたミイラ',
        text: 'ただれたミイラが死亡したとき、クリーチャー１体を対象とする。あなたはそれの上に－１/－１カウンターを１個置いてもよい。',
        type: 'クリーチャー — ゾンビ',
        flavor: 'その肉体が干からび衰える一方で、凶悪な飢えが増大する。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428138&type=card',
        language: 'Japanese',
        multiverseid: 428138,
      },
      {
        name: '종기 미라',
        text: '종기 미라가 죽을 때, 생물을 목표로 정한다. 당신은 그 생물에 -1/-1 카운터 한 개를 올려놓을 수 있다.',
        type: '생물 — 좀비',
        flavor: '말라붙은 육신이 시들면서 사악한 굶주림은 더 커져 간다.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428407&type=card',
        language: 'Korean',
        multiverseid: 428407,
      },
      {
        name: 'Múmia Pustulenta',
        text: 'Quando Múmia Pustulenta morre, você pode colocar um marcador -1/-1 na criatura alvo.',
        type: 'Criatura — Zumbi',
        flavor: 'Conforme a carne ressecada murcha, sua fome maligna cresce.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428676&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428676,
      },
      {
        name: 'Гниющая Мумия',
        text: 'Когда Гниющая Мумия умирает, вы можете положить один жетон -1/-1 на целевое существо.',
        type: 'Существо — Зомби',
        flavor:
          'Чем меньше остается на костях иссохшей плоти, тем сильнее растет терзающий ее голод.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428945&type=card',
        language: 'Russian',
        multiverseid: 428945,
      },
      {
        name: '溃伤木乃伊',
        text: '当溃伤木乃伊死去时，你可以在目标生物上放置一个-1/-1指示物。',
        type: '生物～灵俑',
        flavor: '身上死肉逐渐剥落，内底恶欲逐渐增长。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429214&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429214,
      },
      {
        name: '潰傷木乃伊',
        text: '當潰傷木乃伊死去時，你可以在目標生物上放置一個-1/-1指示物。',
        type: '生物～殭屍',
        flavor: '身上死肉逐漸剝落，內底惡欲逐漸增長。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429483&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429483,
      },
    ],
    printings: ['AKH', 'AKR'],
    originalText:
      'When Festering Mummy dies, you may put a -1/-1 counter on target creature.',
    originalType: 'Creature - Zombie',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '8d486592-aea9-5693-a2c9-f966a6eb5167',
  },
  {
    name: 'Pathmaker Initiate',
    manaCost: '{1}{R}',
    cmc: 2,
    colors: ['R'],
    colorIdentity: ['R'],
    type: 'Creature — Human Wizard',
    types: ['Creature'],
    subtypes: ['Human', 'Wizard'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: "{T}: Target creature with power 2 or less can't be blocked this turn.",
    flavor: '"The expected way through the trial is far too tedious."',
    artist: 'Josu Hernaiz',
    number: '146',
    power: '2',
    toughness: '1',
    layout: 'normal',
    multiverseid: '426848',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426848&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'If the creature’s power is greater than 2 as the activated ability tries to resolve, the ability won’t resolve and none of its effects will happen. However, if instead the creature’s power is raised above 2 after the ability resolves, it still can’t be blocked that turn.',
      },
    ],
    foreignNames: [
      {
        name: 'Pfadbringer-Geweihter',
        text: '{T}: Eine Kreatur deiner Wahl mit Stärke 2 oder weniger kann in diesem Zug nicht geblockt werden.',
        type: 'Kreatur — Mensch, Zauberer',
        flavor:
          '„Der normale Weg durch die Prüfungen ist mir viel zu anstrengend."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427117&type=card',
        language: 'German',
        multiverseid: 427117,
      },
      {
        name: 'Iniciada abresendas',
        text: '{T}: La criatura objetivo con fuerza de 2 o menos no puede ser bloqueada este turno.',
        type: 'Criatura — Hechicero humano',
        flavor:
          '"El camino que se supone que hay que seguir para superar la prueba es demasiado tedioso".',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427386&type=card',
        language: 'Spanish',
        multiverseid: 427386,
      },
      {
        name: 'Adepte ouvrevoie',
        text: '{T} : La créature ciblée de force inférieure ou égale à 2 ne peut pas être bloquée ce tour-ci.',
        type: 'Créature : humain et sorcier',
        flavor:
          '« Le chemin prévu pour traverser les épreuves est bien trop pénible. »',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427655&type=card',
        language: 'French',
        multiverseid: 427655,
      },
      {
        name: 'Iniziata Aprivarchi',
        text: '{T}: Una creatura bersaglio con forza pari o inferiore a 2 non può essere bloccata in questo turno.',
        type: 'Creatura — Mago Umano',
        flavor:
          '"Il percorso previsto per affrontare l\'ordalia è decisamente monotono."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427924&type=card',
        language: 'Italian',
        multiverseid: 427924,
      },
      {
        name: '道拓きの修練者',
        text: '{T}：パワーが２以下のクリーチャー１体を対象とする。このターン、それはブロックされない。',
        type: 'クリーチャー — 人間・ウィザード',
        flavor: '「予定通りの試練の道など退屈で仕方ない。」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428193&type=card',
        language: 'Japanese',
        multiverseid: 428193,
      },
      {
        name: '경로창조자 입회자',
        text: '{T}: 공격력이 2 이하인 생물을 목표로 정한다. 이번 턴에 그 생물은 방어될 수 없다.',
        type: '생물 — 인간 마법사',
        flavor: '"시험 통과를 위해 예측된 길은 너무나 지루하다."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428462&type=card',
        language: 'Korean',
        multiverseid: 428462,
      },
      {
        name: 'Iniciada Abre-estrada',
        text: '{T}: A criatura alvo com poder igual ou inferior a 2 não pode ser bloqueada neste turno.',
        type: 'Criatura — Humano Mago',
        flavor: '"O caminho previsível para superar a prova é tedioso demais."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428731&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428731,
      },
      {
        name: 'Прокладывающая Путь Послушница',
        text: '{T}: целевое существо с силой 2 или меньше не может быть заблокировано в этом ходу.',
        type: 'Существо — Человек Чародей',
        flavor: '«Обычный путь через испытания слишком уж утомителен».',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429000&type=card',
        language: 'Russian',
        multiverseid: 429000,
      },
      {
        name: '开路祀徒',
        text: '{T}：目标力量等于或小于2的生物本回合不能被阻挡。',
        type: '生物～人类／法术师',
        flavor: '「闯通祀炼的寻常道路太过无趣。」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429269&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429269,
      },
      {
        name: '開路祀徒',
        text: '{T}：目標力量等於或小於2的生物本回合不能被阻擋。',
        type: '生物～人類／魔法師',
        flavor: '「闖通祀煉的尋常道路太過無趣。」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429538&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429538,
      },
    ],
    printings: ['AKH', 'AKR', 'BBD'],
    originalText:
      "{T}: Target creature with power 2 or less can't be blocked this turn.",
    originalType: 'Creature - Human Wizard',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '5f319a58-e0c7-558d-baa4-56c7f1511996',
  },
  {
    name: 'Aven Mindcensor',
    manaCost: '{2}{W}',
    cmc: 3,
    colors: ['W'],
    colorIdentity: ['W'],
    type: 'Creature — Bird Wizard',
    types: ['Creature'],
    subtypes: ['Bird', 'Wizard'],
    rarity: 'Rare',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'Flash\nFlying\nIf an opponent would search a library, that player searches the top four cards of that library instead.',
    flavor:
      '"The only question we need to ask is how best to fulfill the will of the God-Pharaoh."',
    artist: 'Eric Deschamps',
    number: '5',
    power: '2',
    toughness: '1',
    layout: 'normal',
    multiverseid: '426707',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426707&type=card',
    rulings: [
      {
        date: '2021-03-19',
        text: "Each search works exactly the same as normal except that the opponent doing the searching sees only the top four cards of that library. They can't look at the other cards in that library at all. Cards not in the top four cards of the library can't be found in the search, even if they're identifiable in some manner.",
      },
      {
        date: '2021-03-19',
        text: 'For effects that check whether a player searched a library or may search a library, searching the top four cards of that library counts as searching that library.',
      },
      {
        date: '2021-03-19',
        text: "If an effect uses the word “search” once but allows an opponent to search for multiple cards, the top four cards remain the same throughout the entire search. Finding one card won't cause the fifth card to become included in the search.",
      },
      {
        date: '2021-03-19',
        text: 'After the search is complete, the entire library is shuffled.',
      },
    ],
    foreignNames: [
      {
        name: 'Avior-Gedankenzensor',
        text: 'Aufblitzen\nFliegend\nFalls ein Gegner eine Bibliothek durchsuchen würde, durchsucht der Spieler stattdessen die obersten vier Karten jener Bibliothek.',
        type: 'Kreatur — Vogel, Zauberer',
        flavor:
          '„Die einzige Frage, die du dir stellen solltest, ist: Wie diene ich am besten dem Gott-Pharao?"',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426976&type=card',
        language: 'German',
        multiverseid: 426976,
      },
      {
        name: 'Censurador aven',
        text: 'Destello.\nVuela.\nSi un oponente fuera a buscar en una biblioteca, en vez de eso, ese jugador busca en las cuatro primeras cartas de esa biblioteca.',
        type: 'Criatura — Hechicero ave',
        flavor:
          '"Lo único que debemos preguntarnos es cómo podemos cumplir mejor la voluntad del Dios Faraón".',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427245&type=card',
        language: 'Spanish',
        multiverseid: 427245,
      },
      {
        name: 'Cérébrocenseur avemain',
        text: 'Flash\nVol\nSi un adversaire devait chercher dans une bibliothèque, ce joueur cherche dans les quatre cartes du dessus de cette bibliothèque à la place.',
        type: 'Créature : oiseau et sorcier',
        flavor:
          '« La seule question à se poser est de savoir comment accomplir au mieux la volonté du Dieu-Pharaon. »',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427514&type=card',
        language: 'French',
        multiverseid: 427514,
      },
      {
        name: 'Censore Mentale Aviano',
        text: 'Lampo\nVolare\nSe un avversario sta per passare in rassegna un grimorio, quel giocatore passa invece in rassegna le prime quattro carte di quel grimorio.',
        type: 'Creatura — Mago Uccello',
        flavor:
          '"L\'unica domanda da porre è come compiere al meglio la volontà del Dio Faraone."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427783&type=card',
        language: 'Italian',
        multiverseid: 427783,
      },
      {
        name: 'エイヴンの思考検閲者',
        text: '瞬速\n飛行\n対戦相手がライブラリーからカードを探すなら、代わりにそのプレイヤーはそのライブラリーの一番上から４枚のカードの中から探す。',
        type: 'クリーチャー — 鳥・ウィザード',
        flavor:
          '「我らが問うべき唯一のこと、それは王神の意志にお応えするための最上の方法である。」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428052&type=card',
        language: 'Japanese',
        multiverseid: 428052,
      },
      {
        name: '에이븐 정신검열관',
        text: '섬광\n비행\n상대가 서고에서 카드를 찾는 경우, 대신 그 상대는 자신의 서고 맨 위의 카드 네 장에서만 찾는다.',
        type: '생물 — 조류 마법사',
        flavor:
          '"우리는 신 파라오의 의지를 가장 잘 이행하는 방법에 대해서만 생각해야 한다."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428321&type=card',
        language: 'Korean',
        multiverseid: 428321,
      },
      {
        name: 'Mnemocensor Aviano',
        text: 'Lampejo\nVoar\nSe um oponente deveria procurar em um grimório, em vez disso ele deverá procurar nos quatro primeiros cards daquele grimório.',
        type: 'Criatura — Ave Mago',
        flavor:
          '"A única pergunta que precisamos fazer é como melhor executar a vontade do Faraó-Deus."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428590&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428590,
      },
      {
        name: 'Воздушный Блюститель Мыслей',
        text: 'Миг\nПолет\nЕсли оппонент должен искать в библиотеке, тот игрок ищет в четырех верхних картах той библиотеки вместо этого.',
        type: 'Существо — Птица Чародей',
        flavor:
          '«Мы должны задаваться лишь одним вопросом: как наилучшим образом исполнить волю Бога-Фараона».',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428859&type=card',
        language: 'Russian',
        multiverseid: 428859,
      },
      {
        name: '艾文核灵师',
        text: '闪现\n飞行\n如果某对手将搜寻某牌库，则改为他搜寻该牌库顶的四张牌。',
        type: '生物～鸟／法术师',
        flavor: '「我们唯一要问的问题，便是如何彻底执行法老神的旨意。」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429128&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429128,
      },
      {
        name: '艾文核靈師',
        text: '閃現\n飛行\n如果某對手將搜尋某牌庫，則改為他搜尋該牌庫頂的四張牌。',
        type: '生物～鳥／魔法師',
        flavor: '「我們唯一要問的問題，便是如何徹底執行法老神的旨意。」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429397&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429397,
      },
    ],
    printings: ['AKH', 'AKR', 'CLB', 'FUT', 'MP2', 'PAKH', 'PLG21', 'TSR'],
    originalText:
      'Flash\nFlying\nIf an opponent would search a library, that player searches the top four cards of that library instead.',
    originalType: 'Creature - Bird Wizard',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Restricted',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Predh',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: 'c5b49b82-a868-5741-bc75-9210e38a8004',
  },
  {
    name: 'Vizier of Remedies',
    manaCost: '{1}{W}',
    cmc: 2,
    colors: ['W'],
    colorIdentity: ['W'],
    type: 'Creature — Human Cleric',
    types: ['Creature'],
    subtypes: ['Human', 'Cleric'],
    rarity: 'Uncommon',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'If one or more -1/-1 counters would be put on a creature you control, that many -1/-1 counters minus one are put on it instead.',
    flavor: '"You\'ll need all your strength for the trials to come."',
    artist: 'Randy Gallegos',
    number: '38',
    power: '2',
    toughness: '1',
    layout: 'normal',
    multiverseid: '426740',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426740&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: '“Put on a creature you control” includes that creature entering the battlefield with -1/-1 counters on it. If a creature would enter the battlefield under your control with a number of -1/-1 counters on it while you control Vizier of Remedies, it enters with that many counters minus one.',
      },
      {
        date: '2017-04-18',
        text: 'If an effect puts Vizier of Remedies onto the battlefield with one or more -1/-1 counters on it, its effect won’t apply. This is because you must control Vizier of Remedies before the creature begins to enter the battlefield for its effect to apply. The same is true of any creatures entering the battlefield with -1/-1 counters on them at the same time as Vizier of Remedies enters the battlefield.',
      },
      {
        date: '2017-04-18',
        text: 'If a creature you control is dealt damage by a source with wither or infect, that much damage is dealt, but one fewer -1/-1 counter is put on your creature. For example, if a 2/2 creature with lifelink and infect is blocked by Vizier of Remedies, the first creature’s controller gains 2 life and puts one -1/-1 counter on Vizier of Remedies.',
      },
      {
        date: '2017-04-18',
        text: 'If multiple creatures with wither and/or infect deal damage to a creature at once, Vizier of Remedies causes only one counter fewer to be put on that creature. Its effect doesn’t apply separately for each creature dealing damage.',
      },
      {
        date: '2017-04-18',
        text: 'Each additional Vizier of Remedies you control will decrease the number of -1/-1 counters put on a creature by one.',
      },
    ],
    foreignNames: [
      {
        name: 'Wesirin der Heilmittel',
        text: 'Falls eine oder mehrere -1/-1-Marken auf eine Kreatur gelegt würden, die du kontrollierst, werden stattdessen so viele -1/-1-Marken minus einer auf sie gelegt.',
        type: 'Kreatur — Mensch, Kleriker',
        flavor:
          '„Du wirst all deine Kräfte für die anstehenden Prüfungen brauchen."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427009&type=card',
        language: 'German',
        multiverseid: 427009,
      },
      {
        name: 'Visir de los remedios',
        text: 'Si fueran a ponerse uno o más contadores -1/-1 sobre una criatura que controlas, en vez de eso, se pone la misma cantidad de contadores -1/-1 menos uno sobre ella.',
        type: 'Criatura — Clérigo humano',
        flavor: '"Necesitarás todas tus fuerzas para las pruebas que vendrán".',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427278&type=card',
        language: 'Spanish',
        multiverseid: 427278,
      },
      {
        name: 'Vizir des remèdes',
        text: 'Si au moins un marqueur -1/-1 devait être mis sur une créature que vous contrôlez, mettez autant de marqueurs -1/-1 moins un sur elle à la place.',
        type: 'Créature : humain et clerc',
        flavor:
          '« Vous aurez besoin de toutes vos forces pour affronter les épreuves qui vous attendent. »',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427547&type=card',
        language: 'French',
        multiverseid: 427547,
      },
      {
        name: 'Visir dei Medicamenti',
        text: 'Se uno o più segnalini -1/-1 stanno per essere messi su una creatura che controlli, metti invece su quella creatura altrettanti segnalini -1/-1 meno uno.',
        type: 'Creatura — Chierico Umano',
        flavor:
          '"Avrete bisogno di tutte le vostre forze per le ordalie che vi attendono."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427816&type=card',
        language: 'Italian',
        multiverseid: 427816,
      },
      {
        name: '療治の侍臣',
        text: 'あなたがコントロールするクリーチャーの上に－１/－１カウンターが１個以上置かれるなら、代わりに、その数から１を引いた個数の－１/－１カウンターをそれの上に置く。',
        type: 'クリーチャー — 人間・クレリック',
        flavor: '「来るべき試練では全力を尽くさねばならないだろう。」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428085&type=card',
        language: 'Japanese',
        multiverseid: 428085,
      },
      {
        name: '치료의 고관',
        text: '당신이 조종하는 생물에 -1/-1 카운터가 한 개 이상 놓이려고 한다면, 대신에 그 숫자에서 하나를 뺀 만큼의 -1/-1 카운터를 놓는다.',
        type: '생물 — 인간 성직자',
        flavor: '"곧 다가올 시험에 온 힘을 쏟아야 한다."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428354&type=card',
        language: 'Korean',
        multiverseid: 428354,
      },
      {
        name: 'Vizir dos Remédios',
        text: 'Se um ou mais marcadores -1/-1 seriam colocados em uma criatura que você controla, em vez disso, coloque nela aquela quantidade menos um de marcadores -1/-1.',
        type: 'Criatura — Humano Clérigo',
        flavor:
          '"Você precisará de toda a sua força para as provas que virão."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428623&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428623,
      },
      {
        name: 'Визирь Снадобий',
        text: 'Если на существо под вашим контролем должны быть положены один или более жетонов -1/-1, вместо этого на то существо кладется на один жетон -1/-1 меньше.',
        type: 'Существо — Человек Священник',
        flavor: '«В грядущих испытаниях тебе понадобятся все твои силы».',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428892&type=card',
        language: 'Russian',
        multiverseid: 428892,
      },
      {
        name: '缓伤维齐尔',
        text: '如果将会在某个由你操控的生物上放置一个或数个-1/-1指示物，则改为在其上放置该数量减一的-1/-1指示物。',
        type: '生物～人类／僧侣',
        flavor: '「痊愈之后，你才能在未来祀炼中全力以赴。」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429161&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429161,
      },
      {
        name: '緩傷維齊爾',
        text: '如果將會在某個由你操控的生物上放置一個或數個-1/-1指示物，則改為在其上放置該數量減一的-1/-1指示物。',
        type: '生物～人類／僧侶',
        flavor: '「痊癒之後，你才能在未來祀煉中全力以赴。」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429430&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429430,
      },
    ],
    printings: ['AKH', 'AKR'],
    originalText:
      'If one or more -1/-1 counters would be put on a creature you control, that many -1/-1 counters minus one are put on it instead.',
    originalType: 'Creature - Human Cleric',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Restricted',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '77a316ec-bd8a-5c4a-bbf6-20042f1ea6e7',
  },
  {
    name: 'Enigma Drake',
    manaCost: '{1}{U}{R}',
    cmc: 3,
    colors: ['R', 'U'],
    colorIdentity: ['R', 'U'],
    type: 'Creature — Drake',
    types: ['Creature'],
    subtypes: ['Drake'],
    rarity: 'Uncommon',
    set: 'AKH',
    setName: 'Amonkhet',
    text: "Flying\nEnigma Drake's power is equal to the number of instant and sorcery cards in your graveyard.",
    flavor:
      'Many initiates believe it possesses secrets known only to Kefnet himself. Many have become meals trying to learn them.',
    artist: 'Steve Argyle',
    number: '198',
    power: '*',
    toughness: '4',
    layout: 'normal',
    multiverseid: '426900',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426900&type=card',
    rulings: [
      {
        date: '2018-07-13',
        text: 'A split card (such as those featured in the Amonkhet block) only counts once for Enigma Drake’s ability, even if it’s both an instant and a sorcery.',
      },
      {
        date: '2018-07-13',
        text: 'The ability that defines Enigma Drake’s power works in all zones.',
      },
    ],
    foreignNames: [
      {
        name: 'Rätselhafter Sceada',
        text: 'Fliegend\nDie Stärke des Rätselhaften Sceadas ist gleich der Anzahl an Spontanzauber- und Hexerei-Karten in deinem Friedhof.',
        type: 'Kreatur — Sceada',
        flavor:
          'Viele Geweihte glauben, er hüte Geheimnisse, die nur Kefnet selbst kennt. Kefnet weiß, dass dem nicht so ist, begrüßt aber die kostenlosen Fütterungen.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427169&type=card',
        language: 'German',
        multiverseid: 427169,
      },
      {
        name: 'Draco enigma',
        text: 'Vuela.\nLa fuerza del Draco enigma es igual a la cantidad de cartas de instantáneo y de conjuro en tu cementerio.',
        type: 'Criatura — Draco',
        flavor:
          'Muchos iniciados creen que conoce secretos solo al alcance del mismísimo Kefnet. Muchos se convirtieron en comida tratando de averiguarlos.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427438&type=card',
        language: 'Spanish',
        multiverseid: 427438,
      },
      {
        name: 'Drakôn du logogriphe',
        text: "Vol\nLa force du Drakôn du logogriphe est égale au nombre de cartes d'éphémère et de rituel dans votre cimetière.",
        type: 'Créature : drakôn',
        flavor:
          "De nombreux adeptes pensent qu'il détient des secrets connus uniquement de Kefnet. Nombreux sont ceux à lui avoir servi de dîner en essayant de les percer.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427707&type=card',
        language: 'French',
        multiverseid: 427707,
      },
      {
        name: 'Draghetto degli Enigmi',
        text: 'Volare\nLa forza del Draghetto degli Enigmi è pari al numero di carte istantaneo e stregoneria nel tuo cimitero.',
        type: 'Creatura — Draghetto',
        flavor:
          'Numerosi iniziati credono che sia a conoscenza di segreti noti solo a Kefnet. Molti di coloro che hanno tentato di carpirli sono stati trasformati in pasto.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427976&type=card',
        language: 'Italian',
        multiverseid: 427976,
      },
      {
        name: '奇怪なドレイク',
        text: '飛行\n奇怪なドレイクのパワーは、あなたの墓地にあるインスタントかソーサリーであるカードの総数に等しい。',
        type: 'クリーチャー — ドレイク',
        flavor:
          '多くの修練者は、そいつがケフネトのみが知る秘密を保持していると信じている。大勢がそれを知ろうとして餌食となった。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428245&type=card',
        language: 'Japanese',
        multiverseid: 428245,
      },
      {
        name: '수수께끼 드레이크',
        text: '비행\n수수께끼 드레이크의 공격력은 당신의 무덤에 있는 순간마법과 집중마법 카드의 수의 합과 같다.',
        type: '생물 — 드레이크',
        flavor:
          '많은 입회자들은 이 드레이크가 케프넷만 알고 있는 비밀을 가지고 있다고 믿는다. 하지만 대부분 이 비밀을 알아내려다 먹잇감이 되었다.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428514&type=card',
        language: 'Korean',
        multiverseid: 428514,
      },
      {
        name: 'Dragonete dos Enigmas',
        text: 'Voar\nO poder de Dragonete dos Enigmas é igual ao número de cards de mágica instantânea e feitiço em seu cemitério.',
        type: 'Criatura — Dragonete',
        flavor:
          'Muitos iniciados creem que ele possui segredos conhecidos apenas pelo próprio Kefnet. Muitos viraram refeição tentando descobri-los.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428783&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428783,
      },
      {
        name: 'Дрейк Загадок',
        text: 'Полет\nСила Дрейка Загадок равна количеству карт мгновенных заклинаний и волшебства на вашем кладбище.',
        type: 'Существо — Дрейк',
        flavor:
          'Многие послушники думают, что он хранит тайны, которые ведомы лишь самому Кефнету. Многие стали его пищей, пытаясь их выведать.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429052&type=card',
        language: 'Russian',
        multiverseid: 429052,
      },
      {
        name: '谜翼龙兽',
        text: '飞行\n谜翼龙兽的力量等同于你坟墓场中瞬间与法术牌的数量加总。',
        type: '生物～龙兽',
        flavor:
          '祀徒相信它身上藏有刻法涅本尊才知晓的秘密。但大多数想要解开秘密的人都成了它的盘中餐。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429321&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429321,
      },
      {
        name: '謎翼龍獸',
        text: '飛行\n謎翼龍獸的力量等同於你墳墓場中瞬間與巫術牌的數量加總。',
        type: '生物～龍獸',
        flavor:
          '祀徒相信牠身上藏有刻法涅本尊才知曉的祕密。但大多數想要解開祕密的人都成了牠的盤中餐。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429590&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429590,
      },
    ],
    printings: ['AKH', 'AKR', 'M19'],
    originalText:
      "Flying\nEnigma Drake's power is equal to the number of instant and sorcery cards in your graveyard.",
    originalType: 'Creature - Drake',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Restricted',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '4c94dd1a-dff7-54d6-8693-fa88cf57798f',
  },
  {
    name: 'Tah-Crop Skirmisher',
    manaCost: '{1}{U}',
    cmc: 2,
    colors: ['U'],
    colorIdentity: ['U'],
    type: 'Creature — Naga Warrior',
    types: ['Creature'],
    subtypes: ['Naga', 'Warrior'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: "Embalm {3}{U} ({3}{U}, Exile this card from your graveyard: Create a token that's a copy of it, except it's a white Zombie Naga Warrior with no mana cost. Embalm only as a sorcery.)",
    flavor:
      'Initiates live and train with their crop, the unit that begins the trials together.',
    artist: 'Victor Adame Minguez',
    number: '72',
    power: '2',
    toughness: '1',
    layout: 'normal',
    multiverseid: '426774',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426774&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'The token is a Zombie in addition to its other types and is white instead of its other colors. It has no mana cost, and thus its converted mana cost is 0. These are copiable values of the token that other effects may copy.',
      },
      {
        date: '2017-04-18',
        text: 'For each card with embalm, a corresponding game play supplement token can be found in some Amonkhet booster packs. These supplements are not required to play with cards with embalm; you can use the same items to represent an embalmed token as you would any other token.',
      },
      {
        date: '2017-04-18',
        text: 'The token copies exactly what was printed on the original card and nothing else. It doesn’t copy any information about the object the card was before it was put into your graveyard.',
      },
      {
        date: '2017-07-14',
        text: 'If a spell or ability puts a creature card with embalm into your graveyard during your main phase, you’ll have priority immediately after that spell or ability resolves. You can activate the creature card’s embalm ability before any player can exile it with an effect, such as that of Crook of Condemnation, if it’s legal for you to do so.',
      },
      {
        date: '2017-07-14',
        text: 'Once you’ve activated an embalm ability, the card is immediately exiled. Opponents can’t try to stop the ability by exiling the card with an effect such as that of Crook of Condemnatnion.',
      },
    ],
    foreignNames: [
      {
        name: 'Plänklerin der Tah-Saat',
        text: 'Einbalsamieren {3}{U} ({3}{U}, schicke diese Karte aus deinem Friedhof ins Exil: Erzeuge einen Spielstein, der eine Kopie von ihr ist, außer dass er ein weißer Zombie-Naga-Krieger ohne Manakosten ist. Spiele Einbalsamieren wie eine Hexerei.)',
        type: 'Kreatur — Naga, Krieger',
        flavor:
          'Jeder Geweihte lebt und trainiert mit seiner Saat, mit der er später die Prüfungen ablegt.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427043&type=card',
        language: 'German',
        multiverseid: 427043,
      },
      {
        name: 'Escaramuzadora de la simiente Tah',
        text: 'Embalsamar {3}{U}. ({3}{U}, exiliar esta carta de tu cementerio: Crea una ficha que es una copia de esta carta, excepto que es un Guerrero Naga Zombie blanco sin coste de maná. Activa la habilidad de embalsamar solo como un conjuro.)',
        type: 'Criatura — Guerrero naga',
        flavor:
          'Los iniciados viven y entrenan con su simiente, la unidad que comienza unida las pruebas.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427312&type=card',
        language: 'Spanish',
        multiverseid: 427312,
      },
      {
        name: 'Assaillante de la moisson Tah',
        text: "Embaumement {3}{U} ({3}{U}, exilez cette carte de votre cimetière : Créez un jeton qui en est une copie, excepté que c'est un zombie et naga et guerrier blanc sans coût de mana. N'utilisez l'embaumement que lorsque vous pourriez lancer un rituel.)",
        type: 'Créature : naga et guerrier',
        flavor:
          "Les adeptes vivent et s'entraînent avec leur moisson et commencent les épreuves en groupe.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427581&type=card',
        language: 'French',
        multiverseid: 427581,
      },
      {
        name: 'Esploratrice della Messe Tah',
        text: 'Imbalsamare {3}{U} ({3}{U}, Esilia questa carta dal tuo cimitero: Crea una pedina che è una copia della carta, tranne che è un Guerriero Naga Zombie bianco senza costo di mana. Imbalsama solo quando potresti lanciare una stregoneria.)',
        type: 'Creatura — Guerriero Naga',
        flavor:
          "Gli iniziati vivono e si addestrano con la loro messe, l'unità con cui cominciano ad affrontare le ordalie.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427850&type=card',
        language: 'Italian',
        multiverseid: 427850,
      },
      {
        name: 'ター一門の散兵',
        text: '不朽{3}{U}（{3}{U}, あなたの墓地からこのカードを追放する：マナ・コストを持たない白のゾンビ・ナーガ・戦士であることを除きこれのコピーであるトークンを１体生成する。不朽はソーサリーとしてのみ行う。）',
        type: 'クリーチャー — ナーガ・戦士',
        flavor:
          '修練者は一門で生活し訓練する。それが試練を共に始める仲間なのだ。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428119&type=card',
        language: 'Japanese',
        multiverseid: 428119,
      },
      {
        name: '타 입문자 척후병',
        text: '방부처리 {3}{U} ({3}{U}, 이 카드를 당신의 무덤에서 추방한다: 이 카드의 복사본인 토큰 한 개를 만든다. 단, 그 토큰은 마나 비용이 없는 백색 좀비 나가 전사다. 당신이 집중마법을 발동할 수 있는 시기에만 방부처리를 할 수 있다.)',
        type: '생물 — 나가 전사',
        flavor:
          '입회자들은 함께 시험을 시작하는 입문자와 같이 생활하고 수련한다.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428388&type=card',
        language: 'Korean',
        multiverseid: 428388,
      },
      {
        name: 'Escaramuçadora da Safra Tah',
        text: 'Embalsamar {3}{U} ({3}{U}, Exile este card de seu cemitério: Crie uma ficha que seja uma cópia dele, com a exceção de ser um Zumbi Naga Guerreiro branco sem custo de mana. Embalsame somente como um feitiço.)',
        type: 'Criatura — Naga Guerreiro',
        flavor:
          'Os iniciados vivem e treinam com sua safra, a unidade com a qual iniciam as provas.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428657&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428657,
      },
      {
        name: 'Боец Снопа Тах',
        text: 'Бальзамирование {3}{U} ({3}{U}, изгоните эту карту из вашего кладбища: создайте фишку, являющуюся ее копией, но при этом являющуюся белым Зомби Нагой Воином без мана-стоимости. Бальзамируйте только как волшебство.)',
        type: 'Существо — Нага Воин',
        flavor:
          'Послушники живут и упражняются вместе со своим снопом — группой, начавшей испытания вместе.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428926&type=card',
        language: 'Russian',
        multiverseid: 428926,
      },
      {
        name: '塔哈祀群侦卫',
        text: '遗存{3}{U}（{3}{U}，从你的坟墓场放逐此牌：派出一个衍生物，且为此牌的复制品，但它是白色灵俑／那伽／战士，且没有法术力费用。遗存的时机视同法术。）',
        type: '生物～那伽／战士',
        flavor:
          '一同踏上祀炼征途的人组成祀群，祀徒会跟自己的祀群一起生活、训练。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429195&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429195,
      },
      {
        name: '塔哈祀群偵衛',
        text: '遺存{3}{U}（{3}{U}，從你的墳墓場放逐此牌：派出一個衍生物，且為此牌的複製品，但它是白色殭屍／那伽／戰士，且沒有魔法力費用。遺存的時機視同巫術。）',
        type: '生物～那伽／戰士',
        flavor:
          '一同踏上祀煉征途的人組成祀群，祀徒會跟自己的祀群一起生活、訓練。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429464&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429464,
      },
    ],
    printings: ['AKH'],
    originalText:
      "Embalm {3}{U} ({3}{U}, Exile this card from your graveyard: Create a token that's a copy of it, except it's a white Zombie Naga Warrior with no mana cost. Embalm only as a sorcery.)",
    originalType: 'Creature - Naga Warrior',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '52f64f13-6a66-5631-a80b-b5de2f26340c',
  },
  {
    name: 'Hyena Pack',
    manaCost: '{2}{R}{R}',
    cmc: 4,
    colors: ['R'],
    colorIdentity: ['R'],
    type: 'Creature — Hyena',
    types: ['Creature'],
    subtypes: ['Hyena'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    flavor:
      'With carrion a rarity in the Broken Lands, the hyenas that stalk the deserts hunt in packs.',
    artist: 'Winona Nelson',
    number: '139',
    power: '3',
    toughness: '4',
    layout: 'normal',
    multiverseid: '426841',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426841&type=card',
    foreignNames: [
      {
        name: 'Hyänenrudel',
        type: 'Kreatur — Hyäne',
        flavor:
          'Aas ist in der Splitterwüste so selten, dass selbst die Hyänen anfangen, auf die Jagd zu gehen.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427110&type=card',
        language: 'German',
        multiverseid: 427110,
      },
      {
        name: 'Manada de hienas',
        type: 'Criatura — Hiena',
        flavor:
          'La carroña no abunda en las Tierras Desoladas, por lo que las hienas que acechan en los desiertos cazan en manadas.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427379&type=card',
        language: 'Spanish',
        multiverseid: 427379,
      },
      {
        name: 'Meute de hyènes',
        type: 'Créature : hyène',
        flavor:
          "Les charognes sont rares dans les Terres brisées, c'est pourquoi les hyènes qui arpentent le désert chassent en meute.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427648&type=card',
        language: 'French',
        multiverseid: 427648,
      },
      {
        name: 'Branco di Iene',
        type: 'Creatura — Iena',
        flavor:
          'Poiché le carogne scarseggiano nelle Terre spezzate, le iene che si aggirano per i deserti cacciano in branco.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427917&type=card',
        language: 'Italian',
        multiverseid: 427917,
      },
      {
        name: 'ハイエナの群れ',
        type: 'クリーチャー — ハイエナ',
        flavor: '遺棄地に稀有なる屍肉あらば、砂漠に群れ成すハイエナあり。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428186&type=card',
        language: 'Japanese',
        multiverseid: 428186,
      },
      {
        name: '하이에나 무리',
        type: '생물 — 하이에나',
        flavor:
          '시체를 찾기 어려운 망가진 땅에서는 사막을 배회하는 하이에나들이 무리를 지어 사냥한다.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428455&type=card',
        language: 'Korean',
        multiverseid: 428455,
      },
      {
        name: 'Alcateia de Hienas',
        type: 'Criatura — Hiena',
        flavor:
          'Como carcaças são uma raridade nas Terras Partidas, as hienas que espreitam nos desertos caçam em bando.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428724&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428724,
      },
      {
        name: 'Стая Гиен',
        type: 'Существо — Гиена',
        flavor:
          'Падаль редко встречается в Смятенных Землях, и живущие в пустыне гиены сбиваются для охоты в стаи.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428993&type=card',
        language: 'Russian',
        multiverseid: 428993,
      },
      {
        name: '鬣狗群',
        type: '生物～鬣狗',
        flavor: '荒土中腐肉稀缺，于沙漠中游荡的鬣狗常常成群狩猎。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429262&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429262,
      },
      {
        name: '鬣狗群',
        type: '生物～鬣狗',
        flavor: '荒土中腐肉稀缺，於沙漠中遊蕩的鬣狗常常成群狩獵。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429531&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429531,
      },
    ],
    printings: ['AKH', 'MB1'],
    originalType: 'Creature - Hyena',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '5a9e9993-1216-55cf-9c6d-ac6412009469',
  },
  {
    name: 'Quarry Hauler',
    manaCost: '{3}{G}',
    cmc: 4,
    colors: ['G'],
    colorIdentity: ['G'],
    type: 'Creature — Camel',
    types: ['Creature'],
    subtypes: ['Camel'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'When Quarry Hauler enters the battlefield, for each kind of counter on target permanent, put another counter of that kind on it or remove one from it.',
    flavor:
      'They labor beside the anointed, constructing the vast monuments of Naktamun.',
    artist: 'David Gaillet',
    number: '181',
    power: '4',
    toughness: '3',
    layout: 'normal',
    multiverseid: '426883',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426883&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'You don’t have to make the same choice for each kind of counter. For example, if a Gideon planeswalker has two loyalty counters and three -1/-1 counters on it, you can put another loyalty counter on it and remove a -1/-1 counter from it.',
      },
    ],
    foreignNames: [
      {
        name: 'Steinbruch-Schlepper',
        text: 'Wenn der Steinbruch-Schlepper ins Spiel kommt, erhält eine bleibende Karte deiner Wahl für jede Sorte von Marke, die auf ihr liegt, eine weitere Marke dieser Sorte oder eine Marke dieser Sorte wird von ihr entfernt.',
        type: 'Kreatur — Kamel',
        flavor:
          'Sie arbeiten Seite an Seite mit den Gesalbten, um die gigantischen Monumente Naktamuns zu errichten.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427152&type=card',
        language: 'German',
        multiverseid: 427152,
      },
      {
        name: 'Porteador de la cantera',
        text: 'Cuando el Porteador de la cantera entre al campo de batalla, por cada tipo de contador sobre el permanente objetivo, pon otro contador de ese tipo sobre él o remueve uno de él.',
        type: 'Criatura — Camello',
        flavor:
          'Su labor junto a los ungidos es la de construir los descomunales monumentos de Naktamun.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427421&type=card',
        language: 'Spanish',
        multiverseid: 427421,
      },
      {
        name: 'Transporteur des carrières',
        text: 'Quand le Transporteur des carrières arrive sur le champ de bataille, pour chaque type de marqueur sur le permanent ciblé, mettez un autre marqueur de ce type sur lui ou retirez-lui en un.',
        type: 'Créature : chameau',
        flavor:
          'Il travaille aux côtés de ceux qui ont été consacrés, érigeant les impressionnants monuments de Naktamon.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427690&type=card',
        language: 'French',
        multiverseid: 427690,
      },
      {
        name: 'Bestia da Carico della Cava',
        text: 'Quando la Bestia da Carico della Cava entra nel campo di battaglia, per ogni tipo di segnalino su un permanente bersaglio, metti un altro segnalino di quel tipo su di esso o rimuovine uno da esso.',
        type: 'Creatura — Cammello',
        flavor:
          'Lavorano a fianco dei consacrati per costruire i grandiosi monumenti di Naktamun.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427959&type=card',
        language: 'Italian',
        multiverseid: 427959,
      },
      {
        name: '採石場の運び屋',
        text: '採石場の運び屋が戦場に出たとき、パーマネント１つを対象とし、それの上に置かれているカウンター１種類につきそれぞれ、その種類のカウンターをそれの上にもう１個置くかそれの上から１個取り除く。',
        type: 'クリーチャー — ラクダ',
        flavor: '選定された者とともに働き、ナクタムンの巨大な碑を築く。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428228&type=card',
        language: 'Japanese',
        multiverseid: 428228,
      },
      {
        name: '채석장 운반꾼',
        text: '채석장 운반꾼이 전장에 들어올 때, 지속물을 목표로 정한다. 그 지속물에 놓여 있는 각 카운터 종류 하나당, 그 지속물에 같은 종류의 카운터 한 개를 올려놓거나 카운터 한 개를 제거한다.',
        type: '생물 — 낙타',
        flavor:
          '낙타들은 세례받은 자들 옆에서 일하며 나크타문의 방대한 기념비들을 건설한다.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428497&type=card',
        language: 'Korean',
        multiverseid: 428497,
      },
      {
        name: 'Carregador da Pedreira',
        text: 'Quando Carregador da Pedreira entrar no campo de batalha, para cada tipo de marcador na permanente alvo, coloque nela outro marcador daquele tipo ou remova um.',
        type: 'Criatura — Camelo',
        flavor:
          'Eles trabalham ao lado dos ungidos, construindo os vastos monumentos de Nactamon.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428766&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428766,
      },
      {
        name: 'Тяжеловоз с Каменоломни',
        text: 'Когда Тяжеловоз с Каменоломни выходит на поле битвы, за каждый вид жетонов на целевом перманенте положите на него еще один жетон такого вида или удалите с него один такой жетон.',
        type: 'Существо — Верблюд',
        flavor:
          'Они трудятся вместе с умащенными, возводя колоссальные монументы Нактамуна.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429035&type=card',
        language: 'Russian',
        multiverseid: 429035,
      },
      {
        name: '驮石骆驼',
        text: '当驮石骆驼进战场时，对目标永久物上每种指示物而言，在其上放置另一个该种类的指示物或从其上移去一个该种类的指示物。',
        type: '生物～骆驼',
        flavor:
          '拿塔蒙各处庞大纪念碑的建筑工地上，都有它们与圣洗者的劳作身影。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429304&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429304,
      },
      {
        name: '馱石駱駝',
        text: '當馱石駱駝進戰場時，對目標永久物上每種指示物而言，在其上放置另一個該種類的指示物或從其上移去一個該種類的指示物。',
        type: '生物～駱駝',
        flavor:
          '拿塔蒙各處龐大紀念碑的建築工地上，都有牠們與聖洗者的勞作身影。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429573&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429573,
      },
    ],
    printings: ['AKH', 'AKR'],
    originalText:
      'When Quarry Hauler enters the battlefield, for each kind of counter on target permanent, put another counter of that kind on it or remove one from it.',
    originalType: 'Creature - Camel',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '2deccebb-9105-53ec-8e30-39a0fcab837a',
  },
  {
    name: 'Companion of the Trials',
    manaCost: '{2}{W}',
    cmc: 3,
    colors: ['W'],
    colorIdentity: ['W'],
    type: 'Creature — Bird Soldier',
    types: ['Creature'],
    subtypes: ['Bird', 'Soldier'],
    rarity: 'Uncommon',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'Flying\n{1}{W}: Untap target creature. Activate only if you control a Gideon planeswalker.',
    flavor: '"The fiercest loyalties are earned in battle."\n—Gideon Jura',
    artist: 'Aaron Miller',
    number: '271',
    power: '2',
    toughness: '2',
    layout: 'normal',
    multiverseid: '429663',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429663&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'Untapping an attacking creature doesn’t remove it from combat.',
      },
    ],
    foreignNames: [
      {
        name: 'Gefährtin des Geprüften',
        text: 'Fliegend\n{1}{W}: Enttappe eine Kreatur deiner Wahl. Aktiviere diese Fähigkeit nur, falls du einen Gideon-Planeswalker kontrollierst.',
        type: 'Kreatur — Vogel, Soldat',
        flavor:
          '„Die stärksten Bande werden im Kampf geschmiedet." —Gideon Jura',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429717&type=card',
        language: 'German',
        multiverseid: 429717,
      },
      {
        name: 'Compañera de las pruebas',
        text: 'Vuela.\n{1}{W}: Endereza la criatura objetivo. Activa esta habilidad solo si controlas un planeswalker Gideon.',
        type: 'Criatura — Soldado ave',
        flavor:
          '"La lealtad más ferviente se forja en la batalla". —Gideon Jura',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429843&type=card',
        language: 'Spanish',
        multiverseid: 429843,
      },
      {
        name: 'Compagnon des Épreuves',
        text: "Vol\n{1}{W} : Dégagez la créature ciblée. N'activez cette capacité que si vous contrôlez un planeswalker Gideon.",
        type: 'Créature : oiseau et soldat',
        flavor:
          '« Les loyautés les plus indéfectibles se forgent au combat. » —Gideon Jura',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429735&type=card',
        language: 'French',
        multiverseid: 429735,
      },
      {
        name: 'Compagna delle Ordalie',
        text: 'Volare\n{1}{W}: STAPpa una creatura bersaglio. Attiva questa abilità solo se controlli un planeswalker Gideon.',
        type: 'Creatura — Soldato Uccello',
        flavor:
          '"La lealtà più agguerrita si forgia in battaglia." —Gideon Jura',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429753&type=card',
        language: 'Italian',
        multiverseid: 429753,
      },
      {
        name: '試練の相棒',
        text: '飛行\n{1}{W}：クリーチャー１体を対象とし、それをアンタップする。この能力は、あなたがギデオン・プレインズウォーカーをコントロールしているときにのみ起動できる。',
        type: 'クリーチャー — 鳥・兵士',
        flavor: '「最上の忠誠心は戦いの中で生まれる。」 ――ギデオン・ジュラ',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429771&type=card',
        language: 'Japanese',
        multiverseid: 429771,
      },
      {
        name: '시험의 동료',
        text: '비행\n{1}{W}: 생물을 목표로 정한다. 그 생물을 언탭한다. 이 능력은 당신이 기디온 플레인즈워커를 조종할 때에만 활성화할 수 있다.',
        type: '생물 — 조류 병사',
        flavor: '"가장 강렬한 충성심은 전투를 통해 생겨난다." —기디온 주라',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429789&type=card',
        language: 'Korean',
        multiverseid: 429789,
      },
      {
        name: 'Companheira das Provas',
        text: 'Voar\n{1}{W}: Desvire a criatura alvo. Ative esta habilidade somente se você controlar um planeswalker Gideon.',
        type: 'Criatura — Ave Soldado',
        flavor:
          '"As lealdades mais ferrenhas são conquistadas em batalha." — Gideon Jura',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429807&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 429807,
      },
      {
        name: 'Спутница в Испытаниях',
        text: 'Полет\n{1}{W}: разверните целевое существо. Активируйте эту способность, только если вы контролируете planeswalker-а Гидеона.',
        type: 'Существо — Птица Солдат',
        flavor: '«Самая крепкая верность рождается в битве». — Гидеон Джура',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429825&type=card',
        language: 'Russian',
        multiverseid: 429825,
      },
      {
        name: '祀炼旅伴',
        text: '飞行\n {1}{W}：重置目标生物。只能于你操控基定鹏洛客时起动此异能。',
        type: '生物～鸟／士兵',
        flavor: '「苦战见忠诚。」 ～基定尤拉',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429681&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429681,
      },
      {
        name: '祀煉旅伴',
        text: '飛行\n{1}{W}：重置目標生物。只能於你操控基定鵬洛客時起動此異能。',
        type: '生物～鳥／士兵',
        flavor: '「苦戰見忠誠。」 ～基定尤拉',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429699&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429699,
      },
    ],
    printings: ['AKH'],
    originalText:
      'Flying\n{1}{W}: Untap target creature. Activate this ability only if you control a Gideon planeswalker.',
    originalType: 'Creature — Bird Soldier',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Restricted',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: 'fffa4546-e7ac-5291-b878-2e66ea1b1dfa',
  },
  {
    name: 'Vizier of Deferment',
    manaCost: '{2}{W}',
    cmc: 3,
    colors: ['W'],
    colorIdentity: ['W'],
    type: 'Creature — Human Cleric',
    types: ['Creature'],
    subtypes: ['Human', 'Cleric'],
    rarity: 'Uncommon',
    set: 'AKH',
    setName: 'Amonkhet',
    text: "Flash\nWhen Vizier of Deferment enters the battlefield, you may exile target creature if it attacked or blocked this turn. Return that card to the battlefield under its owner's control at the beginning of the next end step.",
    artist: 'Deruchenko Alexander',
    number: '37',
    power: '2',
    toughness: '2',
    layout: 'normal',
    multiverseid: '426739',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426739&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'Vizier of Deferment’s triggered ability can target any creature, but it will affect a creature only if that creature was declared as an attacker or blocker this turn, whether you cast Vizier of Deferment during combat or later in the turn. Notably, the ability won’t affect a creature that entered the battlefield attacking or blocking.',
      },
      {
        date: '2017-04-18',
        text: 'After the target creature returns to the battlefield, it will be a new object with no connection to the creature that was exiled. It won’t be in combat or have any additional abilities it may have had when it was exiled. Any counters on it or Auras attached to it are removed, and any Equipment will no longer be attached.',
      },
      {
        date: '2017-04-18',
        text: 'A token creature exiled this way won’t return to the battlefield.',
      },
    ],
    foreignNames: [
      {
        name: 'Wesirin des Aufschubs',
        text: 'Aufblitzen\nWenn die Wesirin des Aufschubs ins Spiel kommt, kannst du eine Kreatur deiner Wahl, die in diesem Zug angegriffen oder geblockt hat, ins Exil schicken. Bringe jene Karte zu Beginn des nächsten Endsegments unter der Kontrolle ihres Besitzers ins Spiel zurück.',
        type: 'Kreatur — Mensch, Kleriker',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427008&type=card',
        language: 'German',
        multiverseid: 427008,
      },
      {
        name: 'Visir de la postergación',
        text: 'Destello.\nCuando la Visir de la postergación entre al campo de batalla, puedes exiliar la criatura objetivo si atacó o bloqueó este turno. Regresa esa carta al campo de batalla bajo el control de su propietario al comienzo del próximo paso final.',
        type: 'Criatura — Clérigo humano',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427277&type=card',
        language: 'Spanish',
        multiverseid: 427277,
      },
      {
        name: 'Vizir de sursis',
        text: 'Flash\nQuand le Vizir de sursis arrive sur le champ de bataille, vous pouvez exiler une créature ciblée si elle a attaqué ou bloqué ce tour-ci. Renvoyez cette carte sur le champ de bataille sous le contrôle de son propriétaire au début de la prochaine étape de fin.',
        type: 'Créature : humain et clerc',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427546&type=card',
        language: 'French',
        multiverseid: 427546,
      },
      {
        name: 'Visir della Dilazione',
        text: "Lampo\nQuando la Visir della Dilazione entra nel campo di battaglia, puoi esiliare una creatura bersaglio se ha attaccato o bloccato in questo turno. Rimetti sul campo di battaglia quella carta sotto il controllo del suo proprietario all'inizio della prossima sottofase finale.",
        type: 'Creatura — Chierico Umano',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427815&type=card',
        language: 'Italian',
        multiverseid: 427815,
      },
      {
        name: '猶予の侍臣',
        text: '瞬速\n猶予の侍臣が戦場に出たとき、クリーチャー１体を対象とする。このターンにそれが攻撃していたかブロックしていたなら、あなたはそれを追放してもよい。次の終了ステップの開始時に、そのカードをオーナーのコントロール下で戦場に戻す。',
        type: 'クリーチャー — 人間・クレリック',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428084&type=card',
        language: 'Japanese',
        multiverseid: 428084,
      },
      {
        name: '유예의 고관',
        text: '섬광\n유예의 고관이 전장에 들어올 때, 생물을 목표로 정한다. 이 턴에 그 생물이 공격하거나 방어했다면, 당신은 그 생물을 추방할 수 있다. 다음 종료단 시작에 그렇게 추방된 카드를 소유자의 조종하에 전장으로 되돌린다.',
        type: '생물 — 인간 성직자',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428353&type=card',
        language: 'Korean',
        multiverseid: 428353,
      },
      {
        name: 'Vizir do Diferimento',
        text: 'Lampejo\nQuando Vizir do Diferimento entra no campo de batalha, você pode exilar a criatura alvo se ela atacou ou bloqueou neste turno. Devolva aquele card ao campo de batalha sob o controle de seu dono no início da próxima etapa final.',
        type: 'Criatura — Humano Clérigo',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428622&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428622,
      },
      {
        name: 'Визирь Отсрочки',
        text: 'Миг\nКогда Визирь Отсрочки выходит на поле битвы, вы можете изгнать целевое существо, если оно атаковало или блокировало в этом ходу. Верните ту карту на поле битвы под контролем ее владельца в начале следующего заключительного шага.',
        type: 'Существо — Человек Священник',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428891&type=card',
        language: 'Russian',
        multiverseid: 428891,
      },
      {
        name: '退敌维齐尔',
        text: '闪现\n当退敌维齐尔进战场时，如果目标生物本回合曾进行攻击或阻挡，你可以放逐该生物。在下一个结束步骤开始时，将所放逐的牌在其拥有者的操控下返回战场。',
        type: '生物～人类／僧侣',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429160&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429160,
      },
      {
        name: '退敵維齊爾',
        text: '閃現\n當退敵維齊爾進戰場時，如果目標生物本回合曾進行攻擊或阻擋，你可以放逐該生物。在下一個結束步驟開始時，將所放逐的牌在其擁有者的操控下返回戰場。',
        type: '生物～人類／僧侶',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429429&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429429,
      },
    ],
    printings: ['AKH', 'AKR'],
    originalText:
      "Flash\nWhen Vizier of Deferment enters the battlefield, you may exile target creature if it attacked or blocked this turn. Return that card to the battlefield under its owner's control at the beginning of the next end step.",
    originalType: 'Creature - Human Cleric',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Restricted',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '9233e310-1c11-5d02-8125-e6d89e8bcbec',
  },
  {
    name: 'Bone Picker',
    manaCost: '{3}{B}',
    cmc: 4,
    colors: ['B'],
    colorIdentity: ['B'],
    type: 'Creature — Bird',
    types: ['Creature'],
    subtypes: ['Bird'],
    rarity: 'Uncommon',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'This spell costs {3} less to cast if a creature died this turn.\nFlying, deathtouch',
    flavor:
      'They are the first to greet dissenters on their journey into exile.',
    artist: 'Yeong-Hao Han',
    number: '81',
    power: '3',
    toughness: '2',
    layout: 'normal',
    multiverseid: '426783',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426783&type=card',
    rulings: [
      {
        date: '2020-08-07',
        text: "In a multiplayer game, a player may lose the game at the same time that their creatures die. If so, Bone Picker's cost reduction applies.",
      },
    ],
    foreignNames: [
      {
        name: 'Knochenpicker',
        text: 'Der Knochenpicker kostet beim Wirken {3} weniger, falls in diesem Zug eine Kreatur gestorben ist.\nFliegend, Todesberührung',
        type: 'Kreatur — Vogel',
        flavor:
          'Sie sind das Begrüßungskomitee, das jeden Abtrünnigen auf seinem Weg ins Exil empfängt.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427052&type=card',
        language: 'German',
        multiverseid: 427052,
      },
      {
        name: 'Buscadespojos',
        text: 'Te cuesta {3} menos lanzar el Buscadespojos si una criatura murió este turno.\nVuela, toque mortal.',
        type: 'Criatura — Ave',
        flavor:
          'Son los primeros en dar la bienvenida a los disidentes en su camino al exilio.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427321&type=card',
        language: 'Spanish',
        multiverseid: 427321,
      },
      {
        name: "Glaneur d'os",
        text: "Le Glaneur d'os coûte {3} de moins à lancer si une créature est morte ce tour-ci.\nVol, contact mortel",
        type: 'Créature : oiseau',
        flavor:
          "Ils sont les premiers à accueillir les dissidents sur la route de l'exil.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427590&type=card',
        language: 'French',
        multiverseid: 427590,
      },
      {
        name: 'Spolpaossa',
        text: 'Lo Spolpaossa costa {3} in meno per essere lanciato se è morta una creatura in questo turno.\nVolare, tocco letale',
        type: 'Creatura — Uccello',
        flavor:
          "Sono i primi ad accogliere i dissenzienti in viaggio verso l'esilio.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427859&type=card',
        language: 'Italian',
        multiverseid: 427859,
      },
      {
        name: 'ホネツツキ',
        text: 'このターンにクリーチャーが死亡していたなら、ホネツツキを唱えるためのコストは{3}少なくなる。\n飛行、接死',
        type: 'クリーチャー — 鳥',
        flavor: '流刑地への旅で造反者を最初に出迎えるのはホネツツキだ。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428128&type=card',
        language: 'Japanese',
        multiverseid: 428128,
      },
      {
        name: '뼈 청소부',
        text: '이 턴에 생물이 죽었다면, 뼈 청소부의 발동 비용이 {3} 감소한다.\n비행, 치명타',
        type: '생물 — 조류',
        flavor: '이 놈들이 추방된 반대자들을 가장 먼저 맞아준다.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428397&type=card',
        language: 'Korean',
        multiverseid: 428397,
      },
      {
        name: 'Pega-ossos',
        text: 'Pega-ossos custa {3} a menos para ser conjurado se uma criatura morreu neste turno.\nVoar, toque mortífero',
        type: 'Criatura — Ave',
        flavor:
          'Eles são os primeiros a receber os dissidentes em sua jornada para o exílio.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428666&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428666,
      },
      {
        name: 'Трупоед',
        text: 'Разыгрывание Трупоеда стоит на {3} меньше, если в этом ходу умерло существо.\nПолет, Смертельное касание',
        type: 'Существо — Птица',
        flavor: 'Они первыми встречают инакомыслящих на пути в изгнание.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428935&type=card',
        language: 'Russian',
        multiverseid: 428935,
      },
      {
        name: '食骨鸟',
        text: '如果本回合有生物死去，则食骨鸟减少{3}来施放。\n飞行，死触',
        type: '生物～鸟',
        flavor: '它们是逆徒在流放路途中的首批访客。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429204&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429204,
      },
      {
        name: '食骨鳥',
        text: '如果本回合有生物死去，則食骨鳥減少{3}來施放。\n飛行，死觸',
        type: '生物～鳥',
        flavor: '牠們是逆徒在流放路途中的首批訪客。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429473&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429473,
      },
    ],
    printings: ['2XM', 'AKH', 'AKR', 'J22', 'JMP'],
    originalText:
      'Bone Picker costs {3} less to cast if a creature died this turn.\nFlying, deathtouch',
    originalType: 'Creature - Bird',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: 'dad332dd-d57a-57f6-80aa-abfe5b98b5bc',
  },
  {
    name: 'Supply Caravan',
    manaCost: '{4}{W}',
    cmc: 5,
    colors: ['W'],
    colorIdentity: ['W'],
    type: 'Creature — Camel',
    types: ['Creature'],
    subtypes: ['Camel'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'When Supply Caravan enters the battlefield, if you control a tapped creature, create a 1/1 white Warrior creature token with vigilance.',
    flavor:
      '"We each have a weight to carry on the road to the afterlife."\n—Oketra, god of solidarity',
    artist: 'Nils Hamm',
    number: '30',
    power: '3',
    toughness: '5',
    layout: 'normal',
    multiverseid: '426732',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426732&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'If you don’t control a tapped creature as Supply Caravan enters the battlefield, its ability doesn’t trigger, even if you can tap a creature right away. If you control no tapped creatures as the ability resolves, nothing happens.',
      },
      {
        date: '2017-04-18',
        text: 'If an effect causes Supply Caravan to enter the battlefield tapped, it will satisfy its own triggered ability.',
      },
    ],
    foreignNames: [
      {
        name: 'Versorgungskarawane',
        text: 'Wenn die Versorgungskarawane ins Spiel kommt und falls du eine getappte Kreatur kontrollierst, erzeuge einen 1/1 weißen Krieger-Kreaturenspielstein mit Wachsamkeit.',
        type: 'Kreatur — Kamel',
        flavor:
          '„Jeder hat seinen Teil auf dem Weg ins Jenseits beizutragen." —Oketra, Göttin des Zusammenhalts',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427001&type=card',
        language: 'German',
        multiverseid: 427001,
      },
      {
        name: 'Caravana de suministros',
        text: 'Cuando la Caravana de suministros entre al campo de batalla, si controlas una criatura girada, crea una ficha de criatura Guerrero blanca 1/1 con la habilidad de vigilancia.',
        type: 'Criatura — Camello',
        flavor:
          '"Todos tenemos un peso que cargar en el camino al más allá". —Oketra, diosa de la solidaridad',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427270&type=card',
        language: 'Spanish',
        multiverseid: 427270,
      },
      {
        name: 'Caravane de marchandises',
        text: 'Quand la Caravane de marchandises arrive sur le champ de bataille, si vous contrôlez une créature engagée, créez un jeton de créature 1/1 blanche Guerrier avec la vigilance.',
        type: 'Créature : chameau',
        flavor:
          "« Nous avons tous un fardeau à porter sur la route vers l'au-delà. » —Oketra, déesse de la Solidarité",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427539&type=card',
        language: 'French',
        multiverseid: 427539,
      },
      {
        name: 'Carovana di Rifornimenti',
        text: 'Quando la Carovana di Rifornimenti entra nel campo di battaglia, se controlli una creatura TAPpata, crea una pedina creatura Guerriero 1/1 bianca con cautela.',
        type: 'Creatura — Cammello',
        flavor:
          '"Abbiamo tutti un fardello da portare lungo il cammino che ci conduce all\'aldilà." —Oketra, dea della fratellanza',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427808&type=card',
        language: 'Italian',
        multiverseid: 427808,
      },
      {
        name: '補給の隊商',
        text: '補給の隊商が戦場に出たとき、あなたがタップ状態のクリーチャーをコントロールしている場合、警戒を持つ白の１/１の戦士・クリーチャー・トークンを１体生成する。',
        type: 'クリーチャー — ラクダ',
        flavor:
          '「各々、来世まで持って行く重荷があるのだ。」 ――結束の神、オケチラ',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428077&type=card',
        language: 'Japanese',
        multiverseid: 428077,
      },
      {
        name: '물자수송 대상단',
        text: '물자수송 대상단이 전장에 들어올 때, 당신이 탭된 생물을 조종한다면, 경계를 가진 1/1 백색 전사 생물 토큰 한 개를 만든다.',
        type: '생물 — 낙타',
        flavor:
          '"각자에게는 사후 세계로 갈 때 짊어질 짐이 있다." —결속의 신 오케트라',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428346&type=card',
        language: 'Korean',
        multiverseid: 428346,
      },
      {
        name: 'Caravana de Suprimentos',
        text: 'Quando Caravana de Suprimentos entrar no campo de batalha, se você controlar uma criatura virada, crie uma ficha de criatura branca 1/1 do tipo Guerreiro com vigilância.',
        type: 'Criatura — Camelo',
        flavor:
          '"Cada um de nós tem um peso a carregar na estrada rumo à vida após a morte." — Oketra, deusa da solidariedade',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428615&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428615,
      },
      {
        name: 'Караван с Припасами',
        text: 'Когда Караван с Припасами выходит на поле битвы, если под вашим контролем есть повернутое существо, создайте одну фишку существа 1/1 белый Воин с Бдительностью.',
        type: 'Существо — Верблюд',
        flavor:
          '«По дороге к загробной жизни каждый из нас должен нести свое бремя». — Окетра, богиня сплоченности',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428884&type=card',
        language: 'Russian',
        multiverseid: 428884,
      },
      {
        name: '补给商队',
        text: '当补给商队进战场时，若你操控已横置的生物，则派出一个1/1白色，具警戒异能的战士衍生生物。',
        type: '生物～骆驼',
        flavor: '「在通往来世的路上，我们都有各自的包袱。」 ～团结之神欧柯塔',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429153&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429153,
      },
      {
        name: '補給商隊',
        text: '當補給商隊進戰場時，若你操控已橫置的生物，則派出一個1/1白色，具警戒異能的戰士衍生生物。',
        type: '生物～駱駝',
        flavor: '「在通往來世的路上，我們都有各自的包袱。」 ～團結之神歐柯塔',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429422&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429422,
      },
    ],
    printings: ['AKH', 'AKR'],
    originalText:
      'When Supply Caravan enters the battlefield, if you control a tapped creature, create a 1/1 white Warrior creature token with vigilance.',
    originalType: 'Creature - Camel',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '5a25b6d6-a640-5aa4-ba99-183736aad45f',
  },
  {
    name: 'Bloodlust Inciter',
    manaCost: '{R}',
    cmc: 1,
    colors: ['R'],
    colorIdentity: ['R'],
    type: 'Creature — Human Warrior',
    types: ['Creature'],
    subtypes: ['Human', 'Warrior'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: '{T}: Target creature gains haste until end of turn.',
    flavor: '"To victory! To glory! To eternity!"',
    artist: 'Anthony Palumbo',
    number: '120',
    power: '1',
    toughness: '1',
    layout: 'normal',
    multiverseid: '426822',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426822&type=card',
    foreignNames: [
      {
        name: 'Blutdurst-Erwecker',
        text: '{T}: Eine Kreatur deiner Wahl erhält Eile bis zum Ende des Zuges.',
        type: 'Kreatur — Mensch, Krieger',
        flavor: '„Für den Sieg! Für Ruhm und Ehre! Für die Ewigkeit!"',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427091&type=card',
        language: 'German',
        multiverseid: 427091,
      },
      {
        name: 'Instigador de sed de sangre',
        text: '{T}: La criatura objetivo gana la habilidad de prisa hasta el final del turno.',
        type: 'Criatura — Guerrero humano',
        flavor: '"¡Por la victoria! ¡Por la gloria! ¡Por la eternidad!"',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427360&type=card',
        language: 'Spanish',
        multiverseid: 427360,
      },
      {
        name: 'Incitateur à la soif de sang',
        text: "{T} : La créature ciblée acquiert la célérité jusqu'à la fin du tour.",
        type: 'Créature : humain et guerrier',
        flavor: "« Pour la victoire ! Pour la gloire ! Pour l'éternité ! »",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427629&type=card',
        language: 'French',
        multiverseid: 427629,
      },
      {
        name: 'Fomentatore della Sete di Sangue',
        text: '{T}: Una creatura bersaglio ha rapidità fino alla fine del turno.',
        type: 'Creatura — Guerriero Umano',
        flavor: '"Per la vittoria! Per la gloria! Per l\'eternità!"',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427898&type=card',
        language: 'Italian',
        multiverseid: 427898,
      },
      {
        name: '血に飢えた振起者',
        text: '{T}：クリーチャー１体を対象とする。ターン終了時まで、それは速攻を得る。',
        type: 'クリーチャー — 人間・戦士',
        flavor: '「勝利を！栄光を！永遠を！」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428167&type=card',
        language: 'Japanese',
        multiverseid: 428167,
      },
      {
        name: '야만적 선동자',
        text: '{T}: 생물을 목표로 정한다. 그 생물은 턴종료까지 신속을 얻는다.',
        type: '생물 — 인간 전사',
        flavor: '"승리를 위해! 영광을 위해! 영원을 위해!"',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428436&type=card',
        language: 'Korean',
        multiverseid: 428436,
      },
      {
        name: 'Incitador da Sede de Sangue',
        text: '{T}: A criatura alvo ganha ímpeto até o final do turno.',
        type: 'Criatura — Humano Guerreiro',
        flavor: '"À vitória! À glória! À eternidade!"',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428705&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428705,
      },
      {
        name: 'Кровожадный Подстрекатель',
        text: '{T}: целевое существо получает Ускорение до конца хода.',
        type: 'Существо — Человек Воин',
        flavor: '«К победе! К славе! К вечности!»',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428974&type=card',
        language: 'Russian',
        multiverseid: 428974,
      },
      {
        name: '嗜血鼓动师',
        text: '{T}：目标生物获得敏捷异能直到回合结束。',
        type: '生物～人类／战士',
        flavor: '「为了胜利！为了荣誉！为了永生！」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429243&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429243,
      },
      {
        name: '嗜血鼓動師',
        text: '{T}：目標生物獲得敏捷異能直到回合結束。',
        type: '生物～人類／戰士',
        flavor: '「為了勝利！為了榮譽！為了永生！」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429512&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429512,
      },
    ],
    printings: ['AKH', 'AKR', 'MB1'],
    originalText: '{T}: Target creature gains haste until end of turn.',
    originalType: 'Creature - Human Warrior',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '13a091b1-8327-56c2-90b9-e1fe586850a7',
  },
  {
    name: 'Scribe of the Mindful',
    manaCost: '{2}{U}',
    cmc: 3,
    colors: ['U'],
    colorIdentity: ['U'],
    type: 'Creature — Human Cleric',
    types: ['Creature'],
    subtypes: ['Human', 'Cleric'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: '{1}, {T}, Sacrifice Scribe of the Mindful: Return target instant or sorcery card from your graveyard to your hand.',
    flavor:
      '"The best answers solve more than one riddle."\n—Kefnet, god of knowledge',
    artist: 'Bastien L. Deharme',
    number: '68',
    power: '2',
    toughness: '2',
    layout: 'normal',
    multiverseid: '426770',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426770&type=card',
    foreignNames: [
      {
        name: 'Schreiberin des Achtsamen',
        text: '{1}, {T}, opfere die Schreiberin des Achtsamen: Bringe eine Spontanzauber- oder Hexerei-Karte deiner Wahl aus deinem Friedhof auf deine Hand zurück.',
        type: 'Kreatur — Mensch, Kleriker',
        flavor:
          '„Die besten Antworten lösen mehr als nur ein Rätsel." —Kefnet, Gott des Wissens',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427039&type=card',
        language: 'German',
        multiverseid: 427039,
      },
      {
        name: 'Escriba del Conocedor',
        text: '{1}, {T}, sacrificar a la Escriba del Conocedor: Regresa la carta de instantáneo o de conjuro objetivo de tu cementerio a tu mano.',
        type: 'Criatura — Clérigo humano',
        flavor:
          '"Las mejores respuestas resuelven más de un acertijo". —Kefnet, dios del conocimiento',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427308&type=card',
        language: 'Spanish',
        multiverseid: 427308,
      },
      {
        name: 'Scribe du Clairvoyant',
        text: "{1}, {T}, sacrifiez la Scribe du Clairvoyant : Renvoyez une carte d'éphémère ou de rituel ciblée depuis votre cimetière dans votre main.",
        type: 'Créature : humain et clerc',
        flavor:
          "« Les meilleures réponses résolvent plus d'une énigme. » —Kefnet, dieu de la Connaissance",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427577&type=card',
        language: 'French',
        multiverseid: 427577,
      },
      {
        name: 'Scriba del Ponderante',
        text: '{1}, {T}, Sacrifica la Scriba del Ponderante: Riprendi in mano una carta istantaneo o stregoneria bersaglio dal tuo cimitero.',
        type: 'Creatura — Chierico Umano',
        flavor:
          '"Le risposte migliori risolvono più di un enigma." —Kefnet, dio della conoscenza',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427846&type=card',
        language: 'Italian',
        multiverseid: 427846,
      },
      {
        name: '周到の書記官',
        text: '{1}, {T}, 周到の書記官を生け贄に捧げる：あなたの墓地からインスタント・カード１枚かソーサリー・カード１枚を対象とし、それをあなたの手札に戻す。',
        type: 'クリーチャー — 人間・クレリック',
        flavor: '「最良の答えは多数の謎を解く。」 ――知識の神、ケフネト',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428115&type=card',
        language: 'Japanese',
        multiverseid: 428115,
      },
      {
        name: '신중의 서기',
        text: '{1}, {T}, 신중의 서기를 희생한다: 당신의 무덤에 있는 순간마법 또는 집중마법 카드를 목표로 정한다. 그 목표를 당신의 손으로 되돌린다.',
        type: '생물 — 인간 성직자',
        flavor:
          '"최고의 답은 한 번에 여러 수수께끼를 해결한다." —지식의 신 케프넷',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428384&type=card',
        language: 'Korean',
        multiverseid: 428384,
      },
      {
        name: 'Escriba do Consciente',
        text: '{1}, {T}, Sacrifique Escriba do Consciente: Devolva o card de mágica instantânea ou feitiço alvo de seu cemitério para sua mão.',
        type: 'Criatura — Humano Clérigo',
        flavor:
          '"As melhores respostas resolvem mais de um enigma." — Kefnet, deus do conhecimento',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428653&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428653,
      },
      {
        name: 'Переписчица Всеведущего',
        text: '{1}, {T}, пожертвуйте Переписчицу Всеведущего: верните целевую карту мгновенного заклинания или волшебства из вашего кладбища в вашу руку.',
        type: 'Существо — Человек Священник',
        flavor:
          '«Самые лучшие ответы подходят к нескольким загадкам». — Кефнет, бог знания',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428922&type=card',
        language: 'Russian',
        multiverseid: 428922,
      },
      {
        name: '心智神书吏',
        text: '{1}，{T}，牺牲心智神书吏：将目标瞬间或法术牌从你的坟墓场移回你手上。',
        type: '生物～人类／僧侣',
        flavor: '「最好的谜底能解答数个谜语。」 ～知识之神刻法涅',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429191&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429191,
      },
      {
        name: '心智神書吏',
        text: '{1}，{T}，犧牲心智神書吏：將目標瞬間或巫術牌從你的墳墓場移回你手上。',
        type: '生物～人類／僧侶',
        flavor: '「最好的謎底能解答數個謎語。」 ～知識之神刻法涅',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429460&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429460,
      },
    ],
    printings: ['AKH'],
    originalText:
      '{1}, {T}, Sacrifice Scribe of the Mindful: Return target instant or sorcery card from your graveyard to your hand.',
    originalType: 'Creature - Human Cleric',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: 'bb1562d6-544c-5034-b963-2c6f2793c6aa',
  },
  {
    name: 'Sparring Mummy',
    manaCost: '{3}{W}',
    cmc: 4,
    colors: ['W'],
    colorIdentity: ['W'],
    type: 'Creature — Zombie',
    types: ['Creature'],
    subtypes: ['Zombie'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'When Sparring Mummy enters the battlefield, untap target creature.',
    flavor:
      'Aspiring to earn their place in the afterlife, acolytes train every day against those who fell short of that glory.',
    artist: 'Ryan Pancoast',
    number: '29',
    power: '3',
    toughness: '3',
    layout: 'normal',
    multiverseid: '426731',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426731&type=card',
    foreignNames: [
      {
        name: 'Übungsmumie',
        text: 'Wenn die Übungsmumie ins Spiel kommt, enttappe eine Kreatur deiner Wahl.',
        type: 'Kreatur — Zombie',
        flavor:
          'Um ihren Platz im Jenseits zu verdienen, trainieren die Tempeldiener jeden Tag mit jenen, denen diese Ehre nicht zuteilwurde.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427000&type=card',
        language: 'German',
        multiverseid: 427000,
      },
      {
        name: 'Momia de entrenamiento',
        text: 'Cuando la Momia de entrenamiento entre al campo de batalla, endereza la criatura objetivo.',
        type: 'Criatura — Zombie',
        flavor:
          'En su aspiración para hacerse un hueco en el más allá, los acólitos entrenan a diario contra aquellos que no alcanzaron tal gloria.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427269&type=card',
        language: 'Spanish',
        multiverseid: 427269,
      },
      {
        name: "Momie d'entraînement",
        text: "Quand la Momie d'entraînement arrive sur le champ de bataille, dégagez la créature ciblée.",
        type: 'Créature : zombie',
        flavor:
          "Aspirant à une place dans l'au-delà, les acolytes s'entraînent chaque jour contre ceux qui ont été indignes de cette gloire.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427538&type=card',
        language: 'French',
        multiverseid: 427538,
      },
      {
        name: 'Mummia da Addestramento',
        text: 'Quando la Mummia da Addestramento entra nel campo di battaglia, STAPpa una creatura bersaglio.',
        type: 'Creatura — Zombie',
        flavor:
          "Gli accoliti, che ambiscono a conquistarsi un posto nell'aldilà, si addestrano tutti i giorni affrontando coloro ai quali tale privilegio è stato negato.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427807&type=card',
        language: 'Italian',
        multiverseid: 427807,
      },
      {
        name: '演習ミイラ',
        text: '演習ミイラが戦場に出たとき、クリーチャー１体を対象とし、それをアンタップする。',
        type: 'クリーチャー — ゾンビ',
        flavor:
          '来世での居場所を求める見習いたちは日々、栄達を逃した者相手の訓練にいそしむ。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428076&type=card',
        language: 'Japanese',
        multiverseid: 428076,
      },
      {
        name: '연습 상대 미라',
        text: '연습 상대 미라가 전장에 들어올 때, 생물을 목표로 정한다. 그 생물을 언탭한다.',
        type: '생물 — 좀비',
        flavor:
          '사후 세계에 갔을 때 영광의 자리를 차지하고 싶어하는 견습 사제들은 그러지 못한 이들을 상대로 매일 수련한다.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428345&type=card',
        language: 'Korean',
        multiverseid: 428345,
      },
      {
        name: 'Múmia de Treino',
        text: 'Quando Múmia de Treino entrar no campo de batalha, desvire a criatura alvo.',
        type: 'Criatura — Zumbi',
        flavor:
          'Aspirando à conquista de seu lugar na vida após a morte, os acólitos treinam todos os dias contra aqueles que não alcançaram essa glória.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428614&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428614,
      },
      {
        name: 'Тренировочная Мумия',
        text: 'Когда Тренировочная Мумия выходит на поле битвы, разверните целевое существо.',
        type: 'Существо — Зомби',
        flavor:
          'Стремясь завоевать свое место в загробной жизни, непосвященные упражняются каждый день, сражаясь с теми, кому не удалось заслужить это право.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428883&type=card',
        language: 'Russian',
        multiverseid: 428883,
      },
      {
        name: '陪练木乃伊',
        text: '当陪练木乃伊进战场时，重置目标生物。',
        type: '生物～灵俑',
        flavor:
          '侍僧热切希望能在来世拥有一席之地，因此每天与那些未能享受此荣耀者对练。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429152&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429152,
      },
      {
        name: '陪練木乃伊',
        text: '當陪練木乃伊進戰場時，重置目標生物。',
        type: '生物～殭屍',
        flavor:
          '侍僧熱切希望能在來世擁有一席之地，因此每天與那些未能享受此榮耀者對練。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429421&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429421,
      },
    ],
    printings: ['AKH', 'BBD', 'MB1'],
    originalText:
      'When Sparring Mummy enters the battlefield, untap target creature.',
    originalType: 'Creature - Zombie',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '030a7cfc-af3f-5f1b-b5e6-c093e85ab35e',
  },
  {
    name: 'Those Who Serve',
    manaCost: '{2}{W}',
    cmc: 3,
    colors: ['W'],
    colorIdentity: ['W'],
    type: 'Creature — Zombie',
    types: ['Creature'],
    subtypes: ['Zombie'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    flavor:
      '"The dead perform all the work here—farming, building, teaching, even embalming their fellow mummies. The living need do nothing but train. What system could be more perfect?"\n—Temmet, vizier of Naktamun',
    artist: 'Volkan Baǵa',
    number: '32',
    power: '2',
    toughness: '4',
    layout: 'normal',
    multiverseid: '426734',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426734&type=card',
    foreignNames: [
      {
        name: 'Die ewig Dienenden',
        type: 'Kreatur — Zombie',
        flavor:
          '„Die Toten übernehmen sämtliche Arbeiten — auf den Feldern, im Haus, in den Schulen. Selbst die Einbalsamierung der anderen Verstorbenen. Die Lebenden müssen nichts tun, außer zu trainieren. Wie könnte es besser sein?" —Temmet, Wesir von Naktamun',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427003&type=card',
        language: 'German',
        multiverseid: 427003,
      },
      {
        name: 'Sirvientes',
        type: 'Criatura — Zombie',
        flavor:
          '"Aquí los muertos hacen todo el trabajo: cultivar, construir, instruir... incluso embalsamar a otras momias. Los vivos no necesitan hacer nada más que entrenar. ¿Qué sistema podría ser más perfecto?" —Temmet, visir de Naktamun',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427272&type=card',
        language: 'Spanish',
        multiverseid: 427272,
      },
      {
        name: 'Ceux qui servent',
        type: 'Créature : zombie',
        flavor:
          "« Les morts font tout le travail ici : agriculture, construction, éducation et même embaumement des autres momies. Les vivants n'ont rien à faire, sinon s'entraîner. Quel système pourrait être plus parfait ? » —Temmet, vizir de Naktamon",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427541&type=card',
        language: 'French',
        multiverseid: 427541,
      },
      {
        name: 'Coloro che Servono',
        type: 'Creatura — Zombie',
        flavor:
          '"Tutto il lavoro qui viene svolto dai morti, che coltivano, costruiscono edifici, insegnano e imbalsamano persino altre mummie. I vivi devono solo pensare ad addestrarsi. Un sistema più che ingegnoso!" —Temmet, visir di Naktamun',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427810&type=card',
        language: 'Italian',
        multiverseid: 427810,
      },
      {
        name: '仕える者たち',
        type: 'クリーチャー — ゾンビ',
        flavor:
          '「ここでは死者があらゆる仕事をする。耕作、建設、教育。仲間のミイラに不朽処理を行う者までいる。生者はそれを訓練するのみでよい。これ以上の仕組みがあるかね？」 ――ナクタムンの侍臣、テムメト',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428079&type=card',
        language: 'Japanese',
        multiverseid: 428079,
      },
      {
        name: '섬기는 자',
        type: '생물 — 좀비',
        flavor:
          '"이곳에서는 망자들이 농사, 건설, 교육, 심지어 동료 미라의 방부처리까지 모든 일을 도맡는다. 산 자는 수련에만 집중한다. 이 얼마나 완벽한 시스템인가?" —나크타문의 고관 테멧',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428348&type=card',
        language: 'Korean',
        multiverseid: 428348,
      },
      {
        name: 'Aqueles que Servem',
        type: 'Criatura — Zumbi',
        flavor:
          '"Os mortos fazem todo o trabalho aqui: cultivo, construção, instrução, até mesmo o embalsamamento de suas companheiras múmias. Os vivos não precisam fazer nada, a não ser treinar. Que sistema poderia ser mais perfeito?" — Temmet, vizir de Nactamon',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428617&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428617,
      },
      {
        name: 'Те, Кто Служат',
        type: 'Существо — Зомби',
        flavor:
          '«Мертвецы выполняют здесь всю работу: возделывают землю, строят, обучают, даже бальзамируют новых мумий. Живым остается лишь тренироваться. Возможна ли более совершенная система?» — Теммет, визирь Нактамуна',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428886&type=card',
        language: 'Russian',
        multiverseid: 428886,
      },
      {
        name: '奴隶木乃伊',
        type: '生物～灵俑',
        flavor:
          '「死者在这里负责所有的工作～耕种、建造、授课，甚至还为木乃伊同伴处理防腐。生者只管专心训练。还有更完美的体制吗？」 ～拿塔蒙维齐尔蒂穆特',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429155&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429155,
      },
      {
        name: '奴隸木乃伊',
        type: '生物～殭屍',
        flavor:
          '「死者在這裡負責所有的工作～耕種、建造、授課，甚至還為木乃伊同伴處理防腐。生者只管專心訓練。還有更完美的體制嗎？」 ～拿塔蒙維齊爾蒂穆特',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429424&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429424,
      },
    ],
    printings: ['AKH', 'AKR'],
    originalType: 'Creature - Zombie',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: 'dec041c3-42ab-5f10-9847-a74642b6cdcb',
  },
  {
    name: 'Vizier of Deferment',
    manaCost: '{2}{W}',
    cmc: 3,
    colors: ['W'],
    colorIdentity: ['W'],
    type: 'Creature — Human Cleric',
    types: ['Creature'],
    subtypes: ['Human', 'Cleric'],
    rarity: 'Uncommon',
    set: 'AKH',
    setName: 'Amonkhet',
    text: "Flash\nWhen Vizier of Deferment enters the battlefield, you may exile target creature if it attacked or blocked this turn. Return that card to the battlefield under its owner's control at the beginning of the next end step.",
    artist: 'Deruchenko Alexander',
    number: '37',
    power: '2',
    toughness: '2',
    layout: 'normal',
    multiverseid: '426739',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426739&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'Vizier of Deferment’s triggered ability can target any creature, but it will affect a creature only if that creature was declared as an attacker or blocker this turn, whether you cast Vizier of Deferment during combat or later in the turn. Notably, the ability won’t affect a creature that entered the battlefield attacking or blocking.',
      },
      {
        date: '2017-04-18',
        text: 'After the target creature returns to the battlefield, it will be a new object with no connection to the creature that was exiled. It won’t be in combat or have any additional abilities it may have had when it was exiled. Any counters on it or Auras attached to it are removed, and any Equipment will no longer be attached.',
      },
      {
        date: '2017-04-18',
        text: 'A token creature exiled this way won’t return to the battlefield.',
      },
    ],
    foreignNames: [
      {
        name: 'Wesirin des Aufschubs',
        text: 'Aufblitzen\nWenn die Wesirin des Aufschubs ins Spiel kommt, kannst du eine Kreatur deiner Wahl, die in diesem Zug angegriffen oder geblockt hat, ins Exil schicken. Bringe jene Karte zu Beginn des nächsten Endsegments unter der Kontrolle ihres Besitzers ins Spiel zurück.',
        type: 'Kreatur — Mensch, Kleriker',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427008&type=card',
        language: 'German',
        multiverseid: 427008,
      },
      {
        name: 'Visir de la postergación',
        text: 'Destello.\nCuando la Visir de la postergación entre al campo de batalla, puedes exiliar la criatura objetivo si atacó o bloqueó este turno. Regresa esa carta al campo de batalla bajo el control de su propietario al comienzo del próximo paso final.',
        type: 'Criatura — Clérigo humano',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427277&type=card',
        language: 'Spanish',
        multiverseid: 427277,
      },
      {
        name: 'Vizir de sursis',
        text: 'Flash\nQuand le Vizir de sursis arrive sur le champ de bataille, vous pouvez exiler une créature ciblée si elle a attaqué ou bloqué ce tour-ci. Renvoyez cette carte sur le champ de bataille sous le contrôle de son propriétaire au début de la prochaine étape de fin.',
        type: 'Créature : humain et clerc',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427546&type=card',
        language: 'French',
        multiverseid: 427546,
      },
      {
        name: 'Visir della Dilazione',
        text: "Lampo\nQuando la Visir della Dilazione entra nel campo di battaglia, puoi esiliare una creatura bersaglio se ha attaccato o bloccato in questo turno. Rimetti sul campo di battaglia quella carta sotto il controllo del suo proprietario all'inizio della prossima sottofase finale.",
        type: 'Creatura — Chierico Umano',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427815&type=card',
        language: 'Italian',
        multiverseid: 427815,
      },
      {
        name: '猶予の侍臣',
        text: '瞬速\n猶予の侍臣が戦場に出たとき、クリーチャー１体を対象とする。このターンにそれが攻撃していたかブロックしていたなら、あなたはそれを追放してもよい。次の終了ステップの開始時に、そのカードをオーナーのコントロール下で戦場に戻す。',
        type: 'クリーチャー — 人間・クレリック',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428084&type=card',
        language: 'Japanese',
        multiverseid: 428084,
      },
      {
        name: '유예의 고관',
        text: '섬광\n유예의 고관이 전장에 들어올 때, 생물을 목표로 정한다. 이 턴에 그 생물이 공격하거나 방어했다면, 당신은 그 생물을 추방할 수 있다. 다음 종료단 시작에 그렇게 추방된 카드를 소유자의 조종하에 전장으로 되돌린다.',
        type: '생물 — 인간 성직자',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428353&type=card',
        language: 'Korean',
        multiverseid: 428353,
      },
      {
        name: 'Vizir do Diferimento',
        text: 'Lampejo\nQuando Vizir do Diferimento entra no campo de batalha, você pode exilar a criatura alvo se ela atacou ou bloqueou neste turno. Devolva aquele card ao campo de batalha sob o controle de seu dono no início da próxima etapa final.',
        type: 'Criatura — Humano Clérigo',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428622&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428622,
      },
      {
        name: 'Визирь Отсрочки',
        text: 'Миг\nКогда Визирь Отсрочки выходит на поле битвы, вы можете изгнать целевое существо, если оно атаковало или блокировало в этом ходу. Верните ту карту на поле битвы под контролем ее владельца в начале следующего заключительного шага.',
        type: 'Существо — Человек Священник',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428891&type=card',
        language: 'Russian',
        multiverseid: 428891,
      },
      {
        name: '退敌维齐尔',
        text: '闪现\n当退敌维齐尔进战场时，如果目标生物本回合曾进行攻击或阻挡，你可以放逐该生物。在下一个结束步骤开始时，将所放逐的牌在其拥有者的操控下返回战场。',
        type: '生物～人类／僧侣',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429160&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429160,
      },
      {
        name: '退敵維齊爾',
        text: '閃現\n當退敵維齊爾進戰場時，如果目標生物本回合曾進行攻擊或阻擋，你可以放逐該生物。在下一個結束步驟開始時，將所放逐的牌在其擁有者的操控下返回戰場。',
        type: '生物～人類／僧侶',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429429&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429429,
      },
    ],
    printings: ['AKH', 'AKR'],
    originalText:
      "Flash\nWhen Vizier of Deferment enters the battlefield, you may exile target creature if it attacked or blocked this turn. Return that card to the battlefield under its owner's control at the beginning of the next end step.",
    originalType: 'Creature - Human Cleric',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Restricted',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '9233e310-1c11-5d02-8125-e6d89e8bcbec',
  },
  {
    name: 'Baleful Ammit',
    manaCost: '{2}{B}',
    cmc: 3,
    colors: ['B'],
    colorIdentity: ['B'],
    type: 'Creature — Crocodile Demon',
    types: ['Creature'],
    subtypes: ['Crocodile', 'Demon'],
    rarity: 'Uncommon',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'Lifelink\nWhen Baleful Ammit enters the battlefield, put a -1/-1 counter on target creature you control.',
    flavor:
      '"Not all in our crop deserve the afterlife. We must leave the unworthy behind, Samut."\n—Djeru, initiate of Tah crop',
    artist: 'Seb McKinnon',
    number: '79',
    power: '4',
    toughness: '3',
    layout: 'normal',
    multiverseid: '426781',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426781&type=card',
    foreignNames: [
      {
        name: 'Unheilvolles Ammit',
        text: 'Lebensverknüpfung\nWenn das Unheilvolle Ammit ins Spiel kommt, lege eine -1/-1-Marke auf eine Kreatur deiner Wahl, die du kontrollierst.',
        type: 'Kreatur — Krokodil, Dämon',
        flavor:
          '„Nicht alle aus unserer Saat haben das Jenseits verdient. Lassen wir die Unwürdigen zurück, Samut." —Djeru, Geweihter der Tah-Saat',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427050&type=card',
        language: 'German',
        multiverseid: 427050,
      },
      {
        name: 'Ammit siniestra',
        text: 'Vínculo vital.\nCuando la Ammit siniestra entre al campo de batalla, pon un contador -1/-1 sobre la criatura objetivo que controlas.',
        type: 'Criatura — Demonio cocodrilo',
        flavor:
          '"No todos los miembros de nuestra simiente merecen alcanzar el más allá. Debemos dejar atrás a los indignos, Samut". —Djeru, iniciado de la simiente Tah',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427319&type=card',
        language: 'Spanish',
        multiverseid: 427319,
      },
      {
        name: 'Ammout sinistre',
        text: "Lien de vie\nQuand l'Ammout sinistre arrive sur le champ de bataille, mettez un marqueur -1/-1 sur une créature ciblée que vous contrôlez.",
        type: 'Créature : crocodile et démon',
        flavor:
          "« Certains dans notre moisson ne méritent pas l'au-delà. Nous devons distancer ceux qui ne sont pas valeureux, Samut. » —Djeru, adepte de la moisson Tah",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427588&type=card',
        language: 'French',
        multiverseid: 427588,
      },
      {
        name: 'Ammit Funesto',
        text: "Legame vitale\nQuando l'Ammit Funesto entra nel campo di battaglia, metti un segnalino -1/-1 su una creatura bersaglio che controlli.",
        type: 'Creatura — Demone Coccodrillo',
        flavor:
          '"Non tutti i membri della nostra messe meritano l\'aldilà. Dobbiamo abbandonare coloro che non sono prescelti, Samut." —Djeru, iniziato della messe Tah',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427857&type=card',
        language: 'Italian',
        multiverseid: 427857,
      },
      {
        name: '悪意のアムムト',
        text: '絆魂\n悪意のアムムトが戦場に出たとき、あなたがコントロールするクリーチャー１体を対象とし、それの上に－１/－１カウンターを１個置く。',
        type: 'クリーチャー — クロコダイル・デーモン',
        flavor:
          '「一門の全員が来世にふさわしいわけではない。サムトよ、英雄に値しない奴は置いて行くのだ。」 ――ター一門の修練者、デジェル',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428126&type=card',
        language: 'Japanese',
        multiverseid: 428126,
      },
      {
        name: '악의의 암무트',
        text: '생명연결\n악의의 암무트가 전장에 들어올 때, 당신이 조종하는 생물을 목표로 정한다. 그 생물에 -1/-1 카운터 한 개를 올려놓는다.',
        type: '생물 — 악어 악마',
        flavor:
          '"모든 입문자가 사후 세계에 갈 수는 없어. 자격 없는 자들은 그냥 버리고 가야 해, 사무트." —타 입문자의 입회자 제루',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428395&type=card',
        language: 'Korean',
        multiverseid: 428395,
      },
      {
        name: 'Ammit Funesto',
        text: 'Vínculo com a vida\nQuando Ammit Funesto entrar no campo de batalha, coloque um marcador -1/-1 na criatura alvo que você controla.',
        type: 'Criatura — Crocodilo Demônio',
        flavor:
          '"Nem todos em nossa safra merecem a vida eterna. Precisamos deixar os indignos para trás, Samut." — Djeru, iniciado da safra Tah',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428664&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428664,
      },
      {
        name: 'Гибельная Амат',
        text: 'Цепь жизни\nКогда Гибельная Амат выходит на поле битвы, положите один жетон -1/-1 на целевое существо под вашим контролем.',
        type: 'Существо — Крокодил Демон',
        flavor:
          '«Не все в нашем снопе заслуживают загробной жизни. Мы должны бросить недостойных, Самут». — Джеру, послушник снопа Тах',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428933&type=card',
        language: 'Russian',
        multiverseid: 428933,
      },
      {
        name: '恶邪阿米特',
        text: '系命\n当恶邪阿米特进战场时，在目标由你操控的生物上放置一个-1/-1指示物。',
        type: '生物～鳄鱼／恶魔',
        flavor:
          '「本祀群并非人人配得来世。撒姆特，我们得放弃配不上的人。」 ～塔哈祀群祀徒杰鲁',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429202&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429202,
      },
      {
        name: '惡邪阿米特',
        text: '繫命\n當惡邪阿米特進戰場時，在目標由你操控的生物上放置一個-1/-1指示物。',
        type: '生物～鱷魚／惡魔',
        flavor:
          '「本祀群並非人人配得來世。撒姆特，我們得放棄配不上的人。」 ～塔哈祀群祀徒傑魯',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429471&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429471,
      },
    ],
    printings: ['AKH', 'AKR', 'MB1'],
    originalText:
      'Lifelink\nWhen Baleful Ammit enters the battlefield, put a -1/-1 counter on target creature you control.',
    originalType: 'Creature - Crocodile Demon',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Restricted',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '3f39981b-6475-546c-9047-8f52ede1d8cb',
  },
  {
    name: 'Scaled Behemoth',
    manaCost: '{4}{G}{G}',
    cmc: 6,
    colors: ['G'],
    colorIdentity: ['G'],
    type: 'Creature — Crocodile',
    types: ['Creature'],
    subtypes: ['Crocodile'],
    rarity: 'Uncommon',
    set: 'AKH',
    setName: 'Amonkhet',
    text: "Hexproof (This creature can't be the target of spells or abilities your opponents control.)",
    flavor:
      'Surviving an encounter with it is proof enough that an initiate is ready for the Trial of Strength.',
    artist: 'Marco Nelor',
    number: '184',
    power: '6',
    toughness: '7',
    layout: 'normal',
    multiverseid: '426886',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426886&type=card',
    foreignNames: [
      {
        name: 'Geschuppter Behemoth',
        text: 'Fluchsicher (Diese Kreatur kann nicht das Ziel von Zaubersprüchen oder Fähigkeiten sein, die deine Gegner kontrollieren.)',
        type: 'Kreatur — Krokodil',
        flavor:
          'Eine Begegnung mit ihm zu überleben, ist Beweis genug, dass ein Geweihter für die Prüfung der Stärke bereit ist.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427155&type=card',
        language: 'German',
        multiverseid: 427155,
      },
      {
        name: 'Behemot con escamas',
        text: 'Antimaleficio. (Esta criatura no puede ser objetivo de hechizos o habilidades que controlen tus oponentes.)',
        type: 'Criatura — Cocodrilo',
        flavor:
          'Sobrevivir a un encuentro con él es señal suficiente de que un iniciado está listo para la Prueba de fuerza.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427424&type=card',
        language: 'Spanish',
        multiverseid: 427424,
      },
      {
        name: 'Béhémoth écailleux',
        text: 'Défense talismanique (Cette créature ne peut pas être la cible de sorts ou de capacités que vos adversaires contrôlent.)',
        type: 'Créature : crocodile',
        flavor:
          "Survivre après y avoir été confronté prouve de manière concluante qu'un adepte est prêt à disputer l'Épreuve de force.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427693&type=card',
        language: 'French',
        multiverseid: 427693,
      },
      {
        name: 'Behemoth Squamato',
        text: 'Anti-malocchio (Questa creatura non può essere bersaglio di magie o abilità controllate dai tuoi avversari.)',
        type: 'Creatura — Coccodrillo',
        flavor:
          "Se un iniziato sopravvive a un incontro con questa creatura, significa che è pronto ad affrontare l'Ordalia della Forza.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427962&type=card',
        language: 'Italian',
        multiverseid: 427962,
      },
      {
        name: '鱗ビヒモス',
        text: '呪禁（このクリーチャーは、対戦相手がコントロールする呪文や能力の対象にならない。）',
        type: 'クリーチャー — クロコダイル',
        flavor:
          'これに出会って生き残った修練者は、活力の試練を受けるのにふさわしいとみなされる。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428231&type=card',
        language: 'Japanese',
        multiverseid: 428231,
      },
      {
        name: '비늘로 덮인 거대괴수',
        text: '방호 (이 생물은 상대가 조종하는 주문이나 능력의 목표로 정해질 수 없다.)',
        type: '생물 — 악어',
        flavor:
          '이 놈과 맞서 살아남은 입회자는 힘의 시험을 시작할 준비가 된 것이다.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428500&type=card',
        language: 'Korean',
        multiverseid: 428500,
      },
      {
        name: 'Behemoth Escamoso',
        text: 'Resistência a magia (Esta criatura não pode ser alvo de mágicas ou habilidades controladas por seus oponentes.)',
        type: 'Criatura — Crocodilo',
        flavor:
          'Sobreviver a um encontro com ele é prova suficiente de que um iniciado está pronto para a Prova da Força.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428769&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428769,
      },
      {
        name: 'Чешуйчатый Исполин',
        text: 'Порчеустойчивость (Это существо не может быть целью заклинаний или способностей под контролем ваших оппонентов.)',
        type: 'Существо — Крокодил',
        flavor:
          'Пережить встречу с этим хищником — достаточное доказательство того, что послушник готов к испытанию силы.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429038&type=card',
        language: 'Russian',
        multiverseid: 429038,
      },
      {
        name: '覆鳞巨鳄',
        text: '辟邪（此生物不能成为由对手操控之咒语或异能的目标。）',
        type: '生物～鳄鱼',
        flavor: '如果祀徒遇到它还能活下来，就足证自己够格参加力量祀炼。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429307&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429307,
      },
      {
        name: '覆鱗巨鱷',
        text: '辟邪（此生物不能成為由對手操控之咒語或異能的目標。）',
        type: '生物～鱷魚',
        flavor: '如果祀徒遇到牠還能活下來，就足證自己夠格參加力量祀煉。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429576&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429576,
      },
    ],
    printings: ['AKH', 'CMR'],
    originalText:
      "Hexproof (This creature can't be the target of spells or abilities your opponents control.)",
    originalType: 'Creature - Crocodile',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Restricted',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: 'f9a752dc-125f-57e9-a43e-333ab909684f',
  },
  {
    name: 'Seeker of Insight',
    manaCost: '{1}{U}',
    cmc: 2,
    colors: ['U'],
    colorIdentity: ['U'],
    type: 'Creature — Human Wizard',
    types: ['Creature'],
    subtypes: ['Human', 'Wizard'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: "{T}: Draw a card, then discard a card. Activate only if you've cast a noncreature spell this turn.",
    flavor:
      'The Trial of Knowledge challenges and broadens the minds of initiates.',
    artist: 'Magali Villeneuve',
    number: '69',
    power: '1',
    toughness: '3',
    layout: 'normal',
    multiverseid: '426771',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426771&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'It doesn’t matter whether the noncreature spell has resolved or was countered, as long as it was cast. That spell may even still be on the stack when you activate Seeker of Insight’s ability.',
      },
    ],
    foreignNames: [
      {
        name: 'Sucher der Einsicht',
        text: '{T}: Ziehe eine Karte und wirf dann eine Karte ab. Aktiviere diese Fähigkeit nur, falls du in diesem Zug einen Nichtkreatur-Zauberspruch gewirkt hast.',
        type: 'Kreatur — Mensch, Zauberer',
        flavor:
          'Die Prüfung des Wissens fordert den Verstand und erweitert den Horizont der Geweihten.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427040&type=card',
        language: 'German',
        multiverseid: 427040,
      },
      {
        name: 'Buscador de conocimiento',
        text: '{T}: Roba una carta, luego descarta una carta. Activa esta habilidad solo si lanzaste un hechizo que no sea de criatura este turno.',
        type: 'Criatura — Hechicero humano',
        flavor:
          'La Prueba de conocimiento desafía y expande las mentes de los iniciados.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427309&type=card',
        language: 'Spanish',
        multiverseid: 427309,
      },
      {
        name: 'Chercheur de perspicacité',
        text: "{T} : Piochez une carte, puis défaussez-vous d'une carte. N'activez cette capacité que si vous avez lancé un sort non-créature ce tour-ci.",
        type: 'Créature : humain et sorcier',
        flavor:
          "L'Épreuve de connaissance stimule l'esprit des adeptes et élargit leurs horizons.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427578&type=card',
        language: 'French',
        multiverseid: 427578,
      },
      {
        name: 'Cercatore di Sapienza',
        text: '{T}: Pesca una carta, poi scarta una carta. Attiva questa abilità solo se hai lanciato una magia non creatura in questo turno.',
        type: 'Creatura — Mago Umano',
        flavor:
          "L'Ordalia della Conoscenza mette alla prova e amplia le menti degli iniziati.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427847&type=card',
        language: 'Italian',
        multiverseid: 427847,
      },
      {
        name: '洞察の探求者',
        text: '{T}：カードを１枚引き、その後カード１枚を捨てる。この能力は、あなたがこのターンにクリーチャーでない呪文を唱えていたときにのみ起動できる。',
        type: 'クリーチャー — 人間・ウィザード',
        flavor: '知識の試練では修練者の精神が試され視野を広げる。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428116&type=card',
        language: 'Japanese',
        multiverseid: 428116,
      },
      {
        name: '통찰의 추구자',
        text: '{T}: 카드 한 장을 뽑은 후 카드 한 장을 버린다. 당신이 이 턴에 생물이 아닌 주문을 발동한 경우에만 이 능력을 활성화할 수 있다.',
        type: '생물 — 인간 마법사',
        flavor: '지식의 시험은 입회자들의 정신을 시험하고 확장한다.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428385&type=card',
        language: 'Korean',
        multiverseid: 428385,
      },
      {
        name: 'Buscador do Discernimento',
        text: '{T}: Compre um card e depois descarte um card. Ative esta habilidade somente se você tiver conjurado uma mágica que não seja de criatura neste turno.',
        type: 'Criatura — Humano Mago',
        flavor:
          'A Prova do Conhecimento desafia e expande as mentes dos iniciados.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428654&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428654,
      },
      {
        name: 'Искатель Озарения',
        text: '{T}: возьмите карту, затем сбросьте карту. Активируйте эту способность, только если в этом ходу вы уже разыграли не являющееся существом заклинание.',
        type: 'Существо — Человек Чародей',
        flavor:
          'Испытание Знания становится проверкой разума послушника, одновременно расширяя его границы.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428923&type=card',
        language: 'Russian',
        multiverseid: 428923,
      },
      {
        name: '探解客',
        text: '{T}：抓一张牌，然后弃一张牌。只能于你施放过非生物咒语的回合中起动此异能。',
        type: '生物～人类／法术师',
        flavor: '知识祀炼能挑战并拓展祀徒的心智。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429192&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429192,
      },
      {
        name: '探解客',
        text: '{T}：抽一張牌，然後棄一張牌。只能於你施放過非生物咒語的回合中起動此異能。',
        type: '生物～人類／魔法師',
        flavor: '知識祀煉能挑戰並拓展祀徒的心智。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429461&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429461,
      },
    ],
    printings: ['AKH', 'AKR'],
    originalText:
      "{T}: Draw a card, then discard a card. Activate this ability only if you've cast a noncreature spell this turn.",
    originalType: 'Creature - Human Wizard',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: 'aa86b45a-b297-5fc4-9e97-c4dec9eeb652',
  },
  {
    name: 'Blighted Bat',
    manaCost: '{2}{B}',
    cmc: 3,
    colors: ['B'],
    colorIdentity: ['B'],
    type: 'Creature — Zombie Bat',
    types: ['Creature'],
    subtypes: ['Zombie', 'Bat'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: 'Flying\n{1}: Blighted Bat gains haste until end of turn.',
    flavor:
      "Amonkhet's dual suns don't allow for the darkness of night, so bats are most active under the gloom of the frequent sandstorms.",
    artist: 'Nils Hamm',
    number: '80',
    power: '2',
    toughness: '1',
    layout: 'normal',
    multiverseid: '426782',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426782&type=card',
    foreignNames: [
      {
        name: 'Fäulnisfledermaus',
        text: 'Fliegend\n{1}: Die Fäulnisfledermaus erhält Eile bis zum Ende des Zuges.',
        type: 'Kreatur — Zombie, Fledermaus',
        flavor:
          'Aufgrund der zwei Sonnen wird es auf Amonkhet niemals dunkel, weshalb Fledermäuse im Zwielicht der Sandstürme jagen müssen.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427051&type=card',
        language: 'German',
        multiverseid: 427051,
      },
      {
        name: 'Murciélago corrompido',
        text: 'Vuela.\n{1}: El Murciélago corrompido gana la habilidad de prisa hasta el final del turno.',
        type: 'Criatura — Murciélago zombie',
        flavor:
          'Los dos soles de Amonkhet no permiten que haya oscuridad durante la noche, así que los murciélagos están más activos durante la penumbra de las frecuentes tormentas de arena.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427320&type=card',
        language: 'Spanish',
        multiverseid: 427320,
      },
      {
        name: 'Chauve-souris gangrenée',
        text: "Vol\n{1} : La Chauve-souris gangrenée acquiert la célérité jusqu'à la fin du tour.",
        type: 'Créature : zombie et chauve-souris',
        flavor:
          "Les soleils jumeaux d'Amonkhet font obstacle à l'obscurité de la nuit, les chauves-souris sont donc principalement actives dans l'ombre des fréquentes tempêtes de sable.",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427589&type=card',
        language: 'French',
        multiverseid: 427589,
      },
      {
        name: 'Pipistrello Avvizzito',
        text: 'Volare\n{1}: Il Pipistrello Avvizzito ha rapidità fino alla fine del turno.',
        type: 'Creatura — Pipistrello Zombie',
        flavor:
          'I due soli di Amonkhet eclissano le tenebre della notte, costringendo i pipistrelli a cacciare nella semioscurità creata dalle frequenti tempeste di sabbia.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427858&type=card',
        language: 'Italian',
        multiverseid: 427858,
      },
      {
        name: '枯死コウモリ',
        text: '飛行\n{1}：ターン終了時まで、枯死コウモリは速攻を得る。',
        type: 'クリーチャー — ゾンビ・コウモリ',
        flavor:
          'アモンケットは二つの太陽により夜も暗くならない。コウモリの活動が活発になるのは頻発する砂嵐の暗がりの中だ。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428127&type=card',
        language: 'Japanese',
        multiverseid: 428127,
      },
      {
        name: '역병에 걸린 박쥐',
        text: '비행\n{1}: 역병에 걸린 박쥐는 턴종료까지 신속을 얻는다.',
        type: '생물 — 좀비 박쥐',
        flavor:
          '아몬케트는 두 개의 태양 때문에 밤에도 어둡지 않다. 이 때문에 이곳의 박쥐들은 때때로 몰아치는 모래폭풍 속 어둠에서 가장 활기가 넘친다.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428396&type=card',
        language: 'Korean',
        multiverseid: 428396,
      },
      {
        name: 'Morcego Ressecado',
        text: 'Voar\n{1}: Morcego Ressecado ganha ímpeto até o final do turno.',
        type: 'Criatura — Zumbi Morcego',
        flavor:
          'Os dois sóis de Amonkhet não permitem que haja escuridão durante a noite. Assim, os morcegos aproveitam as trevas das frequentes tempestades de areia.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428665&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428665,
      },
      {
        name: 'Нетопырь Порчи',
        text: 'Полет\n{1}: Нетопырь Порчи получает Ускорение до конца хода.',
        type: 'Существо — Зомби Летучая_мышь',
        flavor:
          'Два солнца Амонхета не оставляют места ночной темноте, и летучие мыши летают в полумраке частых песчаных бурь.',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428934&type=card',
        language: 'Russian',
        multiverseid: 428934,
      },
      {
        name: '枯萎蝙蝠',
        text: '飞行\n{1}：枯萎蝙蝠获得敏捷异能直到回合结束。',
        type: '生物～灵俑／蝙蝠',
        flavor:
          '有两个太阳的阿芒凯从无暗夜，因此蝙蝠大多出没于频繁沙暴笼罩的昏暗之中。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429203&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429203,
      },
      {
        name: '枯萎蝙蝠',
        text: '飛行\n{1}：枯萎蝙蝠獲得敏捷異能直到回合結束。',
        type: '生物～殭屍／蝙蝠',
        flavor:
          '有兩個太陽的阿芒凱從無暗夜，因此蝙蝠大多出沒於頻繁沙暴籠罩的昏暗之中。',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429472&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429472,
      },
    ],
    printings: ['AKH', 'AKR', 'JMP', 'MB1'],
    originalText: 'Flying\n{1}: Blighted Bat gains haste until end of turn.',
    originalType: 'Creature - Zombie Bat',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: '92ce39fc-734f-5f08-b6d0-8069dceca0e5',
  },
  {
    name: 'Scribe of the Mindful',
    manaCost: '{2}{U}',
    cmc: 3,
    colors: ['U'],
    colorIdentity: ['U'],
    type: 'Creature — Human Cleric',
    types: ['Creature'],
    subtypes: ['Human', 'Cleric'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: '{1}, {T}, Sacrifice Scribe of the Mindful: Return target instant or sorcery card from your graveyard to your hand.',
    flavor:
      '"The best answers solve more than one riddle."\n—Kefnet, god of knowledge',
    artist: 'Bastien L. Deharme',
    number: '68',
    power: '2',
    toughness: '2',
    layout: 'normal',
    multiverseid: '426770',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426770&type=card',
    foreignNames: [
      {
        name: 'Schreiberin des Achtsamen',
        text: '{1}, {T}, opfere die Schreiberin des Achtsamen: Bringe eine Spontanzauber- oder Hexerei-Karte deiner Wahl aus deinem Friedhof auf deine Hand zurück.',
        type: 'Kreatur — Mensch, Kleriker',
        flavor:
          '„Die besten Antworten lösen mehr als nur ein Rätsel." —Kefnet, Gott des Wissens',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427039&type=card',
        language: 'German',
        multiverseid: 427039,
      },
      {
        name: 'Escriba del Conocedor',
        text: '{1}, {T}, sacrificar a la Escriba del Conocedor: Regresa la carta de instantáneo o de conjuro objetivo de tu cementerio a tu mano.',
        type: 'Criatura — Clérigo humano',
        flavor:
          '"Las mejores respuestas resuelven más de un acertijo". —Kefnet, dios del conocimiento',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427308&type=card',
        language: 'Spanish',
        multiverseid: 427308,
      },
      {
        name: 'Scribe du Clairvoyant',
        text: "{1}, {T}, sacrifiez la Scribe du Clairvoyant : Renvoyez une carte d'éphémère ou de rituel ciblée depuis votre cimetière dans votre main.",
        type: 'Créature : humain et clerc',
        flavor:
          "« Les meilleures réponses résolvent plus d'une énigme. » —Kefnet, dieu de la Connaissance",
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427577&type=card',
        language: 'French',
        multiverseid: 427577,
      },
      {
        name: 'Scriba del Ponderante',
        text: '{1}, {T}, Sacrifica la Scriba del Ponderante: Riprendi in mano una carta istantaneo o stregoneria bersaglio dal tuo cimitero.',
        type: 'Creatura — Chierico Umano',
        flavor:
          '"Le risposte migliori risolvono più di un enigma." —Kefnet, dio della conoscenza',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427846&type=card',
        language: 'Italian',
        multiverseid: 427846,
      },
      {
        name: '周到の書記官',
        text: '{1}, {T}, 周到の書記官を生け贄に捧げる：あなたの墓地からインスタント・カード１枚かソーサリー・カード１枚を対象とし、それをあなたの手札に戻す。',
        type: 'クリーチャー — 人間・クレリック',
        flavor: '「最良の答えは多数の謎を解く。」 ――知識の神、ケフネト',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428115&type=card',
        language: 'Japanese',
        multiverseid: 428115,
      },
      {
        name: '신중의 서기',
        text: '{1}, {T}, 신중의 서기를 희생한다: 당신의 무덤에 있는 순간마법 또는 집중마법 카드를 목표로 정한다. 그 목표를 당신의 손으로 되돌린다.',
        type: '생물 — 인간 성직자',
        flavor:
          '"최고의 답은 한 번에 여러 수수께끼를 해결한다." —지식의 신 케프넷',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428384&type=card',
        language: 'Korean',
        multiverseid: 428384,
      },
      {
        name: 'Escriba do Consciente',
        text: '{1}, {T}, Sacrifique Escriba do Consciente: Devolva o card de mágica instantânea ou feitiço alvo de seu cemitério para sua mão.',
        type: 'Criatura — Humano Clérigo',
        flavor:
          '"As melhores respostas resolvem mais de um enigma." — Kefnet, deus do conhecimento',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428653&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428653,
      },
      {
        name: 'Переписчица Всеведущего',
        text: '{1}, {T}, пожертвуйте Переписчицу Всеведущего: верните целевую карту мгновенного заклинания или волшебства из вашего кладбища в вашу руку.',
        type: 'Существо — Человек Священник',
        flavor:
          '«Самые лучшие ответы подходят к нескольким загадкам». — Кефнет, бог знания',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428922&type=card',
        language: 'Russian',
        multiverseid: 428922,
      },
      {
        name: '心智神书吏',
        text: '{1}，{T}，牺牲心智神书吏：将目标瞬间或法术牌从你的坟墓场移回你手上。',
        type: '生物～人类／僧侣',
        flavor: '「最好的谜底能解答数个谜语。」 ～知识之神刻法涅',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429191&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429191,
      },
      {
        name: '心智神書吏',
        text: '{1}，{T}，犧牲心智神書吏：將目標瞬間或巫術牌從你的墳墓場移回你手上。',
        type: '生物～人類／僧侶',
        flavor: '「最好的謎底能解答數個謎語。」 ～知識之神刻法涅',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429460&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429460,
      },
    ],
    printings: ['AKH'],
    originalText:
      '{1}, {T}, Sacrifice Scribe of the Mindful: Return target instant or sorcery card from your graveyard to your hand.',
    originalType: 'Creature - Human Cleric',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: 'bb1562d6-544c-5034-b963-2c6f2793c6aa',
  },
  {
    name: 'Gust Walker',
    manaCost: '{1}{W}',
    cmc: 2,
    colors: ['W'],
    colorIdentity: ['W'],
    type: 'Creature — Human Wizard',
    types: ['Creature'],
    subtypes: ['Human', 'Wizard'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: "You may exert Gust Walker as it attacks. When you do, it gets +1/+1 and gains flying until end of turn. (An exerted creature won't untap during your next untap step.)",
    flavor: '"I\'m never unarmed."',
    artist: 'Jason Rainville',
    number: '17',
    power: '2',
    toughness: '2',
    layout: 'normal',
    multiverseid: '426719',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426719&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'You can’t exert a creature unless an effect allows you to do so. Similar effects that “tap and freeze” a creature (such as that of Decision Paralysis) don’t exert that creature.',
      },
      {
        date: '2017-04-18',
        text: 'If an exerted creature is already untapped during your next untap step (most likely because it had vigilance or an effect untapped it), exert’s effect preventing it from untapping expires without having done anything.',
      },
      {
        date: '2017-04-18',
        text: 'If you gain control of another player’s creature until end of turn and exert it, it will untap during that player’s untap step.',
      },
      {
        date: '2017-04-18',
        text: 'All cards in the Amonkhet set that let you exert a creature let you do so as you declare it as an attacking creature, as do some of the cards in the Hour of Devastation set. You can’t do so later in combat, and creatures put onto the battlefield attacking can’t be exerted. Any abilities that trigger on exerting an attacking creature will resolve before blockers are declared.',
      },
    ],
    foreignNames: [
      {
        name: 'Böenwanderer',
        text: 'Du kannst den Böenwanderer erschöpfen, sowie er angreift. Wenn du dies tust, erhält er +1/+1 und Flugfähigkeit bis zum Ende des Zuges. (Eine erschöpfte Kreatur enttappt nicht während deines nächsten Enttappsegments.)',
        type: 'Kreatur — Mensch, Zauberer',
        flavor:
          '„Ich trage vielleicht keine Waffen, aber ich bin niemals unbewaffnet."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426988&type=card',
        language: 'German',
        multiverseid: 426988,
      },
      {
        name: 'Caminavientos',
        text: 'Puedes espolear al Caminavientos en cuanto ataque. Cuando lo hagas, obtiene +1/+1 y gana la habilidad de volar hasta el final del turno. (Una criatura espoleada no se enderezará durante tu próximo paso de enderezar.)',
        type: 'Criatura — Hechicero humano',
        flavor: '"Nunca voy desarmado".',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427257&type=card',
        language: 'Spanish',
        multiverseid: 427257,
      },
      {
        name: 'Marcheur des rafales',
        text: "Vous pouvez surmener le Marcheur des rafales au moment où il attaque. Quand vous faites ainsi, il gagne +1/+1 et acquiert le vol jusqu'à la fin du tour. (Une créature surmenée ne se dégage pas pendant votre prochaine étape de dégagement.)",
        type: 'Créature : humain et sorcier',
        flavor: '« Je ne suis jamais désarmé. »',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427526&type=card',
        language: 'French',
        multiverseid: 427526,
      },
      {
        name: 'Calcaraffiche',
        text: 'Puoi stremare il Calcaraffiche mentre attacca. Quando lo fai, prende +1/+1 e ha volare fino alla fine del turno. (Una creatura stremata non STAPpa durante il tuo prossimo STAP.)',
        type: 'Creatura — Mago Umano',
        flavor: '"Non sono mai disarmato."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427795&type=card',
        language: 'Italian',
        multiverseid: 427795,
      },
      {
        name: '突風歩き',
        text: '突風歩きが攻撃するに際し、あなたはこれを督励してもよい。そうしたとき、ターン終了時まで、これは＋１/＋１の修整を受けるとともに飛行を得る。（督励されたクリーチャーは、あなたの次のアンタップ・ステップにアンタップしない。）',
        type: 'クリーチャー — 人間・ウィザード',
        flavor: '「私が丸腰でいることはない。」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428064&type=card',
        language: 'Japanese',
        multiverseid: 428064,
      },
      {
        name: '질풍 보행자',
        text: '당신은 질풍 보행자로 공격을 선언하면서 질풍 보행자를 분전시킬 수 있다. 그렇게 할 때, 질풍 보행자는 턴종료까지 +1/+1을 받고 비행을 얻는다. (분전한 생물은 당신의 다음 언탭단에 언탭되지 않는다.)',
        type: '생물 — 인간 마법사',
        flavor: '"난 언제나 방비 상태야."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428333&type=card',
        language: 'Korean',
        multiverseid: 428333,
      },
      {
        name: 'Caminhante das Rajadas',
        text: 'Você pode exaurir Caminhante das Rajadas conforme ele ataca. Quando você faz isso, ele recebe +1/+1 e ganha voar até o final do turno. (Uma criatura exaurida não será desvirada durante sua próxima etapa de desvirar.)',
        type: 'Criatura — Humano Mago',
        flavor: '"Eu nunca estou desarmado."',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428602&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428602,
      },
      {
        name: 'Путник Ветра',
        text: 'Вы можете подстегнуть Путника Ветра в момент его атаки. Когда вы это делаете, он получает +1/+1 и Полет до конца хода. (Подстегнутое существо не разворачивается во время вашего следующего шага разворота.)',
        type: 'Существо — Человек Чародей',
        flavor: '«Я никогда не бываю без оружия».',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428871&type=card',
        language: 'Russian',
        multiverseid: 428871,
      },
      {
        name: '踏风客',
        text: '你可以于踏风客攻击时耗竭之。当你如此作时，直到回合结束，它得+1/+1且获得飞行异能。（已耗竭的生物于你的下一个重置步骤中不能重置。）',
        type: '生物～人类／法术师',
        flavor: '「我永远不会缺武器用。」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429140&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429140,
      },
      {
        name: '踏風客',
        text: '你可以於踏風客攻擊時耗竭之。當你如此作時，直到回合結束，它得+1/+1且獲得飛行異能。（已耗竭的生物於你的下一個重置步驟中不能重置。）',
        type: '生物～人類／魔法師',
        flavor: '「我永遠不會缺武器用。」',
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429409&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429409,
      },
    ],
    printings: ['AKH', 'AKR', 'MB1'],
    originalText:
      "You may exert Gust Walker as it attacks. When you do, it gets +1/+1 and gains flying until end of turn. (An exerted creature won't untap during your next untap step.)",
    originalType: 'Creature - Human Wizard',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Penny',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: 'c5c0d76d-90a0-5b21-b73a-10de83a321c9',
  },
  {
    name: 'Sacred Cat',
    manaCost: '{W}',
    cmc: 1,
    colors: ['W'],
    colorIdentity: ['W'],
    type: 'Creature — Cat',
    types: ['Creature'],
    subtypes: ['Cat'],
    rarity: 'Common',
    set: 'AKH',
    setName: 'Amonkhet',
    text: "Lifelink\nEmbalm {W} ({W}, Exile this card from your graveyard: Create a token that's a copy of it, except it's a white Zombie Cat with no mana cost. Embalm only as a sorcery.)",
    artist: 'Zezhou Chen',
    number: '27',
    power: '1',
    toughness: '1',
    layout: 'normal',
    multiverseid: '426729',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426729&type=card',
    rulings: [
      {
        date: '2017-04-18',
        text: 'For each card with embalm, a corresponding game play supplement token can be found in some Amonkhet booster packs. These supplements are not required to play with cards with embalm; you can use the same items to represent an embalmed token as you would any other token.',
      },
      {
        date: '2017-04-18',
        text: 'The token copies exactly what was printed on the original card and nothing else. It doesn’t copy any information about the object the card was before it was put into your graveyard.',
      },
      {
        date: '2017-04-18',
        text: 'The token is a Zombie in addition to its other types and is white instead of its other colors. It has no mana cost, and thus its converted mana cost is 0. These are copiable values of the token that other effects may copy.',
      },
      {
        date: '2017-07-14',
        text: 'If a spell or ability puts a creature card with embalm into your graveyard during your main phase, you’ll have priority immediately after that spell or ability resolves. You can activate the creature card’s embalm ability before any player can exile it with an effect, such as that of Crook of Condemnation, if it’s legal for you to do so.',
      },
      {
        date: '2017-07-14',
        text: 'Once you’ve activated an embalm ability, the card is immediately exiled. Opponents can’t try to stop the ability by exiling the card with an effect such as that of Crook of Condemnatnion.',
      },
    ],
    foreignNames: [
      {
        name: 'Heilige Katze',
        text: 'Lebensverknüpfung\nEinbalsamieren {W} ({W}, schicke diese Karte aus deinem Friedhof ins Exil: Erzeuge einen Spielstein, der eine Kopie von ihr ist, außer dass er eine weiße Zombie-Katze ohne Manakosten ist. Spiele Einbalsamieren wie eine Hexerei.)',
        type: 'Kreatur — Katze',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426998&type=card',
        language: 'German',
        multiverseid: 426998,
      },
      {
        name: 'Gato sagrado',
        text: 'Vínculo vital.\nEmbalsamar {W}. ({W}, exiliar esta carta de tu cementerio: Crea una ficha que es una copia de esta carta, excepto que es un Felino Zombie blanco sin coste de maná. Activa la habilidad de embalsamar solo como un conjuro.)',
        type: 'Criatura — Felino',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427267&type=card',
        language: 'Spanish',
        multiverseid: 427267,
      },
      {
        name: 'Chat sacré',
        text: "Lien de vie\nEmbaumement {W} ({W}, exilez cette carte de votre cimetière : Créez un jeton qui en est une copie, excepté que c'est un zombie et chat blanc sans coût de mana. N'utilisez l'embaumement que lorsque vous pourriez lancer un rituel.)",
        type: 'Créature : chat',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427536&type=card',
        language: 'French',
        multiverseid: 427536,
      },
      {
        name: 'Gatto Sacro',
        text: 'Legame vitale\nImbalsamare {W} ({W}, Esilia questa carta dal tuo cimitero: Crea una pedina che è una copia della carta, tranne che è un Felino Zombie bianco senza costo di mana. Imbalsama solo quando potresti lanciare una stregoneria.)',
        type: 'Creatura — Felino',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=427805&type=card',
        language: 'Italian',
        multiverseid: 427805,
      },
      {
        name: '聖なる猫',
        text: '絆魂\n不朽{W}（{W}, あなたの墓地からこのカードを追放する：マナ・コストを持たない白のゾンビ・猫であることを除きこれのコピーであるトークンを１体生成する。不朽はソーサリーとしてのみ行う。）',
        type: 'クリーチャー — 猫',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428074&type=card',
        language: 'Japanese',
        multiverseid: 428074,
      },
      {
        name: '신성한 고양이',
        text: '생명연결\n방부처리 {W} ({W}, 이 카드를 당신의 무덤에서 추방한다: 이 카드의 복사본인 토큰 한 개를 만든다. 단, 그 토큰은 마나 비용이 없는 백색 좀비 고양이다. 당신이 집중마법을 발동할 수 있는 시기에만 방부처리를 할 수 있다.)',
        type: '생물 — 고양이',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428343&type=card',
        language: 'Korean',
        multiverseid: 428343,
      },
      {
        name: 'Gato Sagrado',
        text: 'Vínculo com a vida\nEmbalsamar {W} ({W}, Exile este card de seu cemitério: Crie uma ficha que seja uma cópia dele, com a exceção de ser um Zumbi Felino branco sem custo de mana. Embalsame somente como um feitiço.)',
        type: 'Criatura — Felino',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428612&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 428612,
      },
      {
        name: 'Священная Кошка',
        text: 'Цепь жизни\nБальзамирование {W} ({W}, изгоните эту карту из вашего кладбища: создайте фишку, являющуюся ее копией, но при этом являющуюся белой Зомби Кошкой без мана-стоимости. Бальзамируйте только как волшебство.)',
        type: 'Существо — Кошка',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=428881&type=card',
        language: 'Russian',
        multiverseid: 428881,
      },
      {
        name: '圣猫',
        text: '系命\n遗存{W}（{W}，从你的坟墓场放逐此牌：派出一个衍生物，且为此牌的复制品，但它是白色灵俑／猫，且没有法术力费用。遗存的时机视同法术。）',
        type: '生物～猫',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429150&type=card',
        language: 'Chinese Simplified',
        multiverseid: 429150,
      },
      {
        name: '聖貓',
        text: '繫命\n遺存{W}（{W}，從你的墳墓場放逐此牌：派出一個衍生物，且為此牌的複製品，但它是白色殭屍／貓，且沒有魔法力費用。遺存的時機視同巫術。）',
        type: '生物～貓',
        flavor: null,
        imageUrl:
          'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429419&type=card',
        language: 'Chinese Traditional',
        multiverseid: 429419,
      },
    ],
    printings: ['AKH', 'AKR', 'MB1'],
    originalText:
      "Lifelink\nEmbalm {W} ({W}, Exile this card from your graveyard: Create a token that's a copy of it, except it's a white Zombie Cat with no mana cost. Embalm only as a sorcery.)",
    originalType: 'Creature - Cat',
    legalities: [
      {
        format: 'Commander',
        legality: 'Legal',
      },
      {
        format: 'Duel',
        legality: 'Legal',
      },
      {
        format: 'Explorer',
        legality: 'Legal',
      },
      {
        format: 'Gladiator',
        legality: 'Legal',
      },
      {
        format: 'Historic',
        legality: 'Legal',
      },
      {
        format: 'Historicbrawl',
        legality: 'Legal',
      },
      {
        format: 'Legacy',
        legality: 'Legal',
      },
      {
        format: 'Modern',
        legality: 'Legal',
      },
      {
        format: 'Oathbreaker',
        legality: 'Legal',
      },
      {
        format: 'Pauper',
        legality: 'Legal',
      },
      {
        format: 'Paupercommander',
        legality: 'Legal',
      },
      {
        format: 'Pioneer',
        legality: 'Legal',
      },
      {
        format: 'Vintage',
        legality: 'Legal',
      },
    ],
    id: 'f377cbcf-5dbc-5b11-82f8-40f6ad3b52e2',
  },
];
