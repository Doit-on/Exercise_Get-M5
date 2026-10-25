// =========================================================================
// Get INVOLVED! M.5 Curriculum Data (Units 5, 6, 7, 8)
// บริษัท สำนักพิมพ์ ไทยวัฒนาพานิช จำกัด (TWP)
// ถอดบทเรียนและข้อสอบตรงจากเอกสารใบงานสรุปคลิปวิดีโอ ม.5 ภาคเรียนที่ 2
// กฎเหล็กตามสถาปัตยกรรมระบบ:
// 1. โจทย์ ตัวเลือก และคำศัพท์เป็นภาษาอังกฤษล้วน 100% ปราศจากคำแปลภาษาไทยในโจทย์/ตัวเลือก
// 2. คำอธิบายเฉลยภาษาไทย (Tutor Insight Coaching) ละเอียด ลึกซึ้ง และถูกต้องตามหลักวิชาการ
// =========================================================================

const M5_UNITS_DATA = {
  "unit5": {
    "id": "unit5",
    "name": "Unit 5: Environment & Video Content",
    "thaiName": "บทที่ 5: สิ่งแวดล้อม และโครงสร้าง Passive Voice & Rules",
    "description": "เรียนรู้การรณรงค์ด้านสิ่งแวดล้อม (Park Clean, Food Waste, Eco-friendly Smartphones) และไวยากรณ์ Passive Voice, Rules (let / make / be allowed to)",
    "sections": [
      {
        "title": "Part 1: Video Content Comprehension",
        "description": "Match the video titles (A–C) with their correct summary or description. (จับคู่วิดีโอกับเนื้อหาสรุป)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u5_p1_1",
            "prompt": "1. Two students present a green leaflet featuring Do's & Don'ts on reducing food waste to fight climate change.",
            "choices": [
              "A. Vocabulary Video (Park clean)",
              "B. Real-World Speaking Video (Choosing a Phone)",
              "C. Project Video (Food Waste Leaflet)"
            ],
            "answer": "C. Project Video (Food Waste Leaflet)",
            "explanation": "ตอบ C (Project Video - Food Waste Leaflet): ในวิดีโอ Project Julia และ Theo ได้ร่วมกันจัดทำและนำเสนอแผ่นพับรณรงค์ลดขยะอาหาร พร้อมข้อแนะนำ Do's & Don'ts เพื่อช่วยลดผลกระทบต่อสภาวะโลกร้อน"
          },
          {
            "id": "u5_p1_2",
            "prompt": "2. A vlogger shares her experience about beach cleans in Cornwall and inspires viewers by starting a park clean in her town.",
            "choices": [
              "A. Vocabulary Video (Park clean)",
              "B. Real-World Speaking Video (Choosing a Phone)",
              "C. Project Video (Food Waste Leaflet)"
            ],
            "answer": "A. Vocabulary Video (Park clean)",
            "explanation": "ตอบ A (Vocabulary Video - Park clean): Louise เล่าประสบการณ์การเก็บขยะริมหาด (Beach clean) ที่คอร์นวอลล์ และสร้างแรงบันดาลใจให้คนดูด้วยการริเริ่มกิจกรรม Park clean ทำความสะอาดสวนสาธารณะในเมืองของตนเอง"
          },
          {
            "id": "u5_p1_3",
            "prompt": "3. Two friends compare eco-friendly smartphones and decide on a model that is both green and great value.",
            "choices": [
              "A. Vocabulary Video (Park clean)",
              "B. Real-World Speaking Video (Choosing a Phone)",
              "C. Project Video (Food Waste Leaflet)"
            ],
            "answer": "B. Real-World Speaking Video (Choosing a Phone)",
            "explanation": "ตอบ B (Real-World Speaking Video - Choosing a Phone): เป็นบทสนทนาระหว่าง Laura และ Marta ที่ช่วยกันเลือกซื้อสมาร์ตโฟนที่เป็นมิตรต่อสิ่งแวดล้อม โดยเน้นรุ่นที่รักษ์โลกและคุ้มค่าที่สุด"
          }
        ]
      },
      {
        "title": "Part 2: Environment Vocabulary & Materials",
        "description": "Complete the sentences using the correct words from the box. (เติมคำศัพท์ด้านสิ่งแวดล้อมลงในช่องว่าง)",
        "type": "fill_in",
        "wordBank": ["recycled", "solar power", "landfill", "pesticides", "eco-friendly", "deforestation"],
        "questions": [
          {
            "id": "u5_p2_1",
            "prompt": "1. Using chemical ________________________ on crops can harm helpful insects and pollute the soil.",
            "answer": "pesticides",
            "acceptableAnswers": ["pesticides"],
            "hint": "Chemicals used to kill pests / สารเคมีกำจัดแมลงและศัตรูพืช",
            "explanation": "เฉลย: pesticides | คำอธิบาย: สารเคมีที่ใช้ฉีดพ่นพืชผลคือ pesticides (ยาฆ่าแมลง/สารเคมีกำจัดศัตรูพืช) ซึ่งก่อให้เกิดมลพิษตกค้างในดินและเป็นอันตรายต่อแมลงที่เป็นประโยชน์"
          },
          {
            "id": "u5_p2_2",
            "prompt": "2. Building ________________________ panels on roofs helps generate green energy from sunlight.",
            "answer": "solar power",
            "acceptableAnswers": ["solar power"],
            "hint": "Green energy from the sun / แผงเซลล์แสงอาทิตย์",
            "explanation": "เฉลย: solar power | คำอธิบาย: แผงบนหลังคาที่เปลี่ยนแสงแดดเป็นพลังงานสะอาดเรียกว่า solar power panels (แผงพลังงานแสงอาทิตย์)"
          },
          {
            "id": "u5_p2_3",
            "prompt": "3. Plastic bottles should be ________________________ instead of being thrown directly into the trash.",
            "answer": "recycled",
            "acceptableAnswers": ["recycled"],
            "hint": "Processed to be used again / นำไปแปรรูปใช้ใหม่",
            "explanation": "เฉลย: recycled | คำอธิบาย: ขวดพลาสติกควรถูกนำไป recycled (รีไซเคิล/แปรรูปนำกลับมาใช้ใหม่) แทนการทิ้งลงถังขยะให้กลายเป็นมลภาวะ"
          },
          {
            "id": "u5_p2_4",
            "prompt": "4. Too much plastic waste ends up in ________________________, taking hundreds of years to break down.",
            "answer": "landfill",
            "acceptableAnswers": ["landfill", "landfills"],
            "hint": "A place where garbage is buried / หลุมฝังกลบขยะ",
            "explanation": "เฉลย: landfill | คำอธิบาย: ขยะพลาสติกปริมาณมหาศาลถูกนำไปฝังกลบใน landfill (หลุมฝังกลบขยะ) ซึ่งต้องใช้เวลานานหลายร้อยปีในการย่อยสลาย"
          },
          {
            "id": "u5_p2_5",
            "prompt": "5. Cutting down large areas of forests leads to ________________________, which threatens wildlife habitats.",
            "answer": "deforestation",
            "acceptableAnswers": ["deforestation"],
            "hint": "Clearing of forests / การตัดไม้ทำลายป่า",
            "explanation": "เฉลย: deforestation | คำอธิบาย: การตัดไม้ทำลายป่าในวงกว้างเรียกว่า deforestation ซึ่งส่งผลทำลายถิ่นที่อยู่อาศัยตามธรรมชาติของสัตว์ป่า"
          },
          {
            "id": "u5_p2_6",
            "prompt": "6. Laura prefers buying an ________________________ phone that produces less waste.",
            "answer": "eco-friendly",
            "acceptableAnswers": ["eco-friendly", "ecofriendly"],
            "hint": "Not damaging the environment / เป็นมิตรต่อสิ่งแวดล้อม",
            "explanation": "เฉลย: eco-friendly | คำอธิบาย: eco-friendly หมายถึงผลิตภัณฑ์หรือนวัตกรรมที่เป็นมิตรต่อสิ่งแวดล้อมและก่อให้เกิดขยะน้อยกว่าปกติ"
          }
        ]
      },
      {
        "title": "Part 3: Key Grammar - Passive Voice & Rules",
        "description": "Choose the correct option or rewrite the sentence using Passive Voice and Rules (let / make / be allowed to).",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u5_p3_1",
            "prompt": "1. People (are encouraged / encourage) to pick up litter every time they visit the beach.",
            "choices": [
              "are encouraged",
              "encourage"
            ],
            "answer": "are encouraged",
            "explanation": "ตอบ are encouraged: ประธาน (People) เป็นฝ่าย 'ได้รับการสนับสนุน/ชักชวน' จากหน่วยงาน จึงต้องใช้โครงสร้าง Present Simple Passive (are + V.3)"
          },
          {
            "id": "u5_p3_2",
            "prompt": "2. The phone case is (make / made) of recycled plastic.",
            "choices": [
              "make",
              "made"
            ],
            "answer": "made",
            "explanation": "ตอบ made: หลังกริยาช่วย is ในโครงสร้าง Passive Voice ต้องตามด้วยกริยาช่อง 3 (is made of... = ทำมาจาก...)"
          },
          {
            "id": "u5_p3_3",
            "prompt": "3. Rewrite using Passive Voice: 'They collect plastic bottles in the park.' → 'Plastic bottles ________________________ in the park.'",
            "choices": [
              "are collected",
              "is collected",
              "were collected",
              "collecting"
            ],
            "answer": "are collected",
            "explanation": "ตอบ are collected: ประธานพหูพจน์ใหม่คือ 'Plastic bottles' และประโยคเดิมเป็น Present Simple จึงใช้โครงสร้าง are + V.3 (are collected)"
          },
          {
            "id": "u5_p3_4",
            "prompt": "4. The teacher doesn't (let / make) us use our mobile phones during the exam.",
            "choices": [
              "let",
              "make"
            ],
            "answer": "let",
            "explanation": "ตอบ let: โครงสร้าง doesn't let + someone + V.infinitive แปลว่า 'ไม่อนุญาตให้ทำ' ตรงกับกฎการห้ามใช้โทรศัพท์ระหว่างสอบ"
          },
          {
            "id": "u5_p3_5",
            "prompt": "5. We are not (allow / allowed) to throw trash on the ground in school.",
            "choices": [
              "allowed",
              "allow"
            ],
            "answer": "allowed",
            "explanation": "ตอบ allowed: โครงสร้าง be not allowed to + V.infinitive หมายถึง 'ไม่ได้รับอนุญาตให้ทำ' กริยาต้องอยู่ในรูป Passive Participle (allowed)"
          }
        ]
      },
      {
        "title": "Part 4: Real-World Speaking Phrases",
        "description": "Complete the conversation using the key phrases provided. (เลือกสำนวนสนทนาให้ถูกต้องสมบูรณ์)",
        "type": "fill_in",
        "wordBank": ["a great deal", "the better", "eco-friendly", "as good as"],
        "questions": [
          {
            "id": "u5_p4_1",
            "prompt": "Marta: These two smartphones are more (1) ________________________ than most other models.",
            "answer": "eco-friendly",
            "acceptableAnswers": ["eco-friendly", "ecofriendly"],
            "hint": "Environmentally safe / เป็นมิตรต่อสิ่งแวดล้อม",
            "explanation": "เฉลย: eco-friendly | คำอธิบาย: Marta บรรยายว่าสมาร์ตโฟนสองรุ่นนี้เป็นมิตรต่อสิ่งแวดล้อมมากกว่ารุ่นทั่วไป (more eco-friendly than...)"
          },
          {
            "id": "u5_p4_2",
            "prompt": "Laura: How much are you thinking of spending? Oh, the cheaper, (2) ________________________!",
            "answer": "the better",
            "acceptableAnswers": ["the better"],
            "hint": "The more... the more... / ยิ่งถูกก็ยิ่งดี",
            "explanation": "เฉลย: the better | คำอธิบาย: สำนวนเปรียบเทียบขั้นกว่าคู่ขนาน 'The cheaper, the better!' (ยิ่งราคาถูกเท่าไร ก็ยิ่งดีเท่านั้น)"
          },
          {
            "id": "u5_p4_3",
            "prompt": "Marta: I’d get the second one then. Not only is it green, but it’s also (3) ________________________.",
            "answer": "a great deal",
            "acceptableAnswers": ["a great deal"],
            "hint": "Good value for money / คุ้มค่าคุ้มราคามาก",
            "explanation": "เฉลย: a great deal | คำอธิบาย: สำนวน 'a great deal' ในการเลือกซื้อสินค้าหมายถึง 'ข้อเสนอที่คุ้มค่ามาก คุ้มราคาอย่างยิ่ง'"
          },
          {
            "id": "u5_p4_4",
            "prompt": "Marta: The camera is (4) ________________________ most expensive smartphones.",
            "answer": "as good as",
            "acceptableAnswers": ["as good as"],
            "hint": "Equal comparison: as + adj + as / ดีเทียบเท่ากับ",
            "explanation": "เฉลย: as good as | คำอธิบาย: โครงสร้างเปรียบเทียบขั้นเสมอภาค 'as good as' บ่งบอกว่าคุณภาพกล้องดีทัดเทียมกับรุ่นที่ราคาแพง"
          }
        ]
      }
    ]
  },

  "unit6": {
    "id": "unit6",
    "name": "Unit 6: Crimes & Consequences",
    "thaiName": "บทที่ 6: อาชญากรรม การสืบสวน และ Conditionals & Unless",
    "description": "ศึกษาคำศัพท์ด้านคดีอาชญากรรมและภัยไซเบอร์ (Forensics, Cyberbullying, Phishing) ไวยากรณ์ First Conditional, Unless และการแสดงความเสียดาย (I wish / If only)",
    "sections": [
      {
        "title": "Part 1: Video Content Comprehension",
        "description": "Match the video titles (A–C) with their correct summary or description. (จับคู่วิดีโอกับเนื้อหาสรุป)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u6_p1_1",
            "prompt": "1. A girl discovers her bicycle was stolen, and her friend helps her calm down and make a plan to report it to the police.",
            "choices": [
              "A. Vocabulary Video (Crime in Fiction)",
              "B. Real-World Speaking Video (Stolen Bike)",
              "C. Project Video (French Class Rules)"
            ],
            "answer": "B. Real-World Speaking Video (Stolen Bike)",
            "explanation": "ตอบ B (Real-World Speaking Video - Stolen Bike): เป็นคลิปบทสนทนาจริงที่ Bea พบว่ารถจักรยานของตนถูกขโมย โดยมี Sam ช่วยปลอบให้ใจเย็นและวางแผนไปแจ้งตำรวจ"
          },
          {
            "id": "u6_p1_2",
            "prompt": "2. Two students present six rules and consequences for their classroom, such as speaking French at all times and not using mobiles.",
            "choices": [
              "A. Vocabulary Video (Crime in Fiction)",
              "B. Real-World Speaking Video (Stolen Bike)",
              "C. Project Video (French Class Rules)"
            ],
            "answer": "C. Project Video (French Class Rules)",
            "explanation": "ตอบ C (Project Video - French Class Rules): เป็นโครงงานที่ Katy และ Theo นำเสนอกฎระเบียบ 6 ข้อในห้องเรียนภาษาฝรั่งเศส พร้อมผลที่ตามมาหากฝ่าฝืนกฎ"
          },
          {
            "id": "u6_p1_3",
            "prompt": "3. A documentary clip explaining how famous detective stories like Sherlock Holmes use forensic science, fingerprints, and modern DNA testing.",
            "choices": [
              "A. Vocabulary Video (Crime in Fiction)",
              "B. Real-World Speaking Video (Stolen Bike)",
              "C. Project Video (French Class Rules)"
            ],
            "answer": "A. Vocabulary Video (Crime in Fiction)",
            "explanation": "ตอบ A (Vocabulary Video - Crime in Fiction): วิดีโอสารคดีอธิบายเรื่องราวนวนิยายสืบสวน Sherlock Holmes ที่สะท้อนถึงการกำเนิดนิติวิทยาศาสตร์ รอยลายนิ้วมือ และการตรวจพิสูจน์ DNA"
          }
        ]
      },
      {
        "title": "Part 2: Crime & Cyber-crime Vocabulary",
        "description": "Complete the sentences using the words in the box. (เติมคำศัพท์อาชญากรรมและคดีไซเบอร์)",
        "type": "fill_in",
        "wordBank": ["detective", "suspect", "witness", "phishing", "cyberbullying", "guilty"],
        "questions": [
          {
            "id": "u6_p2_1",
            "prompt": "1. The ________________________ examined the crime scene carefully to search for fingerprints.",
            "answer": "detective",
            "acceptableAnswers": ["detective"],
            "hint": "An investigator who solves crimes / นักสืบ",
            "explanation": "เฉลย: detective | คำอธิบาย: detective (นักสืบ) ทำหน้าที่ตรวจค้นสถานที่เกิดเหตุอย่างละเอียดเพื่อหารอยลายนิ้วมือของผู้ก่อเหตุ"
          },
          {
            "id": "u6_p2_2",
            "prompt": "2. She received a ________________________ email that tried to trick her into giving away her password.",
            "answer": "phishing",
            "acceptableAnswers": ["phishing"],
            "hint": "Fraudulent email scam / อีเมลหลอกลวงต้มตุ๋น",
            "explanation": "เฉลย: phishing | คำอธิบาย: phishing คือกลโกงออนไลน์ทางอีเมลที่แอบอ้างเพื่อหลอกลวงเอารหัสผ่านหรือข้อมูลทางการเงิน"
          },
          {
            "id": "u6_p2_3",
            "prompt": "3. The police arrested the main ________________________ after finding stolen goods in his house.",
            "answer": "suspect",
            "acceptableAnswers": ["suspect"],
            "hint": "A person believed to be guilty / ผู้ต้องสงสัย",
            "explanation": "เฉลย: suspect | คำอธิบาย: suspect (ผู้ต้องสงสัย) คือผู้ที่ถูกเจ้าหน้าที่ตำรวจจับกุมหลังตรวจพบของกลางที่ถูกขโมยในบ้าน"
          },
          {
            "id": "u6_p2_4",
            "prompt": "4. Online safety lessons can help students protect themselves against ________________________.",
            "answer": "cyberbullying",
            "acceptableAnswers": ["cyberbullying"],
            "hint": "Harassment on digital platforms / การกลั่นแกล้งบนโลกออนไลน์",
            "explanation": "เฉลย: cyberbullying | คำอธิบาย: cyberbullying คือการระรานหรือกลั่นแกล้งบนโลกออนไลน์ ซึ่งทักษะความปลอดภัยทางไซเบอร์ช่วยป้องกันได้"
          },
          {
            "id": "u6_p2_5",
            "prompt": "5. A ________________________ who saw the robbery called the police immediately.",
            "answer": "witness",
            "acceptableAnswers": ["witness"],
            "hint": "Someone who sees an event / พยานผู้เห็นเหตุการณ์",
            "explanation": "เฉลย: witness | คำอธิบาย: witness (พยาน/ผู้เห็นเหตุการณ์) คือผู้ที่มองเห็นการปล้นและรีบโทรแจ้งเจ้าหน้าที่ตำรวจทันที"
          },
          {
            "id": "u6_p2_6",
            "prompt": "6. The jury decided that the thief was ________________________ of the crime and sent him to prison.",
            "answer": "guilty",
            "acceptableAnswers": ["guilty"],
            "hint": "Responsible for a crime / มีความผิดจริงตามกฎหมาย",
            "explanation": "เฉลย: guilty | คำอธิบาย: guilty (มีความผิด) คณะลูกขุนวินิจฉัยชี้ขาดว่าผู้ต้องหามีความผิดจริงในคดีอาญาและต้องรับโทษจำคุก"
          }
        ]
      },
      {
        "title": "Part 3: Key Grammar - Conditionals & Unless",
        "description": "Complete the sentences using First Conditional or 'unless'.",
        "type": "fill_in",
        "questions": [
          {
            "id": "u6_p3_1",
            "prompt": "1. If you (use) ________________________ your mobile phone for games in class, you will have to leave it in the box.",
            "answer": "use",
            "acceptableAnswers": ["use"],
            "hint": "Present Simple after 'if' with subject 'you'",
            "explanation": "เฉลย: use | คำอธิบาย: โครงสร้าง First Conditional หลัง if ใช้ Present Simple โดยประธาน you ใช้รูปกริยาดั้งเดิม use"
          },
          {
            "id": "u6_p3_2",
            "prompt": "2. Everyone (have to) ________________________ pay a fine if they break the school rules.",
            "answer": "will have to",
            "acceptableAnswers": ["will have to"],
            "hint": "Main clause: will + V.infinitive",
            "explanation": "เฉลย: will have to | คำอธิบาย: ในประโยคหลักแสดงผลลัพธ์ของ First Conditional ใช้ will + V.infinitive นั่นคือ will have to"
          },
          {
            "id": "u6_p3_3",
            "prompt": "3. You mustn't be late for class ________________________ (if / unless) you have a note from a doctor.",
            "answer": "unless",
            "acceptableAnswers": ["unless"],
            "hint": "Means 'if not' / เว้นแต่ว่า",
            "explanation": "เฉลย: unless | คำอธิบาย: unless แปลว่า 'ยกเว้นแต่ / ถ้าไม่' สื่อความหมายว่าห้ามเข้าเรียนสายเว้นแต่จะมีใบรับรองแพทย์"
          },
          {
            "id": "u6_p3_4",
            "prompt": "4. If someone (bully) ________________________ another student, they will go to the head teacher's office.",
            "answer": "bullies",
            "acceptableAnswers": ["bullies"],
            "hint": "Singular pronoun 'someone' -> verb + s/es",
            "explanation": "เฉลย: bullies | คำอธิบาย: ประธาน someone เป็นสรรพนามเอกพจน์ กริยาใน Present Simple ต้องเปลี่ยน y เป็น i แล้วเติม es (bullies)"
          }
        ]
      },
      {
        "title": "Part 4: Key Grammar - Expressing Regrets (I wish / If only)",
        "description": "Rewrite the sentences expressing regrets in the past using 'If only' or 'I wish'.",
        "type": "fill_in",
        "questions": [
          {
            "id": "u6_p4_1",
            "prompt": "1. I didn't lock my bike. → If only I ________________________ my bike!",
            "answer": "had locked",
            "acceptableAnswers": ["had locked"],
            "hint": "If only + Subject + had + V.3",
            "explanation": "เฉลย: had locked | คำอธิบาย: โครงสร้างแสดงความเสียดายต่อเหตุการณ์ในอดีต (Past Regret) ใช้ If only + had + V.3 (had locked)"
          },
          {
            "id": "u6_p4_2",
            "prompt": "2. I left my laptop on the desk. → I wish I ________________________ it on the desk.",
            "answer": "hadn't left",
            "acceptableAnswers": ["hadn't left", "had not left"],
            "hint": "I wish + Subject + hadn't + V.3",
            "explanation": "เฉลย: hadn't left | คำอธิบาย: ปรารถนาว่าในอดีตไม่น่าทิ้งโน้ตบุ๊กไว้บนโต๊ะ ใช้โครงสร้าง I wish + hadn't + V.3 (left)"
          },
          {
            "id": "u6_p4_3",
            "prompt": "3. She didn't report the crime to the police earlier. → If only she ________________________ the crime to the police earlier!",
            "answer": "had reported",
            "acceptableAnswers": ["had reported"],
            "hint": "If only + Subject + had + V.3",
            "explanation": "เฉลย: had reported | คำอธิบาย: แสดงความเสียดายที่ไม่ได้แจ้งความกับตำรวจแต่เนิ่นๆ ใช้ If only + had + V.3 (had reported)"
          }
        ]
      }
    ]
  },

  "unit7": {
    "id": "unit7",
    "name": "Unit 7: Time Flies!",
    "thaiName": "บทที่ 7: การบริหารเวลา และ Reported Speech & Questions",
    "description": "เรียนรู้การบริหารเวลา (Time Management, Mindfulness, Bullet Journal) กริยารายงาน (Reporting Verbs) และการแปลงประโยค Reported Speech & Questions",
    "sections": [
      {
        "title": "Part 1: Video Content Comprehension",
        "description": "Match the video titles (A–C) with their correct summary or description. (จับคู่วิดีโอกับเนื้อหาสรุป)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u7_p1_1",
            "prompt": "1. Two friends discuss their opinions on a sci-fi movie and agree that everyone has to make up their own mind.",
            "choices": [
              "A. Vocabulary Video (Wasting Time)",
              "B. Real-World Speaking Video (Discussing Points of View)",
              "C. Project Video (Reported Interview)"
            ],
            "answer": "B. Real-World Speaking Video (Discussing Points of View)",
            "explanation": "ตอบ B (Real-World Speaking Video - Discussing Points of View): Ryan และ Monica ถกเถียงมุมมองที่มีต่อภาพยนตร์แนวไซไฟ และลงความเห็นร่วมกันว่าแต่ละคนย่อมมีวิจารณญาณส่วนตัว"
          },
          {
            "id": "u7_p1_2",
            "prompt": "2. Jack and Alice present their project by reporting what Queen Cleopatra told them about her life and recommendations for visitors to Egypt.",
            "choices": [
              "A. Vocabulary Video (Wasting Time)",
              "B. Real-World Speaking Video (Discussing Points of View)",
              "C. Project Video (Reported Interview)"
            ],
            "answer": "C. Project Video (Reported Interview)",
            "explanation": "ตอบ C (Project Video - Reported Interview): Jack และ Alice ทำโครงงานสัมภาษณ์จำลองกับพระนางคลีโอพัตรา แล้วนำคำตอบมาถ่ายทอดด้วยโครงสร้าง Reported Speech"
          },
          {
            "id": "u7_p1_3",
            "prompt": "3. A vlogger shares advice on how to manage time better using a bullet journal and practicing mindfulness.",
            "choices": [
              "A. Vocabulary Video (Wasting Time)",
              "B. Real-World Speaking Video (Discussing Points of View)",
              "C. Project Video (Reported Interview)"
            ],
            "answer": "A. Vocabulary Video (Wasting Time)",
            "explanation": "ตอบ A (Vocabulary Video - Wasting Time): Amelia แนะนำวิธีจัดการเวลาเพื่อไม่ให้สูญเปล่า โดยประยุกต์ใช้ Bullet Journal และการมีสติอยู่กับปัจจุบัน (Mindfulness)"
          }
        ]
      },
      {
        "title": "Part 2: Reporting Verbs & Time Expressions",
        "description": "Complete the sentences using the reporting verbs in the box. (เติมคำกริยารายงานให้ถูกต้องตามบริบท)",
        "type": "fill_in",
        "wordBank": ["admitted", "recommended", "complained", "promised", "insisted"],
        "questions": [
          {
            "id": "u7_p2_1",
            "prompt": "1. Lara ________________________ that she spent too much time on her phone and watching TV.",
            "answer": "admitted",
            "acceptableAnswers": ["admitted"],
            "hint": "Conceded or accepted truth / ยอมรับ",
            "explanation": "เฉลย: admitted | คำอธิบาย: admit (ยอมรับ) เหมาะสมอย่างยิ่งกับบริบทที่ Lara ยอมรับว่าตนเองใช้เวลาหน้าจอมือถือและดูทีวีมากเกินไป"
          },
          {
            "id": "u7_p2_2",
            "prompt": "2. Cleopatra ________________________ visiting the Library of Alexandria and the Pyramids at Giza.",
            "answer": "recommended",
            "acceptableAnswers": ["recommended"],
            "hint": "Suggested as a good idea / แนะนำ",
            "explanation": "เฉลย: recommended | คำอธิบาย: recommend + V-ing สื่อถึงการแนะนำสถานที่ท่องเที่ยวสำคัญในอียิปต์โบราณ"
          },
          {
            "id": "u7_p2_3",
            "prompt": "3. Ryan ________________________ that watching sci-fi movies was a waste of time.",
            "answer": "complained",
            "acceptableAnswers": ["complained"],
            "hint": "Expressed dissatisfaction / บ่นหรือแสดงความไม่พอใจ",
            "explanation": "เฉลย: complained | คำอธิบาย: complain (บ่น) เหมาะกับประโยคที่ Ryan บ่นว่าการรับชมภาพยนตร์ไซไฟเป็นการเสียเวลาเปล่า"
          },
          {
            "id": "u7_p2_4",
            "prompt": "4. Amelia ________________________ to say hello to her family during her live radio show.",
            "answer": "promised",
            "acceptableAnswers": ["promised"],
            "hint": "Made a commitment / สัญญาว่าจะทำ",
            "explanation": "เฉลย: promised | คำอธิบาย: โครงสร้าง promise + to + V.infinitive แสดงการให้คำสัญญาว่าจะทักทายครอบครัวในรายการวิทยุ"
          },
          {
            "id": "u7_p2_5",
            "prompt": "5. She ________________________ that her main problem was not organizing her time well.",
            "answer": "insisted",
            "acceptableAnswers": ["insisted"],
            "hint": "Stated firmly / ยืนยันอย่างหนักแน่น",
            "explanation": "เฉลย: insisted | คำอธิบาย: insist (ยืนกราน/ยืนยันหนักแน่น) สื่อถึงการตอกย้ำว่าปัญหาหลักที่แท้จริงคือการจัดสรรเวลา"
          }
        ]
      },
      {
        "title": "Part 3: Key Grammar - Reported Speech (Statements)",
        "description": "Rewrite the direct speech into reported speech using the word in parentheses.",
        "type": "fill_in",
        "questions": [
          {
            "id": "u7_p3_1",
            "prompt": "1. \"I am making new laws and building temples,\" Cleopatra said. (explained) → Cleopatra ________________________.",
            "answer": "explained that she was making new laws and building temples",
            "acceptableAnswers": [
              "explained that she was making new laws and building temples",
              "explained she was making new laws and building temples"
            ],
            "hint": "explained that she was making new laws and building temples",
            "explanation": "เฉลย: explained that she was making new laws and building temples | คำอธิบาย: เปลี่ยนกริยานำเป็น explained that สรรพนาม I เปลี่ยนเป็น she และถอย Tense จาก Present Continuous เป็น Past Continuous (was making)"
          },
          {
            "id": "u7_p3_2",
            "prompt": "2. \"I will call you tomorrow,\" my friend said to me. (promised) → My friend ________________________.",
            "answer": "promised to call me the following day",
            "acceptableAnswers": [
              "promised to call me the following day",
              "promised that he would call me the following day",
              "promised that she would call me the following day",
              "promised to call me the next day"
            ],
            "hint": "promised to call me the following day (or promised that he/she would call me the following day)",
            "explanation": "เฉลย: promised to call me the following day (หรือ promised that he/she would call me the following day) | คำอธิบาย: ใช้ promise + to + V หรือเปลี่ยน will เป็น would และคำระบุเวลา tomorrow กลายเป็น the following day"
          },
          {
            "id": "u7_p3_3",
            "prompt": "3. \"You should use a bullet journal to organize your time,\" Amelia said to Lara. (advised) → Amelia ________________________.",
            "answer": "advised Lara to use a bullet journal to organize her time",
            "acceptableAnswers": [
              "advised Lara to use a bullet journal to organize her time"
            ],
            "hint": "advised Lara to use a bullet journal to organize her time",
            "explanation": "เฉลย: advised Lara to use a bullet journal to organize her time | คำอธิบาย: โครงสร้าง advise + object + to + V.infinitive และเปลี่ยนสรรพนาม your time เป็น her time"
          },
          {
            "id": "u7_p3_4",
            "prompt": "4. \"I didn't steal the money,\" the suspect said. (denied) → The suspect ________________________.",
            "answer": "denied stealing the money",
            "acceptableAnswers": [
              "denied stealing the money",
              "denied that he had stolen the money",
              "denied that she had stolen the money"
            ],
            "hint": "denied stealing the money (or denied that he had stolen the money)",
            "explanation": "เฉลย: denied stealing the money (หรือ denied that he had stolen the money) | คำอธิบาย: กริยา deny ตามหลังด้วย Gerund (stealing) หรือ that clause รูป Past Perfect (had stolen)"
          }
        ]
      },
      {
        "title": "Part 4: Key Grammar - Reported Questions",
        "description": "Change the direct questions into reported questions. (เปลี่ยนคำถามตรงเป็นคำถามรายงาน)",
        "type": "fill_in",
        "questions": [
          {
            "id": "u7_p4_1",
            "prompt": "1. \"How many languages do you speak?\" Alice asked Cleopatra. → Alice asked Cleopatra ________________________.",
            "answer": "how many languages she spoke",
            "acceptableAnswers": ["how many languages she spoke"],
            "hint": "Wh-phrase + subject + past simple verb",
            "explanation": "เฉลย: how many languages she spoke | คำอธิบาย: คง Wh-phrase 'how many languages' ไว้ เรียงลำดับคำแบบประโยคบอกเล่า (she spoke) โดยตัดกริยาช่วย do ออกและเปลี่ยนเป็นช่อง 2"
          },
          {
            "id": "u7_p4_2",
            "prompt": "2. \"Is it true that you have four children?\" Jack asked Cleopatra. → Jack asked Cleopatra ________________________.",
            "answer": "if she had four children",
            "acceptableAnswers": [
              "if she had four children",
              "whether she had four children",
              "if it was true that she had four children",
              "whether it was true that she had four children"
            ],
            "hint": "if / whether + subject + past simple verb",
            "explanation": "เฉลย: if she had four children (หรือ if it was true that she had four children) | คำอธิบาย: คำถามแบบ Yes/No Question ใช้ if หรือ whether เชื่อมประโยค แล้วเรียงคำแบบบอกเล่าและถอย Tense"
          },
          {
            "id": "u7_p4_3",
            "prompt": "3. \"What do you think about sci-fi movies?\" Ryan asked Monica. → Ryan asked Monica ________________________.",
            "answer": "what she thought about sci-fi movies",
            "acceptableAnswers": ["what she thought about sci-fi movies"],
            "hint": "what + she + thought about sci-fi movies",
            "explanation": "เฉลย: what she thought about sci-fi movies | คำอธิบาย: ใช้คำเชื่อม what ตามด้วยลำดับบอกเล่า (she + thought) และเปลี่ยนกริยาเป็นรูปอดีต Past Simple"
          }
        ]
      }
    ]
  },

  "unit8": {
    "id": "unit8",
    "name": "Unit 8: Sports",
    "thaiName": "บทที่ 8: กีฬา และ Gerunds, Infinitives & Quantifiers",
    "description": "เรียนรู้เรื่องราวกีฬาระดับโลก (South Pole expedition, Samantha Kerr, Football) ไวยากรณ์ Gerunds & Infinitives และคำบอกปริมาณ Quantifiers",
    "sections": [
      {
        "title": "Part 1: Video Content Comprehension",
        "description": "Match the video titles (A–C) with their correct summary or description. (จับคู่วิดีโอกับเนื้อหาสรุป)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u8_p1_1",
            "prompt": "1. Aisha tells Elif about an exciting football match where her team scored a winning goal in the final minute and won 4–3.",
            "choices": [
              "A. Vocabulary Video (Race to the Pole)",
              "B. Real-World Speaking Video (Describing a Football Match)",
              "C. Project Video (Sports Star of the Year)"
            ],
            "answer": "B. Real-World Speaking Video (Describing a Football Match)",
            "explanation": "ตอบ B (Real-World Speaking Video - Describing a Football Match): เป็นบทสนทนาระหว่าง Aisha กับ Elif ที่บรรยายถึงการแข่งขันฟุตบอลสุดดุเดือดที่ทีมของเธอยิงประตูชัยนาทีสุดท้ายชนะไป 4-3"
          },
          {
            "id": "u8_p1_2",
            "prompt": "2. Sarah and Jack present Samantha Kerr, a talented Australian footballer, as their candidate for an award.",
            "choices": [
              "A. Vocabulary Video (Race to the Pole)",
              "B. Real-World Speaking Video (Describing a Football Match)",
              "C. Project Video (Sports Star of the Year)"
            ],
            "answer": "C. Project Video (Sports Star of the Year)",
            "explanation": "ตอบ C (Project Video - Sports Star of the Year): Sarah และ Jack นำเสนอชีวประวัติและความสำเร็จของ Sam Kerr ศูนย์หน้าหญิงทีมชาติออสเตรเลียเพื่อเสนอชื่อชิงรางวัลนักกีฬายอดเยี่ยม"
          },
          {
            "id": "u8_p1_3",
            "prompt": "3. An extreme athlete and former rugby player trains for a year to break the record for reaching the South Pole.",
            "choices": [
              "A. Vocabulary Video (Race to the Pole)",
              "B. Real-World Speaking Video (Describing a Football Match)",
              "C. Project Video (Sports Star of the Year)"
            ],
            "answer": "A. Vocabulary Video (Race to the Pole)",
            "explanation": "ตอบ A (Vocabulary Video - Race to the Pole): เป็นสารคดีของ Richard Parks อดีตนักกีฬารักบี้ที่ฝึกซ้อมเข้มข้นตลอด 1 ปีเต็มเพื่อทำลายสถิติการเดินทางไปขั้วโลกใต้ด้วยตัวคนเดียว"
          }
        ]
      },
      {
        "title": "Part 2: Sports Vocabulary & Benefits",
        "description": "Complete the sentences using the words in the box. (เติมคำศัพท์ด้านกีฬาและสมรรถภาพทางกาย)",
        "type": "fill_in",
        "wordBank": ["stamina", "beat", "score", "accuracy", "fitness", "train"],
        "questions": [
          {
            "id": "u8_p2_1",
            "prompt": "1. You need good ________________________ to shoot the basketball precisely into the hoop.",
            "answer": "accuracy",
            "acceptableAnswers": ["accuracy"],
            "hint": "Precision / ความแม่นยำ",
            "explanation": "เฉลย: accuracy | คำอธิบาย: accuracy (ความแม่นยำ) จำเป็นอย่างยิ่งในการชู้ตลูกบาสเกตบอลให้ลงห่วงอย่างแม่นยำ"
          },
          {
            "id": "u8_p2_2",
            "prompt": "2. Building up physical ________________________ helps runners complete long-distance marathons without getting tired.",
            "answer": "stamina",
            "acceptableAnswers": ["stamina"],
            "hint": "Endurance / ความอดทน ความทรหด",
            "explanation": "เฉลย: stamina | คำอธิบาย: stamina (ความอดทนทาน/ความอึด) คือพลังความทนทานของร่างกายในการวิ่งมาราธอนระยะไกลโดยไม่หมดแรงง่าย"
          },
          {
            "id": "u8_p2_3",
            "prompt": "3. Our school team managed to ________________________ the defending champions in the final match.",
            "answer": "beat",
            "acceptableAnswers": ["beat"],
            "hint": "Defeat an opponent / เอาชนะคู่ต่อสู้",
            "explanation": "เฉลย: beat | คำอธิบาย: ใช้กริยา beat ในความหมายว่า 'เอาชนะคู่แข่งหรือทีมแชมป์เก่า' ในรอบชิงชนะเลิศ"
          },
          {
            "id": "u8_p2_4",
            "prompt": "4. Professional athletes have to ________________________ every day to keep their bodies in peak condition.",
            "answer": "train",
            "acceptableAnswers": ["train"],
            "hint": "Practice or exercise / ฝึกซ้อม",
            "explanation": "เฉลย: train | คำอธิบาย: train ในฐานะคำกริยาหมายถึง การฝึกฝนฝึกซ้อมร่างกายอย่างมีวินัยในหมู่นักกีฬาอาชีพ"
          },
          {
            "id": "u8_p2_5",
            "prompt": "5. What was the final ________________________ of the match yesterday?",
            "answer": "score",
            "acceptableAnswers": ["score"],
            "hint": "Result of the game / ผลคะแนนการแข่งขัน",
            "explanation": "เฉลย: score | คำอธิบาย: score ทำหน้าที่เป็นคำนาม แปลว่าคะแนนหรือผลการแข่งขันที่ออกมาอย่างเป็นทางการ"
          },
          {
            "id": "u8_p2_6",
            "prompt": "6. Regular exercise improves overall ________________________ and strength.",
            "answer": "fitness",
            "acceptableAnswers": ["fitness"],
            "hint": "Physical health / ความสมบูรณ์ของร่างกาย",
            "explanation": "เฉลย: fitness | คำอธิบาย: fitness (สมรรถภาพและความสมบูรณ์ของร่างกาย) เกิดจากการออกกำลังกายอย่างสม่ำเสมอ"
          }
        ]
      },
      {
        "title": "Part 3: Key Grammar - Gerunds & Infinitives",
        "description": "Complete the sentences with the correct form of the verb in parentheses (Gerund or Infinitive).",
        "type": "fill_in",
        "questions": [
          {
            "id": "u8_p3_1",
            "prompt": "1. Richard Parks decided (set off) ________________________ on a journey to the South Pole.",
            "answer": "to set off",
            "acceptableAnswers": ["to set off"],
            "hint": "decide + to + V.infinitive",
            "explanation": "เฉลย: to set off | คำอธิบาย: กริยา decide บังคับตามด้วย Infinitive with to เสมอ (decided to set off)"
          },
          {
            "id": "u8_p3_2",
            "prompt": "2. Sam Kerr started (play) ________________________ football when she was 12 years old.",
            "answer": "playing",
            "acceptableAnswers": ["playing", "to play"],
            "hint": "start + V-ing or to-V",
            "explanation": "เฉลย: playing (หรือ to play) | คำอธิบาย: กริยา start สามารถตามได้ทั้ง Gerund (playing) และ Infinitive with to (to play)"
          },
          {
            "id": "u8_p3_3",
            "prompt": "3. After (compete) ________________________ in Australia, Sam moved to America.",
            "answer": "competing",
            "acceptableAnswers": ["competing"],
            "hint": "Preposition 'after' + V-ing",
            "explanation": "เฉลย: competing | คำอธิบาย: หลังคำบุพบท (Preposition) เช่น after ต้องตามด้วย Gerund (V-ing) เสมอ"
          },
          {
            "id": "u8_p3_4",
            "prompt": "4. They hope (win) ________________________ the championship next season.",
            "answer": "to win",
            "acceptableAnswers": ["to win"],
            "hint": "hope + to + V.infinitive",
            "explanation": "เฉลย: to win | คำอธิบาย: กริยา hope แสดงความหวังในอนาคต ต้องตามด้วย Infinitive with to เสมอ"
          },
          {
            "id": "u8_p3_5",
            "prompt": "5. He gave up (play) ________________________ rugby after suffering a career-ending injury.",
            "answer": "playing",
            "acceptableAnswers": ["playing"],
            "hint": "Phrasal verb 'give up' + V-ing",
            "explanation": "เฉลย: playing | คำอธิบาย: กริยาวลี give up (เลิก/ยุติ) ตามด้วย Gerund (V-ing) เสมอ (gave up playing)"
          }
        ]
      },
      {
        "title": "Part 4: Key Grammar - Quantifiers",
        "description": "Choose the correct quantifier to complete each sentence. (เลือกคำบอกปริมาณให้ถูกต้องตามชนิดของคำนาม)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u8_p4_1",
            "prompt": "1. There are (too much / too many) players on the field right now.",
            "choices": [
              "too many",
              "too much"
            ],
            "answer": "too many",
            "explanation": "ตอบ too many: คำนาม players เป็นนามนับได้พหูพจน์ (Countable Plural) จึงต้องใช้กับ too many"
          },
          {
            "id": "u8_p4_2",
            "prompt": "2. He didn't have (enough / too much) stamina to finish the race.",
            "choices": [
              "enough",
              "too much"
            ],
            "answer": "enough",
            "explanation": "ตอบ enough: stamina เป็นคำนามนับไม่ได้ ในประโยคปฏิเสธต้องการสื่อว่า 'มีความอดทนไม่เพียงพอ' จึงใช้ didn't have enough stamina"
          },
          {
            "id": "u8_p4_3",
            "prompt": "3. She has won (a lot of / a little) medals throughout her sports career.",
            "choices": [
              "a lot of",
              "a little"
            ],
            "answer": "a lot of",
            "explanation": "ตอบ a lot of: คำนาม medals เป็นนามนับได้พหูพจน์ ไม่สามารถใช้กับ a little ได้ จึงต้องใช้ a lot of เพื่อบอกว่าได้รับเหรียญรางวัลจำนวนมาก"
          },
          {
            "id": "u8_p4_4",
            "prompt": "4. We only have (a few / a little) minutes left before the match finishes.",
            "choices": [
              "a few",
              "a little"
            ],
            "answer": "a few",
            "explanation": "ตอบ a few: คำนาม minutes เป็นคำนามนับได้พหูพจน์ จึงต้องใช้กับ a few (สองสามนาทีที่เหลืออยู่)"
          }
        ]
      }
    ]
  }
};

// ตรวจสอบความถูกต้องและส่งออกข้อมูล
if (typeof module !== 'undefined' && module.exports) {
  module.exports = M5_UNITS_DATA;
}
