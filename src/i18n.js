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
      map: "Map",
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
        title: "Workshops",
        desc: "Curated creative experiences for all ages.",
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
          title: "Andaman Indigo Dyeing",
          desc: "Experience the unique art of Andaman indigo tie-dyeing.",
          detailedDesc:
            "Join our special workshop to learn the unique patterns and techniques of Andaman indigo dyeing. We use high-quality natural indigo and traditional methods to create stunning, one-of-a-kind textiles. All materials are provided.",
          duration: "3 Hours",
          price: "฿1,200",
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
        {
          title: "Baan Gik",
          desc: "Bright colors and Indian-style decorations make this shop stand out to anyone passing by. It features clothing and bags with adorable patterns, created by Mother Gik who translated her children's childhood drawings into unique embroidery designs, showcasing a child's artistic perspective.",
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
    map: {
      title: "Community Map",
      desc: "Navigating through Loang Him Kao made easy. Find your favorite shops and workshop areas.",
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
      map: "แผนที่",
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
        title: "เวิร์กช็อป",
        desc: "กิจกรรมสร้างสรรค์สำหรับทุกวัย",
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
          title: "มัดย้อมสีครามอันดามัน",
          desc: "สัมผัสเสน่ห์ของการทำผ้ามัดย้อมสีครามสูตรอันดามัน",
          detailedDesc:
            "ร่วมเวิร์กช็อปพิเศษเพื่อเรียนรู้ลวดลายและเทคนิคเฉพาะตัวของการย้อมสีครามอันดามัน เราใช้ครามธรรมชาติคุณภาพสูงและกรรมวิธีแบบดั้งเดิมเพื่อให้ได้ผ้าที่มีสีสันสวยงามและมีเอกลักษณ์ใบเดียวในโลก พร้อมอุปกรณ์ครบครัน",
          duration: "3 ชั่วโมง",
          price: "1,200 บาท",
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
        {
          title: "บ้านกิ๊ก",
          desc: "สีสันสดใสตกแต่งสไตล์อินเดียที่ใครเดินผ่านเป็นต้องสะดุดตา คือที่ตั้งของร้านขายเสื้อผ้า กระเป๋า ลวดลายน่ารัก ที่เกิดจากการที่คุณแม่กิ๊กนำเอาลวดลายที่ลูกๆ เคยวาดเล่นตอนยังเด็กมาถ่ายทอดด้วยการปักลงเป็นลายผ้าต่างๆ กลายเป็นทั้งลวดลายที่ทั้งสวยงาม น่ารัก แถมยังได้แสดงให้เห็นมุมมองของเด็กๆ",
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
    map: {
      title: "แผนที่ชุมชนโหล่งฮิมคาว",
      desc: "เดินเที่ยวโหล่งฮิมคาวได้ง่ายขึ้นด้วยแผนที่ชุมชน ค้นหาตำแหน่งร้านค้าและพื้นที่กิจกรรมที่คุณสนใจ",
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
      map: "地图",
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
        title: "研习班",
        desc: "精心策划的创意体验。",
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
          title: "安达曼蓝染体验",
          desc: "体验安达曼独特的蓝染扎染艺术。",
          detailedDesc:
            "加入我们的特别研习班，学习安达曼蓝染的独特图案和技术。我们使用高质量的天然蓝染料和传统方法，创造出令人惊叹的、独一无二的纺织品。提供所有材料。",
          duration: "3 小时",
          price: "฿1,200",
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
          title: "Meena Rice Based Cuisine (有田就有米)",
          desc: "位于米仓氛围中的泰南料理。基于‘因为有田，所以有米’的理念，我们通过招牌的‘五色米饭’以及各种传统菜肴来展示大米的价值。",
          hours: "每日 10:00 - 20:30",
          social: "FB/IG: Meena rice based cuisine",
          phone: "095-693-9586, 085-508-3307",
          fbLink: "https://www.facebook.com/meena.rice.based",
        },
        {
          title: "บ้านพัก / The Space",
          desc: "专为家庭和朋友设计的 300 平方米居住空间。包含 2 间配有大床和空调的舒适卧室，2 间备有洗漱用品的干净浴室，以及设备齐全的厨房（微波炉、冰箱、炉灶）。二楼设有带豆袋的起居区，一楼设有带吊床的私人花园。非常适合在清迈体验舒适且充满文化气息的‘慢生活’。",
          hours: "每日均可预订",
          social: "FB: lannalocalstay",
          phone: "+66-870-551-149",
          email: "166lannalivingspace@gmail.com",
          fbLink: "https://www.facebook.com/lannalocalstay",
        },
        {
          title: "เวิ้งฉำฉา (Werngchamchaa)",
          desc: "为设计师和手工艺爱好者打造的创意空间。集艺术、音乐、手工艺、研习班和咖啡馆于一体。是放松、阅读和寻找灵感的理想场所。",
          hours: "周一至周日（周三休息）10:00 - 16:00",
          phone: "093-219-1909",
          fbLink: "https://www.facebook.com/WerngChamchaa",
        },
        {
          title: "เฮือนสบู่ (Heuan Saboo)",
          desc: "手工有机肥皂品牌，源于对皮肤健康的关爱。由大米、椰子油和粉盐等天然成分制成，确保无化学残留。",
          hours: "每日 10:00 - 17:00",
          social: "FB/Line: @khunkawee",
        },
        {
          title: "เฮือน ณ ใจ๋ (Heuan Na Jai)",
          desc: "来自梅查姆的传统木屋，通过手工刺绣纺织品和天然染料展示民族特色。一楼设有温馨的咖啡馆。",
        },
        {
          title: "เปิงใจ๋ (Poeng Jai)",
          desc: "独特的刺绣棉布店，根植于家族传承，将传统编织转化为现代图案。",
        },
        {
          title: "บ้านอุษา (Baan Usa)",
          desc: "具有独特手工缝制图案的现代蓝染服装。还提供民族银饰和手工包。",
        },
        {
          title: "อันดามันมัดย้อม (Andaman Mud Yom)",
          desc: "专注于充满活力的蓝染扎染纺织品。为有兴趣学习传统染色技术的人提供实践研习班。",
        },
        {
          title: "ล้านฝ้ายงาม (Lan Fai Ngam)",
          desc: "传承 Lua 民族传统编织遗产。特色是来自织女故乡梅查姆县的精美‘Tin Jok’纺织品。",
        },
        {
          title: "Baan Gik (吉克之家)",
          desc: "鲜艳的色彩和印度风格的装饰让这家店在路人眼中格外引人注目。店内售卖带有可爱图案的服装和包袋，这些图案是吉克妈妈将孩子们儿时的涂鸦转化为独特的刺绣设计而成，展现了孩子们纯真的艺术视角。",
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
    map: {
      title: "社区地图",
      desc: "轻松游览 Loang Him Kao。找到您最喜欢的商店和工作坊区域。",
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
