// 1.引入文件
// const fs = require('fs')
// const path = require('path')
const Mock = require('mockjs')
const JSON5 = require('json5');

//2.读取json文件
// function getJsonFile(filePath) {
//     //读取指定的json文件
//     var json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
//     // 解析并返回
//     return JSON5.parse(json);
// }

const produceNewsData = function () {
  // var json = fs.readFileSync('@/assets/table.json')
  return [
    {
      "visits_count": 4341024,
      "name": "智能座舱的秘密",
      "banner": "https://pic1.zhimg.com/50/v2-8ddcf22c8787758d6e1e921049842723_720w.jpg?source=b1f6dc53",
      "logo": "https://pic2.zhimg.com/50/v2-d81e4ce90a238a04454ba74dc214a93a_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic1.zhimg.com/50/v2-b5badfc04aff042361f6bf8fc2347797_720w.jpg?source=b1f6dc53",
      "url_token": "znzcdmm",
      "include_count": 167
    },
    {
      "visits_count": 3945133,
      "name": "一部电竞手机的修养",
      "banner": "https://pic2.zhimg.com/50/v2-29ac23b921a5695b0f80f6001c861025_720w.jpg?source=b1f6dc53",
      "logo": "https://pica.zhimg.com/50/v2-8695d99d1cb0fc55097fc254f86530a1_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic1.zhimg.com/50/v2-1a981c01a0fa0f0b530a18e225d4c325_720w.jpg?source=b1f6dc53",
      "url_token": "yibudianjingshoujide",
      "include_count": 13
    },
    {
      "visits_count": 217960197,
      "name": "砸钱医美就够了吗？",
      "banner": "https://pica.zhimg.com/50/v2-2de8fc03db009031d1fc48e4afc9f4cf_720w.jpg?source=b1f6dc53",
      "logo": "https://pic2.zhimg.com/50/v2-3c3a55d763a5e2d91f94b9d35283858f_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic2.zhimg.com/50/v2-b74f2b2aff0fa11bad9e77c718f241bc_720w.jpg?source=b1f6dc53",
      "url_token": "zaqianyimeijiugoulema",
      "include_count": 28
    },
    {
      "visits_count": 1171699,
      "name": "后疫情时代的心理",
      "banner": "https://pic1.zhimg.com/50/v2-e9a933d6aea878cba6f17a37c38311c6_720w.jpg?source=b1f6dc53",
      "logo": "https://pic3.zhimg.com/50/v2-70571dd7fd6908102b930ddb554e558b_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic2.zhimg.com/50/v2-708ea08d28113b7258f45dd9ba07f8a2_720w.jpg?source=b1f6dc53",
      "url_token": "houyiqingshidaidexin",
      "include_count": 30
    },
    {
      "visits_count": 13091844,
      "name": "敏感肌总是反复怎么办？",
      "banner": "https://pic2.zhimg.com/50/v2-79953147f87257ec3ebb2f140a3d8d9a_720w.jpg?source=b1f6dc53",
      "logo": "https://pic3.zhimg.com/50/v2-6f934a76f4d6102ebed4eed2946d4b07_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic2.zhimg.com/50/v2-fe3c6b243024ac76967668d1a069714c_720w.jpg?source=b1f6dc53",
      "url_token": "suxiushuang",
      "include_count": 26
    },
    {
      "visits_count": 23895194,
      "name": "硬核粉丝大考 | 显微镜下看哥谭",
      "banner": "https://pic1.zhimg.com/50/v2-0402589106c64fffde9003ce12822ed0_720w.jpg?source=b1f6dc53",
      "logo": "https://pic4.zhimg.com/50/v2-d2fe53408e96da9c838f0daccc98665f_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic1.zhimg.com/50/v2-a7d92d4bb06f81bb1511f4f69724f4fb_720w.jpg?source=b1f6dc53",
      "url_token": "thebatman2022",
      "include_count": 253
    },
    {
      "visits_count": 177103637,
      "name": "开学装备大作战 2022",
      "banner": "https://pic2.zhimg.com/50/v2-5837b89d3ae28eba811aed8d179d61c3_720w.jpg?source=b1f6dc53",
      "logo": "https://pica.zhimg.com/50/v2-ebb169372bc52a9991b3e5c53e99cc82_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic3.zhimg.com/50/v2-37a5d7fbfd71cacdaeb9bbbd08b77395_720w.jpg?source=b1f6dc53",
      "url_token": "chunjikaixue2022",
      "include_count": 387
    },
    {
      "visits_count": 7941733,
      "name": "什么是双相情感障碍？",
      "banner": "https://pic1.zhimg.com/50/v2-cba89fd9e63a11aaf0b4a422fce1f95a_720w.jpg?source=b1f6dc53",
      "logo": "https://pic1.zhimg.com/50/v2-3558d050124533dcab7e5c396e2179b1_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic2.zhimg.com/50/v2-cba89fd9e63a11aaf0b4a422fce1f95a_720w.jpg?source=b1f6dc53",
      "url_token": "shuangxiangqinggan",
      "include_count": 16
    },
    {
      "visits_count": 3056859,
      "name": "春日「城」会玩",
      "banner": "https://pic2.zhimg.com/50/v2-db78d349d42a09bd2e9fe69cba61bb2b_720w.jpg?source=b1f6dc53",
      "logo": "https://pic2.zhimg.com/50/v2-d98c384850b2b5734d83af5678916813_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic3.zhimg.com/50/v2-e1edeaa8c6faf89daf3efb121f92ecde_720w.jpg?source=b1f6dc53",
      "url_token": "springtravelincity",
      "include_count": 236
    },
    {
      "visits_count": 1748063,
      "name": "家装真探社 | 甲醛隐藏了多少秘密？",
      "banner": "https://pic1.zhimg.com/50/v2-eb31c3ca68f071bb5568067c03ab1ee3_720w.jpg?source=b1f6dc53",
      "logo": "https://pica.zhimg.com/50/v2-393a0b75795102a47c3de0ca7d50e8f5_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pica.zhimg.com/50/v2-2593a427f20ac7f830da1602070d279c_720w.jpg?source=b1f6dc53",
      "url_token": "hchosecrets",
      "include_count": 66
    },
    {
      "visits_count": 55236063,
      "name": "美的千万种方式",
      "banner": "https://pic2.zhimg.com/50/v2-5a9d52f40bc711e69b9ed544ed26be8b_720w.jpg?source=b1f6dc53",
      "logo": "https://pic1.zhimg.com/50/v2-977a853272410cbfa6d96368dd594f3e_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pica.zhimg.com/50/v2-89f61fa67b53390a417c61a59f37d4ba_720w.jpg?source=b1f6dc53",
      "url_token": "mdqwzfs",
      "include_count": 64
    },
    {
      "visits_count": 728117273,
      "name": "有盐、有趣的历史故事",
      "banner": "https://pic2.zhimg.com/50/v2-73c6c52df6ca08e87334ccbf67839299_720w.jpg?source=b1f6dc53",
      "logo": "https://pic1.zhimg.com/50/v2-885594d1883f08c9ba589684af7e99d1_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic2.zhimg.com/50/v2-46a791d23b0fb761bc5130373e64065e_720w.jpg?source=b1f6dc53",
      "url_token": "zfj123456",
      "include_count": 40
    },
    {
      "visits_count": 3973767,
      "name": "女性的情感与人生幸福",
      "banner": "https://pic1.zhimg.com/50/v2-ad3f00832cd316946c4333a86942d8d0_720w.jpg?source=b1f6dc53",
      "logo": "https://pic1.zhimg.com/50/v2-8df2a412f76bd9066aaf6a3cfedb6860_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic1.zhimg.com/50/v2-a7c96d190b8fe81a2ca328125e26b14b_720w.jpg?source=b1f6dc53",
      "url_token": "nvxingdiqingganyuren",
      "include_count": 15
    },
    {
      "visits_count": 63518274,
      "name": "健康最懂她",
      "banner": "https://pica.zhimg.com/50/v2-ff512dba9f19928704c300cbc3d81312_720w.jpg?source=b1f6dc53",
      "logo": "https://pic3.zhimg.com/50/v2-cd1d7fe56d18cb6e386410ef970b7eef_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic3.zhimg.com/50/v2-840aac55b77d6d5d2e18d53cf0b9c285_720w.jpg?source=b1f6dc53",
      "url_token": "nvta",
      "include_count": 62
    },
    {
      "visits_count": 32393220,
      "name": "你比想象中「甜」",
      "banner": "https://pic2.zhimg.com/50/v2-6f352e727566fba2cc45a4c3e54612d8_720w.jpg?source=b1f6dc53",
      "logo": "https://pica.zhimg.com/50/v2-13309e40ce3469fc927c764233fc5e2d_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic3.zhimg.com/50/v2-da69141ca32f716bf92f194bd14f45fd_720w.jpg?source=b1f6dc53",
      "url_token": "marchsosweet",
      "include_count": 73
    },
    {
      "visits_count": 3407514,
      "name": "知食节｜一口吃出春滋味",
      "banner": "https://pic1.zhimg.com/50/v2-1b205903973fae14ccdf939e004bba70_720w.jpg?source=b1f6dc53",
      "logo": "https://pic3.zhimg.com/50/v2-a74c8141f7e95b5ec2f81386961237da_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic2.zhimg.com/50/v2-a00f59c7ac8cd8c4fe187533feafaf8b_720w.jpg?source=b1f6dc53",
      "url_token": "yikouchichuchunziwei",
      "include_count": 181
    },
    {
      "visits_count": 1015116,
      "name": "了不起的成分党｜换季危「肌」",
      "banner": "https://pic2.zhimg.com/50/v2-028cf438e2f9d26757a8c5d51d4eb245_720w.jpg?source=b1f6dc53",
      "logo": "https://pica.zhimg.com/50/v2-0fb6be564ef939d60c6f92e9bf8ac021_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic2.zhimg.com/50/v2-6ca2b4c6c8fa1552b88af81cbbd69d49_720w.jpg?source=b1f6dc53",
      "url_token": "zhengjiuhuanjiweiji",
      "include_count": 172
    },
    {
      "visits_count": 2016222,
      "name": "教练，我想做好项目管理",
      "banner": "https://pic1.zhimg.com/50/v2-56293f283c04143aa17b704bc39f6c95_720w.jpg?source=b1f6dc53",
      "logo": "https://pic2.zhimg.com/50/v2-e57952181b74692e59a110a9a0db9c96_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic1.zhimg.com/50/v2-06d7538f7a291fb8402f4f0cd8a67e9e_720w.jpg?source=b1f6dc53",
      "url_token": "xmgl",
      "include_count": 5
    },
    {
      "visits_count": 63785096,
      "name": "护肤品抗老功效真相",
      "banner": "https://pic3.zhimg.com/50/v2-8d72f1b277a843585410bf421f49db86_720w.jpg?source=b1f6dc53",
      "logo": "https://pic4.zhimg.com/50/v2-4626fbc8e10931231b052f2ac6bfa41e_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic2.zhimg.com/50/v2-8d72f1b277a843585410bf421f49db86_720w.jpg?source=b1f6dc53",
      "url_token": "hufupinkanglaogongxi",
      "include_count": 33
    },
    {
      "visits_count": 259696721,
      "name": "考研复试调剂进行时",
      "banner": "https://pic3.zhimg.com/50/v2-8de214b061d93ef64b38f0d163663cbf_720w.jpg?source=b1f6dc53",
      "logo": "https://pica.zhimg.com/50/v2-ac42face9cbbee0f55444e1e882c1ddb_720w.jpg?source=b1f6dc53",
      "tiny_banner": "https://pic2.zhimg.com/50/v2-995f75eeb59b1297e22f141bce4cb669_720w.jpg?source=b1f6dc53",
      "url_token": "kyfstjjxs",
      "include_count": 112
    }
  ]
}
const produceNewsData1 = function () {
  // var json = fs.readFileSync('@/assets/special.json')

  return [
    {
      "view_count": 261070385,
      "followers_count": 214,
      "is_following": false,
      "title": "大众心理健康洞察报告",
      "introduction": "【简单心理×知乎情感】3月17日简单心理连续第六年发布《大众心理健康洞察报告》，2021年心理健康行业有了哪些新的发展？大众最关心的心理健康议题有哪些？来知乎一起参与讨论~ ",
      "section_list": [
        {
          "section_id": "1489567341540900864",
          "section_title": "本次报告有哪些值得关注的信息？"
        }
      ],
      "banner": "https://pic2.zhimg.com/100/v2-3524310b9c7293af17c89e017926cfa5_hd.png",
      "updated": 1648185923,
      "id": "1489566654917406720"
    },
    {
      "view_count": 324859742,
      "followers_count": 3213,
      "is_following": false,
      "title": "东航 MU5735 发生飞行事故",
      "introduction": "2022 年 3 月 21 日东航一架昆明飞广州航班发生飞行事故，机上人员共 132 人，其中旅客 123 人、机组 9 人。",
      "section_list": [
        {
          "section_id": "1489315030465806336",
          "section_title": "焦点关注"
        },
        {
          "section_id": "1489284937350545408",
          "section_title": "技术解读"
        },
        {
          "section_id": "1489286480825106432",
          "section_title": "市场影响"
        },
        {
          "section_id": "1489289462043963393",
          "section_title": "直击现场"
        },
        {
          "section_id": "1489294631498543104",
          "section_title": "延伸讨论"
        },
        {
          "section_id": "1490816248477323264",
          "section_title": "辟谣专栏"
        }
      ],
      "banner": "https://pic3.zhimg.com/100/v2-20ee74557d949db036f7e83fb879ecce_hd.png",
      "updated": 1648703583,
      "id": "1489278695319343104"
    },
    {
      "view_count": 8814852,
      "followers_count": 46,
      "is_following": false,
      "title": "湖南生物多样「知」美",
      "introduction": "湖南位于我国东南腹地，长江中游，东南西三面环山，中部、北部低平，形成向北开口的马蹄形盆地。重峦叠嶂的山脉与洞庭湖、湘江，构建出了湖南生物的多样性。 ",
      "section_list": [
        {
          "section_id": "1489271489493463040",
          "section_title": "形态各异"
        },
        {
          "section_id": "1489272948905570304",
          "section_title": "丰富多彩"
        },
        {
          "section_id": "1489273519482052608",
          "section_title": "多样守护"
        }
      ],
      "banner": "https://pic2.zhimg.com/100/v2-804b28ee8a10f616773cf208363072c1_hd.png",
      "updated": 1647851808,
      "id": "1489271418085339136"
    },
    {
      "view_count": 165833816,
      "followers_count": 78,
      "is_following": false,
      "title": "知乎媒体每周看点0314～0320",
      "introduction": "本周知友最关注的媒体热点问答和视频有哪些？@知乎小红星为你一榜打尽。",
      "section_list": [
        {
          "section_id": "1489262630304497664",
          "section_title": "热门问题"
        },
        {
          "section_id": "1489262660549705728",
          "section_title": "热门视频"
        },
        {
          "section_id": "1489262682926276608",
          "section_title": "热门回答"
        }
      ],
      "banner": "https://pic1.zhimg.com/100/v2-68fc56fdebee99bad8c3d0e8e144d7f4_hd.png",
      "updated": 1647860044,
      "id": "1489262229329866752"
    },
    {
      "view_count": 7420238,
      "followers_count": 13,
      "is_following": false,
      "title": "益生菌冷知识科普",
      "introduction": "随着季节更替，我们自身的状态也在悄悄地发生变化，身体状态不佳的情况时常发生，但你可能有所不知，这些小状况往往是因为人体微生态不平衡导致的，还好，有进口益生菌守护平衡，它可以全面「菌」衡营养，呵护我们肠道健康～本次专题，带你探索「益生菌」的奇妙世界～",
      "section_list": [
        {
          "section_id": "1488119651313410048",
          "section_title": "益生菌知多少"
        },
        {
          "section_id": "1488119698185732096",
          "section_title": "肠胃小卫士"
        },
        {
          "section_id": "1488119741809750016",
          "section_title": "你的健康我来守护"
        }
      ],
      "banner": "https://pic3.zhimg.com/100/v2-86dcb780febf41b48c95cba4265f023e_hd.png",
      "updated": 1648097808,
      "id": "1488119519394181121"
    },
    {
      "view_count": 6100353,
      "followers_count": 100,
      "is_following": false,
      "title": "Redmi K50 新品「全方位深度解析」",
      "introduction": "3月17日 Redmi 发布会以「狠超想象」为主题带着 Redmi K50 全新亮相，堪称「旗舰焊门员」的它是否能再续硬核全能体验？到底是不是一款「性价比神机」？快来查收 Redmi K50 全方位深度解析，带你抢先见证「焊门奇迹」。",
      "section_list": [
        {
          "section_id": "1488155196014784512",
          "section_title": "旗舰焊门员"
        },
        {
          "section_id": "1487802317700968448",
          "section_title": "性价比神机"
        },
        {
          "section_id": "1487802366397751296",
          "section_title": "直屏王者"
        },
        {
          "section_id": "1487802408491806720",
          "section_title": "狠超期待"
        }
      ],
      "banner": "https://pic2.zhimg.com/100/v2-b5f6b3f41156f0ee5b8f8050c8000715_hd.png",
      "updated": 1647842142,
      "id": "1487802151645143040"
    },
    {
      "view_count": 16590510,
      "followers_count": 1077,
      "is_following": false,
      "title": "美股动态聚焦",
      "introduction": "关注美股走势和行业动态",
      "section_list": [
        {
          "section_id": "1487558620124082176",
          "section_title": "美股走势"
        },
        {
          "section_id": "1487561585313423360",
          "section_title": "热点解读"
        },
        {
          "section_id": "1487571373053128704",
          "section_title": "美股知识"
        }
      ],
      "banner": "https://pic2.zhimg.com/100/v2-2377a09199a2fefb9e3bbd39781bf415_hd.png",
      "updated": 1647923344,
      "id": "1487558057572425728"
    },
    {
      "view_count": 21986155,
      "followers_count": 4,
      "is_following": false,
      "title": "滋养彼此，孕育新生",
      "introduction": "父母带孩子来感受世间美好，体味人间温暖；孩子让父母的生活出现新的未知与惊喜，漫漫人生路绽放新的浪漫。爱乐维，以科学营养，从备孕到哺乳，全程精心守护，关爱女性心理健康，帮助母亲和孩子滋养彼此，孕育新生！",
      "section_list": [
        {
          "section_id": "1489615286508191745",
          "section_title": "爱是双向流动的滋养"
        },
        {
          "section_id": "1489615764768780288",
          "section_title": "有种力量叫“我们懂你“"
        },
        {
          "section_id": "1489615236093636608",
          "section_title": "科学营养，孕育新生"
        }
      ],
      "banner": "https://pic1.zhimg.com/100/v2-08bb4c2cbc7e9db60f57c044ebb71738_hd.png",
      "updated": 1648787348,
      "id": "1487469803308322816"
    },
    {
      "view_count": 16119846,
      "followers_count": 455,
      "is_following": false,
      "title": "网络路由解惑情报局",
      "introduction": "路由器该怎么选？这是一个很让人纠结的问题。家用路由选用应该选入门级吗？电竞路由该选购什么样的合适？办公路由怎样升级？路由器还有哪些有意思的小知识？看完本专题，你就全知道了。",
      "section_list": [
        {
          "section_id": "1487408634686177280",
          "section_title": "家庭路由入门说"
        },
        {
          "section_id": "1487408678571188224",
          "section_title": "电竞路由选购攻略"
        },
        {
          "section_id": "1487408717569765376",
          "section_title": "办公路由升级指南"
        },
        {
          "section_id": "1487408756720279552",
          "section_title": "路由趣谈"
        }
      ],
      "banner": "https://pic1.zhimg.com/100/v2-902431ca4f86dc52e1010338d4e88c44_hd.png",
      "updated": 1648022374,
      "id": "1487408467744493568"
    },
    {
      "view_count": 433930,
      "followers_count": 40,
      "is_following": false,
      "title": "新青年 新峯范 ",
      "introduction": "随着在首钢滑雪大跳台奋力一跃，「玉娇龙」刷新战绩，更重新定义了偶像顶流。当勇攀峯境成为精神主流，什么是你眼中的新青年范儿？高燃阵地来袭，峯范北京邀你一起，解锁精神能量场，创造新青年峯范~ ",
      "section_list": [
        {
          "section_id": "1487379516913438720",
          "section_title": "这就是新首钢"
        },
        {
          "section_id": "1487385823155273728",
          "section_title": "初识峯范北京"
        },
        {
          "section_id": "1487407492347334657",
          "section_title": "遇见高知阵地"
        },
        {
          "section_id": "1490760162072301568",
          "section_title": "榜样力量"
        }
      ],
      "banner": "https://pic2.zhimg.com/100/v2-69cf42fb25aaf02ad45b6718a5679bed_hd.png",
      "updated": 1648205078,
      "id": "1487379327901241344"
    },
    {
      "view_count": 90777881,
      "followers_count": 33,
      "is_following": false,
      "title": "对肠道健康Say Yep",
      "introduction": "肠胃不好是什么体验？嗯嗯不畅、有口气、皮肤状况差……都带来许多困扰。风很大的益生菌到底什么原理？汤臣倍健 Yep 跟你一起深扒肠道健康真相，打开肠道健康正确的操作方式！",
      "section_list": [
        {
          "section_id": "1487083772797042688",
          "section_title": "肠道烦恼知多少"
        },
        {
          "section_id": "1487094654877802496",
          "section_title": "从[肠]计议方法论"
        },
        {
          "section_id": "1487109038818816000",
          "section_title": "[益]生菌必入指南"
        }
      ],
      "banner": "https://pic3.zhimg.com/100/v2-3998af7b7605255d6171ecff534bd89e_hd.png",
      "updated": 1647584640,
      "id": "1487082981072629760"
    },
    {
      "view_count": 20662967,
      "followers_count": 76,
      "is_following": false,
      "title": "多「知」多彩 云南答案 ",
      "introduction": "城市是人文艺术的载体，人文艺术是城市的灵魂。当人文艺术不断影响人类向美的目标前进时，城市的内涵被丰富，人文艺术的外延被扩大。微缩到云南时，人文艺术又是如何在安逸闲乐的氛围中发酵蔓延，与城市的发展相得益彰的？关于云南人文艺术的疑问，可以在这里找到答案。 ",
      "section_list": [
        {
          "section_id": "1486766964324954112",
          "section_title": "清谈云南"
        },
        {
          "section_id": "1486767897289109505",
          "section_title": "文林拾遗"
        },
        {
          "section_id": "1486769010796183552",
          "section_title": "春见文华"
        },
        {
          "section_id": "1486769749069193216",
          "section_title": "多彩华章"
        },
        {
          "section_id": "1486770873306185728",
          "section_title": "今昔鸿儒"
        }
      ],
      "banner": "https://pic1.zhimg.com/100/v2-9516ba04da2be7209148de8430082df4_hd.png",
      "updated": 1647409971,
      "id": "1486766823765417985"
    },
    {
      "view_count": 5578491,
      "followers_count": 103,
      "is_following": false,
      "title": "《艾尔登法环》应该怎么玩？",
      "introduction": "魂类游戏的难度不用多说，艾尔登法环也自然不是一键通关的游戏，但一如既往，宫崎英高的怜悯，都有哪些？",
      "section_list": [
        {
          "section_id": "1486753020746244097",
          "section_title": "从头开始"
        },
        {
          "section_id": "1486753038672678912",
          "section_title": "新人保姆"
        },
        {
          "section_id": "1486753061540032512",
          "section_title": "十八般兵器"
        },
        {
          "section_id": "1486753078355800064",
          "section_title": "BOSS 之战"
        },
        {
          "section_id": "1486783089447317504",
          "section_title": "视频指引"
        }
      ],
      "banner": "https://pic3.zhimg.com/100/v2-3c38a0f4b03454e76bb603af4e12ac12_hd.png",
      "updated": 1647575928,
      "id": "1486752853846417408"
    },
    {
      "view_count": 7465700,
      "followers_count": 109,
      "is_following": false,
      "title": "《艾尔登法环》剧情大揭秘",
      "introduction": "艾尔登法环延续了 FS 社的一贯风格，碎片化叙事依旧让人着迷，在这些让人细思恐极的细节背后，来一次剧情大揭秘吧！",
      "section_list": [
        {
          "section_id": "1486781419314061312",
          "section_title": "环学登场"
        },
        {
          "section_id": "1486737911857393664",
          "section_title": "史诗故事"
        },
        {
          "section_id": "1486737929577467904",
          "section_title": "结局解密"
        },
        {
          "section_id": "1486737947819446272",
          "section_title": "细节考究"
        },
        {
          "section_id": "1486737991473668096",
          "section_title": "「恋爱养成」"
        }
      ],
      "banner": "https://pic3.zhimg.com/100/v2-3c38a0f4b03454e76bb603af4e12ac12_hd.png",
      "updated": 1647428619,
      "id": "1486737580373155840"
    },
    {
      "view_count": 11237038,
      "followers_count": 45,
      "is_following": false,
      "title": "打开春天的正确姿势",
      "introduction": "俗话说「吃了春分饭，一天长一线」，春分来了，你会做些什么呢？ 是出门游玩，感受沾衣欲湿杏花雨，浅草才能没马蹄？是在家中晒太阳，惬意的杨柳秋千院中，就暖前檐坐，看日高花影重？还是准备好时令美食，跟家人朋友一起尝尝鲜？ 不管是美好的景色，盎然的生机，清新的食材，还是单纯美好的春天，都不可少了你的参与～",
      "section_list": [
        {
          "section_id": "1486709965730033664",
          "section_title": "春天尝鲜指南"
        },
        {
          "section_id": "1486710006799667200",
          "section_title": "春天果蔬总动员"
        },
        {
          "section_id": "1486710074358304768",
          "section_title": "花儿朵朵开"
        },
        {
          "section_id": "1486710118267592704",
          "section_title": "春时令冷知识大赏"
        }
      ],
      "banner": "https://pic2.zhimg.com/100/v2-f1e65b7cf9cc4fecf20a65d77ee7f7dd_hd.png",
      "updated": 1647447285,
      "id": "1486709822153928704"
    },
    {
      "view_count": 127716567,
      "followers_count": 121,
      "is_following": false,
      "title": "知乎媒体每周看点0307～0313",
      "introduction": "本周知友最关注的媒体热点问答和视频有哪些？@知乎小红星为你一榜打尽。",
      "section_list": [
        {
          "section_id": "1486665403884072960",
          "section_title": "热门问题"
        },
        {
          "section_id": "1486665435617169408",
          "section_title": "热门视频"
        },
        {
          "section_id": "1486665471714291712",
          "section_title": "热门回答"
        }
      ],
      "banner": "https://pic1.zhimg.com/100/v2-68fc56fdebee99bad8c3d0e8e144d7f4_hd.png",
      "updated": 1647242276,
      "id": "1486665003516649473"
    },
    {
      "view_count": 1892638,
      "followers_count": 63,
      "is_following": false,
      "title": "「拾光」照亮生活 ",
      "introduction": "我们想要的生活，就在我们居住的城市里，如何在繁忙的城市工作中遇见丰富多元的生活场景，是我们每个人都想得到的答案。而云南，作为国人心生向往的旅居目的地，是如何把最云南的生活方式传递给世人的呢？让我们跟随七彩云南古滇名城拾光社的脚步，遇见「一天新似一天」的生活~ ",
      "section_list": [
        {
          "section_id": "1485999197446565888",
          "section_title": "拾光「知」云南"
        },
        {
          "section_id": "1486000212624166912",
          "section_title": "拾光「知」生活"
        },
        {
          "section_id": "1486000924645076992",
          "section_title": "拾光「知」家"
        }
      ],
      "banner": "https://pic2.zhimg.com/100/v2-f4658664e15a9c04c088b0d996964f49_hd.png",
      "updated": 1647223856,
      "id": "1485999010703581184"
    },
    {
      "view_count": 55348917,
      "followers_count": 243,
      "is_following": false,
      "title": "315听消费者说 你的权益，我来守护",
      "introduction": " 又一年3•15要来了！过去一年，你在消费中遇到过哪些烦心事儿？中新经纬联合知乎，征集投诉线索，曝光不良商家损害消费者权益案例。如果你曾遭遇陷阱，苦于消费纠纷。快来这里吐槽！ ",
      "section_list": [
        {
          "section_id": "1485647392624574465",
          "section_title": "维权点击"
        },
        {
          "section_id": "1487163025224798208",
          "section_title": "2022「3·15 曝光」"
        },
        {
          "section_id": "1486736611018334208",
          "section_title": "「知」得关注"
        },
        {
          "section_id": "1487116401316343808",
          "section_title": "年度回顾"
        },
        {
          "section_id": "1485650615087304704",
          "section_title": "社会类别曝光"
        },
        {
          "section_id": "1485651210748907521",
          "section_title": "虚拟产品陷阱"
        },
        {
          "section_id": "1485651797818118144",
          "section_title": "房产家居陷阱"
        },
        {
          "section_id": "1485651984091328512",
          "section_title": "金融保险陷阱"
        }
      ],
      "banner": "https://pic4.zhimg.com/100/v2-f17d7b847cca593544948c32aceaf7f7_hd.png",
      "updated": 1647415627,
      "id": "1485646269917437952"
    },
    {
      "view_count": 324655,
      "followers_count": 246,
      "is_following": false,
      "title": "到底什么意思-动力电池篇",
      "introduction": "网上选车时满眼的专业名词是否让你困惑？买车时听完销售讲解一脸懵圈？如何像个内行人一样快速识别「专业名词」背后含义？「到底什么意思？」助你读懂这些虚头巴脑的专业名词！本期我们聚焦汽车动力电池。",
      "section_list": [
        {
          "section_id": "1485319036963188736",
          "section_title": "各种各样的动力电池名词"
        },
        {
          "section_id": "1485319104860545024",
          "section_title": "动力电池相关的各种技术"
        },
        {
          "section_id": "1485319159072821248",
          "section_title": "厂商宣传里的电池名词"
        }
      ],
      "banner": "https://pic2.zhimg.com/100/v2-aba46fbb96fdfc1d01a9c1ee5f2fdca5_hd.png",
      "updated": 1646996766,
      "id": "1485317556949479424"
    },
    {
      "view_count": 107052,
      "followers_count": 85,
      "is_following": false,
      "title": "平凡人摄影大赛 ｜致敬特别的她",
      "introduction": "邀请你来分享那些你镜头曾记录过的女性时刻，让我们用影像一起致敬每一个平凡又不平凡的人。",
      "section_list": [
        {
          "section_id": "1485276289154641920",
          "section_title": "有哪些照片证明了「我的妈妈真了不起」？"
        },
        {
          "section_id": "1485278855745736704",
          "section_title": "你拍过哪些照片让你觉得女孩子们的笑容可真美？"
        },
        {
          "section_id": "1485279406596194304",
          "section_title": "你拍过哪些那一刻「她」可真美的照片？"
        },
        {
          "section_id": "1485279954258993152",
          "section_title": "你记录过哪些「我的女同事可太不容易了」的时刻？"
        },
        {
          "section_id": "1485280374427684865",
          "section_title": "各位女生，你最满意的「素颜自拍/他拍」是哪张？"
        }
      ],
      "banner": "https://pic1.zhimg.com/100/v2-fd3cf718cfacd0b291bd66456b23487c_hd.png",
      "updated": 1646898574,
      "id": "1485275585677467648"
    }
  ]

}

Mock.mock('/table', produceNewsData)
Mock.mock('/special', produceNewsData1)

