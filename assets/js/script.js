/* ==========================================================================
   RamaJaya Service — Master Script
   Navbar | Reveal | Counter | Back-to-top | Form validation | Toast
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ──────────────────────────────────────────
     1. NAVBAR SCROLL EFFECT
     Adds .scrolled class → glassmorphism background
     ────────────────────────────────────────── */
  var nav = document.querySelector('.nav-wrap');

  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 55);
  });

  /* ──────────────────────────────────────────
     2. ACTIVE NAV LINK (highlights current page)
     ────────────────────────────────────────── */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-wrap .nav-link').forEach(function (link) {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });

  /* ──────────────────────────────────────────
     3. SCROLL REVEAL (IntersectionObserver)
     Classes: .rev  .rev-l  .rev-r  .rev-sc
     Add .vis when element enters viewport
     ────────────────────────────────────────── */
  var revObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        revObs.unobserve(e.target); // one-time
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' });

  document.querySelectorAll('.rev, .rev-l, .rev-r, .rev-sc').forEach(function (el) {
    revObs.observe(el);
  });

  /* ──────────────────────────────────────────
     4. COUNTER ANIMATION
     Reads data-target (number) & data-suffix (e.g. "+")
     Animates with easeOutCubic over 1.8 s
     ────────────────────────────────────────── */
  function animateCount(el) {
    var target = parseInt(el.dataset.target, 10);
    var suffix = el.dataset.suffix || '';
    var dur    = 1800;
    var start  = performance.now();

    (function tick(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = Math.round(eased * target).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }

  var cntObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        animateCount(e.target);
        cntObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num[data-target]').forEach(function (el) {
    cntObs.observe(el);
  });

  /* ──────────────────────────────────────────
     5. BACK TO TOP BUTTON
     Shows after 500 px scroll, smooth-scrolls to top
     ────────────────────────────────────────── */
  var btnTop = document.querySelector('.btn-top');
  if (btnTop) {
    window.addEventListener('scroll', function () {
      btnTop.classList.toggle('show', window.scrollY > 500);
    });
    btnTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ──────────────────────────────────────────
     6. SMOOTH SCROLL (anchor links)
     ────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.querySelector(this.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  /* ──────────────────────────────────────────
     7. CONTACT FORM VALIDATION
     Real-time field validation + on-submit check
     Shows inline .inv-msg errors
     On success → toast notification + form reset
     ────────────────────────────────────────── */
  var form = document.getElementById('contactForm');
  if (form) {

    // Real-time validation on every input & blur
    form.querySelectorAll('.form-control').forEach(function (inp) {
      inp.addEventListener('input', function () { validateField(this); });
      inp.addEventListener('blur',  function () { validateField(this); });
    });

    // Submit handler
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll('.form-control').forEach(function (inp) {
        if (!validateField(inp)) ok = false;
      });

      if (ok) {
        var btn = form.querySelector('.btn-submit');
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Mengirim...';

        // Simulate async send (replace with fetch / XMLHttpRequest)
        setTimeout(function () {
          btn.disabled = false;
          btn.innerHTML = '<i class="bi bi-send"></i> Kirim Pesan';
          showToast('Pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.');
          form.reset();
          form.querySelectorAll('.form-control').forEach(function (inp) {
            inp.classList.remove('is-valid', 'is-invalid');
          });
        }, 1600);
      }
    });
  }

  /* ── validateField(inp) → boolean ── */
  function validateField(inp) {
    var val  = inp.value.trim();
    var name = inp.getAttribute('name');
    var msg  = inp.nextElementSibling; // .inv-msg element
    var err  = '';

    inp.classList.remove('is-valid', 'is-invalid');

    switch (name) {
      case 'nama':
        if (!val)          err = 'Nama lengkap diperlukan.';
        else if (val.length < 2) err = 'Nama harus minimal 2 karakter.';
        break;
      case 'telepon':
        var digits = val.replace(/[\s\-()]/g, '');
        if (!val)                      err = 'Nomor telepon diperlukan.';
        else if (!/^[0-9]{9,14}$/.test(digits)) err = 'Nomor telepon tidak valid (9–14 digit).';
        break;
      case 'email':
        // optional field — only validate if filled
        if (val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) err = 'Format email tidak valid.';
        break;
      case 'pesan':
        if (!val)              err = 'Pesan diperlukan.';
        else if (val.length < 10) err = 'Pesan harus minimal 10 karakter.';
        break;
    }

    if (err) {
      inp.classList.add('is-invalid');
      if (msg) { msg.textContent = err; msg.style.display = 'block'; }
      return false;
    } else {
      inp.classList.add('is-valid');
      if (msg) msg.style.display = 'none';
      return true;
    }
  }

  /* ──────────────────────────────────────────
     8. TOAST NOTIFICATION
     Creates a temporary green toast at top-right
     Auto-removes after 3.2 s
     ────────────────────────────────────────── */
  function showToast(message) {
    // Remove any existing toast
    var old = document.querySelector('.toast-box');
    if (old) old.remove();

    var toast = document.createElement('div');
    toast.className = 'toast-box';
    toast.innerHTML =
      '<i class="bi bi-check-circle-fill" style="font-size:1.2rem;flex-shrink:0"></i>' +
      '<span>' + message + '</span>';
    document.body.appendChild(toast);

    // Auto-hide after 3.2 s
    setTimeout(function () {
      toast.classList.add('hide');
      setTimeout(function () { toast.remove(); }, 350);
    }, 3200);
  }

  /* ──────────────────────────────────────────
     9. MOBILE NAV AUTO-CLOSE
     Closes Bootstrap collapse when a link is clicked
     ────────────────────────────────────────── */
  var collapse = document.getElementById('navMenu');
  if (collapse) {
    var bsCollapse = bootstrap.Collapse.getInstance(collapse);
    document.querySelectorAll('#navMenu .nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (bsCollapse) bsCollapse.hide();
      });
    });
  }

});
