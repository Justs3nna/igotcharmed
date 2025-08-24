const poemHTML = `

  <p>In this world filled with gray, almost no glow,<br>
  I want to be the vivid, your shade of blue.<br>
  Just like how roses bloom in red,<br>
  My feelings are sincere, patient, and true.</p>

  <p>This must be the feeling, just admiring from afar,<br>
  When a glance from you feels brighter than any star.<br>
  I watch, I wonder, quietly subdued,<br>
  Content in silence, lost in thoughts of you.</p>

  <p>This poem’s not a crafted drama,<br>
  Nor a plea to win your panorama.<br>
  I just need you to know,<br>
  You've lit a spark I couldnt outgrow.</p>

  <p>You may think you've done nothing,<br>
  But your presence inspired me to change<br>
  To grow, to rise, to better myself,<br>
  To let go of habits I couldn't estrange.</p>

  <p>Someday, I dream of winning<br>
  Not just your swift replies,<br>
  Or fleeting updates and soft assurances,<br>
  But the truth behind your silent cries.</p>

  <p>I want to be the reason of your smile,<br>
  The calm in your restless night.<br>
  The softness behind your every touch,<br>
  The warmth that holds you tight.</p>

  <p>I get it, I might not be your type.<br>
  That’s fine; I’m not so weak or breakable.<br>
  Call me Mr. Lover Man<br>
  Even shattered, I'm unshakable.</p>

  <p>Spilling thoughts on linoleum floors,<br>
  Still reeling in my crowded mind<br>
  But in some future stitched by time,<br>
  I dream of being the calm of your mind.</p>

  <p>What can I do? I got charmed by you. So may I…<br>
  May I have the chance to prove it true<br>
  To capture your heart, and cherish you?<br>
  So may I? May I court you?</p>
`;
function typeWriterEffect(elementId, htmlContent, speed = 500) { // slower speed here
  const element = document.getElementById(elementId);
  const scrollContainer = element.closest('.letter');

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;

  let formattedText = "";
  const paragraphs = tempDiv.querySelectorAll("p, h3");

  paragraphs.forEach((p, index) => {
    formattedText += p.innerText;
    if (index < paragraphs.length - 1) {
      formattedText += "\n\n";
    }
  });

  element.innerHTML = "";
  let i = 0;

  function type() {
    if (i < formattedText.length) {
      const current = formattedText.substring(0, i + 1).replace(/\n/g, "<br>");
      element.innerHTML = current;

      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }

      i++;
      setTimeout(type, speed);
    } else {
      element.innerHTML = htmlContent;

      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }

  type();
}




// Open the envelope and trigger typing
function openEnvelope() {
  const container = document.querySelector('.container');
  const envelope = document.querySelector('.envelope');
  container.classList.add('opened');
  envelope.classList.add('open');

  // Play music
  const music = document.getElementById('bg-music');
  if (music && music.paused) {
    music.play().catch((e) => {
      console.log('Autoplay blocked:', e);
    });
  }

  // Start typewriter effect
  setTimeout(() => {
    typeWriterEffect("poem-text", poemHTML, 80); // slower speed
  }, 800);
}

// Reset everything
function resetEnvelope() {
  const container = document.querySelector('.container');
  const envelope = document.querySelector('.envelope');
  const music = document.getElementById('bg-music');

  container.classList.remove('opened');
  envelope.classList.remove('open');

  // Clear poem
  document.getElementById("poem-text").innerHTML = "";

  // Reset music
  if (music) {
    music.pause();
    music.currentTime = 0;
  }
}

function resizeFlap() {
  const container = document.querySelector('.container');
  const flap = document.querySelector('.flap');
  const containerWidth = container.offsetWidth;

  flap.style.borderLeftWidth = (containerWidth / 2) + 'px';
  flap.style.borderRightWidth = (containerWidth / 2) + 'px';
  flap.style.borderBottomWidth = (containerWidth * 0.316) + 'px'; // 190 / 600 = 0.316
  flap.style.top = (containerWidth * 0.316) + 'px';
}

window.addEventListener('resize', resizeFlap);
window.addEventListener('load', resizeFlap);
