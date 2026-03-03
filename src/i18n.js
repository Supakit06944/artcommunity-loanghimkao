import { reactive } from "vue";

export const translations = {
  en: {
    nav: {
      brand: "LoangHimKao",
      home: "Home",
      about: "About",
      shops: "Shops",
      workshops: "Workshops",
      contact: "Contact",
    },
    hero: {
      subtitle: "A curated weekend market in Chiang Mai",
      cta1: "Explore Vendors",
    },
    features: {
      title: "Experience the Community",
      desc: "'Loang Him Kao' is a craft community in San Kamphaeng, Chiang Mai, founded by Chatchawan Thongdeleat, who invited friends and siblings who share a passion for crafts, art, slow living, and Lanna culture to build a village and open their homes as charming shops for their own products.\n\nThe shops here include both retail and dining, such as Meena Rice Based Cuisine. There is also the Cham Cha Market every weekend, the Kad Ton Yon craft market at the end of every year, and Heart Space, a co-working space and activity area for the new generation.\n\nThe intention of Loang Him Kao is to be a community where residents are happy and ready to share that happiness with everyone who visits their community.",
      item1: {
        title: "Local & Organic Products",
        desc: "Supporting regional farmers and sustainable producers.",
      },
      item2: {
        title: "Live Music & Workshops",
        desc: "Curated acoustic sessions and creative experiences.",
      },
      item3: {
        title: "Pet Friendly Community",
        desc: "A welcoming space for your four-legged friends.",
      },
    },
    categories: {
      title: "Market Highlights",
      desc: "Discover a diverse range of zones, each offering something unique.",
      cta: "View All Workshops",
      moreInfo: "See more on Facebook",
      items: [
        {
          title: "Natural Soap Making",
          desc: "Learn to craft your own organic soap using natural ingredients.",
          detailedDesc:
            "In this hands-on workshop, you'll learn the traditional cold process method of soap making. We use only high-quality vegetable oils and natural essential oils. You'll take home your own handcrafted bars and the knowledge to make more!",
          duration: "2.5 Hours",
        },
        {
          title: "Scented Candle Making",
          desc: "Create personalized scented candles with essential oils.",
          detailedDesc:
            "Discover the therapeutic art of candle making with natural soy wax. Learn about scent profiles, wick selection, and pouring techniques. Create a custom-scented candle that brings warmth and a beautiful aroma to your home.",
          duration: "2 Hours",
          price: "฿950",
        },
        {
          title: "Natural Dyeing",
          desc: "Discover the art of traditional natural dyeing techniques.",
          detailedDesc:
            "Explore the ancient craft of extracting color from plants, fruits, and roots. We'll guide you through the process of preparing fabrics and creating stunning, sustainable colors. Perfect for textile enthusiasts.",
          duration: "3 Hours",
          price: "฿1,500",
        },
        {
          title: "Wooden Tray Painting",
          desc: "Express your creativity by painting unique designs on wooden trays.",
          detailedDesc:
            "Transform a plain wooden tray into a piece of art. Choose from various patterns or create your own. We provide all materials, including high-quality paints and brushes. A relaxing session for everyone.",
          duration: "2 Hours",
          price: "฿750",
        },
        {
          title: "Canvas Bag Painting",
          desc: "Design and paint your own custom canvas bag.",
          detailedDesc:
            "Personalize your own canvas tote bag with vibrant colors and unique designs. Whether you're a beginner or an artist, you'll enjoy this creative session and leave with a functional piece of art.",
          duration: "1.5 Hours",
          price: "฿550",
        },
        {
          title: "Art Workshop",
          desc: "A space for all ages to explore various artistic expressions.",
          detailedDesc:
            "A diverse art session exploring different mediums and techniques. From sketching to mixed media, this workshop encourages free expression and creative discovery in a supportive community environment.",
          duration: "2 Hours",
          price: "฿850",
        },
      ],
    },
    shops: {
      title: "Featured Shops",
      desc: "Explore the local boutiques and unique stores within our community.",
      items: [
        {
          title: "Meena Rice Based Cuisine",
          desc: "Southern Thai cuisine in a rice granary atmosphere. Based on the concept 'Because of the field, there is rice', we present the value of rice through our signature '5-color rice' served with various traditional dishes.",
          hours: "Daily 10:00 - 20:30",
          social: "FB/IG: Meena rice based cuisine",
          phone: "095-693-9586, 085-508-3307",
          fbLink: "https://www.facebook.com/meena.rice.based",
        },
        {
          title: "The Space",
          desc: "A 300 sq.m. living space designed for families and friends. Includes 2 cozy bedrooms with king-size beds and AC, 2 clean bathrooms with toiletries, and a fully equipped kitchen (microwave, fridge, stove). Features a second-floor living area with bean bags and a private ground-floor garden with hammocks. Perfect for a comfortable, cultural 'slow life' experience in Chiang Mai.",
          hours: "Available for booking daily",
          social: "FB: lannalocalstay",
          phone: "+66-870-551-149",
          email: "166lannalivingspace@gmail.com",
          fbLink: "https://www.facebook.com/lannalocalstay",
        },
        {
          title: "Werngchamchaa",
          desc: "A creative space for designers and craft enthusiasts. Featuring art, music, crafts, workshops, and a coffee shop. A perfect place to relax, read, and find inspiration.",
          hours: "Mon - Sun (Closed Wed) 10:00 - 16:00",
          phone: "093-219-1909",
          social: "FB: Werngchamchaa",
          fbLink: "https://www.facebook.com/WerngChamchaa",
        },
        {
          title: "Heuan Saboo",
          desc: "Handmade organic soap brand founded on care for skin health. Made from natural ingredients like rice, coconut oil, and pink salt, ensuring no chemical residue.",
          hours: "Daily 10:00 - 17:00",
          social: "FB/Line: @khunkawee",
        },
        {
          title: "Heuan Na Jai",
          desc: "A traditional wooden house from Mae Chaem showcasing ethnic identity through hand-embroidered textiles and natural dyes. Features a cozy cafe on the first floor.",
        },
        {
          title: "Poeng Jai",
          desc: "Unique hand-embroidered cotton shop rooted in family heritage, transforming traditional weaving into contemporary patterns.",
        },
        {
          title: "Baan Usa",
          desc: "Contemporary indigo-dyed clothing with unique hand-stitched patterns. Also offers ethnic silver jewelry and handmade bags.",
        },
        {
          title: "Andaman Mud Yom",
          desc: "Specializing in vibrant indigo tie-dye textiles. Offers hands-on workshops for those interested in learning traditional dyeing techniques.",
        },
        {
          title: "Lan Fai Ngam",
          desc: "Carrying the Lua ethnic heritage of traditional weaving for daily use. Features exquisite 'Tin Jok' textiles from Mae Chaem district, the homeland of the weavers.",
        },
      ],
    },
    footer: {
      desc: "Chiang Mai’s most curated lifestyle weekend market.",
      contact: "Contact Us",
      follow: "Follow Along",
      map: "View on Google Maps",
      address: "Loang Him Kao, San Klang, San Kamphaeng, Chiang Mai 50130",
      line: "LINE",
    },
  },
  th: {
    nav: {
      brand: "โหล่งฮิมคาว",
      home: "หน้าแรก",
      about: "เกี่ยวกับ",
      shops: "ร้านค้า",
      workshops: "เวิร์กช็อป",
      contact: "ติดต่อ",
    },
    hero: {
      subtitle: "ตลาดนัดไลฟ์สไตล์ใจกลางเชียงใหม่",
      cta1: "ดูร้านค้าทั้งหมด",
    },
    features: {
      title: "สัมผัสประสบการณ์ชุมชน",
      desc: "‘โหล่งฮิมคาว’ คือชุมชนงานคราฟต์ในอำเภอสันกำแพง จังหวัดเชียงใหม่ ที่เกิดขึ้นจากการที่ ชัชวาลย์ ทองดีเลิศ ชักชวนเพื่อนฝูงและพี่น้องที่มีใจรักงานฝีมือ ศิลปะ ชีวิตแบบแช่มช้า และวัฒนธรรมล้านนา มาสร้างหมู่บ้านและเปิดบ้านเป็นร้านขายผลิตภัณฑ์ของตนอย่างน่ารัก\n\nร้านค้าที่อยู่ที่นี่มีทั้งร้านขายของและร้านอาหาร เช่น มีนา (Meena Rice Based Cuisine) ทั้งยังมีตลาดนัดกาดฉำฉาทุกสุดสัปดาห์, มีตลาดนัดงานคราฟต์กาดต่อนยอนทุกสิ้นปี และมีเวิ้ง Heart Space ซึ่งเป็น co-working space และพื้นที่ทำกิจกรรมของคนรุ่นใหม่ด้วย\n\nความตั้งใจของโหล่งฮิมคาวคือการเป็นชุมชนที่ผู้อยู่อาศัยมีความสุขและพร้อมถ่ายทอดความสุขให้กับทุกคนที่มาเยือนชุมชนของพวกเขา",
      item1: {
        title: "ผลิตภัณฑ์ท้องถิ่นและออร์แกนิก",
        desc: "สนับสนุนเกษตรกรในพื้นที่และผู้ผลิตที่ยั่งยืน",
      },
      item2: {
        title: "ดนตรีสดและเวิร์กช็อป",
        desc: "ฟังดนตรีอะคูสติกและกิจกรรมสร้างสรรค์สำหรับทุกวัย",
      },
      item3: {
        title: "ชุมชนที่เป็นมิตรกับสัตว์เลี้ยง",
        desc: "พื้นที่ต้อนรับน้องๆ สี่ขาให้มาสนุกพร้อมกับคุณ",
      },
    },
    categories: {
      title: "ไฮไลท์ของตลาด",
      desc: "พบกับโซนที่หลากหลาย ซึ่งแต่ละโซนมีความโดดเด่นและได้รับการคัดสรรมาเป็นอย่างดี",
      cta: "ดูเวิร์กช็อปทั้งหมด",
      moreInfo: "ดูรายละเอียดเพิ่มเติมใน Facebook",
      items: [
        {
          title: "ทำสบู่จากธรรมชาติ",
          desc: "เรียนรู้การทำสบู่สูตรธรรมชาติด้วยมือคุณเอง",
          detailedDesc:
            "เรียนรู้พื้นที่ฐานการทำสบู่ด้วยวิธี Cold Process แบบดั้งเดิม โดยใช้น้ำมันจากพืชธรรมชาติและน้ำมันหอมระเหยบริสุทธิ์ คุณจะได้สบู่ฝีมือตัวเองกลับบ้านพร้อมสูตรและเทคนิคการทำที่สามารถนำไปทำต่อเองได้จริง",
          duration: "2.5 ชั่วโมง",
        },
        {
          title: "ทำเทียนหอม",
          desc: "สร้างสรรค์เทียนหอมในสไตล์ที่คุณชื่นชอบ",
          detailedDesc:
            "สัมผัสความผ่อนคลายกับการทำเทียนหอมจากไขถั่วเหลืองธรรมชาติ เรียนรู้วิธีการเลือกไส้เทียน การผสมกลิ่น และการเทเทียนให้สวยงาม สร้างสรรค์เทียนที่มีกลิ่นเอกลักษณ์ในแบบของคุณเอง",
          duration: "2 ชั่วโมง",
          price: "950 บาท",
        },
        {
          title: "ย้อมสีธรรมชาติ",
          desc: "สัมผัสเสน่ห์ของการย้อมผ้าด้วยสีจากธรรมชาติ",
          detailedDesc:
            "ค้นพบความมหัศจรรย์ของสีสันจากพืชพรรณธรรมชาติ ผลไม้ และรากไม้ เรียนรู้ขั้นตอนการเตรียมผ้าและเทคนิคการย้อมที่ให้สีสันสวยงามและเป็นมิตรต่อสิ่งแวดล้อม เหมาะสำหรับผู้ที่รักงานผ้า",
          duration: "3 ชั่วโมง",
          price: "1,500 บาท",
        },
        {
          title: "ระบายสีถาดไม้",
          desc: "แต่งแต้มสีสันและลวดลายบนถาดไม้สุดคราฟต์",
          detailedDesc:
            "เปลี่ยนถาดไม้ธรรมดาให้เป็นงานศิลปะชิ้นเอก เลือกใช้ลวดลายที่เตรียมไว้หรือออกแบบเองตามจินตนาการ เรามีอุปกรณ์ครบชุดตั้งแต่ออกแบบจนถึงเคลือบเงา เป็นกิจกรรมที่สนุกและผ่อนคลาย",
          duration: "2 ชั่วโมง",
          price: "750 บาท",
        },
        {
          title: "วาดภาพบนกระเป๋าผ้า",
          desc: "ออกแบบลายกระเป๋าผ้าใบเดียวในโลกด้วยฝีมือคุณ",
          detailedDesc:
            "ออกแบบและระบายสีบนกระเป๋าผ้าแคนวาสด้วยเทคนิคเฉพาะตัว ไม่ว่าจะมีพื้นฐานศิลปะหรือไม่ คุณก็สามารถสร้างสรรค์กระเป๋าที่มีใบเดียวในโลกเพื่อนำไปใช้งานได้จริง",
          duration: "1.5 ชั่วโมง",
          price: "550 บาท",
        },
        {
          title: "เวิร์กชอปศิลปะ",
          desc: "พื้นที่สร้างสรรค์งานศิลปะสำหรับทุกคนในครอบครัว",
          detailedDesc:
            "พื้นที่แห่งการเรียนรู้และปลดปล่อยจินตนาการผ่านงานศิลปะที่หลากหลาย ทั้งการวาดเส้น งานสื่อผสม และงานประดิษฐ์ กิจกรรมที่เน้นความอิสระและการค้นหาตัวตนผ่านงานศิลปะร่วมกับชุมชน",
          duration: "2 ชั่วโมง",
          price: "850 บาท",
        },
      ],
    },
    shops: {
      title: "ร้านค้าในโหล่งฮิมคาว",
      desc: "สัมผัสเสน่ห์ของร้านค้าต่าง ๆ ในชุมชน ที่คัดสรรงานฝีมือและผลิตภัณฑ์ที่มีเอกลักษณ์",
      items: [
        {
          title: "มีนา (Meena Rice Based Cuisine)",
          desc: "ร้านอาหารใต้ยุ้งข้าวบรรยากาศในสวนเริ่มต้นขึ้นจากแนวคิด ‘เพราะมีนาจึงมีข้าว’ โดยตั้งใจนำเสนอคุณค่าของนาและข้าวที่มีคุณประโยชน์มากมายต่อผู้คน นำเสนอออกมาผ่านเมนูหลักของร้านอย่าง ‘ข้าว 5 สี’ ที่นำข้าว 5 ชนิด 5 สี มาเสิร์ฟคู่กับกับข้าวต่างๆ ที่มีข้าวหลากชนิดเป็นส่วนประกอบในการปรุง เช่น กุ้งชุบข้าวทอด ซี่โครงหมูอบข้าวไรซ์เบอร์รี ฯลฯ โดยทั้งหมดเป็นอาหารไทยที่พัฒนาจากความทรงจำสมัยที่ผู้ใหญ่เคยทำให้ทานตอนเด็กๆ",
          hours: "เปิดทุกวัน 10:00 - 20:30",
          social: "Facebook/Instagram: Meena rice based cuisine",
          phone: "095-693-9586, 085-508-3307",
          fbLink: "https://www.facebook.com/meena.rice.based",
        },
        {
          title: "บ้านพัก / The Space",
          desc: "เราออกแบบบ้านพักขนาด 300 ตร.ม. ให้เป็นพื้นที่แห่งความสุขสำหรับครอบครัวหรือกลุ่มเพื่อน: 2 ห้องนอนแสนสบายพร้อมเตียงคิงไซส์และแอร์, 2 ห้องน้ำสะอาดแยกส่วนพร้อมอุปกรณ์ครบ, พื้นที่ครัวและส่วนกลางอุปกรณ์ครบครัน (ไมโครเวฟ, ตู้เย็น, เตา), ส่วนชั้นสองมีโซนนั่งเล่นพร้อม bean bag, และระเบียงส่วนตัวใต้ถุนบ้านที่มีเปลญวนและเก้าอี้ไม้พักผ่อนท่ามกลางสวนร่มรื่น สัมผัสความสโลว์ไลฟ์ในบ้านไม้ที่สะอาด สะดวกสบาย และเต็มไปด้วยกลิ่นไอวัฒนธรรมล้านนา",
          hours: "ลูกค้าสามารถจองที่พักได้ทุกวัน",
          social: "Facebook: lannalocalstay",
          phone: "+66-870-551-149",
          email: "166lannalivingspace@gmail.com",
          fbLink: "https://www.facebook.com/lannalocalstay",
        },
        {
          title: "เวิ้งฉำฉา (Werngchamchaa)",
          desc: "พื้นที่สำหรับนักสร้างสรรค์ นักออกแบบ ที่สนใจด้านงานคราฟต์ ศิลปะ ดนตรี หัตถกรรม เวิร์คซ็อป ร้านอาหาร และกิจกรรมแลกเปลี่ยนองค์ความรู้ มีร้านกาแฟ พื้นที่พักผ่อน อ่านหนังสือ และมุมถ่ายรูปมากมาย",
          hours: "จันทร์ - อาทิตย์ (ยกเว้นวันพุธ) 10:00 - 16:00",
          phone: "093-219-1909 (คุณอรอิม)",
          social: "Facebook: Werngchamchaa",
          fbLink: "https://www.facebook.com/WerngChamchaa",
        },
        {
          title: "เฮือนสบู่ (Heuan Saboo)",
          desc: "แบรนด์สบู่ทำมือออร์แกนิก ผลิตจากวัตถุดิบธรรมชาติ เช่น ข้าว น้ำมันมะพร้าว สับปะรด เกลือชมพู และกาแฟคั่ว บำรุงผิวพรรณโดยปราศจากสารเคมีตกค้าง",
          hours: "เปิดทุกวัน 10:00 - 17:00",
          social: "Facebook/Line: @khunkawee",
          fbLink: "https://www.facebook.com/KhunnKawee",
        },
        {
          title: "เฮือน ณ ใจ๋ (Heuan Na Jai)",
          desc: "บ้านไม้เก่าจากแม่แจ่มที่บอกเล่าความเป็นตัวตนผ่านผ้าตีนจก งานปักมือสไตล์ชาติพันธุ์ และงานผ้าย้อมธรรมชาติ ด้านล่างเปิดเป็นคาเฟ่บริการเครื่องดื่มในบรรยากาศอบอุ่น",
        },
        {
          title: "เปิงใจ๋ (Poeng Jai)",
          desc: "ร้านผ้าฝ้ายลายด้นและปักมืออันเป็นเอกลักษณ์ ต่อยอดภูมิปัญญาการทอผ้าจากครอบครัวสู่แพตเทิร์นร่วมสมัยที่น่าภาคภูมิใจ",
        },
        {
          title: "บ้านอุษา (Baan Usa)",
          desc: "เสื้อผ้าย้อมครามทรงร่วมสมัย ออกแบบและปักลวดลายสวยงามด้วยมืออันเป็นเอกลักษณ์ พร้อมเครื่องเงินและกระเป๋าจากชนเผ่าต่างๆ ในราคาย่อมเยา",
        },
        {
          title: "อันดามันมัดย้อม (Andaman Mud Yom)",
          desc: "โดดเด่นด้วยผ้ามัดย้อมสีครามหลากหลายลวดลาย พร้อมเปิดพื้นที่ให้ผู้ที่สนใจได้ร่วมเวิร์กช็อปทำผ้ามัดย้อมด้วยตัวเอง",
        },
        {
          title: "ล้านฝ้ายงาม (Lan Fai Ngam)",
          desc: "ด้วยสายเลือดของบรรพบุรุษชาวลัวะที่ส่งต่อภูมิปัญญาการทอผ้าเพื่อสวมใส่ในชีวิตประจำวันมาอย่างยาวนานจนกลายเป็นวิถีชีวิต ถ่ายทอดออกมาสู่เสื้อผ้าและผ้าตีนจกของอำเภอแม่แจ่มซึ่งเป็นถิ่นฐานดั้งเดิม",
        },
      ],
    },
    footer: {
      desc: "ตลาดนัดไลฟ์สไตล์ที่คัดสรรมาอย่างดีที่สุดในเชียงใหม่",
      contact: "ติดต่อเรา",
      follow: "ติดตามเรา",
      map: "ดูแผนที่ Google Maps",
      address: "โหล่งฮิมคาว สันกลาง อำเภอสันกำแพง เชียงใหม่ 50130",
      line: "LINE",
    },
  },
  cn: {
    nav: {
      brand: "LoangHimKao",
      home: "首页",
      about: "关于我们",
      shops: "商店",
      workshops: "研习班",
      contact: "联系我们",
    },
    hero: {
      subtitle: "清迈精心策划的周末市集",
      cta1: "探索摊位",
    },
    features: {
      title: "体验社区氛围",
      desc: "“Loang Him Kao” 是位于清迈府讪甘烹县的一个工艺社区，由 Chatchawan Thongdeleat 发起。他邀请了热爱手工艺、艺术、慢生活和兰纳文化的朋友及兄弟姐妹，共同建立村庄，并将家园开放为展示和销售产品的可爱店面。\n\n这里的商店涵盖零售和餐饮，例如 Meena Rice Based Cuisine。此外，每个周末都有 Cham Cha 集市，每年年底会举办 Kad Ton Yon 工艺市集，还有 Heart Space，这是一个供年轻一代使用的共享办公和活动空间。\n\nLoang Him Kao 的愿景是成为一个居民感到幸福，并准备好向每一位访客传递这份幸福的社区。",
      item1: { title: "当地有机产品", desc: "支持当地农民和可持续生产者。" },
      item2: {
        title: "现场音乐与工作坊",
        desc: "精心策划的现场音乐展示及创意体验。",
      },
      item3: {
        title: "宠物友好社区",
        desc: "一个欢迎您和您的四条腿朋友共同度过周末的空间。",
      },
    },
    categories: {
      title: "市集亮点",
      desc: "探索风格迥异的区域，每个区域都为您提供独特且精心挑选的内容。",
      cta: "查看所有研习班",
      moreInfo: "在 Facebook 上查看更多",
      items: [
        {
          title: "手工皂制作",
          desc: "学习使用天然原料亲手制作有机手工皂。",
          detailedDesc:
            "在这次实践研习班中，您将学习传统的冷制皂制作方法。我们仅使用高质量的植物油和天然精油。您将带着自己亲手制作的肥皂及制作知识回家！",
          duration: "2.5 小时",
        },
        {
          title: "芳香蜡烛制作",
          desc: "使用精油创造您专属的个性化香薰蜡烛。",
          detailedDesc:
            "探索使用天然大豆蜡制作蜡烛的治愈艺术。了解香味特征、灯芯选择和浇筑技术。制作一只定制香味的蜡烛，为您的家带来温暖和美丽的香气。",
          duration: "2 小时",
          price: "฿950",
        },
        {
          title: "天然染色",
          desc: "探索传统天然染色技术的艺术魅力。",
          detailedDesc:
            "探索从植物、水果和树根中提取颜色的古老工艺。我们将指导您准备织物并创造出惊人的、可持续的颜色。非常适合纺织爱好者。",
          duration: "3 小时",
          price: "฿1,500",
        },
        {
          title: "木托盘绘画",
          desc: "在木托盘上绘出独特设计，尽显您的创造力。",
          detailedDesc:
            "将一个普通的木托盘变成一件艺术品。从各种图案中选择或创建您自己的图案。我们提供所有材料，包括高质量的油漆和画笔。这也是一个让人放松的过程。",
          duration: "2 小时",
          price: "฿750",
        },
        {
          title: "帆布包绘画",
          desc: "设计并绘制属于您自己的定制帆布包。",
          detailedDesc:
            "用鲜艳的颜色和独特的设计个性化您自己的帆布手提包。无论您是初学者还是艺术家，您都会在这个创意环节中享受乐趣，并带走一件实用的艺术品。",
          duration: "1.5 小时",
          price: "฿550",
        },
        {
          title: "艺术工作坊",
          desc: "为所有年龄段提供的探索各种艺术表达的空间。",
          detailedDesc:
            "一个探索不同媒介和技术的多元化艺术环节。从素描到混合媒介，这个研习班鼓励在支持性的社区环境中自由表达和创意发现。",
          duration: "2 小时",
          price: "฿850",
        },
      ],
    },
    shops: {
      title: "特色商店",
      desc: "探索我们社区内的当地精品店和独特商店。",
      items: [
        {
          title: "Meena Rice Based Cuisine",
          desc: "Northern Thai cuisine specialty with a focus on rice variety. Based on the concept 'Because of the field, there is rice', we present signature '5-color rice' and traditional dishes.",
          hours: "Daily 10:00 - 20:30",
          social: "FB/IG: Meena rice based cuisine",
          phone: "095-693-9586, 085-508-3307",
          fbLink: "https://www.facebook.com/meena.rice.based",
        },
        {
          title: "The Space",
          desc: "Experience slow living in a 300 sq.m. cultural wooden house. Features 2 king bedrooms with AC, 2 bathrooms, full kitchen, and a private floor with bean bags. Perfect for family and friends to enjoy Lanna culture.",
          hours: "Daily Available",
          social: "FB: lannalocalstay",
          phone: "+66-870-551-149",
          email: "166lannalivingspace@gmail.com",
          fbLink: "https://www.facebook.com/lannalocalstay",
        },
        {
          title: "Werngchamchaa",
          desc: "Creative space for crafts, art, music, and workshops. Features a coffee shop, reading area, and inspired atmosphere.",
          hours: "Mon - Sun (Closed Wed) 10:00 - 16:00",
          phone: "093-219-1909",
          fbLink: "https://www.facebook.com/WerngChamchaa",
        },
        {
          title: "Heuan Saboo",
          desc: "Organic handmade soap brand. Using natural ingredients like rice, coconut oil, and pink salt for healthy skin care without chemicals.",
          hours: "Daily 10:00 - 17:00",
          social: "FB/Line: @khunkawee",
        },
        {
          title: "Heuan Na Jai",
          desc: " Mae Chaem traditional house showcasing ethnic hand-embroidered textiles and natural dyes. Includes a cozy cafe floor.",
        },
        {
          title: "Poeng Jai",
          desc: "Heritage hand-embroidered cotton clothing in contemporary patterns.",
        },
        {
          title: "Baan Usa",
          desc: "Contemporary indigo-dyed clothing with unique patterns. Handmade silver crafts and bags collections.",
        },
        {
          title: "Andaman Mud Yom",
          desc: "Distinctive indigo tie-dye house with various patterns. Offers hands-on dyeing workshops.",
        },
        {
          title: "Lan Fai Ngam",
          desc: "Traditional Lua weaving heritage and Mae Chaem 'Tin Jok' textiles for modern daily life.",
        },
      ],
    },
    footer: {
      desc: "清迈最受关注的精品生活方式周末市集。",
      contact: "联系我们",
      follow: "关注我们",
      map: "在谷歌地图上查看",
      address:
        "โหล่งฮิมคาว (Loang Him Kao), San Klang, San Kamphaeng, Chiang Mai 50130",
      line: "LINE",
    },
  },
};

export const state = reactive({
  locale: "en",
});

export const t = (path) => {
  const keys = path.split(".");
  let result = translations[state.locale];
  for (const key of keys) {
    if (result[key]) {
      result = result[key];
    } else {
      return path;
    }
  }
  return result;
};
