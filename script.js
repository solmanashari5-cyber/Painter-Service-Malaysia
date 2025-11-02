document.getElementById('year').textContent = new Date().getFullYear();

const nav = document.getElementById('nav');
const btn = document.getElementById('navToggle');
btn && btn.addEventListener('click', ()=> {
  if(nav.style.display === 'flex') nav.style.display = 'none';
  else nav.style.display = 'flex';
  nav.style.flexDirection = 'column';
  nav.style.gap = '10px';
});

const form = document.getElementById('quoteForm');
if(form){
  form.addEventListener('submit', (e)=>{
    setTimeout(()=> alert('Thank you! We will contact you soon.'), 200);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");
  const msg = document.getElementById("msg");

  sendBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !phone) {
      msg.textContent = "Please fill in required fields (*)";
      msg.style.color = "red";
      msg.classList.remove("hidden");
    } else {
      msg.textContent = "Thank you! Your message has been sent.";
      msg.style.color = "green";
      msg.classList.remove("hidden");

      // Optional: clear the fields
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("location").value = "";
      document.getElementById("email").value = "";
    }
  });
});
