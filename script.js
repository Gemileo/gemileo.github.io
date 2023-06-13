
// 跑马灯效果
function updateMarquee() {
    const marquee = document.getElementById("marquee");
    const marqueeText = "欢迎光临我的博客";
    let marqueeIndex = 0;
    setInterval(function () {
    marqueeIndex = (marqueeIndex + 1) % marqueeText.length;
    const statusText = marqueeText.slice(marqueeIndex) + marqueeText.slice(0, marqueeIndex);
    marquee.innerText = statusText;
    }, 200);
    }

//切换风格
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toggleTheme").addEventListener("click", function() {
      document.body.classList.toggle("dark");
    });
  });

document.addEventListener("DOMContentLoaded", function () {
    updateMarquee();

    // 获取首页和个人简历链接
    var homeLink = document.querySelector("nav ul li a[href='#首页']");
    var resumeLink = document.querySelector("nav ul li a[href='#个人简历']");

    // 添加点击事件监听器
    homeLink.addEventListener("click", function (event) {
        event.preventDefault();

        // 隐藏所有<article>元素
        var articles = document.querySelectorAll("article");
        for (var i = 0; i < articles.length; i++) {
            articles[i].style.display = "none";
        }

        // 显示首页<section>元素
        document.getElementById("homepage").style.display = "block";
    });

    resumeLink.addEventListener("click", function (event) {
        event.preventDefault();

        // 隐藏其他所有<article>元素
        var articles = document.querySelectorAll("article");
        for (var i = 0; i < articles.length; i++) {
            articles[i].style.display = "none";
        }

        // 隐藏首页<section>元素
        document.getElementById("homepage").style.display = "none";

        // 显示个人简历<article>元素
        document.getElementById("个人简历").style.display = "block";
    });
	  document.addEventListener("DOMContentLoaded", function () {
    
});
	
        window.addEventListener("DOMContentLoaded", function() {
            // 动态显示时间和问候语
            function updateTime() {
                const now = new Date();
                const hours = now.getHours();
                let greeting;

                if (hours < 5) {
                    greeting = "凌晨好";
                } else if (hours < 9) {
                    greeting = "早上好";
                } else if (hours < 12) {
                    greeting = "上午好";
                } else if (hours < 18) {
                    greeting = "下午好";
                } else {
                    greeting = "晚上好";
                }

                document.getElementById("greeting").textContent = greeting + "，现在是 " + now.toLocaleTimeString();
            }

            // 每秒更新一次时间
            updateTime();
            setInterval(updateTime, 1000);
        });

// 获取友情链接子栏目链接
var friendLinks = document.querySelectorAll("nav li ul li a");

// 为每个链接添加点击事件监听器
for (var i = 0; i < friendLinks.length; i++) {
    friendLinks[i].addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = this.href;
    });
}

// 获取所有子栏目链接
var hobbyLinks = document.querySelectorAll("nav li ul li a");

// 为每个链接添加点击事件监听器
for (var i = 0; i < hobbyLinks.length; i++) {
    hobbyLinks[i].addEventListener("click", function (event) {
        event.preventDefault();

        // 隐藏其他所有<article>元素
        var articles = document.querySelectorAll("article");
        for (var j = 0; j < articles.length; j++) {
            articles[j].style.display = "none";
        }

        // 隐藏首页<section>元素
        document.getElementById("homepage").style.display = "none";

        // 获取与点击的链接对应的<article>元素
        var targetArticle = document.getElementById(this.innerHTML);

        // 显示对应的<article>元素
        targetArticle.style.display = "block";
    });
}
});