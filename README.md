# use-hyper-htmx
Library : https://htmx.org/

# 사용 방법
CDN으로 라이브러리 연동 필요
<script src="https://unpkg.com/htmx.org@1.9.4"></script>

# In HTML
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/htmx.org@1.9.4"></script>
    <title>Use HTMX</title>
  </head>
  <body>
    <div class="product-container">
      <ul class="product-list">
        <li class="product-item">1번 항목</li>
        <li class="product-item">2번 항목</li>
        <li class="product-item">3번 항목</li>
        <li class="product-item">4번 항목</li>
        <button
          class="add-btn"
          hx-get="http://localhost:5500/more"
          hx-swap="beforebegin"
        >
          Add Button
        </button>
      </ul>
    </div>
    <script>
      document.body.addEventListener("htmx:configRequest", function (event) {
        event.detail.headers = "";
        event.detail.headers["Content-Type"] =
          "application/x-www-form-urlencoded; charset=UTF-8";
      });
    </script>
  </body>
</html>
```
