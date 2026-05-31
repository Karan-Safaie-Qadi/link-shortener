<div dir="rtl" align="right">

# 🔗 سرویس کوتاه‌کننده لینک  
**یک پروژه سبک و سریع برای کوتاه کردن لینک‌ها با Node.js و Express**  
ذخیره‌سازی در فایل JSON – بدون نیاز به پایگاه داده

</div>

---

<div dir="ltr" align="left">

# 🔗 Link Shortener  
**A lightweight URL shortener built with Node.js and Express**  
Stores links in a local JSON file – no database required

</div>

---

<div dir="rtl" align="right">

## ✨ ویژگی‌ها
- تولید شناسه کوتاه امن با **nanoid**
- ریدایرکت خودکار از لینک کوتاه به لینک اصلی
- تشخیص لینک تکراری (در صورت وجود، همان شناسه قبلی برگردانده می‌شود)
- ذخیره‌سازی ساده در فایل JSON (بدون پایگاه داده)
- آماده برای دیپلوی روی سرویس‌های رایگان (Render, Railway, ...)
- بدون وابستگی‌های سنگین

## 📁 ساختار پوشه‌ها

<div dir="ltr" align="left">

```
link-shortener/
├── index.js # فایل اصلی سرور
├── package.json
├── .gitignore
└── README.md
```
</div>

> پوشه `data/` (شامل `links.json`) در اولین اجرا خودکار ساخته می‌شود.

## 🚀 نصب و راه‌اندازی

۱. مخزن را کلون کنید یا فایل‌ها را دانلود کنید.  
۲. وابستگی‌ها را نصب کنید:
<div dir="ltr" align="left">

   ```bash
   npm install
   ```
</div>
۳.سرور را راه اندازی کنید:
<div dir="ltr" align="left">


```bash
node index.js
```
</div>
سرور روی آدرس http://localhost:3000 قابل دسترس خواهد بود.

## 📮 نحوه استفاده

ساخت لینک کوتاه (درخواست POST):
<div dir="ltr" align="left">


```bash
curl -X POST http://localhost:3000/shorten \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com/very-long-url"}'
  ```

</div>

پاسخ نمونه:


<div dir="ltr" align="left">

```json
{
  "shortUrl": "http://localhost:3000/abc1234"
}
```
</div>

باز کردن لینک کوتاه (درخواست GET):
مرورگر خود را روی `http://localhost:3000/abc1234` باز کنید تا به لینک اصلی هدایت شوید.

</div>

---

## ✨ Features
- Secure short ID generation via nanoid
- Automatic redirect from short URL to original
- Duplicate link detection (returns existing short URL if already shortened)
- Simple JSON file storage – no database setup required
- Ready to deploy on free hosting platforms (Render, Railway, etc.)
- Zero heavy dependencies

## 📁 Folder Structure

```
link-shortener/
├── index.js          # Main server file
├── package.json
├── .gitignore
└── README.md
```
> The `data/` folder (containing `links.json`) is created automatically on first run.



## 🚀 Installation & Run

1.Clone the repository or download the files.

2.Install dependencies:

```bash
npm install
```

3.Start the server:

```bash
node index.js
```

The server will run at `http://localhost:3000`.

## 📮 Usage

Shorten a URL (POST request):

```bash
curl -X POST http://localhost:3000/shorten \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com/very-long-url"}' 
  ```

  Example response:

```json
{
  "shortUrl": "http://localhost:3000/abc1234"
}
```
Visit the short URL (GET request):
Open `http://localhost:3000/abc1234` in your browser – you'll be redirected to the original link.

</div> 
