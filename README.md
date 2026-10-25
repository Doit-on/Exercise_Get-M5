# Get INVOLVED! ม.5 - Academic English Mastery (ทวพ. - TWP)
### ระบบแบบฝึกหัดภาษาอังกฤษออนไลน์ และออกเกียรติบัตรอิเล็กทรอนิกส์ (E-Certificate)
**บริษัท สำนักพิมพ์ ไทยวัฒนาพานิช จำกัด (TWP)**

---

## 🌟 จุดเด่นของระบบ (System Highlights)
1. **Apple Minimalist UX/UI**:
   - การออกแบบสไตล์ Apple สะอาด สว่าง สบายตา โทนสี Light Gray (`#F5F5F7`) ขอบบางเฉียบ Hairline Border และปุ่มกดมิติสัมผัสลอยตัว (Tactile 3D Buttons)
2. **Unified Navigation & Mobile First**:
   - หน้าจอคอมพิวเตอร์: Apple Top Nav Pills 4 เมนูหลัก
   - หน้าจอมือถือ: **Apple Mobile Bottom Tab Bar** พร้อมรองรับ Safe Area Inset ใช้นิ้วโป้งควบคุมได้สะดวกรวดเร็ว
3. **100% Pure English Content**:
   - โจทย์ ตัวเลือก และคำศัพท์เป็นภาษาอังกฤษล้วน 100% เพื่อฝึกทักษะการอ่านวิเคราะห์จริง
   - คำเฉลยและบทวิเคราะห์จากติวเตอร์ (Tutor Insight Coaching) เป็นภาษาไทยเชิงวิชาการลึกซึ้ง แสดงผลเมื่อกดยืนยันตรวจคำตอบ
4. **Interactive Word Bank Chips**:
   - กล่องคลังคำศัพท์สำหรับแบบฝึกหัดเติมคำ (Fill-in) สามารถแตะเพื่อนำคำศัพท์ไปใส่ในช่องว่างได้ทันทีบนสมาร์ตโฟน
5. **Progressive E-Certificate Engine**:
   - เรนเดอร์บน High-DPI Canvas 2X พร้อมระบบ **Unicode Grapheme Cluster Regex (`/\P{M}\p{M}*/gu`)** ขจัดปัญหาสระลอยและวรรณยุกต์ขาดอย่างถาวร
   - ปลดล็อกตัวอักษรชื่อตามความก้าวหน้าทีละ 25% (0%, 25%, 50%, 75%, 100% พร้อมตราประทับทองคำ)
6. **Teacher Portal & Cloud Database**:
   - ระบบควบคุมคุณครูผ่านรหัสผ่าน PIN ป้องกันรหัสผ่านรั่วไหล
   - นำเข้ารายชื่อนักเรียนด้วยไฟล์ Excel (.xlsx) / CSV ผ่าน SheetJS
   - รองรับ Google Apps Script Web App พร้อม `LockService` ป้องกันข้อมูลชนกัน

---

## 📂 โครงสร้างไฟล์ในโครงการ
```
สรุปคลิป แบบฝึกหัด M.5/
├── index.html                   # หน้าเว็บแอปพลิเคชันหลัก
├── preview_ui_m5.html            # หน้าพรีวิวระบบสำหรับเปิดดูตัวอย่าง
├── m5_units_data.js             # ชุดข้อมูลหลักสูตร ม.5 ครบ 4 หน่วย (100% Pure English)
├── Code.gs                      # Google Apps Script สำหรับฐานข้อมูล TWP_GetInvolved_M5_Database
├── google-apps-script.js        # สำเนาสคริปต์ Google Apps Script
├── google-apps-script.txt       # สคริปต์ข้อความสำหรับคัดลอกลง Google Sheets
├── DEVELOPMENT_RETROSPECTIVE.md # คู่มือสรุปบทเรียนและสถาปัตยกรรมระบบ ม.5
├── students_roster_template.csv # ไฟล์เทมเพลตรายชื่อนักเรียน ม.5
├── assets/
│   ├── twp-logo.png             # ตราสัญลักษณ์ ทวพ.
│   ├── get-involved-logo.png    # โลโก้ Get INVOLVED!
│   └── xlsx.full.min.js         # ไลบรารีอ่านไฟล์ Excel (SheetJS)
├── .gitignore                   # การตั้งค่า Git
├── .nojekyll                    # ปิด Jekyll บน GitHub Pages
└── 404.html                     # หน้าสำรองสำหรับ GitHub Pages Routing
```

---

## 🚀 วิธีการติดตั้งและใช้งาน (Quick Start)
1. ดับเบิลคลิกเปิดไฟล์ `index.html` หรือ `preview_ui_m5.html` ในเบราว์เซอร์ (Chrome, Edge, Safari)
2. หรือรัน Local Server ผ่านคำสั่ง:
   ```bash
   npx serve .
   ```
3. รหัสผ่านคุณครู (Teacher PIN): `1234`
