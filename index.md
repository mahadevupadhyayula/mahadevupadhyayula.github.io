---
layout: default
---

<section class="hero-section" aria-labelledby="hero-title">
  <p class="hero-eyebrow">Human-approved AI workflow systems for B2B teams</p>
  <h1 id="hero-title">Turn messy CRM notes, lead research, and content requests into clean workflows your team can trust.</h1>
  <p class="hero-copy">I help B2B operators design and prototype AI systems that extract useful signal from messy inputs, validate the result, and keep a human approval step before anything reaches your CRM, sales motion, or content pipeline.</p>
  <div class="hero-actions" aria-label="Primary actions">
    <a class="button-link button-primary" href="mailto:mahadevu318@gmail.com?subject=AI%20Workflow%20Audit%20Request">Book an AI Workflow Audit</a>
    <a class="button-link button-secondary" href="{{ '/case-studies' | relative_url }}">View Case Studies</a>
  </div>
</section>

<section class="trust-row" aria-label="Relevant experience">
  <div>
    <strong>5+ years</strong>
    <span>building data-backed product workflows</span>
  </div>
  <div>
    <strong>PayPal</strong>
    <span>merchant growth, personalization, and funnel work</span>
  </div>
  <div>
    <strong>40% productivity lift</strong>
    <span>from workflow orchestration in an operating business</span>
  </div>
</section>

<section id="services" class="stage-one-services" aria-labelledby="services-title">
  <p class="section-eyebrow">Services</p>
  <h2 id="services-title">AI workflow systems built around validation, not blind automation.</h2>
  <div class="service-card-grid">
    <article>
      <h3>CRM Hygiene Agent</h3>
      <p>Convert call notes, sales updates, and scattered account context into reviewed CRM fields and follow-up tasks.</p>
    </article>
    <article>
      <h3>Pre-CRM Research Agent</h3>
      <p>Research accounts and contacts before they enter your pipeline so reps start with cleaner context.</p>
    </article>
    <article>
      <h3>Content Automation</h3>
      <p>Transform transcripts, product notes, and source docs into structured content briefs for human review.</p>
    </article>
  </div>
</section>

<section id="work-with-me" class="workflow-cta" aria-labelledby="workflow-title">
  <p class="section-eyebrow">Primary CTA flow</p>
  <h2 id="workflow-title">Send me one messy workflow. I’ll map the automation opportunity.</h2>
  <p>Start with a workflow audit: where the inputs come from, what AI should extract, what needs validation, and where human approval belongs.</p>
  <div class="workflow-path" aria-label="Workflow path">
    <span>Messy Inputs</span>
    <span>AI Extraction</span>
    <span>Validation</span>
    <span>Human Approval</span>
    <span>Clean Output</span>
  </div>
  <a class="button-link button-primary" href="mailto:mahadevu318@gmail.com?subject=My%20workflow%20for%20AI%20automation">Send me your workflow</a>
</section>

---

## Featured Case Studies

<div class="featured-case-study-carousel" aria-label="Featured case studies" data-carousel>
  <button class="carousel-nav-button" type="button" data-carousel-prev aria-label="View previous case study">Previous</button>

  <div class="featured-case-study-track" data-carousel-track>
    <article class="featured-case-study-card" data-carousel-slide>
      <a class="featured-case-study-image-link" href="{{ '/case-studies/relationship-intelligence-copilot-for-linkedin/' | relative_url }}" aria-label="View Relationship Intelligence Copilot for LinkedIn case study">
        <img src="{{ '/assets/images/relationship-intelligence-copilot-for-linkedIn-1.png' | relative_url }}" alt="Relationship Intelligence Copilot for LinkedIn preview" loading="lazy">
      </a>
      <h3><a href="{{ '/case-studies/relationship-intelligence-copilot-for-linkedin/' | relative_url }}">Relationship Intelligence Copilot for LinkedIn</a></h3>
    </article>

    <article class="featured-case-study-card" data-carousel-slide>
      <a class="featured-case-study-image-link" href="{{ '/case-studies/product-impact-at-paypal/' | relative_url }}" aria-label="View Product Impact at PayPal case study">
        <img src="{{ '/assets/images/case-studies-1.png' | relative_url }}" alt="Product Impact at PayPal case study preview" loading="lazy">
      </a>
      <h3><a href="{{ '/case-studies/product-impact-at-paypal/' | relative_url }}">Product Impact at PayPal</a></h3>
    </article>

    <article class="featured-case-study-card" data-carousel-slide>
      <a class="featured-case-study-image-link" href="{{ '/case-studies/g2-organic-products/' | relative_url }}" aria-label="View G2 Organic Products case study">
        <img src="{{ '/assets/images/g2-Org-1.png' | relative_url }}" alt="G2 Organic Products preview" loading="lazy">
      </a>
      <h3><a href="{{ '/case-studies/g2-organic-products/' | relative_url }}">G2 Organic Products</a></h3>
    </article>

    <article class="featured-case-study-card" data-carousel-slide>
      <a class="featured-case-study-image-link" href="{{ '/case-studies/insight-driven-journaling-app/' | relative_url }}" aria-label="View Insight Driven Journaling App case study">
        <img src="{{ '/assets/images/insight-journal-1.png' | relative_url }}" alt="Insight Driven Journaling App preview" loading="lazy">
      </a>
      <h3><a href="{{ '/case-studies/insight-driven-journaling-app/' | relative_url }}">Insight Driven Journaling App</a></h3>
    </article>
  </div>

  <button class="carousel-nav-button" type="button" data-carousel-next aria-label="View next case study">Next</button>
</div>

<script>
  (function () {
    var carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;

    var slides = carousel.querySelectorAll('[data-carousel-slide]');
    var prevButton = carousel.querySelector('[data-carousel-prev]');
    var nextButton = carousel.querySelector('[data-carousel-next]');
    var currentIndex = 0;

    function updateCarousel() {
      slides.forEach(function (slide, index) {
        var isActive = index === currentIndex;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
      });
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === slides.length - 1;
    }

    prevButton.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex -= 1;
        updateCarousel();
      }
    });

    nextButton.addEventListener('click', function () {
      if (currentIndex < slides.length - 1) {
        currentIndex += 1;
        updateCarousel();
      }
    });

    updateCarousel();
  })();
</script>

---

## Product Philosophy

Good products are not feature-rich.

They are clarity-rich.

I focus on:

- Identifying the real constraint
- Defining the right success metric
- Building the smallest version that proves value
- Iterating with evidence, not instinct

---

## Currently Exploring

- Multi-agent orchestration patterns
- AI-native product design
- Deterministic + probabilistic hybrid systems
- Metrics frameworks for early-stage AI products

---

## Recent Blogs

{% assign blog_pages = site.pages | sort: "date" | reverse %}

<div class="blog-carousel" aria-label="Recent blog posts">
  {% assign recent_blog_count = 0 %}
  {% for blog in blog_pages %}
    {% if recent_blog_count < 3 %}
      {% if blog.path contains 'blog/' %}
        {% if blog.title and blog.image %}
          <article class="blog-carousel-card">
            <a href="{{ blog.url | relative_url }}" aria-label="Read {{ blog.title }}">
              <img src="{{ blog.image | relative_url }}" alt="{{ blog.title }}" loading="lazy">
            </a>
            <h3><a href="{{ blog.url | relative_url }}">{{ blog.title }}</a></h3>
            {% if blog.subtitle %}
              <p>{{ blog.subtitle }}</p>
            {% endif %}
          </article>
          {% assign recent_blog_count = recent_blog_count | plus: 1 %}
        {% endif %}
      {% endif %}
    {% endif %}
  {% endfor %}
</div>

<p>
  <a class="button-link" href="{{ '/blogs' | relative_url }}">View All Blogs</a>
</p>
