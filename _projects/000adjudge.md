---
name: "Ad-Judge: Domain-Specific VLM for Digital Advertisement Evaluation"
tools: [PyTorch, VLMs, Fine-tuning, LLaVA]
image: /assets/img/adjudge-ad.png
description: A vision-language model fine-tuned to judge text-rich digital ads using rubric-aligned scoring. Built a 1.5K-instance ad evaluation dataset and improved agreement with ground-truth judgments over Prometheus-Vision (Pearson 0.78 → 0.86).
---
# Ad-Judge: Fine-Tuning Vision Language Models for Text-Rich Digital Advertisement Evaluation
##### Advisor: <a href="https://pages.cs.wisc.edu/~fredsala/">Prof. Fred Sala</a>, Assistant Professor, Department of Computer Sciences, UW–Madison

<br>

As vision-language models (VLMs) get more capable, evaluating their outputs becomes a bottleneck. Human evaluation is slow and expensive, and metrics like BLEU or ROUGE can't tell whether a response is actually grounded in the image. The **"VLM-as-a-Judge"** paradigm addresses this by having one model score another's responses against a rubric.

The leading open-source judge, **Prometheus-Vision**, struggles on **text-rich images** like charts and diagrams. Digital ads are a hard case: they mix dense visual design with slogans, prices, disclaimers and fine print. A good ad judge needs to both *read* that text reliably and apply *marketing-specific* criteria. Our hypothesis was that a judge fine-tuned specifically on ads would agree with ground-truth judgments better than a general-purpose one.

<br>

### Dataset: Digital Advertisement Collection

We built a new dataset for training evaluator models, starting from the Ads16 dataset and following a pipeline similar to Prometheus-Vision's Perception Collection:

<ul>
  <li><b>Image filtration:</b> manually selected 52 text-dense ad creatives that require real reasoning, discarding screenshots and low-text images.</li>
  <li><b>Seed rubrics:</b> hand-wrote fine-grained rubrics for 3 seed images, used as few-shot examples.</li>
  <li><b>Expansion:</b> used Gemini 1.5 Pro to generate 3 rubrics per image and 2 instructions with reference answers per rubric (312 instructions).</li>
  <li><b>Response and score synthesis:</b> for each instruction, generated 5 responses spanning scores 1–5, each with a feedback rationale.</li>
</ul>

The result is <b>1,551 instances</b>. Each one contains an image, instruction, response, score rubric, reference answer, feedback and score, with scores evenly balanced from 1 to 5.

<br>

### Fine-Tuning and Evaluation

We fully fine-tuned **Prometheus-Vision 7B** (built on LLaVA-1.5) on the ad dataset. Following the Prometheus-Vision protocol, we measured agreement between the judge's scores and ground-truth scores using Pearson, Spearman, Kendall's Tau and Mean Absolute Error (MAE). Because the judge outputs a feedback rationale along with its score, every evaluation is explainable rather than a black box.

<br>

### Results

On the full dataset (1,251 train / 300 test), the fine-tuned judge clearly outperformed the base model:

| Model | Pearson | Spearman | Kendall | MAE |
|:--|:--:|:--:|:--:|:--:|
| **Prometheus-Vision 7B (fine-tuned, 5 epochs)** | **0.864** | **0.865** | **0.791** | 0.438 |
| LLaVA 1.5 | 0.855 | 0.855 | 0.782 | 0.429 |
| Prometheus-Vision 7B (base) | 0.779 | 0.776 | 0.712 | 0.502 |
{: .table .table-sm}

<ul>
  <li>Pearson correlation improved from <b>0.78 to 0.86</b> over the base Prometheus-Vision judge, with lower MAE.</li>
  <li>An earlier run on a smaller 908-sample split showed that training for 25 epochs <b>overfit</b> (Pearson dropped to 0.845), while 5 epochs gave the best results. Modest domain adaptation helps; over-training on little data hurts.</li>
</ul>

<br>

{% include elements/figure.html image="/assets/img/adjudge-ad.png" caption="Qualitative example: asked to extract the discount, product line and any restrictions, a response mentions “SAVE 20%” but misses “Online Only!”. The ground-truth score is 3. Ad-Judge correctly scores it 3; the base Prometheus-Vision gives an inflated 4." %}

<br>

### Technical Details
<ul>
  <li>Language: Python</li>
  <li>Framework: PyTorch</li>
  <li>Models: Prometheus-Vision 7B, LLaVA-1.5</li>
  <li>Methods: Full fine-tuning, synthetic data generation (Gemini 1.5 Pro), rubric-based VLM-as-a-Judge evaluation</li>
  <li>Team project with Avil Aneja, Akshat Singhal, Shuorjo Aditya Chaudhuri and Omkar Shankar Khade</li>
</ul>

<br>

<p class="text-center">
{% include elements/button.html link="https://github.com/harshitagarwal26/Ad-Judge-VLM/blob/main/Ad-Judge.pdf" text="View Paper" %}
</p>
