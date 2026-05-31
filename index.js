const express = require('express');
const { nanoid } = require('nanoid');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware برای پردازش JSON ورودی
app.use(express.json());
app.use(express.static('public')); // در صورت تمایل به افزودن فایل‌های استاتیک

// مسیر فایل ذخیره‌سازی
const LINKS_FILE = path.join(__dirname, 'data', 'links.json');

// خواندن لینک‌ها از فایل
function readLinks() {
  try {
    const data = fs.readFileSync(LINKS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {}; // فایل وجود ندارد یا خالی است
  }
}

// نوشتن لینک‌ها در فایل
function writeLinks(links) {
  fs.mkdirSync(path.dirname(LINKS_FILE), { recursive: true });
  fs.writeFileSync(LINKS_FILE, JSON.stringify(links, null, 2));
}

// ۱. endpoint ایجاد لینک کوتاه
app.post('/shorten', (req, res) => {
  const { url } = req.body;

  // اعتبارسنجی ساده
  if (!url || !/^https?:\/\/.+/i.test(url)) {
    return res.status(400).json({ error: 'لینک معتبر نیست. باید با http یا https شروع شود.' });
  }

  const links = readLinks();

  // اگر لینک قبلاً کوتاه شده بود، همان شناسه را برگردان
  const existing = Object.entries(links).find(([_, value]) => value === url);
  if (existing) {
    const shortId = existing[0];
    return res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortId}` });
  }

  // تولید شناسه‌ی کوتاه ۷ کاراکتری
  const shortId = nanoid(7);
  links[shortId] = url;
  writeLinks(links);

  res.status(201).json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortId}` });
});

// ۲. endpoint بازگردانی و ریدایرکت
app.get('/:shortId', (req, res) => {
  const { shortId } = req.params;
  const links = readLinks();
  const originalUrl = links[shortId];

  if (!originalUrl) {
    return res.status(404).send('لینک کوتاه پیدا نشد');
  }

  res.redirect(originalUrl);
});

// راه‌اندازی سرور
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});