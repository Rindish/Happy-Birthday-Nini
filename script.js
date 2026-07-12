// ========================================
// Countdown Timer
// ========================================

// 14 July 2026 12:00 AM
const targetDate = new Date("July 11, 2026 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const openBtn = document.getElementById("openBtn");

function countdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        openBtn.disabled = false;
        openBtn.innerHTML = "🎁 Open My Surprise ❤️";

        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

    const m = Math.floor((distance % (1000*60*60)) / (1000*60));

    const s = Math.floor((distance % (1000*60)) / 1000);

    days.innerHTML = String(d).padStart(2,"0");
    hours.innerHTML = String(h).padStart(2,"0");
    minutes.innerHTML = String(m).padStart(2,"0");
    seconds.innerHTML = String(s).padStart(2,"0");

}

setInterval(countdown,1000);

countdown();


// ========================================
// Open Button
// ========================================

openBtn.addEventListener("click",function(){

    if(!openBtn.disabled){

        window.location.href="proposal.html";

    }

});


// ========================================
// Floating Hearts
// ========================================

const particleContainer = document.getElementById("particles");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (15+Math.random()*30)+"px";

    heart.style.animationDuration = (5+Math.random()*8)+"s";

    particleContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },13000);

}

setInterval(createHeart,300);


// ========================================
// Cursor Sparkle
// ========================================

document.addEventListener("mousemove",(e)=>{

    const spark=document.createElement("div");

    spark.style.position="fixed";
    spark.style.left=e.clientX+"px";
    spark.style.top=e.clientY+"px";

    spark.style.width="8px";
    spark.style.height="8px";

    spark.style.borderRadius="50%";

    spark.style.background="#ff7aa2";

    spark.style.pointerEvents="none";

    spark.style.opacity="1";

    spark.style.transition="1s";

    document.body.appendChild(spark);

    setTimeout(()=>{

        spark.style.opacity="0";
        spark.style.transform="scale(4)";

    },10);

    setTimeout(()=>{

        spark.remove();

    },1000);
    card.innerHTML = `
    <div class="video-thumbnail">
        <div class="video-decoration">🎬</div>

        <div class="media-icon">▶</div>

        <div class="media-name">
            Memory Video
        </div>
    </div>

    <div class="type-badge">VIDEO</div>
    <div class="selection-check">✓</div>


    <div class="video-thumbnail">
    <div class="media-icon">▶</div>
</div>
`;


    
});




// ========================================
// Background Music (Optional)
// ========================================

// Uncomment after adding music.mp3

/*
const music=new Audio("music.mp3");

music.loop=true;

document.body.addEventListener("click",()=>{

music.play();

},{once:true});

*/