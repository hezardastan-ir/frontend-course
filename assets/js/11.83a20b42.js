(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{220:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"صفحه-پست-و-کامنت‌ها"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#صفحه-پست-و-کامنت‌ها"}},[t._v("#")]),t._v(" صفحه پست و کامنت‌ها")]),t._v(" "),r("p",[t._v("با شکل‌گیری مفهوم Single Page Application ها، نیاز به امکانی برای جابجا کردن کاربر بین صفحات مختلف احساس شد. به این شکل که با کلیک کردن کاربر روی یک لینک، نیاز بود که url صفحه عوض شه و برای این که کاربر حس نکنه که صفحه داره کامل عوض میشه، یک سری المان‌های صفحه مثل header باقی می‌مونند. همچنین به توسعه‌دهنده ها این امکان رو می‌داد که با رد و بدل کردن اطلاعات کمی، یک صفحه جداگونه رو نسبت به صفحه قبل، به کاربر نشون بدن.Routing به فرایندی گفته‌میشه که طی اون، کاربر لینکی رو از application می‌خواد و application تصمیم می‌گیره که کدوم صفحه باید به کاربر نشون داده بشه.")]),t._v(" "),r("h2",{attrs:{id:"coding-style"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#coding-style"}},[t._v("#")]),t._v(" Coding style")]),t._v(" "),r("p",[t._v("برای مرتب‌سازی کد از ابزارهایی استفاده می‌شه. این ابزارها بر اساس قوانینی کد رو مرتب می‌کنند و در صورت رعایت نکردنشون خطا یا هشدار نشون می‌دن. رعایت این قوانین باعث خوانایی بهتر کد و consistency پروژه می‌شه.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint"),r("OutboundLink")],1),t._v(" رو نصب کن و از تنظیمات recommended و "),r("a",{attrs:{href:"https://www.npmjs.com/package/eslint-config-airbnb",target:"_blank",rel:"noopener noreferrer"}},[t._v("airbnb"),r("OutboundLink")],1),t._v(" استفاده کن.")]),t._v(" "),r("p",[t._v("همچنین برای همه کامپوننت‌های ری‌اکت که مینویسی حتما "),r("a",{attrs:{href:"https://reactjs.org/docs/typechecking-with-proptypes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("propType"),r("OutboundLink")],1),t._v(" هم بنویس تا معلوم باشه هر کامپوننت نیاز به چه فیلدهایی داره.")]),t._v(" "),r("h2",{attrs:{id:"ری‌اکت-router"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ری‌اکت-router"}},[t._v("#")]),t._v(" ری‌اکت Router")]),t._v(" "),r("p",[t._v("با توجه به اینکه نشون دادن کانتن با توجه به url و تصمیم‌گیری اون در سمت کلاینت میتونه به مرور و برای لینک‌های داینامیک پیچیده بشه، از پکیج آماده‌ی react-router استفاده میکنیم که انواع مرورگرها رو میتونه ساپورت کنه.لینک‌های زیر رو از مستندات react-router بخون:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://reacttraining.com/react-router/web/guides/philosophy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Philosophy"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://reacttraining.com/react-router/web/guides/basic-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("Basic Components"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://reacttraining.com/react-router/web/guides/quick-start",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quick Start"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("و همه مثال‌هایی که تو همون سایت آورده شده رو یه نگاه بنداز تا کامل یاد بگیری چجوری کار میکنه.")]),t._v(" "),r("p",[t._v("در ادامه میخوایم این پکیج رو به پروژه اضافه کنیم. خود create-react-app توضیحات خوبی برای اضافه کردن router بهمون میده: "),r("a",{attrs:{href:"https://facebook.github.io/create-react-app/docs/adding-a-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("لینک"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"صفحه-پست"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#صفحه-پست"}},[t._v("#")]),t._v(" صفحه پست")]),t._v(" "),r("p",[t._v("تا الان روی صفحه خانه کار می‌کردیم که لیست پست‌ها رو نشون میده (با آدرس /). حالا میریم سراغ صفحه /post/:id که یه پست رو نشون میده.")]),t._v(" "),r("p",[t._v("با این اوصاف، علاوه بر کامپوننت App که از قبل وجود داشت، به سه کامپوننت دیگه نیاز داریم:")]),t._v(" "),r("p",[t._v("Home: برای نشون دادن لیست پست‌ها")]),t._v(" "),r("p",[t._v("PostPage: برای نشون دادن صفحه پست (کامپوننتی که به react-router میدیم)")]),t._v(" "),r("p",[t._v("Post: که کامپوننت اصلی یک پست هست و رندرش می‌کنه و دو کامپوننت دیگه ازش استفاده می‌کنن.")]),t._v(" "),r("p",[t._v("از کامپوننت App فقط برای نمایش Header و Routing استفاده می‌کنیم.")]),t._v(" "),r("p",[t._v("فایل PostService تا الان فقط یک endpoint داشت و اون هم برای گرفتن لیست پست‌ها بود. Endpoint جدیدی باید بهش اضافه بشه که فقط اطلاعات مربوط به یک پست رو میگیره. آدرسش اینه:")]),t._v(" "),r("p",[r("code",[t._v("localhost:3000/posts/[id]")])]),t._v(" "),r("p",[t._v("حالا title پست‌هایی که داشتیم رو به "),r("a",{attrs:{href:"https://reacttraining.com/react-router/web/api/Link",target:"_blank",rel:"noopener noreferrer"}},[t._v("لینکِ"),r("OutboundLink")],1),t._v(" روتر تبدیل کن. با کلیک کردن روشون صفحه مربوط به همون پست باید نشون داده بشه. برای نمایش یک پست تکی نمیخوایم کامپوننت Post زیاد پیچیده بشه و منطق فراخوانی api مستقیما داخلش نوشته بشه، برای ارائه یه راه حل بهتر این "),r("a",{attrs:{href:"https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0",target:"_blank",rel:"noopener noreferrer"}},[t._v("لینک"),r("OutboundLink")],1),t._v(" رو حتما بخون.")]),t._v(" "),r("h2",{attrs:{id:"کامنت‌ها"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#کامنت‌ها"}},[t._v("#")]),t._v(" کامنت‌ها")]),t._v(" "),r("p",[t._v("تو صفحه پست، علاوه بر خود متن، می‌خوایم کامنت‌های مربوط به اون پست رو هم نشون بدیم. Endpoint مربوط به کامنت‌های یک پست، اینه:")]),t._v(" "),r("p",[r("code",[t._v("localhost:3000/posts/[id]/comments")])]),t._v(" "),r("p",[t._v("در این قسمت قرار نیست که ارسال کامنت رو اضافه کنیم، و فقط نمایششون کفایت می‌کنه.")]),t._v(" "),r("p",[t._v("اول یه کامپوننت به اسم CommentSection پیاده سازی کن که با گرفتن یه آرایه از کامنت‌ها، اونا رو با styling مناسب توی صفحه نشون بده. از این کامپوننت داخل PostPage استفاده کن و تابع گرفتن لیست کامنت‌ها رو (که قبلا توی PostService پیاده‌سازی کردی)، تو این کامپوننت صدا بزن.")]),t._v(" "),r("p",[t._v("در ادامه با توجه به این "),r("a",{attrs:{href:"https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0",target:"_blank",rel:"noopener noreferrer"}},[t._v("لینک"),r("OutboundLink")],1),t._v(" که گفتیم بخونی کامپوننت CommentSection رو به دو کامپوننت مجزا تقسیم کن که یکی صرفا وظیفه نمایش کامنت رو داره و اون یکی فراخوانی به api رو انجام میده. همچنین بررسی کن آیا میشه به کامپوننت‌های کوچیکتری هم تقسیم بشه تا پیچیدگی کمتر بشه یا نه؟")]),t._v(" "),r("p",[t._v("برای این دو قسمتِ پست و کامنت‌ها loading مناسب تعریف کن. یعنی تا وقتی محتوای هر کدوم لود نشده، داخل اون قسمت بنویس: «در حال بارگذاری...».")]),t._v(" "),r("h3",{attrs:{id:"ساختار-درختی-کامنت‌ها"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ساختار-درختی-کامنت‌ها"}},[t._v("#")]),t._v(" ساختار درختی کامنت‌ها")]),t._v(" "),r("p",[t._v("بعضی از کامنت‌هایی که از سرور میگیری، فیلد parent_idشون، null هست. اون ها کامنت‌هایی هستند که مربوط به خود پست هستند. سایر کامنت‌ها که مقدار این فیلد براشون یک عدد ست شده، در پاسخ (reply) به کامنتی با آیدی parent_id ارسال شدن. در نتیجه باید زیر parentش نشون داده‌بشه. همچنین تمام کامنت‌ها باید دکمه‌ای داشته‌باشند برای پاسخ دادن به اون کامنت؛ که با کلیک روی اون، میشه جوابی به خود اون کامنت فرستاد. که البته باز هم نیازی به ارسال پاسخ به سرور وجود نداره و فقط وجود این فیلد ورودی کفایت می‌کنه.")]),t._v(" "),r("h3",{attrs:{id:"ارسال-comment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ارسال-comment"}},[t._v("#")]),t._v(" ارسال comment")]),t._v(" "),r("p",[t._v("حالا می‌خوایم امکان ارسال comment رو اضافه کنیم. برای ارسال comment جدید به endpoint کامنت‌های یک پست با متد POST ریکوئست می‌زنیم و فیلدهای مرتبط رو برای سرور می‌فرستیم. نکته مهم در این قسمت، اینه که فیلد parent_id هم باید متناسب با جایی که کامنت داره ارسال میشه، به سرور بره.")]),t._v(" "),r("p",[t._v("ارسال کامنت برای یک پست بدونِ ثبت‌نام و لاگین باید برای همه قابل انجام باشه. به همین دلیل به فیلدهایی برای دریافتِ «نام» و «متنِ کامنت» نیاز داریم.")]),t._v(" "),r("p",[t._v("سایر فیچر‌های این قسمت، به شکل زیر هست:")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("در صورتی که ارتفاع متن نوشته‌شده توسط کاربر، از ارتفاع تعبیه شده برای این فیلدِ متنِ کامنت بیشتر باشه، نباید به اون فیلد اسکرول اضافه بشه، بلکه باید طول فیلد هم افزایش پیدا کنه.")])]),t._v(" "),r("li",[r("p",[t._v("در صورتی که کاربر ctrl + enter رو می‌زنه، کامنت ارسال میشه به سرور (دکمه Send Comment هم داشته باشه که همین کار رو می‌کنه)")])]),t._v(" "),r("li",[r("p",[t._v("اطلاعاتی که به سرور می‌فرستی، شامل موارد زیر هست:")]),t._v(" "),r("ul",[r("li",[t._v("هدر تعیین کننده نوع اطلاعات فرستاده شده به سرور (json)")]),t._v(" "),r("li",[t._v("اطلاعات کامنت (به صورت json) شامل:\n"),r("ul",[r("li",[t._v("author (string)")]),t._v(" "),r("li",[t._v("body (string)")]),t._v(" "),r("li",[t._v("date (string)")]),t._v(" "),r("li",[t._v("parent_id (null | number)")])])])])]),t._v(" "),r("li",[r("p",[t._v("این کامنت رو بدون گرفتن لیست دوباره کامنت‌ها به صفحه اضافه کن.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);