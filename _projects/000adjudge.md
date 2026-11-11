---
name: "Ad-Judge: Domain-Specific VLM for Digital Advertisement Evaluation"
tools: [PyTorch, VLMs, Fine-tuning, LLaVA]
image: /assets/img/adjudge-cover.jpg
description: General-purpose AI judges stumble on text-heavy images. We built a 1.5K-example ad dataset and fine-tuned a 7B vision-language model to grade ads more accurately, lifting Pearson correlation from 0.78 to 0.86.
---

<div class="pp">

<div class="pp-hero"><img src="/assets/img/adjudge-cover.jpg" alt="An ad being scanned for text and scored by a VLM judge"></div>

<h1 class="pp-title">Ad-Judge</h1>
<p class="pp-subtitle">Fine-Tuning Vision-Language Models for Text-Rich Digital Advertisement Evaluation</p>

<div class="pp-meta">
  <span><i class="fas fa-chalkboard-teacher"></i>Advisor: <a href="https://pages.cs.wisc.edu/~fredsala/">Prof. Fred Sala</a></span>
  <span><i class="fas fa-university"></i>UW–Madison</span>
  <span><i class="fas fa-users"></i>Team of 5</span>
</div>

<div class="pp-actions">
  <a class="btn btn-primary" href="https://github.com/harshitagarwal26/Ad-Judge-VLM/blob/main/Ad-Judge.pdf"><i class="fas fa-file-pdf"></i>Read the Paper</a>
</div>

<div class="pp-tldr">
  <span class="pp-tldr-label">TL;DR</span>
  AI models that grade other AI models struggle when an image is full of text. We built a dataset of ads and <b>fine-tuned a vision-language model to judge ads the way a marketer would</b>. It beat the best open-source judge.
</div>

<div class="pp-stats">
  <div class="pp-stat"><span class="pp-num">0.78 → 0.86</span><span class="pp-label">Pearson correlation with ground truth</span></div>
  <div class="pp-stat"><span class="pp-num">13%</span><span class="pp-label">lower mean absolute error</span></div>
  <div class="pp-stat"><span class="pp-num">1,551</span><span class="pp-label">rubric-scored training examples</span></div>
  <div class="pp-stat"><span class="pp-num">7B</span><span class="pp-label">parameters, fully fine-tuned</span></div>
</div>

<h3 class="pp-h"><i class="fas fa-bullseye"></i>The problem</h3>

<p class="pp-lead"><b>"VLM-as-a-Judge"</b> uses one model to score another model's answers against a rubric. It's faster than human review and far smarter than BLEU or ROUGE. But the leading open judge, <b>Prometheus-Vision</b>, gets worse on text-heavy images, and ads are almost nothing <i>but</i> text and design.</p>

<div class="pp-grid">
  <div class="pp-card">
    <span class="pp-icon"><i class="fas fa-glasses"></i></span>
    <h5>Can it read?</h5>
    <p>Ads pack slogans, prices, disclaimers and fine print into busy layouts. The judge has to actually read all of it.</p>
  </div>
  <div class="pp-card">
    <span class="pp-icon"><i class="fas fa-ad"></i></span>
    <h5>Does it think like a marketer?</h5>
    <p>Good ad evaluation means applying domain rubrics like offer accuracy, constraints and persuasion, not generic visual Q&amp;A.</p>
  </div>
</div>

<h3 class="pp-h"><i class="fas fa-database"></i>Building the dataset</h3>

<p class="pp-lead">Starting from the Ads16 dataset, we built a rubric-based training set using seed rubrics written by hand and generation with Gemini 1.5 Pro:</p>

<div class="pp-flow">
  <div class="pp-flow-item"><span class="pp-num">52</span><span class="pp-label">text-dense ad images, hand-picked</span></div>
  <div class="pp-flow-arrow"><i class="fas fa-chevron-right"></i></div>
  <div class="pp-flow-item"><span class="pp-num">156</span><span class="pp-label">fine-grained scoring rubrics</span></div>
  <div class="pp-flow-arrow"><i class="fas fa-chevron-right"></i></div>
  <div class="pp-flow-item"><span class="pp-num">312</span><span class="pp-label">instructions + reference answers</span></div>
  <div class="pp-flow-arrow"><i class="fas fa-chevron-right"></i></div>
  <div class="pp-flow-item"><span class="pp-num">1,551</span><span class="pp-label">responses scored 1–5 with feedback</span></div>
</div>

<p>Each example includes the <b>image, instruction, response, rubric, reference answer, written feedback and score</b>, with scores evenly balanced from 1 to 5, so the judge learns to explain its grade, not just output a number.</p>

<h3 class="pp-h"><i class="fas fa-chart-line"></i>Results</h3>

<p class="pp-lead">Fully fine-tuned <b>Prometheus-Vision 7B</b> (LLaVA-1.5 backbone) for 5 epochs and evaluated on 300 held-out examples:</p>

<table class="pp-table">
  <thead><tr><th>Model</th><th>Pearson</th><th>Spearman</th><th>Kendall</th><th>MAE ↓</th></tr></thead>
  <tbody>
    <tr class="pp-best"><td>Ad-Judge (ours)</td><td>0.864</td><td>0.865</td><td>0.791</td><td>0.438</td></tr>
    <tr><td>LLaVA 1.5</td><td>0.855</td><td>0.855</td><td>0.782</td><td>0.429</td></tr>
    <tr><td>Prometheus-Vision 7B (base)</td><td>0.779</td><td>0.776</td><td>0.712</td><td>0.502</td></tr>
  </tbody>
</table>

<div class="pp-grid">
  <div class="pp-card">
    <span class="pp-icon"><i class="fas fa-arrow-up"></i></span>
    <h5>Domain data wins</h5>
    <p>Fine-tuning on ads raised every correlation metric over the base Prometheus-Vision judge.</p>
  </div>
  <div class="pp-card">
    <span class="pp-icon"><i class="fas fa-exclamation-triangle"></i></span>
    <h5>Don't over-train</h5>
    <p>On a smaller 908-example split, 25 epochs overfit (Pearson fell to 0.845), while 5 epochs did best.</p>
  </div>
</div>

<h3 class="pp-h"><i class="fas fa-search"></i>In action</h3>

<div class="pp-split">
  <figure class="pp-figure">
    <div class="pp-frame"><img src="/assets/img/adjudge-ad.png" alt="Promotional banner used as an evaluation example"></div>
  </figure>
  <div class="pp-card">
    <dl class="pp-qa">
      <dt>Task</dt>
      <dd>Extract the discount, the product line, and any restrictions.</dd>
      <dt>Response</dt>
      <dd>Found "SAVE 20%" and the winter wear, but <b>missed "Online Only!"</b>.</dd>
      <dt>Verdict</dt>
      <dd>
        <div class="pp-verdicts pp-left">
          <span>Truth: 3</span>
          <span class="ok"><i class="fas fa-check"></i> Ad-Judge: 3</span>
          <span class="bad"><i class="fas fa-times"></i> Base: 4</span>
        </div>
      </dd>
    </dl>
  </div>
</div>

<p>Ad-Judge penalized the missing constraint, just as the rubric requires. The base model overlooked it and gave an inflated score.</p>

<h3 class="pp-h"><i class="fas fa-tools"></i>Built with</h3>
<div class="pp-chips">
  <span>Python</span><span>PyTorch</span><span>Prometheus-Vision 7B</span><span>LLaVA-1.5</span><span>Gemini 1.5 Pro</span><span>Full fine-tuning</span><span>VLM-as-a-Judge</span>
</div>

<p class="text-muted" style="font-size:.9rem;">Team project with Avil Aneja, Akshat Singhal, Shuorjo Aditya Chaudhuri and Omkar Shankar Khade.</p>

<p class="text-center pp-actions">
  <a class="btn btn-outline-primary" href="https://github.com/harshitagarwal26/Ad-Judge-VLM/blob/main/Ad-Judge.pdf"><i class="fas fa-file-pdf"></i>Read the Paper</a>
</p>

</div>
